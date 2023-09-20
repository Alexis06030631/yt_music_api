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
exports.TypeSearch = void 0;
const requestManager_1 = require("../utils/requestManager");
const Music_1 = require("../models/Music");
const Home_1 = require("../models/Home");
const index_1 = require("../index");
const extract_1 = require("../utils/extract");
const Playlist_1 = require("../models/Playlist");
const errors_1 = require("../errors");
const errorCodes_1 = __importDefault(require("../errors/errorCodes"));
exports.default = {
    search: (query, type) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        if ((_a = query.match(/^(?:https?:\/\/)?(?:www\.)?.*(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})(?:.+)?$/)) === null || _a === void 0 ? void 0 : _a[1]) {
            return [new Music_1.Music(yield GetData((_b = query.match(/^(?:https?:\/\/)?(?:www\.)?.*(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})(?:.+)?$/)) === null || _b === void 0 ? void 0 : _b[1]))];
        }
        else {
            return (0, requestManager_1.requestToYtApi)('search', {
                "query": query,
            }).then((res) => __awaiter(void 0, void 0, void 0, function* () {
                let ids = JSON.stringify(res.data).match(/videoId\W+"(\w*)"([\n|\w|\W]?)+?musicVideoType\W+"(\w*)/gmi).map(videoID => {
                    return {
                        id: videoID.match(/videoId\W+"(\w*)"([\n|\w|\W]?)+?musicVideoType\W+"(\w*)/mi)[1],
                        type: videoID.match(/videoId\W+"(\w*)"([\n|\w|\W]?)+?musicVideoType\W+"(\w*)/mi)[3]
                    };
                });
                let ids2 = [];
                // Remove duplicate
                ids.filter((item, index) => {
                    return ids2.find((e) => e.id === item.id) ? false : ids2.push(item);
                });
                ids = ids2;
                if (type === TypeSearch.MUSIC) {
                    ids = ids.filter((e) => TypeSearch.MUSIC_values.includes(e.type));
                }
                else if (type === TypeSearch.VIDEO) {
                    ids = ids.filter((e) => TypeSearch.VIDEO_values.includes(e.type));
                }
                let resp_data = [];
                // Filter by type
                for (const id of ids) {
                    resp_data.push(new Music_1.Music((0, extract_1.extract_dataFromGetData)(yield GetData(id.id))));
                }
                return resp_data;
            }));
        }
    }),
    getHomePage: () => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
            (0, requestManager_1.requestToYtApi)('browse', {
                "browseId": "FEmusic_home"
            }).then((res) => __awaiter(void 0, void 0, void 0, function* () {
                const resp_data = {
                    music_list: [],
                    playlist: []
                };
                new Promise((resolve2) => __awaiter(void 0, void 0, void 0, function* () {
                    for (let i = 0; res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.length > i; i++) {
                        let item = res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents;
                        yield new Promise((resolve3) => __awaiter(void 0, void 0, void 0, function* () {
                            for (let x = 0; item.length > x; x++) {
                                let music = item[x].musicCarouselShelfRenderer;
                                new Promise((resolve4) => __awaiter(void 0, void 0, void 0, function* () {
                                    var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
                                    for (let x = 0; music.contents.length > x; x++) {
                                        let musicdt = music.contents[x];
                                        if (musicdt) {
                                            if (!((_d = (_c = musicdt === null || musicdt === void 0 ? void 0 : musicdt.musicResponsiveListItemRenderer) === null || _c === void 0 ? void 0 : _c.playlistItemData) === null || _d === void 0 ? void 0 : _d.videoId)) {
                                                if ((_g = (_f = (_e = musicdt.musicTwoRowItemRenderer) === null || _e === void 0 ? void 0 : _e.navigationEndpoint) === null || _f === void 0 ? void 0 : _f.browseEndpoint) === null || _g === void 0 ? void 0 : _g.browseId)
                                                    resp_data.playlist.push(yield getPlaylist((_k = (_j = (_h = musicdt.musicTwoRowItemRenderer) === null || _h === void 0 ? void 0 : _h.navigationEndpoint) === null || _j === void 0 ? void 0 : _j.browseEndpoint) === null || _k === void 0 ? void 0 : _k.browseId));
                                            }
                                            else {
                                                let title_music_list = (_q = (_p = (_o = (_m = (_l = music === null || music === void 0 ? void 0 : music.header) === null || _l === void 0 ? void 0 : _l.musicCarouselShelfBasicHeaderRenderer) === null || _m === void 0 ? void 0 : _m.title) === null || _o === void 0 ? void 0 : _o.runs) === null || _p === void 0 ? void 0 : _p[0]) === null || _q === void 0 ? void 0 : _q.text;
                                                if (!resp_data.music_list.find((e) => e.title === title_music_list))
                                                    resp_data.music_list.push({ title: title_music_list, musics: [] });
                                                resp_data.music_list.find((e) => e.title === title_music_list).musics.push((0, extract_1.extract_dataFromGetData)(yield index_1.searchManager.GetData(musicdt.musicResponsiveListItemRenderer.playlistItemData.videoId)));
                                            }
                                        }
                                        if (x + 1 === music.contents.length)
                                            resolve4(null);
                                    }
                                })).then(() => {
                                    if (x + 1 === item.length)
                                        resolve3(null);
                                });
                            }
                        })).then(() => {
                            if (i + 1 === res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.length)
                                resolve2(null);
                        });
                    }
                })).then(() => {
                    return resolve(new Home_1.Home(resp_data));
                });
            }));
        }));
    }),
    relative: (ID) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
            (0, requestManager_1.requestToYtApi)('next', {
                "videoId": ID,
            }).then((res) => __awaiter(void 0, void 0, void 0, function* () {
                const autoMix = res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents[1].automixPreviewVideoRenderer.content.automixPlaylistVideoRenderer.navigationEndpoint.watchPlaylistEndpoint;
                (0, requestManager_1.requestToYtApi)('https://music.youtube.com/youtubei/v1/next?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false', {
                    "params": autoMix.params,
                    "isAudioOnly": true,
                    "playlistId": autoMix.playlistId,
                    "enablePersistentPlaylistPanel": true,
                }).then((e) => {
                    const resp_data = [];
                    for (const item of e.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents.map((e) => e.playlistPanelVideoRenderer)) {
                        resp_data.push(new Music_1.Music(item, true));
                    }
                    return resolve(resp_data);
                });
            }));
        }));
    }),
    get: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            GetData(id).then((e) => {
                return resolve(new Music_1.Music((0, extract_1.extract_dataFromGetData)(e)));
            }).catch((e) => __awaiter(void 0, void 0, void 0, function* () {
                reject(e);
            }));
        }));
    }),
    GetData: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
            return resolve(yield GetData(id));
        }));
    }),
    getPlaylist: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield getPlaylist(id);
    })
};
function getPlaylist(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            (0, requestManager_1.requestToYtApi)('browse', {
                "browseId": id
            }).then((res) => __awaiter(this, void 0, void 0, function* () {
                let musics = [];
                yield new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                    const music_list = res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].musicPlaylistShelfRenderer.contents;
                    for (let i = 0; music_list.length > i; i++) {
                        //musics.push(extract_dataFromGetData(await GetData(music_list[i].musicResponsiveListItemRenderer.playlistItemData.videoId)))
                        if (music_list.length === i + 1)
                            resolve(null);
                    }
                }));
                return resolve(new Playlist_1.Playlist({
                    title: res.data.header.musicDetailHeaderRenderer.title.runs[0].text,
                    description: res.data.header.musicDetailHeaderRenderer.description.runs[0].text,
                    id: id,
                    artworks: res.data.header.musicDetailHeaderRenderer.thumbnail.croppedSquareThumbnailRenderer.thumbnail.thumbnails,
                    musics: musics
                }));
            }));
        }));
    });
}
function recursiveGetRelative(data, i = 0) {
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        if (!((_c = (_b = (_a = data.musicCarouselShelfRenderer.contents[i]) === null || _a === void 0 ? void 0 : _a.musicResponsiveListItemRenderer) === null || _b === void 0 ? void 0 : _b.playlistItemData) === null || _c === void 0 ? void 0 : _c.videoId))
            return resolve(yield recursiveGetRelative(data, i - 1));
        console.log(i);
        if (i < 0)
            return resolve(data);
        const data2 = yield index_1.searchManager.GetData(data.musicCarouselShelfRenderer.contents[i].musicResponsiveListItemRenderer.playlistItemData.videoId);
        if (data2.videoId) {
            data.musicCarouselShelfRenderer.contents[i] = data2;
            return resolve(yield recursiveGetRelative(data, i - 1));
        }
        else
            return resolve(data);
    }));
}
function GetData(id) {
    return new Promise((resolve, reject) => {
        (0, requestManager_1.requestToYtApi)('next', {
            "videoId": id
        }).then((res) => {
            if (res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[1].tabRenderer.endpoint) {
                resolve(Object.assign({ browseId: res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[1].tabRenderer.endpoint.browseEndpoint.browseId }, res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents[0].playlistPanelVideoRenderer));
            }
            else
                reject(new errors_1.YTjsErrorError(errorCodes_1.default.VIDEO_NOT_FOUND, id));
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
