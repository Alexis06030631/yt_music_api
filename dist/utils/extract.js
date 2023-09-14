"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract_dataFromGetData = void 0;
const Music_model_1 = require("../models/Music_model");
const Artist_1 = require("../models/Artist");
const Album_1 = require("../models/Album");
const Artwork_1 = require("../models/Artwork");
const Duration_1 = require("../models/Duration");
function extract_dataFromGetData(data) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
    let artists = [], album, date;
    for (let item of ((_a = data === null || data === void 0 ? void 0 : data.longBylineText) === null || _a === void 0 ? void 0 : _a.runs) || []) {
        // Get Author(s)
        if ((_f = (_e = (_d = (_c = (_b = item.navigationEndpoint) === null || _b === void 0 ? void 0 : _b.browseEndpoint) === null || _c === void 0 ? void 0 : _c.browseEndpointContextSupportedConfigs) === null || _d === void 0 ? void 0 : _d.browseEndpointContextMusicConfig) === null || _e === void 0 ? void 0 : _e.pageType) === null || _f === void 0 ? void 0 : _f.includes('ARTIST')) {
            artists.push(new Artist_1.Artist({
                name: item.text,
                id: (_h = (_g = item.navigationEndpoint) === null || _g === void 0 ? void 0 : _g.browseEndpoint) === null || _h === void 0 ? void 0 : _h.browseId
            }));
            // Get Album if exists
        }
        else if ((_m = (_l = (_k = (_j = item.navigationEndpoint) === null || _j === void 0 ? void 0 : _j.browseEndpoint) === null || _k === void 0 ? void 0 : _k.browseEndpointContextSupportedConfigs) === null || _l === void 0 ? void 0 : _l.browseEndpointContextMusicConfig) === null || _m === void 0 ? void 0 : _m.pageType.includes('ALBUM')) {
            album = new Album_1.Album({
                name: item.text,
                id: (_p = (_o = item.navigationEndpoint) === null || _o === void 0 ? void 0 : _o.browseEndpoint) === null || _p === void 0 ? void 0 : _p.browseId
            });
            // Get Date if exists
        }
        else {
            if (item.text.match(/([0-9]{4})/g))
                date = parseInt(item.text);
        }
    }
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
            seconds: timeToSec(((_s = (_r = (_q = data.lengthText) === null || _q === void 0 ? void 0 : _q.runs) === null || _r === void 0 ? void 0 : _r[0]) === null || _s === void 0 ? void 0 : _s.text) || '0:00'),
            text: (_v = (_u = (_t = data.lengthText) === null || _t === void 0 ? void 0 : _t.runs) === null || _u === void 0 ? void 0 : _u[0]) === null || _v === void 0 ? void 0 : _v.text,
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
