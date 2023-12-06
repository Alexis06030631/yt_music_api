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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStreamPlayers = exports.download = exports.getMp3 = exports.getWebm = void 0;
const requestManager_1 = require("../utils/requestManager");
const DownloadQuality_1 = require("../types/DownloadQuality");
const DownloadType_1 = require("../types/DownloadType");
const errors_1 = require("../errors");
const errorCodes_1 = __importDefault(require("../errors/errorCodes"));
const models_1 = require("../models/");
const deprecate_1 = require("../utils/deprecate");
const getDecode_1 = require("../utils/getDecode");
/**
 * This function is used to get the download link of a music in Webm format
 * @deprecated This function is deprecated, use download() instead
 * @param id - The id of the music
 */
function getWebm(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            (0, deprecate_1.deprecated)('getWebm', 'download');
            getPlayer(id).then((res) => __awaiter(this, void 0, void 0, function* () {
                if (!res.streamingData)
                    return reject(res.playabilityStatus);
                let webm = res.streamingData.adaptiveFormats.filter((item) => item.mimeType.includes('audio/webm')).sort((a, b) => b.bitrate - a.bitrate)[0];
                webm.url = (yield (0, getDecode_1.getDecodeScript)()).decode(webm);
                resolve(webm);
            }));
        }));
    });
}
exports.getWebm = getWebm;
/**
 * @deprecated This function has been replaced by `download(ID, 'mp3')`
 * @param id - The id of the music
 */
function getMp3(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            (0, deprecate_1.deprecated)('getMp3', 'download');
            getPlayer(id).then((res) => __awaiter(this, void 0, void 0, function* () {
                if (!res.streamingData)
                    return reject(res.playabilityStatus);
                let mp3 = res.streamingData.adaptiveFormats.filter((item) => item.mimeType.includes('audio/mp4')).sort((a, b) => b.bitrate - a.bitrate)[0];
                mp3.url = (yield (0, getDecode_1.getDecodeScript)()).decode(mp3);
                resolve(mp3);
            }));
        }));
    });
}
exports.getMp3 = getMp3;
/**
 * This function is used to get the download link of a music
 * @param id - The id of the music
 * @param type - The type of the music (available: DownloadType_param)
 * @param quality - The quality of the music (available: DownloadQuality_param)
 */
function download(id, type = 'mp3', quality) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        if (!DownloadType_1.DownloadType_arr.includes(type))
            throw new errors_1.YTjsErrorError(errorCodes_1.default.INVALID_TYPE_DOWNLOAD, { typeRequested: type, typesAvailable: DownloadType_1.DownloadType_arr });
        if (quality && !DownloadQuality_1.DownloadQuality_arr.includes(quality))
            throw new errors_1.YTjsErrorError(errorCodes_1.default.INVALID_TYPE_QUALITY, { typeRequested: quality, typesAvailable: DownloadQuality_1.DownloadQuality_arr });
        type = type.replace('mp3', 'mp4');
        getPlayer(id).then((res) => __awaiter(this, void 0, void 0, function* () {
            if (!res.streamingData)
                return reject(res.playabilityStatus);
            let download = res.streamingData.adaptiveFormats.filter((item) => {
                if ((type === 'mp4' || type === 'webm') && !!item.audioQuality)
                    return item.mimeType.includes(type);
            });
            if (quality === 'high') {
                download = download.sort((a, b) => b.bitrate - a.bitrate)[0];
            }
            else if (quality === 'low') {
                download = download.sort((a, b) => a.bitrate - b.bitrate)[0];
            }
            else if (quality === 'medium') {
                download = download.sort((a, b) => b.bitrate - a.bitrate)[Math.round(download.length / 2) - 1];
            }
            else {
                download = download.sort((a, b) => b.bitrate - a.bitrate)[Math.round(download.length / 2) - 1];
            }
            if (!download)
                return reject(new errors_1.YTjsErrorError(errorCodes_1.default.DOWNLOAD_LINK_NOT_FOUND, { typeRequested: type, qualityRequested: quality || 'default' }));
            try {
                download.url = (yield (0, getDecode_1.getDecodeScript)()).decode(download);
            }
            catch (e) {
                return reject(new errors_1.YTjsErrorError(errorCodes_1.default.DECHIPHER_ERROR, { error: e }));
            }
            download.expireDate = new Date(parseInt(download.url.split('expire=')[1].split('&')[0]) * 1000);
            resolve(new models_1.Download(download));
        }));
    }));
}
exports.download = download;
function getStreamPlayers(id) {
    return new Promise((resolve, reject) => {
        getPlayer(id).then((res) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const decode = yield (0, getDecode_1.getDecodeScript)();
            let audio = ((_c = (_b = (_a = res.streamingData) === null || _a === void 0 ? void 0 : _a.adaptiveFormats) === null || _b === void 0 ? void 0 : _b.filter((item) => item.audioQuality)) === null || _c === void 0 ? void 0 : _c.sort((a, b) => b.bitrate - a.bitrate)) || [];
            let video = ((_f = (_e = (_d = res.streamingData) === null || _d === void 0 ? void 0 : _d.adaptiveFormats) === null || _e === void 0 ? void 0 : _e.filter((item) => !item.audioQuality)) === null || _f === void 0 ? void 0 : _f.sort((a, b) => b.bitrate - a.bitrate)) || [];
            audio.forEach((item) => {
                item.url = decode(item);
                item.expireDate = new Date(parseInt(item.url.split('expire=')[1].split('&')[0]) * 1000);
            });
            video.forEach((item) => {
                item.url = decode(item);
                item.expireDate = new Date(parseInt(item.url.split('expire=')[1].split('&')[0]) * 1000);
            });
            let available = (!!audio || !!video) && res.playabilityStatus.status === 'OK';
            resolve(new models_1.StreamPlayers({
                audios: audio,
                videos: video,
                available: available,
                unplayable_reason: res.playabilityStatus.reason,
                maxBitrate: Number((_h = (_g = res === null || res === void 0 ? void 0 : res.playerConfig) === null || _g === void 0 ? void 0 : _g.streamSelectionConfig) === null || _h === void 0 ? void 0 : _h.maxBitrate)
            }));
        }));
    });
}
exports.getStreamPlayers = getStreamPlayers;
function getPlayer(videoId, body = {}) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let time = (new Date()).getTime().toString();
        (0, requestManager_1.requestToYtApi)('player?key=', {
            videoId: videoId,
            "context": {
                "client": {
                    "clientName": "WEB_REMIX",
                    "clientVersion": "1.20231130.05.00"
                }
            },
            "playbackContext": {
                "contentPlaybackContext": {
                    "referer": `https://music.youtube.com/watch?v=${videoId}`,
                    "signatureTimestamp": yield (0, getDecode_1.getSignatureTimestamp)(),
                }
            }
        }).then((res) => {
            resolve(res.data);
        }).catch(reject);
    }));
}
//# sourceMappingURL=downloadManager.js.map