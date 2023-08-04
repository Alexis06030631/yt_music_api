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
exports.TypeSearch = void 0;
const requestManager_1 = require("../utils/requestManager");
const Music_1 = require("../models/Music");
exports.default = {
    search: (query, type) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, requestManager_1.requestToYtApi)('search', {
            "query": query,
        }).then((res) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            let data = res.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item) => { var _a, _b, _c; return ((_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicShelfRenderer) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b.runs[0]) === null || _c === void 0 ? void 0 : _c.text) === 'Songs'; })[0].musicShelfRenderer.contents;
            if ((_a = res.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item) => { var _a, _b, _c; return ((_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicCardShelfRenderer) === null || _a === void 0 ? void 0 : _a.subtitle) === null || _b === void 0 ? void 0 : _b.runs[0]) === null || _c === void 0 ? void 0 : _c.text) === 'Song'; })[0]) === null || _a === void 0 ? void 0 : _a.musicCardShelfRenderer)
                data.unshift({ musicResponsiveListItemRenderer: Object.assign({}, res.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item) => { var _a, _b, _c; return ((_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicCardShelfRenderer) === null || _a === void 0 ? void 0 : _a.subtitle) === null || _b === void 0 ? void 0 : _b.runs[0]) === null || _c === void 0 ? void 0 : _c.text) === 'Song'; })[0].musicCardShelfRenderer) });
            const resp_data = [];
            if (type === TypeSearch.MUSIC) {
                data = data.filter((item) => { var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k; return TypeSearch.MUSIC_values.includes((_j = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicResponsiveListItemRenderer) === null || _a === void 0 ? void 0 : _a.overlay) === null || _b === void 0 ? void 0 : _b.musicItemThumbnailOverlayRenderer) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d.musicPlayButtonRenderer) === null || _e === void 0 ? void 0 : _e.playNavigationEndpoint) === null || _f === void 0 ? void 0 : _f.watchEndpoint) === null || _g === void 0 ? void 0 : _g.watchEndpointMusicSupportedConfigs) === null || _h === void 0 ? void 0 : _h.watchEndpointMusicConfig) === null || _j === void 0 ? void 0 : _j.musicVideoType) || TypeSearch.MUSIC_values.includes((_k = item === null || item === void 0 ? void 0 : item.musicResponsiveListItemRenderer) === null || _k === void 0 ? void 0 : _k.title.runs[0].navigationEndpoint.watchEndpoint.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType); });
            }
            else if (type === TypeSearch.VIDEO) {
                data = data.filter((item) => { var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k; return TypeSearch.VIDEO_values.includes((_j = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicResponsiveListItemRenderer) === null || _a === void 0 ? void 0 : _a.overlay) === null || _b === void 0 ? void 0 : _b.musicItemThumbnailOverlayRenderer) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d.musicPlayButtonRenderer) === null || _e === void 0 ? void 0 : _e.playNavigationEndpoint) === null || _f === void 0 ? void 0 : _f.watchEndpoint) === null || _g === void 0 ? void 0 : _g.watchEndpointMusicSupportedConfigs) === null || _h === void 0 ? void 0 : _h.watchEndpointMusicConfig) === null || _j === void 0 ? void 0 : _j.musicVideoType) || TypeSearch.VIDEO_values.includes((_k = item === null || item === void 0 ? void 0 : item.musicResponsiveListItemRenderer) === null || _k === void 0 ? void 0 : _k.title.runs[0].navigationEndpoint.watchEndpoint.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType); });
            }
            for (const item of data) {
                resp_data.push(new Music_1.Music(yield GetData(((_c = (_b = item.musicResponsiveListItemRenderer) === null || _b === void 0 ? void 0 : _b.playlistItemData) === null || _c === void 0 ? void 0 : _c.videoId) || ((_d = item.musicResponsiveListItemRenderer) === null || _d === void 0 ? void 0 : _d.onTap.watchEndpoint.videoId))));
            }
            return resp_data;
        }));
    }),
    get: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
            return resolve(new Music_1.Music(yield GetData(id)));
        }));
    })
};
function GetData(id) {
    return new Promise((resolve, reject) => {
        (0, requestManager_1.requestToYtApi)('next', {
            "videoId": id
        }).then((res) => {
            resolve(Object.assign({ browseId: res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[1].tabRenderer.endpoint.browseEndpoint.browseId }, res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents[0].playlistPanelVideoRenderer));
        }).catch(reject);
    });
}
class TypeSearch {
}
TypeSearch.MUSIC = 'MUSIC';
TypeSearch.VIDEO = 'VIDEO';
TypeSearch.MUSIC_values = ['MUSIC_VIDEO_TYPE_ATV', 'MUSIC_VIDEO_TYPE_OMV', 'MUSIC_VIDEO_TYPE_SONG'];
TypeSearch.VIDEO_values = ['MUSIC_VIDEO_TYPE_VIDEO', 'MUSIC_VIDEO_TYPE_CONCERT', 'MUSIC_VIDEO_TYPE_COVER', 'MUSIC_VIDEO_TYPE_PARODY', 'MUSIC_VIDEO_TYPE_PERFORMANCE', 'MUSIC_VIDEO_TYPE_REMIX', 'MUSIC_VIDEO_TYPE_USER_GENERATED', 'MUSIC_VIDEO_TYPE_VIDEO_CLIP', 'MUSIC_VIDEO_TYPE_VIDEO_OTHER', 'MUSIC_VIDEO_TYPE_VIDEO_WITH_MUSIC', 'MUSIC_VIDEO_TYPE_VISUALIZER'];
exports.TypeSearch = TypeSearch;
