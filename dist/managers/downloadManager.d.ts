import { DownloadQuality_param } from "../types/DownloadQuality";
import { DownloadType_param } from "../types/DownloadType";
import { Download, StreamPlayers } from "../models/";
import { DownloadFile } from "../models";
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
/**
 * This function is used to get the stream players of a music (audio and video streams)
 * @param id - The id of the music
 */
export declare function getStreamPlayers(id: string): Promise<StreamPlayers>;
/**
 * This function is used to download a music and save it as a file
 * @param id - The id of the music
 * @param path - The path where the music will be downloaded
 * @param type - The type of the music (available: DownloadType_param)
 * @param quality - The quality of the music (available: DownloadQuality_param)
 */
export declare function downloadAsFile(id: string, path: string, type?: DownloadType_param, quality?: DownloadQuality_param): Promise<DownloadFile>;
//# sourceMappingURL=downloadManager.d.ts.map