"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorCodes_1 = __importDefault(require("./errorCodes"));
const Messages = {
    [errorCodes_1.default.UnknownID]: `The ID you provided is unknown, invalid or, in some cases, the ID method is not supported.`,
    [errorCodes_1.default.PlaceNotFound]: (placeName) => `The place "${placeName}" was not found.`,
    [errorCodes_1.default.BadRequest]: (details) => `The request was malformed. Message: ${details}`,
    [errorCodes_1.default.UnrecognizedError]: (code) => `An unrecognized error has occurred. Please contact the developer of the library (https://instagram.com/leko_system).\nError code: ${code}`
};
exports.default = Messages;
