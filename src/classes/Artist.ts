import {Thumbnail} from "./Thumbnail";
import {thumbnail_defaults_size} from "../utils/utils";

export default class Artist {
	/**
	 * The artist name
	 * @example "Adele"
	 */
	public name: string;
	/**
	 * The YouTube Music artist id
	 * @example "UCRw0x9_EfawqmgDI2IgQLLg"
	 */
	public id: number;

	/**
	 * The artist's followers count
	 * @example 123456
	 */
	public followers: number;

	/**
	 * Thumbnails of the user
	 * @example
	 * ```json
	 * {
	 * 	"url": "https://lh3.googleusercontent.com/...",
	 * 		"width": 60,
	 * 		"height": 60
	 * 		}
	 * 		```
	 */
	public thumbnails: Array<Thumbnail>

	/**
	 * The artist's description
	 * @example "Adele Laurie Blue Adkins is an English singer and songwriter."
	 */
	public description: string

	constructor(artist: any) {
		this.thumbnails = thumbnail_defaults_size(artist?.thumbnails?.[artist?.thumbnails?.length - 1]?.url, artist?.thumbnails?.map((thumbnail: any) => new Thumbnail(thumbnail))) || []
		this.name = artist.name
		this.id = artist?.id
		this.followers = artist?.followers
		this.description = artist?.description
	}
}
