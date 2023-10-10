import {requestToYtApi} from '../utils/requestManager';
import {decode} from "../utils/decodeCipher";
import { DownloadQuality_arr, DownloadQuality_param} from "../types/DownloadQuality";
import { DownloadType_arr, DownloadType_param} from "../types/DownloadType";
import {YTjsErrorError} from "../errors";
import ErrorCode from "../errors/errorCodes";
import {Download} from "../models/";

/*
* This function is used to get the download link of a music in Webm format
* @deprecated This function is deprecated, use download() instead
 */
export async function getWebm (id: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
        getPlayer(id).then((res: any) => {
            if (!res.streamingData) return reject(res.playabilityStatus)

            let webm = res.streamingData.adaptiveFormats.filter((item: any) => item.mimeType.includes('audio/webm')).sort((a: any, b: any) => b.bitrate - a.bitrate)[0]
            webm.url = decode(webm)

            resolve(webm)
        })
    })
}

export async function getMp3 (id: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
        getPlayer(id).then((res: any) => {
            if (!res.streamingData) return reject(res.playabilityStatus)

            let mp3 = res.streamingData.adaptiveFormats.filter((item: any) => item.mimeType.includes('audio/mp4')).sort((a: any, b: any) => b.bitrate - a.bitrate)[0]
            mp3.url = decode(mp3)

            resolve(mp3)
        })
    })
}

export async function download(id: string, type:DownloadType_param='mp3', quality?:DownloadQuality_param): Promise<any> {
    return new Promise(async (resolve, reject) => {
        if(!DownloadType_arr.includes(type)) throw new YTjsErrorError(ErrorCode.INVALID_TYPE_DOWNLOAD, {typeRequested:type, typesAvailable:DownloadType_arr})
        if(quality && !DownloadQuality_arr.includes(quality)) throw new YTjsErrorError(ErrorCode.INVALID_TYPE_QUALITY, {typeRequested:quality, typesAvailable:DownloadQuality_arr})
        type = type.replace('mp3', 'mp4')

        getPlayer(id).then((res: any) => {
            if (!res.streamingData) return reject(res.playabilityStatus)
            let download = res.streamingData.adaptiveFormats.filter((item: any) => {
                if((type === 'mp4' || type === 'webm') && !!item.audioQuality) return item.mimeType.includes(type)
            })
            if(quality === 'high'){
                download = download.sort((a: any, b: any) => b.bitrate - a.bitrate)[0]
            }else if(quality === 'low') {
                download = download.sort((a: any, b: any) => a.bitrate - b.bitrate)[0]
            }else if(quality === 'medium') {
                download = download.sort((a: any, b: any) => b.bitrate - a.bitrate)[Math.round(download.length / 2)-1]
            }else {
                download = download.sort((a: any, b: any) => b.bitrate - a.bitrate)[Math.round(download.length / 2)-1]
            }

            if(!download) return reject(new YTjsErrorError(ErrorCode.DOWNLOAD_LINK_NOT_FOUND, {typeRequested:type, qualityRequested:quality||'default'}))
            download.url = decode(download)
            download.expireDate =  new Date(parseInt(download.url.split('expire=')[1].split('&')[0])*1000)

            resolve(new Download(download))
        })
    })
}


function getPlayer(videoId:string, body:any={}):any{
    return new Promise((resolve, reject) => {
        let time = Math.floor(new Date((new Date(new Date().toUTCString())).getTime() - 9 * 3600 * 1000 ).getTime() / 1000)
        requestToYtApi('player?key=', {
            videoId: videoId,
            context: {
                client: {
                    userAgent: "",
                    clientName: "WEB_REMIX",
                    clientVersion: "1.20231004.01.00",
                }
            },
            "playbackContext": {
                "contentPlaybackContext": {
                    "referer": `https://music.youtube.com/watch?v=${videoId}`,
                    "signatureTimestamp": time.toString()[0] + time.toString()[2] + time.toString()[3] + (Number(time.toString()[3])-3) + (Number(time.toString()[3])-2),
                }
            }
        }).then((res: any) => {
            resolve(res.data)
        }).catch(reject)
    })
}