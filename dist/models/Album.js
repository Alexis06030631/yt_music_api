"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const requestManager_1 = require("../utils/requestManager");
const extract_1 = require("../utils/extract");
const searchManager_1 = require("../managers/searchManager");
class Album {
    constructor(album) {
        this.name = album.name;
        this.id = album.id;
        this.artworks = (album === null || album === void 0 ? void 0 : album.artworks) || [];
        this.date = album === null || album === void 0 ? void 0 : album.date;
        this.artists = (album === null || album === void 0 ? void 0 : album.artists) || [];
    }
    /**
     * Get the musics of the album
     * @returns An array of Music objects
     */
    getMusics() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, requestManager_1.requestToYtApi)('browse', {
                    browseId: this.id,
                }).then((res) => __awaiter(this, void 0, void 0, function* () {
                    var _a, _b, _c;
                    const resp_data = [];
                    for (const item of res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].musicShelfRenderer.contents) {
                        resp_data.push(new index_1.Music((0, extract_1.extract_dataFromGetData)(yield (0, searchManager_1.GetData)(((_b = (_a = item.musicResponsiveListItemRenderer) === null || _a === void 0 ? void 0 : _a.playlistItemData) === null || _b === void 0 ? void 0 : _b.videoId) || ((_c = item.musicResponsiveListItemRenderer) === null || _c === void 0 ? void 0 : _c.onTap.watchEndpoint.videoId)))));
                    }
                    resolve(resp_data);
                }));
            });
        });
    }
}
exports.default = Album;
//# sourceMappingURL=Album.js.map