import {Thumbnail} from "./Thumbnail";
import {thumbnail_defaults_size} from "../utils/utils";
import Music from "./Music";
import {search} from "../index";
import {error} from "../utils/error";
import Album from "./Album";

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
	 * ```
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

	/**
	 * Get the artist's songs
	 * @returns Promise<Music[]>
	 */
	getSongs(): Promise<Music[]> {
		return new Promise((resolve, reject) => {
			search(this.name, 'artist_song').then((res: any) => {
				if (res?.content?.length) return resolve(res.content)
				reject(error(1008, {artist: this.name, type: 'song'}))
			}).catch(reject)
		})
	}

	/**
	 * Get the artist's albums
	 * @returns Promise<Album[]>
	 */
	getAlbums(): Promise<Album[]> {
		return new Promise((resolve, reject) => {
			search(this.name, 'artist_album').then((res: any) => {
				if (res?.content?.length) return resolve(res.content)
				reject(error(1008, {artist: this.name, type: 'album'}))
			}).catch(reject)
		})
	}

	/**
	 * Get the artist's videos
	 * @returns Promise<Music[]>
	 */
	getVideos(): Promise<Music[]> {
		return new Promise((resolve, reject) => {
			search(this.name, 'artist_video').then((res: any) => {
				if (res?.content?.length) return resolve(res.content)
				reject(error(1008, {artist: this.name, type: 'video'}))
			}).catch(reject)
		})
	}
}
