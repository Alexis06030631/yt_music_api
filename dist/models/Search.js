"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchMusic = void 0;
class SearchMusic {
    constructor(search_result) {
        var _a, _b, _c, _d;
        this.artworks = search_result.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails;
        this.id = search_result.playlistItemData.videoId;
        console.log(this.extractArtistData(search_result));
        this.name = search_result.flexColumns.find((item) => { var _a, _b, _c, _d, _e, _f; return ((_f = (_e = (_d = (_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicResponsiveListItemFlexColumnRenderer) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.runs) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.navigationEndpoint) === null || _e === void 0 ? void 0 : _e.watchEndpoint) === null || _f === void 0 ? void 0 : _f.videoId) === this.id; }).musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
        this.artist = {
            name: (_a = this.extractArtistData(search_result)) === null || _a === void 0 ? void 0 : _a.text,
            id: (_d = (_c = (_b = this.extractArtistData(search_result)) === null || _b === void 0 ? void 0 : _b.navigationEndpoint) === null || _c === void 0 ? void 0 : _c.browseEndpoint) === null || _d === void 0 ? void 0 : _d.browseId
        };
    }
    extractArtistData(search_result) {
        let artist_dt = {};
        search_result.flexColumns.find((item) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            artist_dt = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicResponsiveListItemFlexColumnRenderer) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.runs.find((item2) => { var _a, _b, _c, _d; return ((_d = (_c = (_b = (_a = item2 === null || item2 === void 0 ? void 0 : item2.navigationEndpoint) === null || _a === void 0 ? void 0 : _a.browseEndpoint) === null || _b === void 0 ? void 0 : _b.browseEndpointContextSupportedConfigs) === null || _c === void 0 ? void 0 : _c.browseEndpointContextMusicConfig) === null || _d === void 0 ? void 0 : _d.pageType) === 'MUSIC_PAGE_TYPE_ARTIST'; });
            return ((_j = (_h = (_g = (_f = (_e = (_d = (_c = item === null || item === void 0 ? void 0 : item.musicResponsiveListItemFlexColumnRenderer) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.runs.find((item2) => {
                var _a, _b, _c, _d;
                return ((_d = (_c = (_b = (_a = item2 === null || item2 === void 0 ? void 0 : item2.navigationEndpoint) === null || _a === void 0 ? void 0 : _a.browseEndpoint) === null || _b === void 0 ? void 0 : _b.browseEndpointContextSupportedConfigs) === null || _c === void 0 ? void 0 : _c.browseEndpointContextMusicConfig) === null || _d === void 0 ? void 0 : _d.pageType) === 'MUSIC_PAGE_TYPE_ARTIST';
            })) === null || _e === void 0 ? void 0 : _e.navigationEndpoint) === null || _f === void 0 ? void 0 : _f.browseEndpoint) === null || _g === void 0 ? void 0 : _g.browseEndpointContextSupportedConfigs) === null || _h === void 0 ? void 0 : _h.browseEndpointContextMusicConfig) === null || _j === void 0 ? void 0 : _j.pageType) === 'MUSIC_PAGE_TYPE_ARTIST';
        });
        return artist_dt;
    }
}
exports.SearchMusic = SearchMusic;
class Artwork {
}
