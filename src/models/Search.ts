export class SearchMusic {
    public artworks: Array<Artwork>;
    public id: string;
    public name: string;
    public artist: {
        name: string;
        id: string;
    };
    private artist_data: object;

    constructor(search_result: any) {
        this.artworks = search_result.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails
        this.id = search_result.playlistItemData.videoId

        this.name = search_result.flexColumns.find((item: any) => item?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.navigationEndpoint?.watchEndpoint?.videoId === this.id).musicResponsiveListItemFlexColumnRenderer.text.runs[0].text
        this.artist = {
            name: this.extractArtistData(search_result)?.text,
            id: this.extractArtistData(search_result)?.navigationEndpoint?.browseEndpoint?.browseId
        }
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
}

class Artwork {
    url: string;
    width: number;
    height: number;
}