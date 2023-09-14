import {Artist} from "./Artist";
import {Artwork} from "./Artwork";
import {Duration} from "./Duration";
import {Album} from "./Album";

export class Music_model {
    public id: string;
    public browseId: string;
    public title: string;
    public artists: Array<Artist>
    public type: string;
    public artworks: Array<Artwork>
    public date: number
    public duration: Duration
    public album: Album

    constructor(music: any) {
        this.id = music.id || null
        this.browseId = music.browseId || null
        this.title = music.title || null
        this.artists = music.artists || []
        this.type = music.type || null
        this.artworks = music.artworks || []
        this.date = music.date || null
        this.duration = music.duration || null
        this.album = music.album || null

    }
}