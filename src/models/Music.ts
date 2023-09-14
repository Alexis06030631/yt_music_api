import {requestToYtApi} from "../utils/requestManager";
import {Artwork} from "./Artwork";
import {Artist} from "./Artist";
import {Duration} from "./Duration";

export class Music {
    public artworks: Array<Artwork>;
    public id: string;
    public title: string;
    public artists: Array<Artist>
    public typeVideo: string
    public duration: Duration
    public browseId: string;
    public isAudioOnly: boolean;
    public autoMix: boolean;

    constructor(data: any, autoMix?: boolean) {
        this.artworks = data.artworks
        this.id = data.id
        this.title = data.title
        this.artists = data.artists
        this.artists.toString = () => {
            const artists: Array<Artist> = data.artists = [ ...data.artists]
            // Return the artists in string format with a comma between each artist and if it's the last artist add '&'
            return artists.map((artist, index) => `${artist.name}${index === artists.length - 1 ? '' : index === artists.length - 2 ? ' &' : ','} `).join('')
        }
        this.duration = data.duration
        this.typeVideo = data.type
        this.browseId = data.browseId
        this.isAudioOnly = data.type.includes('ATV')
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
                    const resolveData = new Lyrics()
                    resolveData.lyrics = res.data.contents.sectionListRenderer.contents[0].musicDescriptionShelfRenderer.description.runs[0].text
                    resolveData.source = res.data.contents.sectionListRenderer.contents[0].musicDescriptionShelfRenderer.footer.runs[0].text.replace('Source: ', '')
                    resolve(resolveData)
                }
            }).catch(reject)
        })
    }


    getRelative(): Promise<Array<Music>>{
        return new Promise((resolve, reject) => {

        })
    }
}

function extractArtistData(data: any):any {
    return data.longBylineText.runs.find((item: any) => item.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_ARTIST')
}

function timeToSec(time: string) {
    const time_split = time.split(':')
    let time_sec = 0
    for (let i = 0; i < time_split.length; i++) {
        time_sec += parseInt(time_split[i]) * Math.pow(60, time_split.length - i - 1)
    }
    return time_sec
}


class Lyrics {
    lyrics: string;
    source: string;
}

class NoLyrics {
    message: string;
    status: boolean;
    constructor(message:string) {
        this.message = message
        this.status = false
    }
}