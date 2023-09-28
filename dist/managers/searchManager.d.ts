import { Music } from "../models/Music";
import { Home } from "../models/Home";
import { Playlist } from "../models/Playlist";
import { TypeSearch_param } from '../types/TypeSearch';
export declare function search(query: string, type: TypeSearch_param): Promise<Array<Music>>;
export declare function getHomePage(): Promise<Home>;
export declare function relative(ID: string): Promise<Array<Music>>;
export declare function get(id: string): Promise<Music>;
export declare function getPlaylist(id: string): Promise<Playlist>;
export declare function GetData(id: string): Promise<any>;
//# sourceMappingURL=searchManager.d.ts.map