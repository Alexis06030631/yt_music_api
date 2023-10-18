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
exports.GetData = exports.getPlaylist = exports.get = exports.relative = exports.getPage = exports.search = void 0;
const requestManager_1 = require("../utils/requestManager");
const models_1 = require("../models/");
const index_1 = require("../index");
const extract_1 = require("../utils/extract");
const errors_1 = require("../errors");
const errorCodes_1 = __importDefault(require("../errors/errorCodes"));
const TypeSearch_1 = require("../types/TypeSearch");
const typeBuilder_1 = require("../utils/typeBuilder");
/**
 * Search music, video or other with query
 * @param query Query to search
 * @param type Type of search
 */
function search(query, type = TypeSearch_1.TypeSearch.MUSIC) {
    var _a, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
        // Check If type is valid with TypeSearch
        if (!TypeSearch_1.TypeSearch_arr.includes(type))
            throw new errors_1.YTjsErrorError(errorCodes_1.default.INVALID_TYPE_SEARCH, { typeRequested: type, typesAvailable: TypeSearch_1.TypeSearch_arr });
        if ((_a = query.match(/^(?:https?:\/\/)?(?:www\.)?.*(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})(?:.+)?$/)) === null || _a === void 0 ? void 0 : _a[1]) {
            return [new models_1.Music(yield GetData((_b = query.match(/^(?:https?:\/\/)?(?:www\.)?.*(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})(?:.+)?$/)) === null || _b === void 0 ? void 0 : _b[1]))];
        }
        else {
            let data;
            const resp_data = [];
            if (type === TypeSearch_1.TypeSearch.MUSIC || type === TypeSearch_1.TypeSearch.VIDEO) {
                if (type === TypeSearch_1.TypeSearch.MUSIC) {
                    const music_data = yield (0, requestManager_1.requestToYtApi)('search', {
                        "query": query,
                        "params": MUSIC_param,
                    });
                    data = music_data.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item) => { var _a, _b, _c; return ((_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicShelfRenderer) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b.runs[0]) === null || _c === void 0 ? void 0 : _c.text) === 'Songs'; })[0].musicShelfRenderer.contents;
                }
                else if (type === TypeSearch_1.TypeSearch.VIDEO) {
                    const music_data = yield (0, requestManager_1.requestToYtApi)('search', {
                        "query": query,
                        "params": VIDEO_param,
                    });
                    data = music_data.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item) => { var _a, _b, _c; return ((_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicShelfRenderer) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b.runs[0]) === null || _c === void 0 ? void 0 : _c.text) === 'Videos'; })[0].musicShelfRenderer.contents;
                }
                for (const item of data) {
                    resp_data.push(new models_1.Music((0, extract_1.extract_dataFromGetData)(yield GetData(((_d = (_c = item.musicResponsiveListItemRenderer) === null || _c === void 0 ? void 0 : _c.playlistItemData) === null || _d === void 0 ? void 0 : _d.videoId) || ((_e = item.musicResponsiveListItemRenderer) === null || _e === void 0 ? void 0 : _e.onTap.watchEndpoint.videoId)))));
                }
            }
            return resp_data;
        }
    });
}
exports.search = search;
function getPage(type) {
    return __awaiter(this, void 0, void 0, function* () {
        throw new errors_1.YTjsErrorError(errorCodes_1.default.CURRENTLY_NOT_SUPPORTED);
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const idsearch = (0, typeBuilder_1.normalizeObjectUnits)('typePage', type);
            if (!idsearch)
                throw new errors_1.YTjsErrorError(errorCodes_1.default.INVALID_TYPE_PAGE, (0, typeBuilder_1.getAllObjects)('typePage'));
            (0, requestManager_1.requestToYtApi)('browse', {
                "browseId": idsearch
            }).then((res) => __awaiter(this, void 0, void 0, function* () {
                // Save res as file
                //fs.writeFileSync('test.json', JSON.stringify(res.data, null, 2))
                const title = res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.title;
                console.log(title);
                const resp_data = {
                    music_list: [],
                    playlist: []
                };
                new Promise((resolve2) => __awaiter(this, void 0, void 0, function* () {
                    var _a, _b, _c, _d, _e, _f, _g;
                    for (let item of res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents) {
                        if ((_b = (_a = item.musicCarouselShelfRenderer) === null || _a === void 0 ? void 0 : _a.contents) === null || _b === void 0 ? void 0 : _b.length) {
                            const pl_title = item.musicCarouselShelfRenderer.header.musicCarouselShelfBasicHeaderRenderer.title.runs[0].text;
                            const pl_subtitle = ((_e = (_d = (_c = item.musicCarouselShelfRenderer.header.musicCarouselShelfBasicHeaderRenderer.strapline) === null || _c === void 0 ? void 0 : _c.runs) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.text) || false;
                            const id = (_g = (_f = item.musicCarouselShelfRenderer.header.musicCarouselShelfBasicHeaderRenderer.moreContentButton) === null || _f === void 0 ? void 0 : _f.buttonRenderer) === null || _g === void 0 ? void 0 : _g.navigationEndpoint.watchPlaylistEndpoint.playlistId;
                            console.log(new models_1.Playlist({
                                title: pl_title,
                                id: id,
                                description: pl_subtitle,
                                artworks: [],
                                musics: [],
                            }));
                        }
                        //if(item.musicCarouselShelfRenderer?.contents?.length){
                        //    for(let musicComponent of item.musicCarouselShelfRenderer?.contents){
                        //        if(musicComponent.musicResponsiveListItemRenderer) console.log(extract_dataFromListItemRenderer(musicComponent.musicResponsiveListItemRenderer))
                        //    }
                        //}
                        /*
                        await new Promise(async (resolve3) => {
                            for(let x=0; item.length > x; x++){
                                let music = item[x].musicCarouselShelfRenderer
                                new Promise(async (resolve4) => {
                                    for(let x=0; music.contents.length > x; x++) {
                                        let musicdt = music.contents[x]
                                        if(musicdt){
                                            if (!musicdt?.musicResponsiveListItemRenderer?.playlistItemData?.videoId) {
                                                if (musicdt.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId)
                                                    resp_data.playlist.push(
                                                        //await getPlaylist(musicdt.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId)
                                                    )
                                            } else {
                                                let title_music_list = music?.header?.musicCarouselShelfBasicHeaderRenderer?.title?.runs?.[0]?.text
                                                if (!resp_data.music_list.find((e: any) => e.title === title_music_list))
                                                    resp_data.music_list.push({title: title_music_list, musics: []})
                                                resp_data.music_list.find((e: any) => e.title === title_music_list).musics.push(
                                                    extract_dataFromGetData(await searchManager.GetData(musicdt.musicResponsiveListItemRenderer.playlistItemData.videoId))
                                                )
                                            }
                                        }
                                        if (x+1 === music.contents.length) resolve4(null)
                                    }
                                }).then(()=>{
                                    if (x+1 === item.length) resolve3(null)
                                })
    
                            }
                        }).then(() => {
                            //if(i+1 === res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.length) resolve2(null)
                        })
    
                         */
                    }
                })).then(() => {
                    return resolve(new models_1.Home(resp_data));
                });
            }));
        }));
    });
}
exports.getPage = getPage;
function relative(ID) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            (0, requestManager_1.requestToYtApi)('next', {
                "videoId": ID,
            }).then((res) => __awaiter(this, void 0, void 0, function* () {
                const autoMix = res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents[1].automixPreviewVideoRenderer.content.automixPlaylistVideoRenderer.navigationEndpoint.watchPlaylistEndpoint;
                (0, requestManager_1.requestToYtApi)('https://music.youtube.com/youtubei/v1/next?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false', {
                    "params": autoMix.params,
                    "isAudioOnly": true,
                    "playlistId": autoMix.playlistId,
                    "enablePersistentPlaylistPanel": true,
                }).then((e) => {
                    const resp_data = [];
                    for (const item of e.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents.map((e) => e.playlistPanelVideoRenderer)) {
                        resp_data.push(new models_1.Music((0, extract_1.extract_dataFromGetData)(item), true));
                    }
                    return resolve(resp_data);
                });
            }));
        }));
    });
}
exports.relative = relative;
function get(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            GetData(id).then((e) => {
                return resolve(new models_1.Music((0, extract_1.extract_dataFromGetData)(e)));
            }).catch((e) => __awaiter(this, void 0, void 0, function* () {
                reject(e);
            }));
        }));
    });
}
exports.get = get;
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
                return resolve(new models_1.Playlist({
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
exports.getPlaylist = getPlaylist;
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
exports.GetData = GetData;
const MUSIC_param = 'EgWKAQIIAWoOEAMQBBAJEA4QChAFEBU%3D', VIDEO_param = 'EgWKAQIQAWoOEAkQBRADEAQQDhAKEBU%3D';
//# sourceMappingURL=searchManager.js.map