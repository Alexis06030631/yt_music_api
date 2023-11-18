import { Artwork, Artist } from "./";
export default class Music {
    /**
     * An array of Artwork objects
     */
    artworks: Array<Artwork>;
    /**
     * The YTmusic id of the music
     */
    id: string;
    /**
     * The title of the music
     */
    name: string;
    /**
     * The artist of the music
     */
    artist: Artist;
    /**
     * The type of the video (audio or video)
     */
    typeVideo: string;
    private artist_data;
    constructor(search_result: any);
    extractArtistData(search_result: any): any;
    getLink(): string;
}
//# sourceMappingURL=Search.d.ts.map