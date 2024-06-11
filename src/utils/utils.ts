import {
	BADGE_LABEL,
	CARD_SHELF_TITLE,
	DESCRIPTION,
	findObjectsByKey,
	HEADER_ARTIST,
	HEADER_ARTIST_THUMBNAIL,
	HEADER_ARTIST_TITLE,
	HEADER_DETAIL,
	HEADER_PLAYLIST_THUMBNAIL,
	HEADER_PLAYLIST_TITLE,
	ICON_TYPE,
	LONGTEXT_RUNS,
	MENU_ITEMS,
	MNIR,
	MRLIR,
	nav,
	NAVIGATION_BROWSE_ID,
	NAVIGATION_VIDEO_TYPE,
	PLAY_BUTTON,
	PLAYLIST_ID,
	PLAYLIST_SHELF_RENDERER,
	RUN_TEXT,
	SUBSCRIBE_BUTTON,
	SUBTITLE,
	TEXT_RUN_TEXT,
	TEXT_RUNS,
	THUMBNAIL,
	THUMBNAILS,
	TITLE,
	TITLE_TEXT,
	WATCH_VIDEO_ID
} from "./responseBuilder";
import Music from "../classes/Music";
import {all_TYPES, AvailableFormat, AvailableQuality} from "./default";
import Artist from "../classes/Artist";
import User from "../classes/User";
import Album from "../classes/Album";
import Playlist from "../classes/Playlist";
import {error} from "./error";
import request from "./request";
import {getSignatureTimestamp, getUrlDecode} from "./decode";
import StreamPlayers from "../classes/StreamPlayer";
import Player from "../classes/Player";


export function detectType(type: string, none_if_empty: boolean = false): string | null {
	if (!type) return null
	return all_TYPES.map(x => type.toLowerCase().split(" ")[0].startsWith(x) ? x : null).filter(x => x !== null)[0] ?? (none_if_empty ? null : 'song')
}

export function topResult(response: any): any {
	const type = detectType(nav(response, SUBTITLE))
	const search_result: any = {"category": nav(response, CARD_SHELF_TITLE), "type": type}

	if (type === "album") search_result["browseId"] = nav(response, [...TITLE, ...NAVIGATION_BROWSE_ID], true);

	if (type === 'song' || type === 'video') {
		if (response.onTap) {
			search_result.videoId = nav(response.onTap, WATCH_VIDEO_ID)
			search_result.videoType = nav(response.onTap, NAVIGATION_VIDEO_TYPE)
		}
	}

	if (type === "song" || type === "video" || type === "album") {
		search_result.videoId = nav(response, ["onTap", ...WATCH_VIDEO_ID], true);
		search_result.videoType = nav(response, ["onTap", ...NAVIGATION_VIDEO_TYPE], true);

		search_result.title = nav(response, TITLE_TEXT);
		const runs = nav(response, ["subtitle", "runs"]);
		const songInfo = parseSongRuns(runs.slice(2));
		Object.assign(search_result, songInfo);
	}
}

function parseSongRuns(runs: any[]): Record<string, any> {
	const parsed: Record<string, any> = {artists: []};

	runs.forEach((run, index) => {
		if (run.text.length === 3 && Object.keys(run).length === 1 && index % 2 !== 0) return;

		const text = run.text;
		if ("navigationEndpoint" in run) {
			// Artist or album
			const item = {
				name: text,
				id: nav(run, NAVIGATION_BROWSE_ID, true),
			};

			if (item.id && (item.id.startsWith("MPRE") || item.id.includes("release_detail"))) {
				parsed.album = item;
			} else {
				parsed.artists.push(item);
			}
		} else {
			if (/^\d([^ ])* [^ ]*$/.test(text) && index > 0) {
				parsed.views = text.split(" ")[0];
			} else if (/^(\d+:)*\d+:\d+$/.test(text)) {
				parsed.duration = parseDuration(text);
			} else if (/^\d{4}$/.test(text)) {
				parsed.year = Number(text);
			} else {
				parsed.artists.push({name: text, id: null});
			}
		}
	});

	return parsed;
}

