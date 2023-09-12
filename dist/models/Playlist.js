"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
const Artwork_1 = require("./Artwork");
const Music_1 = require("./Music");
class Playlist {
    constructor(playlist) {
        this.title = playlist.title;
        this.description = playlist.description;
        this.id = playlist.id;
        this.artworks = playlist.artworks.map((e) => new Artwork_1.Artwork(e));
        this.musics = playlist.musics.map((e) => new Music_1.Music(e));
    }
}
exports.Playlist = Playlist;
