"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract_dataFromGetData = void 0;
const Music_model_1 = require("../models/Music_model");
const Artist_1 = require("../models/Artist");
const Album_1 = require("../models/Album");
const Artwork_1 = require("../models/Artwork");
const Duration_1 = require("../models/Duration");
function extract_dataFromGetData(data) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
    let artists = [], album, date;
    for (let item of ((_a = data === null || data === void 0 ? void 0 : data.longBylineText) === null || _a === void 0 ? void 0 : _a.runs) || []) {
        // Get Author(s)
        if (((_f = (_e = (_d = (_c = (_b = item.navigationEndpoint) === null || _b === void 0 ? void 0 : _b.browseEndpoint) === null || _c === void 0 ? void 0 : _c.browseEndpointContextSupportedConfigs) === null || _d === void 0 ? void 0 : _d.browseEndpointContextMusicConfig) === null || _e === void 0 ? void 0 : _e.pageType) === null || _f === void 0 ? void 0 : _f.includes('ARTIST')) || ((_l = (_k = (_j = (_h = (_g = item.navigationEndpoint) === null || _g === void 0 ? void 0 : _g.browseEndpoint) === null || _h === void 0 ? void 0 : _h.browseEndpointContextSupportedConfigs) === null || _j === void 0 ? void 0 : _j.browseEndpointContextMusicConfig) === null || _k === void 0 ? void 0 : _k.pageType) === null || _l === void 0 ? void 0 : _l.includes('USER'))) {
            artists.push(new Artist_1.Artist({
                name: item.text,
                id: (_o = (_m = item.navigationEndpoint) === null || _m === void 0 ? void 0 : _m.browseEndpoint) === null || _o === void 0 ? void 0 : _o.browseId
            }));
            // Get Album if exists
        }
        else if ((_s = (_r = (_q = (_p = item.navigationEndpoint) === null || _p === void 0 ? void 0 : _p.browseEndpoint) === null || _q === void 0 ? void 0 : _q.browseEndpointContextSupportedConfigs) === null || _r === void 0 ? void 0 : _r.browseEndpointContextMusicConfig) === null || _s === void 0 ? void 0 : _s.pageType.includes('ALBUM')) {
            album = new Album_1.Album({
                name: item.text,
                id: (_u = (_t = item.navigationEndpoint) === null || _t === void 0 ? void 0 : _t.browseEndpoint) === null || _u === void 0 ? void 0 : _u.browseId
            });
            // Get Date if exists
        }
        else {
            if (item.text.match(/([0-9]{4})/g))
                date = parseInt(item.text);
        }
    }
    if (artists.length === 0)
        artists.push(new Artist_1.Artist({
            name: (_x = (_w = (_v = data === null || data === void 0 ? void 0 : data.shortBylineText) === null || _v === void 0 ? void 0 : _v.runs) === null || _w === void 0 ? void 0 : _w[0]) === null || _x === void 0 ? void 0 : _x.text,
            id: null
        }));
    return new Music_model_1.Music_model({
        artworks: data.thumbnail.thumbnails.map((e) => new Artwork_1.Artwork(e)),
        title: data.title.runs[0].text,
        browseId: data.browseId,
        id: data.videoId,
        type: data.navigationEndpoint.watchEndpoint.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType,
        artists: artists,
        album: album,
        date: date,
        duration: new Duration_1.Duration({
            seconds: timeToSec(((_0 = (_z = (_y = data.lengthText) === null || _y === void 0 ? void 0 : _y.runs) === null || _z === void 0 ? void 0 : _z[0]) === null || _0 === void 0 ? void 0 : _0.text) || '0:00'),
            text: (_3 = (_2 = (_1 = data.lengthText) === null || _1 === void 0 ? void 0 : _1.runs) === null || _2 === void 0 ? void 0 : _2[0]) === null || _3 === void 0 ? void 0 : _3.text,
            label: data.lengthText.accessibility.accessibilityData.label
        })
    });
}
exports.extract_dataFromGetData = extract_dataFromGetData;
function timeToSec(time) {
    const time_split = time.split(':');
    let time_sec = 0;
    for (let i = 0; i < time_split.length; i++) {
        time_sec += parseInt(time_split[i]) * Math.pow(60, time_split.length - i - 1);
    }
    return time_sec;
}
//# sourceMappingURL=extract.js.map