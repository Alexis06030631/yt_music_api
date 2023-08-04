"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAxiosError = void 0;
const Messages_1 = __importDefault(require("./Messages"));
const errorCodes_1 = __importDefault(require("./errorCodes"));
function makeAxiosError(message, error, ...args) {
    const msg = (message in errorCodes_1.default) ? Messages_1.default[message] : null;
    if (typeof msg === 'function')
        return new Error(msg(...args));
    if (!(args === null || args === void 0 ? void 0 : args.length)) {
        new Error(`An unknown error has occurred: ${message}`);
        delete error.headers;
        // @ts-ignore
        return new Error(error);
    }
    args.unshift(msg);
    return new Error(String(...args));
}
exports.makeAxiosError = makeAxiosError;
