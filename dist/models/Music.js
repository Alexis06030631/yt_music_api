"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const requestManager_1 = require("../utils/requestManager");
const _1 = require("./");
const downloadManager = __importStar(require("../managers/downloadManager"));
class Music {
    constructor(data, autoMix) {
        this.artworks = data.artworks;
        this.id = data.id;
        this.title = data.title;
        this.artists = data.artists;
        this.artists.toString = () => {
            const artists = data.artists = [...data.artists];
            // Return the artists in string format with a comma between each artist and if it's the last artist add '&'
            return artists.map((artist, index) => `${artist.name}${index === artists.length - 1 ? '' : index === artists.length - 2 ? ' &' : ','} `).join('');
        };
        this.album = data.album;
        this.duration = data.duration;
        this.typeVideo = data.type;
        this.browseId = data.browseId;
        this.isAudioOnly = data.type.includes('ATV');
        this.date = data.date;
        this.isExplicit = data.explicit;
        if (autoMix)
            this.autoMix = autoMix;
    }
    getLyrics() {
        return new Promise((resolve, reject) => {
            (0, requestManager_1.requestToYtApi)('browse', {
                browseId: this.browseId,
                context: { client: { clientVersion: "1.20230522.01.00", clientName: "WEB_REMIX" } }
            }).then((res) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                if (!((_e = (_d = (_c = (_b = (_a = res.data.contents) === null || _a === void 0 ? void 0 : _a.sectionListRenderer) === null || _b === void 0 ? void 0 : _b.contents) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.musicDescriptionShelfRenderer) === null || _e === void 0 ? void 0 : _e.description))
                    return reject(new _1.NoLyrics((_k = (_j = (_h = (_g = (_f = res.data.contents) === null || _f === void 0 ? void 0 : _f.messageRenderer) === null || _g === void 0 ? void 0 : _g.text) === null || _h === void 0 ? void 0 : _h.runs) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.text));
                else {
                    const resolveData = new _1.Lyrics({
                        lyrics: res.data.contents.sectionListRenderer.contents[0].musicDescriptionShelfRenderer.description.runs[0].text,
                        source: res.data.contents.sectionListRenderer.contents[0].musicDescriptionShelfRenderer.footer.runs[0].text.replace('Source: ', '')
                    });
                    resolve(resolveData);
                }
            }).catch(reject);
        });
    }
    download(type, quality) {
        return new Promise((resolve, reject) => {
            downloadManager.download(this.id, type, quality).then(resolve).catch(reject);
        });
    }
}
exports.default = Music;
//# sourceMappingURL=Music.js.map