import {requestToYtApi} from '../utils/requestManager';
import {Music} from "../models/Music";
import {Home} from "../models/Home";
import {searchManager} from "../index";
import {extract_dataFromGetData} from "../utils/extract";
import {Playlist} from "../models/Playlist";
import {YTjsErrorError} from "../errors";
import ErrorCode from "../errors/errorCodes";


export default {
    search: async (query: string, type: TypeSearch_param): Promise<Array<Music>> => {
        // Check If type is valid with TypeSearch
        if(!TypeSearch_arr.includes(type)) throw new YTjsErrorError(ErrorCode.INVALID_TYPE_SEARCH, {typeRequested:type, typesAvailable:TypeSearch_arr})
        if(query.match(/^(?:https?:\/\/)?(?:www\.)?.*(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})(?:.+)?$/)?.[1]) {
            return [new Music(await GetData(query.match(/^(?:https?:\/\/)?(?:www\.)?.*(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})(?:.+)?$/)?.[1]))]
        }else {
            let data:any
            const resp_data: Array<Music> = []
            if(type === TypeSearch.MUSIC || type === TypeSearch.VIDEO) {
                if(type === TypeSearch.MUSIC) {
                    const music_data:any = await requestToYtApi('search', {
                        "query": query,
                        "params": MUSIC_param,
                    })
                    data = music_data.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item: any) => item?.musicShelfRenderer?.title?.runs[0]?.text === 'Songs')[0].musicShelfRenderer.contents
                }else if(type === TypeSearch.VIDEO) {
                    const music_data:any = await requestToYtApi('search', {
                        "query": query,
                        "params": VIDEO_param,
                    })
                    data = music_data.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item: any) => item?.musicShelfRenderer?.title?.runs[0]?.text === 'Videos')[0].musicShelfRenderer.contents
                }
                for (const item of data) {
                    resp_data.push(new Music(extract_dataFromGetData(await GetData(item.musicResponsiveListItemRenderer?.playlistItemData?.videoId || item.musicResponsiveListItemRenderer?.onTap.watchEndpoint.videoId))))
                }
            }
            return resp_data
        }
    },

    getHomePage: async (): Promise<Home> => {
        return new Promise(async (resolve) => {
            requestToYtApi('browse', {
                "browseId": "FEmusic_home"
            }).then(async (res: any) => {
                const resp_data: any = {
                    music_list:[],
                    playlist:[]
                }
                new Promise(async (resolve2) => {
                    for (let i=0; res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.length > i; i++){
                        let item = res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents
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
                                                        await getPlaylist(musicdt.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId)
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
                            if(i+1 === res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.length) resolve2(null)
                        })
                    }
                }).then(() => {
                    return resolve(new Home(resp_data))
                })
            })
        })
    },

    relative: async (ID: string): Promise<Array<Music>> => {
        return new Promise(async (resolve) => {
            requestToYtApi('next', {
                "videoId": ID,
            }).then(async (res: any) => {
                const autoMix = res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents[1].automixPreviewVideoRenderer.content.automixPlaylistVideoRenderer.navigationEndpoint.watchPlaylistEndpoint
                requestToYtApi('https://music.youtube.com/youtubei/v1/next?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false', {
                    "params": autoMix.params,
                    "isAudioOnly": true,
                    "playlistId": autoMix.playlistId,
                    "enablePersistentPlaylistPanel": true,
                }).then((e:any) => {
                    const resp_data: Array<Music> = []
                    for (const item of e.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents.map((e:any) => e.playlistPanelVideoRenderer)) {
                        resp_data.push(new Music(item, true))
                    }
                    return resolve(resp_data)
                })
            })
        })
    },

    get: async (id: string): Promise<Music> => {
        return new Promise(async (resolve, reject) => {
            GetData(id).then((e:any) => {
                return resolve(new Music(extract_dataFromGetData(e)))
            }).catch(async (e) => {
                reject(e)
            })
        })
    },

    GetData: async (id: string): Promise<any> => {
        return new Promise(async (resolve) => {
            return resolve(await GetData(id))
        })
    },

    getPlaylist: async (id: string): Promise<Playlist> => {
        return await getPlaylist(id)
    }
}


async function getPlaylist(id: string): Promise<Playlist> {
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

function GetData(id: string): Promise<any> {
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


const TypeSearch_arr = ['MUSIC', 'VIDEO']
type TypeSearch_param = typeof TypeSearch_arr[number]

export class TypeSearch {
    static MUSIC: TypeSearch_param = 'MUSIC'
    static VIDEO: TypeSearch_param = 'VIDEO'
}
const MUSIC_param= 'EgWKAQIIAWoOEAMQBBAJEA4QChAFEBU%3D',
    VIDEO_param= 'EgWKAQIQAWoOEAkQBRADEAQQDhAKEBU%3D'