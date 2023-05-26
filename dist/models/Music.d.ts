export declare class Music {
    artworks: Array<Artwork>;
    id: string;
    name: string;
    artist: {
        name: string;
        id: string;
    };
    typeVideo: string;
    length: {
        inSec: number;
        inText: string;
        label: string;
    };
    browseId: string;
    constructor(search_result: any);
    getLyrics(): Promise<Lyrics | NoLyrics>;
}
declare class Artwork {
    url: string;
    width: number;
    height: number;
}
declare class Lyrics {
    lyrics: string;
    source: string;
}
declare class NoLyrics {
    message: string;
    status: boolean;
    constructor(message: string);
}
export {};
