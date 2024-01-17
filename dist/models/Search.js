"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Music_1 = __importDefault(require("./Music"));
const Album_1 = __importDefault(require("./Album"));
class Search {
    constructor(query, search_result) {
        this.query = query;
        this.musics = search_result.filter((item) => Music_1.default.prototype.isPrototypeOf(item) && item.isAudioOnly);
        this.videos = search_result.filter((item) => Music_1.default.prototype.isPrototypeOf(item) && !item.isAudioOnly);
        this.albums = search_result.filter((item) => Album_1.default.prototype.isPrototypeOf(item));
    }
}
exports.default = Search;
//# sourceMappingURL=Search.js.map