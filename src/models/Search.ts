import Music from "./Music";
import Album from "./Album";

export default class Search {
    /**
     * The query of the search
     */
    public query: string;
    /**
     * An array of musics
     */
    public musics: Array<Music>;
    /**
     * An array of musics videos
     */
    public videos: Array<Music>;
    /**
     * An array of albums
     */
    public albums: Array<Album>;

    constructor(query: string, search_result: any) {
        this.query = query
        this.musics = search_result.filter((item: any) => Music.prototype.isPrototypeOf(item) && item.isAudioOnly)
        this.videos = search_result.filter((item: any) => Music.prototype.isPrototypeOf(item) && !item.isAudioOnly)
        this.albums = search_result.filter((item: any) => Album.prototype.isPrototypeOf(item))
    }
}