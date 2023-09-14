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
const errors_1 = require("../errors");
const errorCodes_1 = __importDefault(require("../errors/errorCodes"));
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
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
                if ((_c = (_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.status) {
                    if (errorCodes_1.default[(_f = (_e = (_d = err.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.error) === null || _f === void 0 ? void 0 : _f.status]) {
                        return reject(new errors_1.YTjsErrorError((_j = (_h = (_g = err.response) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.error) === null || _j === void 0 ? void 0 : _j.status, (_p = (_o = (_m = (_l = (_k = err.response) === null || _k === void 0 ? void 0 : _k.data) === null || _l === void 0 ? void 0 : _l.error) === null || _m === void 0 ? void 0 : _m.errors) === null || _o === void 0 ? void 0 : _o[0]) === null || _p === void 0 ? void 0 : _p.message));
                    }
                }
                reject((0, errors_1.makeAxiosError)(((_s = (_r = (_q = err.response) === null || _q === void 0 ? void 0 : _q.data) === null || _r === void 0 ? void 0 : _r.error) === null || _s === void 0 ? void 0 : _s.status) || err.message, err, (_u = (_t = err.response) === null || _t === void 0 ? void 0 : _t.data) === null || _u === void 0 ? void 0 : _u.error));
            });
        });
    });
}
exports.requestToYtApi = requestToYtApi;
function makeUrl(url) {
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
