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
exports.GetDataPl = exports.GetDataVid = exports.getPlaylist = exports.get = exports.relative = exports.getPage = exports.search = void 0;
const requestManager_1 = require("../utils/requestManager");
const models_1 = require("../models/");
const index_1 = require("../index");
const extract_1 = require("../utils/extract");
const errors_1 = require("../errors");
const errorCodes_1 = __importDefault(require("../errors/errorCodes"));
const TypeSearch_1 = require("../types/TypeSearch");
const typeBuilder_1 = require("../utils/typeBuilder");
const Search_1 = __importDefault(require("../models/Search"));
/**
 * Search music, video or other with query
 * @param query - Query to search
 * @param type - Type of search
 */
function search(query, type = TypeSearch_1.TypeSearch[0]) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
            type = type.toUpperCase();
            if (!TypeSearch_1.TypeSearch.includes(type))
                return reject(new errors_1.YTjsErrorError(errorCodes_1.default.INVALID_TYPE_SEARCH, {
                    typeRequested: type,
                    typesAvailable: TypeSearch_1.TypeSearch
                }));
            let searchs = [];
            let typeSearch = (0, TypeSearch_1.getTypeSearchParam)(type);
            if (query.match(/^(?:https?:\/\/)?(?:www\.|music\.)?(?:youtube\.com|youtu\.?be)\/.+$/)) {
                const url = new URL(query);
                if (!url.hostname.includes('youtube'))
                    return reject(new errors_1.YTjsErrorError(errorCodes_1.default.INVALID_URL, url.hostname));
                if (url.searchParams.get('list')) {
                    try {
                        return resolve([new models_1.Album(yield GetDataPl(url.searchParams.get('list') || ''))]);
                    }
                    catch (e) {
                        return reject(e);
                    }
                }
                else if (url.searchParams.get('v')) {
                    try {
                        return resolve([new models_1.Music((0, extract_1.extract_dataFromGetData)(yield GetDataVid(url.searchParams.get('v') || '')))]);
                    }
                    catch (e) {
                        return reject(e);
                    }
                }
                else if (url.pathname.includes('channel'))
                    return reject(new errors_1.YTjsErrorError(errorCodes_1.default.CURRENTLY_NOT_SUPPORTED));
                else
                    return reject(new errors_1.YTjsErrorError(errorCodes_1.default.INVALID_URL, url.hostname));
            }
            else if (/^(?:https?:\/\/)?(?:www\.)?.*(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})(?:.+)?$|(^.{11}$)/.test(query)) {
                let id = query.match(/^(?:https?:\/\/)?(?:www\.)?.*(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})(?:.+)?$|(^.{11}$)/);
                return resolve([new models_1.Music(yield GetDataVid((id === null || id === void 0 ? void 0 : id[1]) || (id === null || id === void 0 ? void 0 : id[0]) || ''))]);
            }
            const music_data = yield (0, requestManager_1.requestToYtApi)('search', {
                "query": query,
                "params": typeSearch.param,
            });
            if (typeSearch.param) {
                let data = [];
                if (typeSearch.ytID === 'Songs')
                    data = music_data.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item) => { var _a, _b, _c; return ((_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicShelfRenderer) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b.runs[0]) === null || _c === void 0 ? void 0 : _c.text) === 'Songs'; })[0].musicShelfRenderer.contents;
                else if (typeSearch.ytID === 'Videos')
                    data = music_data.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item) => { var _a, _b, _c; return ((_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicShelfRenderer) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b.runs[0]) === null || _c === void 0 ? void 0 : _c.text) === 'Videos'; })[0].musicShelfRenderer.contents;
                let item;
                for (item of data) {
                    searchs.push(new models_1.Music((0, extract_1.extract_dataFromGetData)(yield GetDataVid(((_b = (_a = item.musicResponsiveListItemRenderer) === null || _a === void 0 ? void 0 : _a.playlistItemData) === null || _b === void 0 ? void 0 : _b.videoId) || ((_c = item.musicResponsiveListItemRenderer) === null || _c === void 0 ? void 0 : _c.onTap.watchEndpoint.videoId)))));
                }
            }
            else {
                let i = 0;
                for (const bestItems of ((_f = (_e = (_d = music_data.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item) => { var _a, _b, _c; return ((_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicCardShelfRenderer) === null || _a === void 0 ? void 0 : _a.header.musicCardShelfHeaderBasicRenderer) === null || _b === void 0 ? void 0 : _b.title.runs[0]) === null || _c === void 0 ? void 0 : _c.text) === 'Top result'; })) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.musicCardShelfRenderer) === null || _f === void 0 ? void 0 : _f.contents) || []) {
                    if ((_g = bestItems.musicResponsiveListItemRenderer.playlistItemData) === null || _g === void 0 ? void 0 : _g.videoId)
                        searchs.push(new models_1.Music((0, extract_1.extract_dataFromGetData)(yield GetDataVid((_h = bestItems.musicResponsiveListItemRenderer.playlistItemData) === null || _h === void 0 ? void 0 : _h.videoId), i === 0)));
                    else if ((_l = (_k = (_j = bestItems.musicTwoRowItemRenderer) === null || _j === void 0 ? void 0 : _j.navigationEndpoint) === null || _k === void 0 ? void 0 : _k.browseEndpoint) === null || _l === void 0 ? void 0 : _l.browseId)
                        searchs.push(new models_1.Album((0, extract_1.extract_dataFromPlaylist)(yield GetDataPl((_p = (_o = (_m = bestItems.musicTwoRowItemRenderer) === null || _m === void 0 ? void 0 : _m.navigationEndpoint) === null || _o === void 0 ? void 0 : _o.browseEndpoint) === null || _p === void 0 ? void 0 : _p.browseId))));
                    i++;
                }
                //console.log(music_data.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item: any) => item?.musicCardShelfRenderer?.header.musicCardShelfHeaderBasicRenderer?.title.runs[0]?.text === 'Top result')?.[0]?.musicCardShelfRenderer)
                if ((_q = music_data.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item) => { var _a, _b, _c; return ((_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicCardShelfRenderer) === null || _a === void 0 ? void 0 : _a.header.musicCardShelfHeaderBasicRenderer) === null || _b === void 0 ? void 0 : _b.title.runs[0]) === null || _c === void 0 ? void 0 : _c.text) === 'Top result'; })) === null || _q === void 0 ? void 0 : _q[0]) {
                    // TODO: Add top result
                }
                //for (const item of music_data.data)
                for (const item of music_data.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item) => { var _a, _b, _c; return (_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicShelfRenderer) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b.runs[0]) === null || _c === void 0 ? void 0 : _c.text.includes(typeSearch.ytID); })) {
                    if ((_s = (_r = item.musicShelfRenderer) === null || _r === void 0 ? void 0 : _r.contents) === null || _s === void 0 ? void 0 : _s.length) {
                        for (const music of item.musicShelfRenderer.contents) {
                            // Get type of music
                            if ((item.musicShelfRenderer.title.runs[0].text === 'Songs' || item.musicShelfRenderer.title.runs[0].text === 'Videos') && ((_u = (_t = music.musicResponsiveListItemRenderer.flexColumns[0].musicResponsiveListItemFlexColumnRenderer.text.runs[0].navigationEndpoint) === null || _t === void 0 ? void 0 : _t.watchEndpoint) === null || _u === void 0 ? void 0 : _u.videoId)) {
                                try {
                                    searchs.push((yield this.search(`https://music.youtube.com/watch?v=${(_w = (_v = music.musicResponsiveListItemRenderer.flexColumns[0].musicResponsiveListItemFlexColumnRenderer.text.runs[0].navigationEndpoint) === null || _v === void 0 ? void 0 : _v.watchEndpoint) === null || _w === void 0 ? void 0 : _w.videoId}`, 'MUSIC'))[0]);
                                }
                                catch (e) {
                                    reject(e);
                                }
                            }
                            else if (item.musicShelfRenderer.title.runs[0].text === 'Albums') {
                                searchs.push((yield this.search(`https://music.youtube.com/playlist?list=${music.musicResponsiveListItemRenderer.navigationEndpoint.browseEndpoint.browseId}`, 'ALBUM'))[0]);
                            }
                        }
                    }
                }
            }
            if (!searchs.length)
                return reject(new errors_1.YTjsErrorError(errorCodes_1.default.NOT_FOUND, query));
            else if (!typeSearch.param)
                return resolve(new Search_1.default(query, searchs));
            else
                resolve(searchs);
        }));
    });
}
exports.search = search;
/**
 * Get the home page (NOT WORKING)
 * @param type - Type of page to get
 * @beta
 */
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
                                                    extract_dataFromGetData(await searchManager.GetDataVid(musicdt.musicResponsiveListItemRenderer.playlistItemData.videoId))
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
/**
 * Get the relative musics of a music
 * @param ID - The id of the music
 */
