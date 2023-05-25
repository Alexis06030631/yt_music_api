import {requestToYtApi} from '../utils/requestManager';
import {Music, Search, SearchVideo} from "../models/Search";


const SearchManager = {
    search: async (query: string): Promise<any> => {
        return requestToYtApi('search', {
            "query": query,
        }).then((res: any) => {
            const data = res.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item: any) => item?.musicShelfRenderer?.title?.runs[0]?.text === 'Songs')[0].musicShelfRenderer.contents
            const resp_data: Array<Search> = []
            data.forEach((item: any) => {
                resp_data.push(new Search(item.musicResponsiveListItemRenderer))
            })
            return resp_data
        })
    },


    searchVideo: async (query: string): Promise<any> => {
        return requestToYtApi('search', {
            "query": query,
        }).then((res: any) => {
            const data = res.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item: any) => item?.musicShelfRenderer?.title?.runs[0]?.text === 'Songs')[0].musicShelfRenderer.contents
            const resp_data: Array<SearchVideo> = []
            data.filter((item: any) => item?.musicResponsiveListItemRenderer?.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType !== 'MUSIC_VIDEO_TYPE_ATV').forEach((item: any) => {
                resp_data.push(new SearchVideo(item.musicResponsiveListItemRenderer))
            })
            return resp_data
        })
    },

    Music: async (query: string): Promise<any> => {
        return requestToYtApi('search', {
            "query": query,
        }).then((res: any) => {
            const data = res.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item: any) => item?.musicShelfRenderer?.title?.runs[0]?.text === 'Songs')[0].musicShelfRenderer.contents
            const resp_data: Array<Music> = []
            data.filter((item: any) => item?.musicResponsiveListItemRenderer?.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType === 'MUSIC_VIDEO_TYPE_ATV').forEach((item: any) => {
                resp_data.push(new Music(item.musicResponsiveListItemRenderer))
            })
            return resp_data
        })
    },
}


export default SearchManager