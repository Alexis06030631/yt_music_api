"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class Playlist {
    constructor(playlist) {
        this.title = playlist.title;
        this.description = playlist.description;
        this.id = playlist.id;
        this.artworks = playlist.artworks.map((e) => new _1.Artwork(e));
        this.musics = playlist.musics.map((e) => new _1.Music(e));
    }
}
exports.default = Playlist;
//# sourceMappingURL=Playlist.js.map