function parseDuration(duration: string): number | string {
	if (!duration || !duration.trim()) return duration;
	const increments = [1, 60, 3600];
	const timeParts = duration.split(":").reverse();

	return timeParts.reduce((total, time, index) => {
		return total + (parseInt(time) * increments[index]);
	}, 0);
}

export function topResults(response: any): any {
	let searchResult: any = {}
	searchResult.resultType = detectType(nav(response, SUBTITLE))
	searchResult.category = nav(response, CARD_SHELF_TITLE)
	searchResult.thumbnails = nav(response, THUMBNAILS, true)

	if (["song", "video"].includes(searchResult.resultType)) {
		const onTap = response.onTap;
		if (onTap) {
			searchResult["videoId"] = nav(onTap, WATCH_VIDEO_ID);
			searchResult["videoType"] = nav(onTap, NAVIGATION_VIDEO_TYPE);
		}

		searchResult["videoId"] = nav(response, ["onTap", ...WATCH_VIDEO_ID], true);
		searchResult["videoType"] = nav(response, ["onTap", ...NAVIGATION_VIDEO_TYPE], true);
		searchResult["title"] = nav(response, TITLE_TEXT);
		const runs = nav(response, ["subtitle", "runs"]);
		const songInfo = parseSongRuns(runs.slice(2));
		searchResult = {...searchResult, ...songInfo};
	}

	switch (searchResult.resultType) {
		/*
		case "artist":
			searchResult.artist = getItemText(response, 0);
			//parse_menu_playlists(data, searchResult);
			new Error("Not implemented")
			break;
		case "album":
			searchResult.type = getItemText(response, 1);
			break;

		 */
		case "song":
		case "video":
			return new Music(searchResult);
		default:
			if (process.env.YT_DEBUG_MODE === "true") console.log("Unknown result type: ", searchResult.resultType)
	}
}

export function parseMenuPlaylists(response: any, result: any): void {
	const menuItems = nav(response, MENU_ITEMS, true);
	if (!menuItems) return;

	const watchMenu = findObjectsByKey(menuItems, MNIR);
	for (const item of watchMenu.map((_x: any) => _x[MNIR])) {
		const icon = nav(item, ICON_TYPE);
		let watchKey: string;

		switch (icon) {
			case "MUSIC_SHUFFLE":
				watchKey = "shuffleId";
				break;
			case "MIX":
				watchKey = "radioId";
				break;
			default:
				continue;
		}

		let watchId = nav(item, ["navigationEndpoint", "watchPlaylistEndpoint", "playlistId"], true);
		if (!watchId) watchId = nav(item, ["navigationEndpoint", "watchEndpoint", "playlistId"], true);
		else result[watchKey] = watchId;
	}
}

