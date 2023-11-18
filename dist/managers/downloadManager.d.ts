import { DownloadQuality_param } from "../types/DownloadQuality";
import { DownloadType_param } from "../types/DownloadType";
import { Download, StreamPlayers } from "../models/";
/**
 * This function is used to get the download link of a music in Webm format
 * @deprecated This function is deprecated, use download() instead
 * @param id - The id of the music
 */
export declare function getWebm(id: string): Promise<any>;
/**
 * @deprecated This function has been replaced by `download(ID, 'mp3')`
 * @param id - The id of the music
 */
export declare function getMp3(id: string): Promise<any>;
/**
 * This function is used to get the download link of a music
 * @param id - The id of the music
 * @param type - The type of the music (available: DownloadType_param)
 * @param quality - The quality of the music (available: DownloadQuality_param)
 */
export declare function download(id: string, type?: DownloadType_param, quality?: DownloadQuality_param): Promise<Download>;
export declare function getStreamPlayers(id: string): Promise<StreamPlayers>;
//# sourceMappingURL=downloadManager.d.ts.map