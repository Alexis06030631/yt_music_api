import { Music } from "../models/Music";
declare const _default: {
    search: (query: string, type: TypeSearch) => Promise<Array<Music>>;
    get: (id: string) => Promise<Music>;
};
export default _default;
export declare class TypeSearch {
    static readonly MUSIC = "MUSIC";
    static readonly VIDEO = "VIDEO";
    static readonly MUSIC_values: string[];
    static readonly VIDEO_values: string[];
}
