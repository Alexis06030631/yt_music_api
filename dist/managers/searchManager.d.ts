import { Music } from "../models/Music";
import { Home } from "../models/Home";
import { Playlist } from "../models/Playlist";
declare const _default: {
    search: (query: string, type: TypeSearch) => Promise<Array<Music>>;
    getHomePage: () => Promise<Home>;
    relative: (ID: string) => Promise<Array<Music>>;
    get: (id: string) => Promise<Music>;
    GetData: (id: string) => Promise<any>;
    getPlaylist: (id: string) => Promise<Playlist>;
};
export default _default;
export declare class TypeSearch {
    static readonly MUSIC = "MUSIC";
    static readonly VIDEO = "VIDEO";
    static readonly MUSIC_values: string[];
    static readonly VIDEO_values: string[];
}
