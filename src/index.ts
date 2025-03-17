import request from './utils/request'
import {MUSIC_SHELF, nav, TITLE_TEXT} from "./utils/responseBuilder";
import {
	downloadYTDL,
	getPlayers_dv,
	getYTIdFromText,
	parseGetResult,
	parseSearchResults,
	rankingResponse,
	topResults
} from "./utils/utils";
import {error} from "./utils/error";
import {
	all_TYPES,
	AvailableCountries,
	AvailableCountriesCodes,
	AvailableFormat,
	AvailableQuality,
	AvailableTypes,
	countries,
	countriesCodes,
	options,
	optionsType,
	TYPE_SEARCH_CODE
} from "./utils/default";
import Music from "./classes/Music";
import Artist from "./classes/Artist";
import Playlist from "./classes/Playlist";
import Player from "./classes/Player";
import StreamPlayer from "./classes/StreamPlayer";
import {COUNTRIES} from "./utils/countries";
import {getUrlDecode} from "./utils/decode";
import Duration from "./classes/Duration";
import Album from "./classes/Album";

/**
 * Require for DOC API
 */
export {Thumbnail} from "./classes/Thumbnail";
export {
	Artist,
	Duration,
	Album,
	Music,
	Playlist,
	Player,
	StreamPlayer,
	AvailableTypes,
	optionsType,
	AvailableCountries,
	AvailableFormat,
	AvailableQuality,
	all_TYPES,
	countries,
	countriesCodes,
	AvailableCountriesCodes
}


/**
 * Search for a query in YouTube Music
 * @param query - ex: "Hello Adele"
 * @param filter - ex: "SONG" (Check available types)
 * @param option - You can change country code. This parameter can be used to get a more precise result depending on location demand
 * @example
 * ```JS
 * const search = await client.search("Hello Adele", "SONG")
 * console.log(search)
 * ```
 */
export function search(query: string, filter?: AvailableTypes, option: optionsType = options): Promise<{
	query: string,
	filter: AvailableTypes,
	content: Music[] | Artist[] | Playlist[]
}> {
	return new Promise(async (resolve, reject) => {
		const hasFilter: boolean = !!filter
		filter = filter?.toString()?.toLowerCase() as AvailableTypes
		if (hasFilter && (!all_TYPES.includes(filter) && !(!!TYPE_SEARCH_CODE?.[filter]))) return reject(error(1001, `Available types: ${all_TYPES.join(", ")}`))
		const result: any = {query, filter: hasFilter ? filter : false, content: []}
		if (getYTIdFromText(query).isValidId) {
			result.content = [await this.get(query).catch(reject)]
			return resolve(result)
		}
		request('search', {
			query,
			params: hasFilter ? TYPE_SEARCH_CODE[filter] : ''
		}, {}, option).then(async (response: any) => {
			try {
				if (response.content) return resolve(result)
				else response = response.contents
				if (response.tabbedSearchResultsRenderer) response = response.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content;

				const sectionList = nav(response, ['sectionListRenderer', 'contents']);
				if (sectionList.length === 1 && sectionList[0].itemSectionRenderer) return result

				for (const res of sectionList) {
					let shelf_contents: any = null;
					let category: any = null

					if (res.musicCardShelfRenderer) {
						result.content.push(topResults(res.musicCardShelfRenderer))
						shelf_contents = nav(res, ["musicCardShelfRenderer", "contents"], true);
						if (!shelf_contents) continue;
						if (shelf_contents[0].messageRenderer) category = nav(shelf_contents.shift(), ['messageRenderer', 'text', 'runs', 0, 'text']);
					} else if (res.musicShelfRenderer) {
						shelf_contents = res["musicShelfRenderer"]["contents"]
						category = nav(res, [...MUSIC_SHELF, ...TITLE_TEXT], true)
					} else if (res.musicResponsiveListItemRenderer) {
						shelf_contents = res['musicResponsiveListItemRenderer']['contents']
					} else continue

					shelf_contents = shelf_contents.filter((item: any) => item.musicResponsiveListItemRenderer || item.musicTwoRowItemRenderer || item.musicMultiRowListItemRenderer)

					parseSearchResults(shelf_contents, category).forEach((content: any, i: number) => {
						if (!content || (filter && (hasFilter && (all_TYPES.includes(filter) && content?.resultType !== filter)))) return
						else result.content.push(content)
					})
				}
				result.content = result.content.filter((content: any) => !!content?.id)
				if (option.fetch) {
					result.content = result.content.filter((content: any) => !!content?.id)
					const promises = result.content.map(async (content: any) => {
						if (content.id) return await this.get(content.id).catch((e) => {
							if (process.env.YT_DEBUG_MODE === "true") console.error(e)
							return null
						})
						else return null
					})
					result.content = await Promise.all(promises)
					result.content = result.content.filter((content: any) => !!content?.id)
				}
				result.content = rankingResponse(result.content, query)
				if (result.content.length === 0) return reject(error(1002, {query}))
				return resolve(result)
			} catch (e) {
				reject(error(5000, {
					code: 1005,
					error: e,
					message: `Please report this issue on the GitHub repository, this is a bug.`
				}))
			}
		}).catch((e) => {
			reject(e);
		})
	})
}

