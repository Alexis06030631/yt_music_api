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
exports.requestToYtApi = void 0;
const axios_1 = __importDefault(require("axios"));
let Defaultheaders = {
    'Content-Type': 'application/json',
    'cookie': '',
    'Referer': 'https://music.youtube.com/',
};
let Defaultbody = {
    "context": {
        "client": {
            "clientName": "WEB_REMIX",
            "clientVersion": "1.20220808.01.00",
            "originalUrl": "https://music.youtube.com"
        }
    }
};
let YTmusic_API_URL = 'https://music.youtube.com/youtubei/v1/';
function requestToYtApi(url, body, header) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            axios_1.default.post(makeUrl(url), makeBody(body), { headers: makeHeaders(header) })
                .then((res) => {
                resolve(res);
            })
                .catch((err) => {
                reject(err);
            });
        });
    });
}
exports.requestToYtApi = requestToYtApi;
function makeUrl(url, ...params) {
    if (url.startsWith('http')) {
        return encodeURI(url);
    }
    else
        return encodeURI(YTmusic_API_URL + url);
}
function makeHeaders(headers) {
    return Object.assign(Object.assign({}, Defaultheaders), headers);
}
function makeBody(params) {
    return Object.assign(Object.assign({}, Defaultbody), params);
}
