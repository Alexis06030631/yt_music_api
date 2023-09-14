"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YTjsErrorError = exports.makeAxiosError = void 0;
const Messages_1 = __importDefault(require("./Messages"));
const errorCodes_1 = __importDefault(require("./errorCodes"));
const errorCodes_2 = __importDefault(require("./errorCodes"));
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
/**
 * Extend an error of some sort into a YTjsError.
 * @param {Error} Base Base error to extend
 * @returns {YTjsError}
 * @ignore
 */
function makeYTjsErrorError(Base) {
    return class YTjsError extends Base {
        constructor(code, ...args) {
            var _a;
            super(message(code, args));
            this.code = code;
            (_a = Error.captureStackTrace) === null || _a === void 0 ? void 0 : _a.call(Error, this, YTjsError);
        }
        get name() {
            return `${super.name} [${this.code}]`;
        }
    };
}
/**
 * Format the message for an error.
 * @param {string} code The error code
 * @param {Array<*>} args Arguments to pass for util format or as function args
 * @returns {string} Formatted string
 * @ignore
 */
function message(code, args) {
    if (!(code in errorCodes_2.default))
        throw new Error('Error code must be a valid YTjsErrorCodes');
    const msg = Messages_1.default[code];
    if (!msg)
        throw new Error(`No message associated with error code: ${code}.`);
    if (typeof msg === 'function') { // @ts-ignore
        return msg(...args);
    }
    if (!(args === null || args === void 0 ? void 0 : args.length))
        return msg;
    args.unshift(msg);
    return String(...args);
}
exports.YTjsErrorError = makeYTjsErrorError(Error);
