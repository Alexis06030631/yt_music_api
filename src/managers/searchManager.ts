import {requestToYtApi} from '../utils/requestManager';
import {Music} from "../models/Music";

export default {
    search: async (query: string, type: TypeSearch): Promise<Array<Music>> => {
        return requestToYtApi('search', {
            "query": query,
        }).then(async (res: any) => {
            let data = res.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item: any) => item?.musicShelfRenderer?.title?.runs[0]?.text === 'Songs')[0].musicShelfRenderer.contents
            const resp_data: Array<Music> = []
            if(type === TypeSearch.MUSIC) {
                data = data.filter((item: any) => item?.musicResponsiveListItemRenderer?.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType === 'MUSIC_VIDEO_TYPE_ATV')
            }else if(type === TypeSearch.VIDEO) {
                data = data.filter((item: any) => item?.musicResponsiveListItemRenderer?.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType === 'MUSIC_VIDEO_TYPE_VIDEO')
            }
            for (const item of data) {
                resp_data.push(new Music(await GetData(item.musicResponsiveListItemRenderer.playlistItemData.videoId)))
            }
            return resp_data
        })
    },

    get: async (id: string): Promise<Music> => {
        return new Promise(async (resolve, reject) => {
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

class TypeSearch {
    public static readonly MUSIC = 'MUSIC'
    public static readonly VIDEO = 'VIDEO'
}