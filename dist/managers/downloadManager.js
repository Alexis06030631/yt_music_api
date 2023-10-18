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
exports.download = exports.getMp3 = exports.getWebm = void 0;
const requestManager_1 = require("../utils/requestManager");
const decodeCipher_1 = require("../utils/decodeCipher");
const DownloadQuality_1 = require("../types/DownloadQuality");
const DownloadType_1 = require("../types/DownloadType");
const errors_1 = require("../errors");
const errorCodes_1 = __importDefault(require("../errors/errorCodes"));
const models_1 = require("../models/");
/*
* This function is used to get the download link of a music in Webm format
* @deprecated This function is deprecated, use download() instead
 */
function getWebm(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            getPlayer(id).then((res) => {
                if (!res.streamingData)
                    return reject(res.playabilityStatus);
                let webm = res.streamingData.adaptiveFormats.filter((item) => item.mimeType.includes('audio/webm')).sort((a, b) => b.bitrate - a.bitrate)[0];
                webm.url = (0, decodeCipher_1.decode)(webm);
                resolve(webm);
            });
        }));
    });
}
exports.getWebm = getWebm;
function getMp3(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            getPlayer(id).then((res) => {
                if (!res.streamingData)
                    return reject(res.playabilityStatus);
                let mp3 = res.streamingData.adaptiveFormats.filter((item) => item.mimeType.includes('audio/mp4')).sort((a, b) => b.bitrate - a.bitrate)[0];
                mp3.url = (0, decodeCipher_1.decode)(mp3);
                resolve(mp3);
            });
        }));
    });
}
exports.getMp3 = getMp3;
function download(id, type = 'mp3', quality) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!DownloadType_1.DownloadType_arr.includes(type))
                throw new errors_1.YTjsErrorError(errorCodes_1.default.INVALID_TYPE_DOWNLOAD, { typeRequested: type, typesAvailable: DownloadType_1.DownloadType_arr });
            if (quality && !DownloadQuality_1.DownloadQuality_arr.includes(quality))
                throw new errors_1.YTjsErrorError(errorCodes_1.default.INVALID_TYPE_QUALITY, { typeRequested: quality, typesAvailable: DownloadQuality_1.DownloadQuality_arr });
            type = type.replace('mp3', 'mp4');
            getPlayer(id).then((res) => {
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
                    download.url = (0, decodeCipher_1.decode)(download);
                }
                catch (e) {
                    return reject(new errors_1.YTjsErrorError(errorCodes_1.default.DECHIPHER_ERROR, { error: e }));
                }
                download.expireDate = new Date(parseInt(download.url.split('expire=')[1].split('&')[0]) * 1000);
                resolve(new models_1.Download(download));
            });
        }));
    });
}
exports.download = download;
function getPlayer(videoId, body = {}) {
    return new Promise((resolve, reject) => {
        let time = (new Date()).getTime().toString();
        (0, requestManager_1.requestToYtApi)('player?key=', {
            videoId: videoId,
            "playbackContext": {
                "contentPlaybackContext": {
                    "referer": `https://music.youtube.com/watch?v=${videoId}`,
                    "signatureTimestamp": time[0] + time[2] + time[1] + (Number(time[0]) + Number(time[1]) * Number(time[2]) - Number(time[3]) * 2).toString() //19641 (13 october 2023 - 15h)
                }
            }
        }).then((res) => {
            resolve(res.data);
        }).catch(reject);
    });
}
//# sourceMappingURL=downloadManager.js.map