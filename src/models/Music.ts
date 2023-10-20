import {requestToYtApi} from "../utils/requestManager";
import {Download, Album, Artwork, Artist, Duration, Lyrics, NoLyrics, Music_model} from "./";
import * as downloadManager from "../managers/downloadManager";
import {DownloadType_param} from "../types/DownloadType";
import {DownloadQuality_param} from "../types/DownloadQuality";

export default class Music {
    public artworks: Array<Artwork>;
    public id: string;
    public title: string;
    public artists: Array<Artist>
    public typeVideo: string
    public duration: Duration
    public browseId: string;
    public isAudioOnly: boolean;
    public autoMix: boolean;
    public album?: Album
    public date?: number
    public isExplicit: boolean

    constructor(data: Music_model, autoMix?: boolean) {
        this.artworks = data.artworks
        this.id = data.id
        this.title = data.title
        this.artists = data.artists
        this.artists.toString = () => {
            const artists: Array<Artist> = data.artists = [ ...data.artists]
            // Return the artists in string format with a comma between each artist and if it's the last artist add '&'
            return artists.map((artist, index) => `${artist.name}${index === artists.length - 1 ? '' : index === artists.length - 2 ? ' &' : ','} `).join('')
        }
        this.album = data.album
        this.duration = data.duration
        this.typeVideo = data.type
        this.browseId = data.browseId
        this.isAudioOnly = data.type.includes('ATV')
        this.date = data.date
        this.isExplicit = data.explicit
        if(autoMix) this.autoMix = autoMix
    }

    getLyrics(): Promise<Lyrics|NoLyrics> {
        return new Promise((resolve, reject) => {
            requestToYtApi('browse', {
                browseId: this.browseId,
                context: {client: {clientVersion: "1.20230522.01.00", clientName: "WEB_REMIX"}}
            }).then((res: any) => {
                if (!res.data.contents?.sectionListRenderer?.contents?.[0]?.musicDescriptionShelfRenderer?.description) return reject(new NoLyrics(res.data.contents?.messageRenderer?.text?.runs?.[0]?.text))
                else {
                    const resolveData = new Lyrics({
                        lyrics: res.data.contents.sectionListRenderer.contents[0].musicDescriptionShelfRenderer.description.runs[0].text,
                        source: res.data.contents.sectionListRenderer.contents[0].musicDescriptionShelfRenderer.footer.runs[0].text.replace('Source: ', '')
                    })
                    resolve(resolveData)
                }
            }).catch(reject)
        })
    }

    download(type:DownloadType_param, quality?:DownloadQuality_param): Promise<Download> {
        return new Promise((resolve, reject) => {
            downloadManager.download(this.id, type, quality).then(resolve).catch(reject)
        })
    }
}