/**
 * Get music from YouTube Music by URL or ID or search query (Warning: search query length must be different from 11 characters)
 * @param query - ex: "Hello Adele" or https://music.youtube.com/watch?v=abc
 * @example
 * const get = await client.get("Hello Adele")
 * return:
 * ```json
 * {
 * 	"thumbnails": [
 * 		{
 * 			"url": "https://lh3.googleusercontent.com/...",
 * 			"width": 60,
 * 		   "height": 60
 * 		}
 * 	   ],
 * 	   "id": "dQw4w9WgXcQ",
 *     "title": "Never Gonna Give You Up",
 * 	   "artists": [{
 *  	    "name": "Rick Astley",
 * 		   	"id": "MPREb_5eN7fQq3J9_"
 * 		}],
 * 		"resultType": "song",
 * 	   	"videoType": "MUSIC_VIDEO_TYPE_ATV"
 *      // Other properties
 * 	}
 * ```
 */
export function get(query: string): Promise<Music | Artist | Playlist | null> {
	return new Promise((resolve, reject) => {
		const id = getYTIdFromText(query, true)
		const req = {url: '', body: {}}
		switch (id.type) {
			case "song":
				req.url = 'next'
				req.body = {videoId: id.id}
				break
			case "playlist":
			case "artist":
				req.url = 'browse'
				req.body = {browseId: id.id}
				break
		}

		if (!!req.url) {
			request(req.url, req.body).then((res: any) => {
				resolve(parseGetResult(res, <string>id.type))
			}).catch(reject)
		} else reject(error(1006, {query: query, id: id.id, type: id.type}))
	})
}

/**
 * Get chart music from YouTube Music by country or global
 * @param country - The country code (Check available countries)
 */
export function charts(country: AvailableCountries = 'global'): Promise<Playlist> {
	return new Promise((resolve, reject) => {
		country = country?.toUpperCase() as AvailableCountries | AvailableCountriesCodes
		if (!countries.includes(country) && !countriesCodes.includes(country)) return reject(error(1007, `Available countries: ${countries.join(", ")}`))
		request('browse', {browseId: (COUNTRIES.find((c) => c.name === country)?.id || COUNTRIES.find((c) => c.codeCountry === country)?.id)}).then((res: any) => {
			resolve(parseGetResult(res, 'charts') as Playlist)
		}).catch(reject)
	})
}


/**
 * Get a Download link of a music
 * @param query - The music ID or URL
 * @param format - The format of the music (Check available formats)
 * @param quality - The quality of the music (Check available qualities)
 * @example
 */
export function download(query: string, format: AvailableFormat = AvailableFormat[0], quality: AvailableQuality = AvailableQuality[0]): Promise<Player> {
	return new Promise((resolve, reject) => {
		downloadYTDL(query, format, quality).then((res) => {
			resolve(res)
		}).catch(reject)
	})
}

/**
 * getPlayers is a function that returns the available players (music, video) in all qualities
 * @param query - The music ID or URL
 */
export function getPlayers(query: string): Promise<StreamPlayer> {
	return getPlayers_dv(getYTIdFromText(query).isValidId ? getYTIdFromText(query).id : query)
}

/**
 * @hideconstructor
 * @param format - The format of the music (Check available formats)
 */
export function getUrlDecodeT(format: any): Promise<string> {
	return new Promise((resolve, reject) => {
		getUrlDecode(format).then(async (decoded: any) => {
			return resolve(decoded)
		}).catch(reject)
	})
}
