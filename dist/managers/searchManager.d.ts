import { Music, Playlist, Home, Album } from "../models/";
import { TypeSearch_param } from '../types/TypeSearch';
import { TypeunitOfTime } from "../types/TypePage";
/**
 * Search music, video or other with query
 * @param query - Query to search
 * @param type - Type of search
 */
export declare function search(query: string, type?: string | TypeSearch_param): Promise<Array<(Music | Album)>>;
/**
 * Get the home page (NOT WORKING)
 * @param type - Type of page to get
 * @beta
 */
export declare function getPage(type: TypeunitOfTime): Promise<Home | any>;
/**
 * Get the relative musics of a music
 * @param ID - The id of the music
 */
export declare function relative(ID: string): Promise<Array<Music>>;
/**
 * Get the music by id
 * @param id - The id of the music
 */
export declare function get(id: string): Promise<Music>;
/**
 * Get the playlist by id
 * @param id - The id of the playlist
 */
export declare function getPlaylist(id: string): Promise<Playlist>;
export declare function GetData(id: string): Promise<any>;
//# sourceMappingURL=searchManager.d.ts.map