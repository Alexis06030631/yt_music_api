"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorCodes_1 = __importDefault(require("./errorCodes"));
const Messages = {
    [errorCodes_1.default.BadRequest]: (error) => `The request was malformed. Message: ${error.message}`,
    [errorCodes_1.default.FAILED_PRECONDITION]: (error) => `${error.code}. The request failed because a precondition was not met. Message: ${error.message}\nPlease contact the developer of the library (https://instagram.com/leko_system).`,
    [errorCodes_1.default.UnrecognizedError]: (error) => `An unrecognized error has occurred. Please contact the developer of the library (https://instagram.com/leko_system).\nError code: ${error.code}`,
    [errorCodes_1.default.VIDEO_NOT_FOUND]: (error) => `The video was not found. ID: ${error.id}`,
    [errorCodes_1.default.INVALID_ARGUMENT]: (message) => `The argument was invalid. Message: ${message}`,
};
exports.default = Messages;
