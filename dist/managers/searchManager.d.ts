import { Music } from "../models/Music";
import { Home } from "../models/Home";
import { Playlist } from "../models/Playlist";
export declare function search(query: string, type: TypeSearch_param): Promise<Array<Music>>;
export declare function getHomePage(): Promise<Home>;
export declare function relative(ID: string): Promise<Array<Music>>;
export declare function get(id: string): Promise<Music>;
export declare function getPlaylist(id: string): Promise<Playlist>;
export declare function GetData(id: string): Promise<any>;
declare const TypeSearch_arr: string[];
type TypeSearch_param = typeof TypeSearch_arr[number];
export declare class TypeSearch {
    static MUSIC: TypeSearch_param;
    static VIDEO: TypeSearch_param;
}
export {};
//# sourceMappingURL=searchManager.d.ts.map