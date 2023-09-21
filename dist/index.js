"use strict";
/*
!> **Warning** This module is not yet stable and is subject to change.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeSearch = exports.downloadManager = exports.searchManager = void 0;
const searchManager_1 = __importDefault(require("./managers/searchManager"));
exports.searchManager = searchManager_1.default;
const downloadManager_1 = __importDefault(require("./managers/downloadManager"));
exports.downloadManager = downloadManager_1.default;
const searchManager_2 = require("./managers/searchManager");
Object.defineProperty(exports, "TypeSearch", { enumerable: true, get: function () { return searchManager_2.TypeSearch; } });
