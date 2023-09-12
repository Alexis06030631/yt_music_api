import { Artwork } from "./Artwork";
import { Artist } from "./Artist";
import { Duration } from "./Duration";
export declare class Music {
    artworks: Array<Artwork>;
    id: string;
    title: string;
    artists: Array<Artist>;
    typeVideo: string;
    duration: Duration;
    browseId: string;
    autoMix: boolean;
    constructor(data: any, autoMix?: boolean);
    getLyrics(): Promise<Lyrics | NoLyrics>;
    getRelative(): Promise<Array<Music>>;
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
