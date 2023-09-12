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
const requestManager_1 = require("../utils/requestManager");
const decodeCipher_1 = require("../utils/decodeCipher");
exports.default = {
    getWebm: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            getPlayer(id).then((res) => {
                if (!res.streamingData)
                    return reject(res.playabilityStatus);
                let webm = res.streamingData.adaptiveFormats.filter((item) => item.mimeType.includes('audio/webm')).sort((a, b) => b.bitrate - a.bitrate)[0];
                webm.url = (0, decodeCipher_1.decode)(webm);
                resolve(webm);
            });
        }));
    }),
};
function getPlayer(videoId, body = {}) {
    return new Promise((resolve, reject) => {
        (0, requestManager_1.requestToYtApi)('player?key=', Object.assign({ videoId: videoId, context: {
                client: {
                    userAgent: "",
                    clientName: "WEB_REMIX",
                    clientVersion: "1.20230821.01.01",
                },
            }, playbackContext: {
                contentPlaybackContext: {
                    signatureTimestamp: 19597
                }
            } }, body)).then((res) => {
            resolve(res.data);
        }).catch(reject);
    });
}