export function parseSearchResult(response: any, category: string): any {
	const videoType = nav(response, [...PLAY_BUTTON, "playNavigationEndpoint", ...NAVIGATION_VIDEO_TYPE], true)
	let resultType: string = category.toLowerCase() || ""
	const browseID = nav(response, NAVIGATION_BROWSE_ID, true)
	if (!resultType) {
		if (browseID) {
			let mapping = {
				"VM": "playlist",
				"RD": "playlist",
				"VL": "playlist",
				"MPLA": "artist",
				"MPRE": "album",
				"MPSP": "podcast",
				"MPED": "episode",
				"UC": "artist",
			}

			// Return artist if browseID starts with "UC", episode if it starts with "MPED", etc.
			const key = Object.keys(mapping).find(key => browseID.startsWith(key));
			if (key) resultType = mapping[key] ?? (videoType === "MUSIC_VIDEO_TYPE_ATV" ? "song" : "video");
		} else {
			resultType = videoType === "MUSIC_VIDEO_TYPE_ATV" ? "song" : "video";
		}
	}
	resultType = detectType(resultType, true) || ""
	let searchResult: any = {}
	searchResult.resultType = resultType;

	if (resultType !== "artist") searchResult.title = getItemText(response, 0)
	else {
		(nav(getFlexColumnItem(response, 1), TEXT_RUNS, true) || []).forEach((run: any) => {
			if (run.text.includes('subscribers')) searchResult.followers = run.text.split(' ')[0].includes('K') ? Number(run.text.split(' ')[0].replace('K', '')) * 1000 : run.text.split(' ')[0].includes('M') ? Number(run.text.split(' ')[0].replace('M', '')) * 1000000 : Number(run.text.split(' ')[0])
		})
		searchResult.name = getItemText(response, 0)
		parseMenuPlaylists(response, searchResult)
	}

	if (["profile"].includes(resultType)) searchResult.name = getItemText(response, 1, 2, true)
	if (["song", "video", "episode"].includes(resultType)) {
		searchResult.videoId = nav(response, [...PLAY_BUTTON, "playNavigationEndpoint", "watchEndpoint", "videoId"], true) || nav(response, ["playlistItemData", "videoId"], true)
		searchResult.videoType = videoType
	}
	if (["song", "video", "album"].includes(resultType)) {
		searchResult.duration = null
		searchResult.year = null
		const nav_ = nav(getFlexColumnItem(response, 1), TEXT_RUNS, false)
		const nav_Offset = (nav_[0].length === 1 ? 2 : 0);
		searchResult = {...searchResult, ...parseSongRuns(nav_.slice(nav_Offset))};
	}

	if (["song", "album"].includes(resultType)) searchResult.isExplicit = nav(response, BADGE_LABEL, true) !== null;

	if (["artist", "album", "playlist", "profile", "podcast"].includes(resultType)) searchResult.id = nav(response, NAVIGATION_BROWSE_ID, true);

	if (resultType === "album") {
		searchResult.browseId = nav(response, [...TITLE, ...NAVIGATION_BROWSE_ID], true);
	}

	searchResult.thumbnails = nav(response, THUMBNAILS, true)


	switch (resultType) {
		case "profile":
			searchResult.name = getItemText(response, 1, 2, true);
			return new User(searchResult);
		case "artist":
			return new Artist(searchResult);
		case "album":
			return new Album(searchResult);
		case "song":
		case "video":
			if (!searchResult.duration) searchResult.duration = parseDuration(nav(response, ["fixedColumns", 0, "musicResponsiveListItemFixedColumnRenderer", ...TEXT_RUN_TEXT], true) || 'NaN:NaN');
			return new Music(searchResult);
		case"":
			break;
		default:
			if (process.env.YT_DEBUG_MODE === "true") console.log("Unknown result type:", searchResult.resultType)
	}
	return null
}

export function parseSearchResults(response: any[], category: string): any {
	return response.map(result => parseSearchResult(result[MRLIR], category));
}

export function getFlexColumnItem(item: any, index: number): any {
	if (item.flexColumns.length <= index || !("text" in item.flexColumns[index].musicResponsiveListItemFlexColumnRenderer) || !("runs" in item.flexColumns[index].musicResponsiveListItemFlexColumnRenderer.text)) {
		return null;
	} else return item.flexColumns[index].musicResponsiveListItemFlexColumnRenderer;
}

export function getItemText(item: any, index: number, run_index: number = 0, none_if_absent: boolean = false): string | null {
	const column = getFlexColumnItem(item, index);
	if (!column) {
		return null;
	}
	if (none_if_absent && column.text.runs.length < run_index + 1) {
		return null;
	}
	return column.text.runs[run_index].text;
}

