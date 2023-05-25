export declare class SearchMusic {
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
}
export declare class Search extends SearchMusic {
    constructor(search_result: any);
}
export declare class SearchVideo extends SearchMusic {
    constructor(search_result: any);
}
declare class Artwork {
    url: string;
    width: number;
    height: number;
}
export {};
