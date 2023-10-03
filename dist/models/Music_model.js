"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Music_model {
    constructor(music) {
        this.id = music.id || null;
        this.browseId = music.browseId || null;
        this.title = music.title || null;
        this.artists = music.artists || [];
        this.type = music.type || null;
        this.artworks = music.artworks || [];
        this.date = music.date || null;
        this.duration = music.duration || null;
        this.album = music.album || null;
    }
}
exports.default = Music_model;
//# sourceMappingURL=Music_model.js.map