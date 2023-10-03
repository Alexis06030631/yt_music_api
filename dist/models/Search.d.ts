import { Artwork } from "./";
export default class Music {
    artworks: Array<Artwork>;
    id: string;
    name: string;
    artist: {
        name: string;
        id: string;
    };
    typeVideo: string;
    private artist_data;
    constructor(search_result: any);
    extractArtistData(search_result: any): any;
    getLink(): string;
}
//# sourceMappingURL=Search.d.ts.map