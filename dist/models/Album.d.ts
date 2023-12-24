import { Artwork, Music } from "./index";
export default class Album {
    /**
     * The name of the album
     */
    name: string;
    /**
     * The YT id of the album
     */
    id: string;
    /**
     * An array of Artwork objects
     */
    artworks: Array<Artwork>;
    /**
     * The date of the album
     */
    date?: number;
    /**
     * An array of Artist objects
     */
    artists: Array<any>;
    constructor(album: any);
    /**
     * Get the musics of the album
     * @returns An array of Music objects
     */
    getMusics(): Promise<Array<Music>>;
}
//# sourceMappingURL=Album.d.ts.map