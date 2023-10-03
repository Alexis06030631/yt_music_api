"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class Home {
    constructor(home) {
        this.music_list = [];
        this.playlist = [];
        this.music_list = home.music_list.map((e) => new _1.Music_list(e));
        this.playlist = home.playlist.map((e) => new _1.Playlist(e));
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map