import {Thumbnail} from "./Thumbnail";
import Artist from "./Artist";
import Music from "./Music";

export default class Playlist {
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
	 * ```
	 */
	public thumbnails: Array<Thumbnail>;
	/**
	 * The YTmusic id of the Playlist
	 * @example "dQw4w9WgXcQ"
	 */
	public id: string;
	/**
	 * Playlist name
	 * @example %
	 */
	public name: string;
	/**
	 * An array of Artist objects
	 * @TODO Not Implemented
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
	 * The type of the Playlist
	 * @example "song" | "video" | "album"... etc. (Check available types)
	 */
	public resultType: string

	/**
	 * The browseId of the Album (NOT WORKING)
	 * @example "MPREb_5eN7fQq3J9_"
	 * @TODO Not Implemented
	 */
	public browseId: string;

	/**
	 * The year of the music if it's available
	 * @TODO Not Implemented
	 * @example 2024
	 */
	public year?: number

	/**
	 * Music List of the Playlist
	 * @example
	 * ```JSON
	 *  [{}, {}, {}]
	 * ```
	 */
	public musics: Array<Music>

	/**
	 * Description of the Playlist
	 * @example "This is a playlist"
	 */
	public description: string | null

	constructor(data: any) {
		this.resultType = data.resultType
		this.thumbnails = data?.thumbnails?.map((thumbnail: any) => new Thumbnail(thumbnail))
		this.id = data.id
		this.name = data.title || data.name
		this.artists = data?.artists?.map((artist: any) => new Artist(artist))
		this.musics = data?.musics || []
		this.description = data?.description || null
	}
}
