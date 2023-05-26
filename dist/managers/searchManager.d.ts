import { Music } from "../models/Music";
declare const _default: {
    search: (query: string, type: TypeSearch) => Promise<Array<Music>>;
    get: (id: string) => Promise<Music>;
};
export default _default;
declare class TypeSearch {
    static readonly MUSIC = "MUSIC";
    static readonly VIDEO = "VIDEO";
}
