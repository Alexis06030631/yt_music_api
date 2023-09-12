import {Music_list} from "./Music_list";
import {Playlist} from "./Playlist";

export class Home {
    public music_list: Array<Music_list> = []
    public playlist: Array<Playlist> = []

    constructor(home: any) {
        this.music_list = home.music_list.map((e:any)=> new Music_list(e))
        this.playlist = home.playlist.map((e:any)=> new Playlist(e))
    }
}
