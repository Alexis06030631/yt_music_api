import {Thumbnail} from "./Thumbnail";
import Artist from "./Artist";
import Music from "./Music";
import {get} from "../index";
import {error} from "../utils/error";

export default class Album {
	/**
	 * An array of available Artwork in different sizes
	 * @example
	 * ```JSON
	 * [
	 * 	{
	 * 		"url": "https://lh3.googleusercontent.com/...",
	 * 		"width": 60,
	 * 		"height": 60
	 * 	},
	 * 	]
	 * ```
	 */
	public thumbnails: Array<Thumbnail>;
	/**
	 * The YTmusic id of the Album
	 * @example "dQw4w9WgXcQ"
	 */
	public id: string;
	/**
	 * The Album name
	 * @example %
	 */
	public name: string;

	/**
	 * The Album description
	 * @example "Rick Astley - Never Gonna Give You Up"
	 */
	public description: string;

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
	 * ```
	 */
	public artists: Array<Artist>
	/**
	 * The type of the Album
	 * @example "song" | "video" | "album"... etc. (Check available types)
	 */
	public resultType: string


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

	#musics: Array<Music>

	constructor(data: any) {
		this.#musics = data?.musics || []
		this.resultType = data.resultType
		this.thumbnails = data?.thumbnails?.map((thumbnail: any) => new Thumbnail(thumbnail))
		this.id = data.id
		this.name = data.title || data.name
		this.description = data.description
		this.artists = data?.artists?.map((artist: any) => new Artist(artist))
		this.year = data.year
		this.isExplicit = !!data.isExplicit
	}

	/**
	 * Get the Album's songs
	 * @return Music[]
	 */
	getSongs(): Promise<Music[]> {
		return new Promise((resolve, reject) => {
			if (this.#musics.length) return resolve(this.#musics)
			get(this.id).then((res: any) => {
				console.log(res.musics)
				if (res?.musics?.length) return resolve(res?.musics)
				reject(error(1008, {artist: this.name, type: 'song'}))
			}).catch(reject)
		})
	}
}
