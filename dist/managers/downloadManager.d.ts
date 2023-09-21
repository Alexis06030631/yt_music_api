import { DownloadQuality_param } from "../types/DownloadQuality";
import { DownloadType_param } from "../types/DownloadType";
declare const _default: {
    getWebm: (id: string) => Promise<any>;
    getMp3: (id: string) => Promise<any>;
    download(id: string, type?: DownloadType_param, quality?: DownloadQuality_param): Promise<any>;
};
export default _default;
