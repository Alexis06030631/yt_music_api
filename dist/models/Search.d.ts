import Music from "./Music";
import Album from "./Album";
export default class Search {
    /**
     * The query of the search
     */
    query: string;
    /**
     * The best result of the search
     */
    bestResult: Music | Album;
    /**
     * An array of musics
     */
    musics: Array<Music>;
    /**
     * An array of musics videos
     */
    videos: Array<Music>;
    /**
     * An array of albums
     */
    albums: Array<Album>;
    constructor(query: string, search_result: any);
}
//# sourceMappingURL=Search.d.ts.map