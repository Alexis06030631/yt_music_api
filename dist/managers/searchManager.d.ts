import { Music } from "../models/Music";
import { Home } from "../models/Home";
import { Playlist } from "../models/Playlist";
declare const _default: {
    search: (query: string, type: TypeSearch_param) => Promise<Array<Music>>;
    getHomePage: () => Promise<Home>;
    relative: (ID: string) => Promise<Array<Music>>;
    get: (id: string) => Promise<Music>;
    GetData: (id: string) => Promise<any>;
    getPlaylist: (id: string) => Promise<Playlist>;
};
export default _default;
declare const TypeSearch_arr: string[];
type TypeSearch_param = typeof TypeSearch_arr[number];
export declare class TypeSearch {
    static MUSIC: TypeSearch_param;
    static VIDEO: TypeSearch_param;
}
