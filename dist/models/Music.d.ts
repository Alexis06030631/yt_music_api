/// <reference types="node" />
import { Artwork } from "./Artwork";
import { Artist } from "./Artist";
import { Duration } from "./Duration";
import { DownloadType_param } from "../types/DownloadType";
import { DownloadQuality_param } from "../types/DownloadQuality";
export declare class Music {
    artworks: Array<Artwork>;
    id: string;
    title: string;
    artists: Array<Artist>;
    typeVideo: string;
    duration: Duration;
    browseId: string;
    isAudioOnly: boolean;
    autoMix: boolean;
    constructor(data: any, autoMix?: boolean);
    getLyrics(): Promise<Lyrics | NoLyrics>;
    download(type: DownloadType_param, quality?: DownloadQuality_param): Promise<Buffer>;
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
//# sourceMappingURL=Music.d.ts.map