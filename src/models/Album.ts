import {Artwork, Music} from "./index";
import {requestToYtApi} from "../utils/requestManager";
import {extract_dataFromGetData} from "../utils/extract";
import {GetDataVid} from "../managers/searchManager";

export default class Album {
    /**
     * The name of the album
     */
    public name: string;

    /**
     * The description of the album
     */
    public description?: string;

    /**
     * The YT id of the album
     */
    public id: string;

    /**
     * An array of Artwork objects
     */
    public artworks: Array<Artwork>;

    /**
     * The date of the album
     */
    public date?: number;

    /**
     * An array of Artist objects
     */
    public artists: Array<any>;

    constructor(album: any) {
        this.name = album.name
        this.description = album?.description
        this.id = album.id
        this.artworks = album?.artworks || []
        this.date = album?.date
        this.artists = album?.artists || []
    }

    /**
     * Get the musics of the album
     * @returns An array of Music objects
     */
    async getMusics(): Promise<Array<Music>> {
        return new Promise((resolve, reject) => {
            requestToYtApi('browse', {
                browseId: this.id,
            }).then(async (res: any) => {
                const resp_data: any = []
                for (const item of res.data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].musicShelfRenderer.contents) {
                    resp_data.push(new Music(extract_dataFromGetData(await GetDataVid(item.musicResponsiveListItemRenderer?.playlistItemData?.videoId || item.musicResponsiveListItemRenderer?.onTap.watchEndpoint.videoId))))
                }
                resolve(resp_data)
            })
        })
    }
}