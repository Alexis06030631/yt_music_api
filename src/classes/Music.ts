import {Thumbnail} from "./Thumbnail";
import Artist from "./Artist";
import Duration from "./Duration";
import {AvailableFormat, AvailableQuality} from "../utils/default";
import Album from "./Album";
import request from "../utils/request";
// @ts-ignore
import client from "..";
import {downloadYTDL, parseGetResult} from "../utils/utils";
import {nav} from "../utils/responseBuilder";
import {error} from "../utils/error";

export default class Music {
	/**
	 * An array of available Artwork in different sizes
	 * @example
	 * ```json
	 * [
	 * 	{
	 * 		"url": "https://lh3.googleusercontent.com/...",
	 * 		"width": 60,
	 * 		"height": 60
	 * 	},
	 * 	]
	 */
	public thumbnails: Array<Thumbnail>;
	/**
	 * The YTmusic id of the music
	 * @example "dQw4w9WgXcQ"
	 */
	public id: string;
	/**
	 * The title of the music
	 * @example "Never Gonna Give You Up"
	 */
	public title: string;
	/**
	 * An array of Artist objects
	 * @example
	 * ```json
	 * [
	 * 	    {
	 *          "name": "Rick Astley",
	 *  	    "id": "MPREb_5eN7fQq3J9_"
	 * 		}
	 * 	]
	 */
	public artists: Array<Artist>
	/**
	 * The type of the video
	 * @example "song" | "video" | "album"... etc. (Check available types)
	 */
	public resultType: string

	/**
	 * The YouTube type of the music
	 * @example "MUSIC_VIDEO_TYPE_ATV"
	 */
	public videoType: string

	/**
	 * The duration of the music
	 * @example
	 * ```json
	 * {
	 * 	"duration": 213, // in seconds
	 * 	"formatted": "3:33",
	 * 	"formattedLong": "3 minutes, 33 seconds"
	 * 	}
	 */
	public duration: Duration

	/**
	 * The browseId of the music (NOT WORKING)
	 * @example "MPREb_5eN7fQq3J9_"
	 * @todo
	 */
	public browseID: string;

	/**
	 * If the music is audio only (considerably reduces the risk of unwanted sounds in the middle of a song)
	 * @example true
	 */
	public isAudioOnly: boolean;

	/**
	 * Return the album of the music if it's available
	 */
	public album?: Album
	/**
	 * The year of the music if it's available
	 * @example 2024
	 */
	public year?: number

	/**
	 * If the music contains explicit content
	 * @example false
	 */
	public isExplicit: boolean

	constructor(data: any) {
		this.thumbnails = data?.thumbnails?.map((thumbnail: any) => new Thumbnail(thumbnail))
		this.id = data.videoId
		this.browseID = data.browseID
		this.title = data.title
		this.artists = data?.artists?.map((artist: any) => new Artist(artist))
		this.resultType = data.resultType
		if (data.album) {
			data.album.artists = data?.artists
			this.album = new Album(data.album)
		}
		this.videoType = data.videoType
		this.duration = new Duration(data.duration)
		this.year = data.year
		this.isAudioOnly = this.videoType.includes('ATV')
		this.isExplicit = !!data.isExplicit
	}

	/**
	 * Get the lyrics of the music if it's available
	 * @returns The lyrics of the music
	 */
	getLyrics(): Promise<{ lyrics: string, source: any }> {
		return new Promise(async (resolve, reject) => {
			if (!this.browseID) {
				await request("next", {videoId: this.id}).then((res: any) => {
					Object.assign(this, parseGetResult(res, 'song'))
				}).catch(reject)
			}
			request('browse', {
				browseId: this.browseID,
				context: {client: {clientVersion: "1.20230522.01.00", clientName: "WEB_REMIX"}}
			}).then((res: any) => {
				if (!nav(res, ['contents', 'sectionListRenderer', 'contents', 0, 'musicDescriptionShelfRenderer', 'description'], true)) return reject(error(2003, nav(res, ['contents', 'messageRenderer', 'text', 'runs', 0, 'text'])))
				else {
					const resolveData = {
						lyrics: nav(res, ['contents', 'sectionListRenderer', 'contents', 0, 'musicDescriptionShelfRenderer', 'description', 'runs', 0, 'text'], true),
						source: nav(res, ['contents', 'sectionListRenderer', 'contents', 0, 'musicDescriptionShelfRenderer', 'footer', 'runs', 0, 'text'], true).replace('Source: ', '')
					}
					resolve(resolveData)
				}
			}).catch(reject)
		})
	}

	/**
	 * Download the music
	 * @param format The format of the music (Check available formats)
	 * @param quality The quality of the music (Check available qualities)
	 **/
	download(format: AvailableFormat = AvailableFormat[0], quality: AvailableQuality = AvailableQuality[0]): Promise<any> {
		return downloadYTDL(this.id, format, quality)
	}
}