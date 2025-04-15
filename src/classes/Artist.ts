import {Thumbnail} from "./Thumbnail";
import {thumbnail_defaults_size} from "../utils/utils";
import {get} from "../index";
import {error} from "../utils/error";
import Album from "./Album";
import {followerFormat} from "../utils/default";
import Playlist from "./Playlist";

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
	 * @example {
	 *     "followers": 1000000
	 *     "followersText": "1 M"
	 * }
	 */
	public followers: followerFormat;

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

	#browseIds: Array<any>

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
		this.#browseIds = artist?.browseIds || []
	}

	/**
	 * Get the artist's songs
	 * @return Music[]
	 */
	getSongs(): Promise<Playlist> {
		return new Promise((resolve, reject) => {
			const typeOfBrowse = this.#browseIds.find(id => id.type === 'MUSIC_PAGE_TYPE_PLAYLIST')
			get(typeOfBrowse.id, typeOfBrowse.param).then((res: any) => {
				res.artists = [this]
				if (res?.musics?.length) return resolve(res)
				reject(error(1008, {artist: this.name, type: 'song'}))
			}).catch(reject)
		})
	}

	/**
	 * Get the artist's albums
	 * @returns Album[]
	 */
	getAlbums(): Promise<Album[]> {
		return new Promise((resolve, reject) => {
			const typeOfBrowse = this.#browseIds?.find(id => id.type === 'MUSIC_PAGE_TYPE_ARTIST_DISCOGRAPHY')
			get(typeOfBrowse.id, typeOfBrowse.param).then((res: any) => {
				if (res?.length) return resolve(res)
				reject(error(1008, {artist: this.name, type: 'album'}))
			}).catch(reject)
		})
	}

	//TODO: Fix getVideos

	/**
	 * Get the artist's videos
	 * @returns Music[]

	getVideos(): Promise<Music[]> {
		return new Promise((resolve, reject) => {
			get(this.name, 'artist_video').then((res: any) => {
				if (res?.content?.length) return resolve(res.content)
				reject(error(1008, {artist: this.name, type: 'video'}))
			}).catch(reject)
		})
	}
	 */
}
