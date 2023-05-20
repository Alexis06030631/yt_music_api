import { RequestManager } from "./utils/requestManager";
import SearchManager from "./managers/searchManager";
export default class Client extends RequestManager {
    managers: {
        search: SearchManager;
    };
    constructor(config: any);
}
