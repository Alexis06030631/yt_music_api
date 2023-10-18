import {Artwork, Music} from "./";

export default class Playlist {
    public title: string;
    public description: string | boolean;
    public id: string;
    public artworks: Array<Artwork>
    public musics: Array<Music>

    constructor(playlist: any) {
        this.title = playlist.title
        this.description = playlist.description
        this.id = playlist.id
        this.artworks = playlist.artworks.map((e:any)=> new Artwork(e))
        this.musics = playlist.musics.map((e:any)=> new Music(e))
    }
}