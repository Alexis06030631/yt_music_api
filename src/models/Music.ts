import {requestToYtApi} from "../utils/requestManager";

export class Music {
    public artworks: Array<Artwork>;
    public id: string;
    public name: string;
    public artist: {
        name: string;
        id: string;
    };
    public typeVideo: string
    public length: {
        inSec: number;
        inText: string;
        label: string;
    };
    public browseId: string;

    constructor(search_result: any) {
        this.artworks = search_result.thumbnail.thumbnails
        this.id = search_result.videoId
        this.name = search_result.title.runs[0].text
        this.artist = {
            name: extractArtistData(search_result)?.text,
            id: extractArtistData(search_result)?.navigationEndpoint?.browseEndpoint?.browseId
        }
        this.length = {
            inSec: timeToSec(search_result.lengthText.runs[0].text),
            inText: search_result.lengthText.runs[0].text,
            label: search_result.lengthText.accessibility.accessibilityData.label
        }
        this.typeVideo = search_result.navigationEndpoint.watchEndpoint.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType
        this.browseId = search_result.browseId
    }

    getLyrics(): Promise<Lyrics|NoLyrics> {
        return new Promise((resolve, reject) => {
            requestToYtApi('browse', {
                browseId: this.browseId,
                context: {client: {clientVersion: "1.20230522.01.00", clientName: "WEB_REMIX"}}
            }).then((res: any) => {
                if(!res.data.contents?.sectionListRenderer?.contents?.[0]?.musicDescriptionShelfRenderer?.description) return reject(new NoLyrics(res.data.contents?.messageRenderer?.text?.runs?.[0]?.text))
                else {
                    const resolveData = new Lyrics()
                    resolveData.lyrics = res.data.contents.sectionListRenderer.contents[0].musicDescriptionShelfRenderer.description.runs[0].text
                    resolveData.source = res.data.contents.sectionListRenderer.contents[0].musicDescriptionShelfRenderer.footer.runs[0].text.replace('Source: ', '')
                    resolve(resolveData)
                }
            }).catch(reject)
        })
    }
}

function extractArtistData(search_result: any):any {
    return search_result.longBylineText.runs.find((item: any) => item.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === 'MUSIC_PAGE_TYPE_ARTIST')
}

function timeToSec(time: string) {
    const time_split = time.split(':')
    let time_sec = 0
    for (let i = 0; i < time_split.length; i++) {
        time_sec += parseInt(time_split[i]) * Math.pow(60, time_split.length - i - 1)
    }
    return time_sec
}

class Artwork {
    url: string;
    width: number;
    height: number;
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