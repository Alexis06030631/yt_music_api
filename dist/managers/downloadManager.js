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
exports.downloadAsFile = exports.getStreamPlayers = exports.download = exports.getMp3 = exports.getWebm = void 0;
const requestManager_1 = require("../utils/requestManager");
const DownloadQuality_1 = require("../types/DownloadQuality");
const DownloadType_1 = require("../types/DownloadType");
const errors_1 = require("../errors");
const errorCodes_1 = __importDefault(require("../errors/errorCodes"));
const models_1 = require("../models/");
const deprecate_1 = require("../utils/deprecate");
const getDecode_1 = require("../utils/getDecode");
const models_2 = require("../models");
const axios_1 = __importDefault(require("axios"));
const fsPath = __importStar(require("path"));
const fs = __importStar(require("fs"));
/**
 * This function is used to get the download link of a music in Webm format
 * @deprecated This function is deprecated, use download() instead
 * @param id - The id of the music
 */
function getWebm(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            (0, deprecate_1.deprecated)('getWebm', 'download');
            const decode = yield (0, getDecode_1.getDecodeScript)();
            getPlayer(id).then((res) => {
                if (!res.streamingData)
                    return reject(res.playabilityStatus);
                let webm = res.streamingData.adaptiveFormats.filter((item) => item.mimeType.includes('audio/webm')).sort((a, b) => b.bitrate - a.bitrate)[0];
                webm.url = decode(webm);
                resolve(webm);
            });
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
            const decode = yield (0, getDecode_1.getDecodeScript)();
            getPlayer(id).then((res) => __awaiter(this, void 0, void 0, function* () {
                if (!res.streamingData)
                    return reject(res.playabilityStatus);
                let mp3 = res.streamingData.adaptiveFormats.filter((item) => item.mimeType.includes('audio/mp4')).sort((a, b) => b.bitrate - a.bitrate)[0];
                mp3.url = decode(mp3);
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
            throw new errors_1.YTjsErrorError(errorCodes_1.default.INVALID_TYPE_DOWNLOAD, {
                typeRequested: type,
                typesAvailable: DownloadType_1.DownloadType_arr
            });
        if (quality && !DownloadQuality_1.DownloadQuality_arr.includes(quality))
            throw new errors_1.YTjsErrorError(errorCodes_1.default.INVALID_TYPE_QUALITY, {
                typeRequested: quality,
                typesAvailable: DownloadQuality_1.DownloadQuality_arr
            });
        type = type.replace('mp3', 'mp4');
        getPlayer(id).then((res) => __awaiter(this, void 0, void 0, function* () {
            const decode = yield (0, getDecode_1.getDecodeScript)();
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
                return reject(new errors_1.YTjsErrorError(errorCodes_1.default.DOWNLOAD_LINK_NOT_FOUND, {
                    typeRequested: type,
                    qualityRequested: quality || 'default'
                }));
            try {
                download.url = decode(download);
            }
            catch (e) {
                return reject(new errors_1.YTjsErrorError(errorCodes_1.default.DECHIPHER_ERROR, e));
            }
            download.expireDate = new Date(parseInt(download.url.split('expire=')[1].split('&')[0]) * 1000);
            resolve(new models_1.Download(download));
        }));
    }));
}
exports.download = download;
/**
 * This function is used to get the stream players of a music (audio and video streams)
 * @param id - The id of the music
 */
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
/**
 * This function is used to download a music and save it as a file
 * @param id - The id of the music
 * @param path - The path where the music will be downloaded
 * @param type - The type of the music (available: DownloadType_param)
 * @param quality - The quality of the music (available: DownloadQuality_param)
 */
function downloadAsFile(id, path, type = 'mp3', quality) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let relativePath = fsPath.relative('/', fsPath.join(path));
        if (!relativePath.startsWith('/'))
            relativePath = `/${relativePath}`;
        const split = relativePath.split('/');
        if (split[split.length - 1].split('.').length === 1)
            split[split.length - 1] = `${split[split.length - 1]}/download.${type}`;
        split[split.length - 1] = `${split[split.length - 1].split('.').map((item, index) => index === split[split.length - 1].split('.').length - 1 ? type : item).join('.')}`;
        relativePath = split.join('/');
        if (!relativePath)
            return reject(new errors_1.YTjsErrorError(errorCodes_1.default.PATH_NOT_FOUND, { path: relativePath }));
        if (!fs.existsSync(relativePath.replace(`${relativePath.split('/')[relativePath.split('/').length - 1]}`, '')))
            fs.mkdirSync(relativePath.replace(`${relativePath.split('/')[relativePath.split('/').length - 1]}`, ''), { recursive: true });
        download(id, type, quality).then((res) => {
            axios_1.default.get(res.url, {
                responseType: 'stream',
                headers: {
                    accept: '*/*',
                    dnt: 1,
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
                    "cache-control": "no-cache",
                    "pragma": "no-cache",
                    "range": "bytes=0-",
                    "sec-ch-ua": '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
                    "sec-ch-ua-mobile": '?0',
                    "sec-ch-ua-platform": '"macOS"',
                    "sec-fetch-dest": "video",
                },
            }).then((response) => {
                response.data.pipe(fs.createWriteStream(relativePath));
                response.data.on('end', () => {
                    resolve(new models_2.DownloadFile({
                        path: relativePath,
                        size: Math.round(fs.statSync(relativePath).size / 1024 / 1024 * 100) / 100,
                    }));
                });
            }).catch(reject);
        }).catch(reject);
    }));
}
exports.downloadAsFile = downloadAsFile;
function getPlayer(videoId, body = {}) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
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