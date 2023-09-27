export declare class Music {
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
export declare class Search extends Music {
    constructor(search_result: any);
}
export declare class SearchVideo extends Music {
    constructor(search_result: any);
}
declare class Artwork {
    url: string;
    width: number;
    height: number;
}
export {};
//# sourceMappingURL=Search.d.ts.map