function relative(ID) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            (0, requestManager_1.requestToYtApi)('next', {
                "videoId": ID,
            }).then((res) => __awaiter(this, void 0, void 0, function* () {
                const autoMix = res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents[1].automixPreviewVideoRenderer.content.automixPlaylistVideoRenderer.navigationEndpoint.watchPlaylistEndpoint;
                (0, requestManager_1.requestToYtApi)('https://music.youtube.com/youtubei/v1/next?prettyPrint=false', {
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
/**
 * Get the music by id
 * @param id - The id of the music
 */
function get(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            GetDataVid(id).then((e) => {
                return resolve(new models_1.Music((0, extract_1.extract_dataFromGetData)(e)));
            }).catch((e) => __awaiter(this, void 0, void 0, function* () {
                reject(e);
            }));
        }));
    });
}
exports.get = get;
/**
 * Get the playlist by id
 * @param id - The id of the playlist
 */
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
                        //musics.push(extract_dataFromGetData(await GetDataVid(music_list[i].musicResponsiveListItemRenderer.playlistItemData.videoId)))
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
        const data2 = yield index_1.searchManager.GetDataVid(data.musicCarouselShelfRenderer.contents[i].musicResponsiveListItemRenderer.playlistItemData.videoId);
        if (data2.videoId) {
            data.musicCarouselShelfRenderer.contents[i] = data2;
            return resolve(yield recursiveGetRelative(data, i - 1));
        }
        else
            return resolve(data);
    }));
}
function GetDataVid(id) {
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
exports.GetDataVid = GetDataVid;
function GetDataPl(id) {
    return new Promise((resolve, reject) => {
        (0, requestManager_1.requestToYtApi)('browse', {
            "browseId": id
        }).then((res) => {
            resolve((0, extract_1.extract_dataFromPlaylist)(res.data));
        }).catch(reject);
    });
}
exports.GetDataPl = GetDataPl;
//# sourceMappingURL=searchManager.js.map