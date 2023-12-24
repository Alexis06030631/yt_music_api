"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeSearchParam = exports.TypeSearch = exports.TypeSearchData = void 0;
class TypeSearchData {
}
TypeSearchData.MUSIC = {
    param: 'EgWKAQIIAWoOEAMQBBAJEA4QChAFEBU%3D',
    ytID: 'Songs'
};
TypeSearchData.VIDEO = {
    param: 'EgWKAQIQAWoOEAkQBRADEAQQDhAKEBU%3D',
    ytID: 'Videos'
};
TypeSearchData.ALBUM = {
    param: 'EgWKAQIYAWoQEAMQBBAJEAoQBRAREBAQFQ%3D%3D',
    ytID: 'Albums'
};
exports.TypeSearchData = TypeSearchData;
exports.TypeSearch = ['MUSIC', 'VIDEO', 'ALBUM'];
function getTypeSearchParam(search) {
    if (exports.TypeSearch.includes(search)) {
        return TypeSearchData[search];
    }
    else {
        throw new Error('Invalid search type');
    }
}
exports.getTypeSearchParam = getTypeSearchParam;
//# sourceMappingURL=TypeSearch.js.map