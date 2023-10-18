/// <reference types="node" />
import { Album, Artwork, Artist, Duration, Lyrics, NoLyrics, Music_model } from "./";
import { DownloadType_param } from "../types/DownloadType";
import { DownloadQuality_param } from "../types/DownloadQuality";
export default class Music {
    artworks: Array<Artwork>;
    id: string;
    title: string;
    artists: Array<Artist>;
    typeVideo: string;
    duration: Duration;
    browseId: string;
    isAudioOnly: boolean;
    autoMix: boolean;
    album?: Album;
    date?: number;
    isExplicit: boolean;
    constructor(data: Music_model, autoMix?: boolean);
    getLyrics(): Promise<Lyrics | NoLyrics>;
    download(type: DownloadType_param, quality?: DownloadQuality_param): Promise<Buffer>;
}
//# sourceMappingURL=Music.d.ts.map