import {Music} from "./Music";

export class Music_list {
    public title: string;
    public musics: Array<Music>;

    constructor(album: any) {
        this.title = album.title
        this.musics = album.musics
    }
}