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
const Search_1 = require("../models/Search");
const SearchManager = {
    search: (query, type, limit, page) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, requestManager_1.requestToYtApi)('search', {
            "params": "EgWKAQIIAWoKEAMQBBAJEAoQBQ%3D%3D",
            "query": query,
        });
    }),
    searchMusic: (query) => __awaiter(void 0, void 0, void 0, function* () {
        return (0, requestManager_1.requestToYtApi)('search', {
            "params": "EgWKAQIIAWoKEAMQBBAJEAoQBQ%3D%3D",
            "query": query,
        }).then((res) => {
            const data = res.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item) => { var _a, _b, _c; return ((_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.musicShelfRenderer) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b.runs[0]) === null || _c === void 0 ? void 0 : _c.text) === 'Songs'; })[0].musicShelfRenderer.contents;
            const resp_data = [];
            data.forEach((item) => {
                resp_data.push(new Search_1.SearchMusic(item.musicResponsiveListItemRenderer));
            });
            return resp_data;
        });
    }),
    searchAll: (query, limit, page) => __awaiter(void 0, void 0, void 0, function* () {
        return SearchManager.search(query, 'all', limit, page);
    })
};
exports.default = SearchManager;
