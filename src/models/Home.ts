import {Music_list, Playlist} from "./";

export default class Home {
    public music_list: Array<Music_list> = []
    public playlist: Array<Playlist> = []

    constructor(home: any) {
        this.music_list = home.music_list.map((e:any)=> new Music_list(e))
        this.playlist = home.playlist.map((e:any)=> new Playlist(e))
    }
}
