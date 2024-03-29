import {Album, Artist, Artwork, Duration, Music_model} from "../models/";


export function extract_dataFromGetData(data: any, bestResult = false): Music_model {
    let artists: any = []
    let album: any = []
    let date: number = 0
    for (let item of data?.longBylineText?.runs || []) {
        // Get Author(s)
        if (item.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType?.includes('ARTIST') || item.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType?.includes('USER')) {
            artists.push(new Artist({
                name: item.text,
                id: item.navigationEndpoint?.browseEndpoint?.browseId
            }))
            // Get Album if exists
        } else if (item.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType.includes('ALBUM')) {
            album = new Album({
                name: item.text,
                id: item.navigationEndpoint?.browseEndpoint?.browseId
            })
            // Get Date if exists
        } else {
            if (item.text.match(/([0-9]{4})/g)) date = parseInt(item.text)
        }
    }

    if (artists.length === 0) artists.push(new Artist({
        name: data?.shortBylineText?.runs?.[0]?.text,
        id: null
    }))
    return new Music_model({
        bestResult: bestResult,
        artworks: data.thumbnail.thumbnails.map((e: any) => new Artwork(e)),
        title: data.title.runs[0].text,
        browseId: data.browseId,
        id: data.videoId,
        type: data.navigationEndpoint.watchEndpoint.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType,
        artists: artists,
        album: album,
        date: date,
        explicit: data?.badges?.find((e) => e.musicInlineBadgeRenderer?.icon?.iconType === 'MUSIC_EXPLICIT_BADGE').musicInlineBadgeRenderer.icon.iconType === 'MUSIC_EXPLICIT_BADGE',
        duration: new Duration({
            seconds: timeToSec(data.lengthText?.runs?.[0]?.text || '0:00'),
            text: data.lengthText?.runs?.[0]?.text,
            label: data?.lengthText?.accessibility?.accessibilityData?.label
        })
    })
}

export function extract_dataFromListItemRenderer(data: any): Music_model {
    let artists: any = [], album: any = [], date: number = 0, title: string = '', id: string, type: string = ''
    for (let item of data?.flexColumns || []) {
        if (item?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.navigationEndpoint?.watchEndpoint?.videoId) {
            title = item.musicResponsiveListItemFlexColumnRenderer.text.runs[0].text
            id = item?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.navigationEndpoint.watchEndpoint?.videoId
            type = item?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.navigationEndpoint.watchEndpoint?.watchEndpointMusicSupportedConfigs?.watchEndpointMusicConfig?.musicVideoType
        } else if (item?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.navigationEndpoint?.browseEndpoint?.browseId) {
            artists.push(new Artist({
                name: item.musicResponsiveListItemFlexColumnRenderer.text.runs[0].text,
                id: item?.musicResponsiveListItemFlexColumnRenderer?.text?.runs?.[0]?.navigationEndpoint?.browseEndpoint?.browseId
            }))
        }
    }

    return new Music_model({
        artworks: data.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails.map((e: any) => new Artwork(e)),
        title: title,
        browseId: null,
        id: data.playlistItemData.videoId,
        type: type,
        artists: artists,
        album: album,
        date: date,
        duration: null
    })
}


export function extract_dataFromPlaylist(data: any): any {
    let artists: any = [], date: number = 0, name: string = '', id: string

    if (!data?.header) return {
        name: null,
        id: null,
        artists: [],
        date: null
    }

    for (let item of data.header?.musicDetailHeaderRenderer?.subtitle?.runs || []) {
        // Check if the item is an artist
        if (item.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType?.includes('ARTIST') || item.navigationEndpoint?.browseEndpoint?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType?.includes('USER')) {
            artists.push(new Artist({
                name: item.text,
                id: item.navigationEndpoint?.browseEndpoint?.browseId
            }))
            // Check if the item is a date
        } else {
            if (item.text.match(/([0-9]{4})/g)) date = parseInt(item.text)
        }
    }

    return {
        artworks: data.header.musicDetailHeaderRenderer.thumbnail.croppedSquareThumbnailRenderer.thumbnail.thumbnails.map((e: any) => new Artwork(e)),
        name: data.header.musicDetailHeaderRenderer.title.runs[0].text,
        description: data.header.musicDetailHeaderRenderer?.description?.runs?.[0]?.text,
        id: data.responseContext?.serviceTrackingParams?.find((e: any) => e.service === 'GFEEDBACK').params.find((e: any) => e.key === 'browse_id').value.split('/').pop(),
        artists: artists,
        date: date
    }
}


function timeToSec(time: string) {
    const time_split = time.split(':')
    let time_sec = 0
    for (let i = 0; i < time_split.length; i++) {
        time_sec += parseInt(time_split[i]) * Math.pow(60, time_split.length - i - 1)
    }
    return time_sec
}