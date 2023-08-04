import {requestToYtApi} from '../utils/requestManager';
import {Music} from "../models/Music";

export default {
    search: async (query: string, type: TypeSearch): Promise<Array<Music>> => {
        return requestToYtApi('search', {
            "query": query,
        }).then(async (res: any) => {
            let data = res.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item: any) => item?.musicShelfRenderer?.title?.runs[0]?.text === 'Songs')[0].musicShelfRenderer.contents
            if(res.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item: any) => item?.musicCardShelfRenderer?.subtitle?.runs[0]?.text === 'Song')[0]?.musicCardShelfRenderer) data.unshift({musicResponsiveListItemRenderer:{...res.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item: any) => item?.musicCardShelfRenderer?.subtitle?.runs[0]?.text === 'Song')[0].musicCardShelfRenderer}})

            const resp_data: Array<Music> = []
            if(type === TypeSearch.MUSIC) {
                data = data.filter((item: any) => TypeSearch.MUSIC_values.includes(item?.musicResponsiveListItemRenderer?.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType) || TypeSearch.MUSIC_values.includes(item?.musicResponsiveListItemRenderer?.title.runs[0].navigationEndpoint.watchEndpoint.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType))
            }else if(type === TypeSearch.VIDEO) {
                data = data.filter((item: any) => TypeSearch.VIDEO_values.includes(item?.musicResponsiveListItemRenderer?.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType) || TypeSearch.VIDEO_values.includes(item?.musicResponsiveListItemRenderer?.title.runs[0].navigationEndpoint.watchEndpoint.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType))
            }
            for (const item of data) {
                resp_data.push(new Music(await GetData(item.musicResponsiveListItemRenderer?.playlistItemData?.videoId || item.musicResponsiveListItemRenderer?.onTap.watchEndpoint.videoId)))
            }
            return resp_data
        })
    },

    get: async (id: string): Promise<Music> => {
        return new Promise(async (resolve) => {
            return resolve(new Music(await GetData(id)))
        })
    }
}

function GetData(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
        requestToYtApi('next', {
            "videoId":  id
        }).then((res: any) => {
            resolve({
                browseId: res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[1].tabRenderer.endpoint.browseEndpoint.browseId,
                ...res.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents[0].playlistPanelVideoRenderer
            })
        }).catch(reject)
    })
}

export class TypeSearch {
    public static readonly MUSIC = 'MUSIC'
    public static readonly VIDEO = 'VIDEO'
    public static readonly MUSIC_values = ['MUSIC_VIDEO_TYPE_ATV', 'MUSIC_VIDEO_TYPE_OMV', 'MUSIC_VIDEO_TYPE_SONG']
    public static readonly VIDEO_values = ['MUSIC_VIDEO_TYPE_VIDEO', 'MUSIC_VIDEO_TYPE_CONCERT', 'MUSIC_VIDEO_TYPE_COVER', 'MUSIC_VIDEO_TYPE_PARODY', 'MUSIC_VIDEO_TYPE_PERFORMANCE', 'MUSIC_VIDEO_TYPE_REMIX', 'MUSIC_VIDEO_TYPE_USER_GENERATED', 'MUSIC_VIDEO_TYPE_VIDEO_CLIP', 'MUSIC_VIDEO_TYPE_VIDEO_OTHER', 'MUSIC_VIDEO_TYPE_VIDEO_WITH_MUSIC', 'MUSIC_VIDEO_TYPE_VISUALIZER']
}