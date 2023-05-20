"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const requestManager_1 = require("./utils/requestManager");
const searchManager_1 = __importDefault(require("./managers/searchManager"));
class Client extends requestManager_1.RequestManager {
    constructor(config) {
        super(config.axiosParams);
        this.managers = {
            search: new searchManager_1.default(this),
        };
    }
}
exports.default = Client;
