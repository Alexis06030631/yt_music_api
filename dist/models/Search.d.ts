export declare class SearchMusic {
    artworks: Array<Artwork>;
    id: string;
    name: string;
    artist: {
        name: string;
        id: string;
    };
    private artist_data;
    constructor(search_result: any);
    extractArtistData(search_result: any): any;
}
declare class Artwork {
    url: string;
    width: number;
    height: number;
}
export {};
