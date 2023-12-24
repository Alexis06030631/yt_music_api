import {requestToYtApi} from '../utils/requestManager';
import {Music, Playlist ,Home, Album} from "../models/";
import {searchManager} from "../index";
import {extract_dataFromGetData, extract_dataFromListItemRenderer, extract_dataFromPlaylist} from "../utils/extract";
import {YTjsErrorError} from "../errors";
import ErrorCode from "../errors/errorCodes";
import {TypeSearchData, TypeSearch, TypeSearch_param, getTypeSearchParam} from '../types/TypeSearch';
import * as fs from "fs";
import {getAllObjects, normalizeObjectUnits} from "../utils/typeBuilder";
import {TypeunitOfTime} from "../types/TypePage";



/**
 * Search music, video or other with query
 * @param query - Query to search
 * @param type - Type of search
 */
export async function search (query: string, type:string| TypeSearch_param = TypeSearch[0]): Promise<Array<(Music|Album)>> {
    // Check If type is valid with TypeSearch
    type = type.toUpperCase()
    if(!TypeSearch.includes(type)) throw new YTjsErrorError(ErrorCode.INVALID_TYPE_SEARCH, {typeRequested:type, typesAvailable:TypeSearch})
    if(query.match(/^(?:https?:\/\/)?(?:www\.)?.*(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})(?:.+)?$/)?.[1]) {
        return [new Music(await GetData(query.match(/^(?:https?:\/\/)?(?:www\.)?.*(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})(?:.+)?$/)?.[1] || ''))]
    }else {
        let data:any = []
        const resp_data: any = []
        const typeSearch:any = getTypeSearchParam(type)
        if(typeSearch?.param){
            const music_data:any = await requestToYtApi('search', {
                "query": query,
                "params": typeSearch.param,
            })
            data = music_data.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item: any) => item?.musicShelfRenderer?.title?.runs[0]?.text === typeSearch.ytID)[0]
            data = data[Object.keys(data)[0]]?.contents || []
        }
        for (const item of data) {
            if(type === 'ALBUM') {
                resp_data.push(new Album(extract_dataFromPlaylist(item.musicResponsiveListItemRenderer)))
            }else resp_data.push(new Music(extract_dataFromGetData(await GetData(item.musicResponsiveListItemRenderer?.playlistItemData?.videoId || item.musicResponsiveListItemRenderer?.onTap.watchEndpoint.videoId))))
        }
        return resp_data
    }
}

/**
 * Get the home page (NOT WORKING)
 * @param type - Type of page to get
 * @beta
 */
export async function getPage(type:TypeunitOfTime): Promise<Home|any> {
    throw new YTjsErrorError(ErrorCode.CURRENTLY_NOT_SUPPORTED)
    return new Promise(async (resolve) => {
        const idsearch = normalizeObjectUnits('typePage', type)
        if(!idsearch) throw new YTjsErrorError(ErrorCode.INVALID_TYPE_PAGE, getAllObjects('typePage'))
        requestToYtApi('browse', {
            "browseId": idsearch
        }).then(async (res: any) => {
            // Save res as file
            //fs.writeFileSync('test.json', JSON.stringify(res.data, null, 2))
            const title = res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.title
            console.log(title)
            const resp_data: any = {
                music_list:[],
                playlist:[]
            }
            new Promise(async (resolve2) => {
                for (let item of res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents){
                    if(item.musicCarouselShelfRenderer?.contents?.length){
                        const pl_title = item.musicCarouselShelfRenderer.header.musicCarouselShelfBasicHeaderRenderer.title.runs[0].text
                        const pl_subtitle = item.musicCarouselShelfRenderer.header.musicCarouselShelfBasicHeaderRenderer.strapline?.runs?.[0]?.text || false
                        const id = item.musicCarouselShelfRenderer.header.musicCarouselShelfBasicHeaderRenderer.moreContentButton?.buttonRenderer?.navigationEndpoint.watchPlaylistEndpoint.playlistId
                        console.log(new Playlist({
                            title: pl_title,
                            id: id,
                            description: pl_subtitle,
                            artworks: [],
                            musics: [],
                        }))
                    }
                    //if(item.musicCarouselShelfRenderer?.contents?.length){
                    //    for(let musicComponent of item.musicCarouselShelfRenderer?.contents){
                    //        if(musicComponent.musicResponsiveListItemRenderer) console.log(extract_dataFromListItemRenderer(musicComponent.musicResponsiveListItemRenderer))
                    //    }
                    //}

                    /*
                    await new Promise(async (resolve3) => {
                        for(let x=0; item.length > x; x++){
                            let music = item[x].musicCarouselShelfRenderer
                            new Promise(async (resolve4) => {
                                for(let x=0; music.contents.length > x; x++) {
                                    let musicdt = music.contents[x]
                                    if(musicdt){
                                        if (!musicdt?.musicResponsiveListItemRenderer?.playlistItemData?.videoId) {
                                            if (musicdt.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId)
                                                resp_data.playlist.push(
                                                    //await getPlaylist(musicdt.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId)
                                                )
                                        } else {
                                            let title_music_list = music?.header?.musicCarouselShelfBasicHeaderRenderer?.title?.runs?.[0]?.text
                                            if (!resp_data.music_list.find((e: any) => e.title === title_music_list))
                                                resp_data.music_list.push({title: title_music_list, musics: []})
                                            resp_data.music_list.find((e: any) => e.title === title_music_list).musics.push(
                                                extract_dataFromGetData(await searchManager.GetData(musicdt.musicResponsiveListItemRenderer.playlistItemData.videoId))
                                            )
                                        }
                                    }
                                    if (x+1 === music.contents.length) resolve4(null)
                                }
                            }).then(()=>{
                                if (x+1 === item.length) resolve3(null)
                            })

                        }
                    }).then(() => {
                        //if(i+1 === res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.length) resolve2(null)
                    })

                     */
                }
            }).then(() => {
                return resolve(new Home(resp_data))
            })
        })
    })
}

