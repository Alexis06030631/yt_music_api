import {requestToYtApi} from '../utils/requestManager';
import {Music} from "../models/Music";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import axios from "axios";
import {decode} from "../utils/decodeCipher";

export default {
    getWebm: async (id: string): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            getPlayer(id).then((res: any) => {
                if (!res.streamingData) return reject(res.playabilityStatus)

                let webm = res.streamingData.adaptiveFormats.filter((item: any) => item.mimeType.includes('audio/webm')).sort((a: any, b: any) => b.bitrate - a.bitrate)[0]
                webm.url = decode(webm)

                resolve(webm)
            })
        })
    },
}


function getPlayer(videoId:string, body:any={}):any{
    return new Promise((resolve, reject) => {
        requestToYtApi('player?key=', {
            videoId: videoId,
            context: {
                client: {
                    userAgent: "",
                    clientName: "WEB_REMIX",
                    clientVersion: "1.20230821.01.01",
                },
            },
            playbackContext: {
                contentPlaybackContext: {
                    signatureTimestamp: 19597
                }
            },
            ...body
        }).then((res: any) => {
            resolve(res.data)
        }).catch(reject)
    })
}