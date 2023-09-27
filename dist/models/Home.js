"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const Music_list_1 = require("./Music_list");
const Playlist_1 = require("./Playlist");
class Home {
    constructor(home) {
        this.music_list = [];
        this.playlist = [];
        this.music_list = home.music_list.map((e) => new Music_list_1.Music_list(e));
        this.playlist = home.playlist.map((e) => new Playlist_1.Playlist(e));
    }
}
exports.Home = Home;
//# sourceMappingURL=Home.js.map