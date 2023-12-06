import {requestToYtApi} from '../utils/requestManager';
import {decode} from "../utils/decodeCipher";
import { DownloadQuality_arr, DownloadQuality_param} from "../types/DownloadQuality";
import { DownloadType_arr, DownloadType_param} from "../types/DownloadType";
import {YTjsErrorError} from "../errors";
import ErrorCode from "../errors/errorCodes";
import {Download, StreamPlayers} from "../models/";
import {deprecated} from "../utils/deprecate";
import {getDecodeScript, getSignatureTimestamp} from "../utils/getDecode";

/**
 * This function is used to get the download link of a music in Webm format
 * @deprecated This function is deprecated, use download() instead
 * @param id - The id of the music
 */
export async function getWebm (id: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
        deprecated('getWebm', 'download')
        getPlayer(id).then(async(res: any) => {
            if (!res.streamingData) return reject(res.playabilityStatus)

            let webm = res.streamingData.adaptiveFormats.filter((item: any) => item.mimeType.includes('audio/webm')).sort((a: any, b: any) => b.bitrate - a.bitrate)[0]
            webm.url = (await getDecodeScript()).decode(webm)

            resolve(webm)
        })
    })
}

/**
 * @deprecated This function has been replaced by `download(ID, 'mp3')`
 * @param id - The id of the music
 */
export async function getMp3 (id: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
        deprecated('getMp3', 'download')
        getPlayer(id).then(async (res: any) => {
            if (!res.streamingData) return reject(res.playabilityStatus)

            let mp3 = res.streamingData.adaptiveFormats.filter((item: any) => item.mimeType.includes('audio/mp4')).sort((a: any, b: any) => b.bitrate - a.bitrate)[0]
            mp3.url = (await getDecodeScript()).decode(mp3)

            resolve(mp3)
        })
    })
}

/**
 * This function is used to get the download link of a music
 * @param id - The id of the music
 * @param type - The type of the music (available: DownloadType_param)
 * @param quality - The quality of the music (available: DownloadQuality_param)
 */
export function download(id: string, type:DownloadType_param='mp3', quality?:DownloadQuality_param): Promise<Download> {
    return new Promise(async (resolve, reject) => {
        if(!DownloadType_arr.includes(type)) throw new YTjsErrorError(ErrorCode.INVALID_TYPE_DOWNLOAD, {typeRequested:type, typesAvailable:DownloadType_arr})
        if(quality && !DownloadQuality_arr.includes(quality)) throw new YTjsErrorError(ErrorCode.INVALID_TYPE_QUALITY, {typeRequested:quality, typesAvailable:DownloadQuality_arr})
        type = type.replace('mp3', 'mp4')

        getPlayer(id).then(async (res: any) => {
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
            try{
                download.url = (await getDecodeScript()).decode(download)
            }catch (e) {
                return reject(new YTjsErrorError(ErrorCode.DECHIPHER_ERROR, {error:e}))
            }
            download.expireDate =  new Date(parseInt(download.url.split('expire=')[1].split('&')[0])*1000)

            resolve(new Download(download))
        })
    })
}

export function getStreamPlayers(id: string): Promise<StreamPlayers> {
    return new Promise((resolve, reject) => {
        getPlayer(id).then(async(res: any) => {
            const decode = await getDecodeScript()
            let audio = res.streamingData?.adaptiveFormats?.filter((item: any) => item.audioQuality)?.sort((a: any, b: any) => b.bitrate - a.bitrate) || []
            let video = res.streamingData?.adaptiveFormats?.filter((item: any) => !item.audioQuality)?.sort((a: any, b: any) => b.bitrate - a.bitrate) || []
            audio.forEach((item: any) => {
                item.url = decode(item)
                item.expireDate =  new Date(parseInt(item.url.split('expire=')[1].split('&')[0])*1000)
            })
            video.forEach((item: any) => {
                item.url = decode(item)
                item.expireDate =  new Date(parseInt(item.url.split('expire=')[1].split('&')[0])*1000)
            })

            let available = (!!audio || !!video) && res.playabilityStatus.status === 'OK'

            resolve(new StreamPlayers({
                audios: audio,
                videos: video,
                available: available,
                unplayable_reason: res.playabilityStatus.reason,
                maxBitrate: Number(res?.playerConfig?.streamSelectionConfig?.maxBitrate)
            }))
        })
    })
}


function getPlayer(videoId:string, body:any={}):any{
    return new Promise(async (resolve, reject) => {
        let time = (new Date()).getTime().toString()
        requestToYtApi('player?key=', {
            videoId: videoId,
            "context": {
                "client": {
                    "clientName": "WEB_REMIX",
                    "clientVersion": "1.20231130.05.00"
                }
            },
            "playbackContext": {
                "contentPlaybackContext": {
                    "referer": `https://music.youtube.com/watch?v=${videoId}`,
                    "signatureTimestamp": await getSignatureTimestamp(),
                }
            }
        }).then((res: any) => {
            resolve(res.data)
        }).catch(reject)
    })
}