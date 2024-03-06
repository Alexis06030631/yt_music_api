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
    [errorCodes_1.default.INVALID_TYPE_SEARCH]: (error) => `The type of search was invalid. Type Available: ${error.typesAvailable}. Type Requested: ${error.typeRequested}`,
    [errorCodes_1.default.INVALID_TYPE_DOWNLOAD]: (error) => `The type of download was invalid. Type Available: ${error.typesAvailable}. Type Requested: ${error.typeRequested}`,
    [errorCodes_1.default.INVALID_TYPE_QUALITY]: (error) => `The type of quality was invalid. Type Available: ${error.typesAvailable}. Type Requested: ${error.typeRequested}`,
    [errorCodes_1.default.DOWNLOAD_LINK_NOT_FOUND]: (error) => `The download link was not found for the parameters Type: ${error.typeRequested} and Quality: ${error.qualityRequested}`,
    [errorCodes_1.default.DECHIPHER_ERROR]: (error) => `An error occurred while deciphering the download link. Message: ${error.message}\nPlease contact the developer of the library (https://instagram.com/leko_system).`,
    [errorCodes_1.default.CURRENTLY_NOT_SUPPORTED]: () => `This feature is currently not supported. This feature will be available in the next version of the library. Please contact the developer of the library (https://instagram.com/leko_system).`,
    [errorCodes_1.default.INVALID_TYPE_BUILDER]: (type) => `The type of builder ${type} was invalid. Please contact the developer of the library (https://instagram.com/leko_system).`,
    [errorCodes_1.default.INVALID_TYPE_PAGE]: (types) => `The type of page was invalid. Type Available: ${types}`,
    [errorCodes_1.default.INVALID_URL]: (url) => `The url ${url} is invalid. Please use a valid youtube url.`,
    [errorCodes_1.default.NOT_FOUND]: (error) => `The requested resource was not found. Message: ${error.message}`,
    /* Axios errors */
    [errorCodes_1.default.ENOTFOUND]: (error) => `The remote server was not found. Please check your internet connection. Message: ${error.message}`,
    /* Path errors */
    [errorCodes_1.default.PATH_NOT_FOUND]: (error) => `The path you requested was not found. Path: ${error.path || 'None'}`,
    [errorCodes_1.default.NOT_REACHABLE_PATH]: (error) => `The path you requested was not reachable. Path: ${error.path || 'None'}`,
};
exports.default = Messages;
//# sourceMappingURL=Messages.js.map