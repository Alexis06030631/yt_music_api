import {requestToYtApi} from '../utils/requestManager';
import {SearchMusic} from "../models/Search";


const SearchManager = {
    search: async (query: string, type: string, limit?: number, page?: number): Promise<any> => {
        return requestToYtApi('search', {
            "params": "EgWKAQIIAWoKEAMQBBAJEAoQBQ%3D%3D",
            "query": query,
        })
    },

    searchMusic: async (query: string): Promise<any> => {
        return requestToYtApi('search', {
            "params": "EgWKAQIIAWoKEAMQBBAJEAoQBQ%3D%3D",
            "query": query,
        }).then((res: any) => {
            const data = res.data.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.filter((item: any) => item?.musicShelfRenderer?.title?.runs[0]?.text === 'Songs')[0].musicShelfRenderer.contents
            const resp_data: Array<SearchMusic> = []
            data.filter((item: any) => item?.musicResponsiveListItemRenderer?.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType === 'MUSIC_VIDEO_TYPE_ATV').forEach((item: any) => {
                resp_data.push(new SearchMusic(item.musicResponsiveListItemRenderer))
            })
            return resp_data
        })
    },

    searchAll: async (query: string, limit?: number, page?: number): Promise<any> => {
        return SearchManager.search(query, 'all', limit, page);
    }
}


export default SearchManager