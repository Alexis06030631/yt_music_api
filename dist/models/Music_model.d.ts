import { Artist, Artwork, Duration, Album } from "./";
export default class Music_model {
    id: string;
    browseId: string;
    title: string;
    artists: Array<Artist>;
    type: string;
    artworks: Array<Artwork>;
    date: number;
    duration: Duration;
    album: Album;
    explicit: boolean;
    constructor(music: any);
}
//# sourceMappingURL=Music_model.d.ts.map