/**
 * Get the relative musics of a music
 * @param ID - The id of the music
 */
export async function relative(ID: string): Promise<Array<Music>> {
    return new Promise(async (resolve) => {
        requestToYtApi('next', {
            "videoId": ID,
        }).then(async (res: any) => {
            const autoMix = res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents[1].automixPreviewVideoRenderer.content.automixPlaylistVideoRenderer.navigationEndpoint.watchPlaylistEndpoint
            requestToYtApi('https://music.youtube.com/youtubei/v1/next?prettyPrint=false', {
                "params": autoMix.params,
                "isAudioOnly": true,
                "playlistId": autoMix.playlistId,
                "enablePersistentPlaylistPanel": true,
            }).then((e:any) => {
                const resp_data: Array<Music> = []
                for (const item of e.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents.map((e:any) => e.playlistPanelVideoRenderer)) {
                    resp_data.push(new Music(extract_dataFromGetData(item), true))
                }
                return resolve(resp_data)
            })
        })
    })
}

/**
 * Get the music by id
 * @param id - The id of the music
 */
export async function get(id: string): Promise<Music> {
    return new Promise(async (resolve, reject) => {
        GetData(id).then((e:any) => {
            return resolve(new Music(extract_dataFromGetData(e)))
        }).catch(async (e) => {
            reject(e)
        })
    })
}

/**
 * Get the playlist by id
 * @param id - The id of the playlist
 */
export async function getPlaylist(id: string): Promise<Playlist> {
    return new Promise(async (resolve) => {
        requestToYtApi('browse', {
            "browseId": id
        }).then(async (res: any) => {
            let musics:any = []
            await new Promise(async (resolve) => {
                const music_list: any = res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].musicPlaylistShelfRenderer.contents
                for (let i = 0; music_list.length > i; i++) {
                    //musics.push(extract_dataFromGetData(await GetData(music_list[i].musicResponsiveListItemRenderer.playlistItemData.videoId)))
                    if(music_list.length === i+1) resolve(null)
                }
            })
            return resolve(new Playlist({
                title: res.data.header.musicDetailHeaderRenderer.title.runs[0].text,
                description: res.data.header.musicDetailHeaderRenderer.description.runs[0].text,
                id: id,
                artworks: res.data.header.musicDetailHeaderRenderer.thumbnail.croppedSquareThumbnailRenderer.thumbnail.thumbnails,
                musics: musics
            }))
        })
    })
}

function recursiveGetRelative(data: any, i:number=0): any {
    return new Promise(async (resolve) => {
        if(!data.musicCarouselShelfRenderer.contents[i]?.musicResponsiveListItemRenderer?.playlistItemData?.videoId) return resolve(await recursiveGetRelative(data, i-1))
        console.log(i)
        if(i < 0) return resolve(data)
        const data2 = await searchManager.GetData(data.musicCarouselShelfRenderer.contents[i].musicResponsiveListItemRenderer.playlistItemData.videoId)
        if(data2.videoId) {
            data.musicCarouselShelfRenderer.contents[i] = data2
            return resolve(await recursiveGetRelative(data, i-1))
        }else return resolve(data)
    })
}

export function GetData(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
        requestToYtApi('next', {
            "videoId":  id
        }).then((res: any) => {
            if(res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[1].tabRenderer.endpoint) {
                resolve({
                    browseId: res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[1].tabRenderer.endpoint.browseEndpoint.browseId,
                    ...res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents[0].playlistPanelVideoRenderer
                })
            }else reject(new YTjsErrorError(ErrorCode.VIDEO_NOT_FOUND, id))
        }).catch(reject)
    })
}

const MUSIC_param= 'EgWKAQIIAWoOEAMQBBAJEA4QChAFEBU%3D',
    VIDEO_param= 'EgWKAQIQAWoOEAkQBRADEAQQDhAKEBU%3D'