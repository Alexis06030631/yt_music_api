import {promises} from "dns";
import {requestToYtApi} from "../utils/requestManager";
import {Artwork} from "./";

export default class Music {
    public artworks: Array<Artwork>;
    public id: string;
    public name: string;
    public artist: {
        name: string;
        id: string;
    };
    public typeVideo: string
    private artist_data: object;

    constructor(search_result: any) {
        this.artworks = search_result.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails
        this.id = search_result.playlistItemData.videoId

        this.name = search_result.flexColumns.find((item: any) => item?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.navigationEndpoint?.watchEndpoint?.videoId === this.id).musicResponsiveListItemFlexColumnRenderer.text.runs[0].text
        this.artist = {
            name: this.extractArtistData(search_result)?.text,
            id: this.extractArtistData(search_result)?.navigationEndpoint?.browseEndpoint?.browseId
        }
        this.typeVideo = search_result?.flexColumns?.find((item: any) => item?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.navigationEndpoint?.watchEndpoint?.videoId === this.id)?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.navigationEndpoint?.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType
    }

    extractArtistData(search_result: any):any {
        let artist_dt = {}
        search_result.flexColumns.find((item: any) => {
            artist_dt = item?.musicResponsiveListItemFlexColumnRenderer?.text?.runs.find((item2: any) => item2?.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_ARTIST' || item2?.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_USER_CHANNEL')
            return item?.musicResponsiveListItemFlexColumnRenderer?.text?.runs.find((item2: any) => {
                return item2?.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_ARTIST' || item2?.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_USER_CHANNEL'
            })?.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_ARTIST'
        })
        return artist_dt
    }

    getLink(): string {
        return `https://music.youtube.com/watch?v=${this.id}`
    }
}