export function parseGetResult(response: any, type: string): Artist | Music | Playlist | null {
	let searchResult: any = {}
	searchResult.resultType = type

	if (['song'].includes(type)) {
		response = response.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs
		searchResult.browseID = nav(response, ["0", "tabRenderer", "content", "musicQueueRenderer", "queue", "playlistId"], true) || nav(response, [1, "tabRenderer", "endpoint", "browseEndpoint", "browseId"], true)
		response = response[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents[0].playlistPanelVideoRenderer
		searchResult.videoType = nav(response, ["navigationEndpoint", ...NAVIGATION_VIDEO_TYPE], true)
		searchResult.thumbnails = nav(response, THUMBNAIL, true)
	}


	if (["playlist"].includes(type)) {
		searchResult.musics = parseSearchResults(nav(response, [...PLAYLIST_SHELF_RENDERER, "contents"], true) || [], 'song')
		searchResult.name = nav(response, HEADER_PLAYLIST_TITLE, true)
		searchResult.thumbnails = nav(response, HEADER_PLAYLIST_THUMBNAIL, true)
		searchResult.description = nav(response, [...HEADER_DETAIL, ...DESCRIPTION], true)
		searchResult.id = nav(response, [...PLAYLIST_SHELF_RENDERER, ...PLAYLIST_ID], true)
	}

	if (['artist'].includes(type)) {
		searchResult.name = nav(response, HEADER_ARTIST_TITLE, true)
		searchResult.thumbnails = nav(response, HEADER_ARTIST_THUMBNAIL, true)
		searchResult.description = nav(response, [...HEADER_ARTIST, ...DESCRIPTION], true)
		searchResult.id = nav(response, [...HEADER_ARTIST, ...SUBSCRIBE_BUTTON, "channelId"], true)
		searchResult.followers = nav(response, [...HEADER_ARTIST, ...SUBSCRIBE_BUTTON, "longSubscriberCountText", ...RUN_TEXT], true)
		if (searchResult.followers) searchResult.followers = searchResult.followers.split(' ')[0].includes('K') ? Number(searchResult.followers.split(' ')[0].replace('K', '')) * 1000 : searchResult.followers.split(' ')[0].includes('M') ? Number(searchResult.followers.split(' ')[0].replace('M', '')) * 1000000 : Number(searchResult.followers.split(' ')[0])
	}


	if (!searchResult.resultType) {
		if (searchResult.browseID) {
			let mapping = {
				"VM": "playlist",
				"RD": "playlist",
				"VL": "playlist",
				"MPLA": "artist",
				"MPRE": "album",
				"MPSP": "podcast",
				"MPED": "episode",
				"UC": "artist",
			}

			const key = Object.keys(mapping).find(key => searchResult.browseID.startsWith(key));
			if (key) searchResult.resultType = mapping[key]
			else searchResult.resultType = searchResult.videoType === "MUSIC_VIDEO_TYPE_ATV" ? "song" : "video"
		} else {
			searchResult.resultType = searchResult.videoType === "MUSIC_VIDEO_TYPE_ATV" ? "song" : "video";
		}
	}

	if (!["artist"].includes(searchResult.resultType)) searchResult.title = nav(response, TITLE_TEXT, true)

	if (["song", "video", "episode"].includes(searchResult.resultType)) {
		searchResult.videoId = nav(response, ["videoId"], true)
	}
	if (["song", "video", "album"].includes(searchResult.resultType)) {
		searchResult.duration = null
		searchResult.year = null
		const nav_ = nav(response, LONGTEXT_RUNS, false)
		const nav_Offset = (nav_[0].length === 1 ? 2 : 0);
		searchResult = {...searchResult, ...parseSongRuns([...nav_.slice(nav_Offset), ...response.lengthText.runs])};
	}
	if (["song", "album"].includes(searchResult.resultType)) {
		searchResult.isExplicit = nav(response, BADGE_LABEL, true) !== null;
	}


	switch (searchResult.resultType) {
		case "song":
		case "video":
			return new Music(searchResult);
		case "artist":
			return new Artist(searchResult);
		case "playlist":
			return new Playlist(searchResult);
		default:
			console.log("Unknown result type: ", searchResult)
	}
	return null
}

export function getYTIdFromText(text: string, precise: boolean = false): { id: string; type: null | string } {
	const reg = /https?:\/\/(?:music\.|www\.)?youtube\.com\/(?:watch\?v=|v\/|channel\/|playlist\?list=)([A-Za-z0-9_-]+)/m
	const id = text.match(reg)
	if (id) {
		const type = getTypeByID(id[1])
		if (type === "playlist" && (id[1].startsWith("PL") || id[1].startsWith("OL"))) id[1] = 'VL' + id[1]
		return {id: id[1], type: type}
	} else return {id: text, type: getTypeByID(text)}
}

type AvailableTypes = typeof all_TYPES[number];


export function getTypeByID(id: string = ""): string | null {
	if (!id) return null
	if (id.startsWith("MPLA")) return "artist"
	if (id.startsWith("MPRE")) return "album"
	if (id.startsWith("MPSP")) return "podcast"
	if (id.startsWith("MPED")) return "episode"
	if (id.startsWith("UC")) return "artist"
	if (id.startsWith("RD")) return "playlist"
	if (id.startsWith("VL")) return "playlist"
	if (id.startsWith("VM")) return "playlist"
	if (id.startsWith("PL")) return "playlist"
	if (id.startsWith("OL")) return "playlist"
	if (id.length === 11) return "song"
	return null
}

export function downloadYTDL(query: string, format: AvailableFormat = AvailableFormat[0], quality: AvailableQuality = AvailableQuality[0]): Promise<any> {
	return new Promise((resolve, reject) => {
		format = format?.toLowerCase() as AvailableFormat
		quality = quality?.toLowerCase() as AvailableQuality
		if (!AvailableFormat.includes(format)) return reject(error(1003, `Available formats: ${AvailableFormat.join(", ")}`))
		if (!AvailableQuality.includes(quality)) return reject(error(1004, `Available qualities: ${AvailableQuality.join(", ")}`))

		format = format.replace('mp3', 'mp4')
		const id = getYTIdFromText(query, true)
		if (!id) return reject(error(1005, query))

		getPlayers(id.id).then(async (res: any) => {
			let downloads = format === 'mp4' ? res.videos : res.audios
			if (quality === 'high') {
				downloads = downloads.sort((a: any, b: any) => b.bitrate - a.bitrate)[0]
			} else if (quality === 'low') {
				downloads = downloads.sort((a: any, b: any) => a.bitrate - b.bitrate)[0]
			} else if (quality === 'medium') {
				downloads = downloads.sort((a: any, b: any) => b.bitrate - a.bitrate)[Math.round(downloads.length / 2) - 1]
			}
			downloads.url = await getUrlDecode(downloads)
			resolve(new Player(downloads))
		}).catch(reject)
	})
}

export function getPlayers(id: string): Promise<any> {
	return new Promise(async (resolve, reject) => {
		request('player?key=', {
			videoId: id,
			"context": {
				"client": {
					"clientName": "WEB_REMIX",
					"clientVersion": "1.20231130.05.00"
				}
			},
			"playbackContext": {
				"contentPlaybackContext": {
					"referer": `https://music.youtube.com/watch?v=${id}`,
					"signatureTimestamp": await getSignatureTimestamp(),
				}
			}
		}).then(async (res: any) => {
			if (!res.streamingData) return reject(error(2004, nav(res, ['playabilityStatus', 'status'], true) || nav(res, ['playabilityStatus', 'messages', 0, 'message'], true) || 'Unknown error'))
			const items: any = {videos: [], audios: []}
			for (const item of res.streamingData.adaptiveFormats) {
				if (item.audioQuality) items.audios.push(item)
				else items.videos.push(item)
			}
			//Sort by bitrate
			items.audios = items.audios.sort((a: any, b: any) => b.bitrate - a.bitrate)
			items.videos = items.videos.sort((a: any, b: any) => b.bitrate - a.bitrate)
			items.available = (!!items.audio || !!items.videos) && res.playabilityStatus.status === 'OK'
			items.maxBitrate = Number(res?.playerConfig?.streamSelectionConfig?.maxBitrate)

			resolve(new StreamPlayers(items))
		}).catch(reject)
	})
}