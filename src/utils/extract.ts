import {Music_model, Artist, Album, Artwork, Duration} from "../models/";

export function extract_dataFromGetData(data:any):Music_model {
    let artists:any = [], album:any, date:number
    for (let item of data?.longBylineText?.runs || []) {
        // Get Author(s)
        if(item.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType?.includes('ARTIST') || item.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType?.includes('USER')){
            artists.push(new Artist({
                name: item.text,
                id: item.navigationEndpoint?.browseEndpoint?.browseId
            }))
            // Get Album if exists
        }else if(item.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType.includes('ALBUM')){
            album = new Album({
                name: item.text,
                id: item.navigationEndpoint?.browseEndpoint?.browseId
            })
            // Get Date if exists
        }else {
            if(item.text.match(/([0-9]{4})/g)) date = parseInt(item.text)
        }
    }

    if(artists.length === 0) artists.push(new Artist({
        name: data?.shortBylineText?.runs?.[0]?.text,
        id: null
    }))

    return new Music_model({
        artworks: data.thumbnail.thumbnails.map((e: any) => new Artwork(e)),
        title: data.title.runs[0].text,
        browseId: data.browseId,
        id: data.videoId,
        type: data.navigationEndpoint.watchEndpoint.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType,
        artists: artists,
        album: album,
        date: date,
        duration: new Duration({
            seconds: timeToSec(data.lengthText?.runs?.[0]?.text || '0:00'),
            text: data.lengthText?.runs?.[0]?.text,
            label: data.lengthText.accessibility.accessibilityData.label
        })
    })
}



function timeToSec(time: string) {
    const time_split = time.split(':')
    let time_sec = 0
    for (let i = 0; i < time_split.length; i++) {
        time_sec += parseInt(time_split[i]) * Math.pow(60, time_split.length - i - 1)
    }
    return time_sec
}