import {Thumbnail} from "./Thumbnail";
import Artist from "./Artist";

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
	 * The browseId of the Album (NOT WORKING)
	 * @example "MPREb_5eN7fQq3J9_"
	 * todo
	 */
	public browseId: string;

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
		this.resultType = data.resultType
		this.thumbnails = data?.thumbnails?.map((thumbnail: any) => new Thumbnail(thumbnail))
		this.id = data.id
		this.name = data.title || data.name
		this.artists = data?.artists?.map((artist: any) => new Artist(artist))
		this.year = data.year
		this.isExplicit = !!data.isExplicit
	}
}
