import { Artist } from "./Artist";
import { Artwork } from "./Artwork";
import { Duration } from "./Duration";
import { Album } from "./Album";
export declare class Music_model {
    id: string;
    browseId: string;
    title: string;
    artists: Array<Artist>;
    type: string;
    artworks: Array<Artwork>;
    date: number;
    duration: Duration;
    album: Album;
    constructor(music: any);
}
