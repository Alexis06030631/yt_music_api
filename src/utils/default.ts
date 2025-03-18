import {COUNTRIES} from "./countries";

const date = new Date()

export const AvailableQuality = ['low', 'medium', 'high']
export const AvailableFormat = ['mp3', 'webm']
export const UN_TYPES = ["song", "video", "playlist", "artist", "podcast", "profile", "station", "episode"]
export const all_TYPES = ['false', "album", ...UN_TYPES]
export const TYPE_SEARCH_CODE = {
	song: 'EgWKAQIIAWoOEAMQBBAJEA4QChAFEBU%3D',
	video: 'EgWKAQIQAWoOEAkQBRADEAQQDhAKEBU%3D',
	album: 'EgWKAQIYAWoQEAMQBBAJEAoQBRAREBAQFQ%3D%3D',
	artist_song: 'EgWKAQIIAWoSEAMQBBAJEA4QChAFEBEQEBAV',
	artist_video: 'EgWKAQIQAWoSEAMQBBAJEA4QChAFEBEQEBAV',
	artist_album: 'EgWKAQIYAWoSEAMQBBAJEA4QChAFEBEQEBAV',
}
export const options = {
	country: null,
	fetch: false
}

export default {
	apiUrl: 'https://music.youtube.com/youtubei/v1/',
	header: {
		'Content-Type': 'application/json',
		'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36",
		"cookie": "SOCS=CAI",
		'Referer': 'https://music.youtube.com/',
		'Origin': 'https://music.youtube.com',
	},
	body: {
		"context": {
			"client": {
				"clientName": "WEB_REMIX",
				"clientVersion": "1." + date.getUTCFullYear() + (date.getUTCMonth() + 1).toString().padStart(2, '0') + date.getUTCDate().toString().padStart(2, '0') + ".01.00",
				"originalUrl": "https://music.youtube.com",
				"hl": "en",
				"gl": "en",
			},
			"user": {},
		}
	},
}
export const countries = COUNTRIES.map((country) => country.name) || []
export const countriesCodes = COUNTRIES.map((country) => country.codeCountry) || []
export declare type AvailableTypes = typeof all_TYPES[number];
export declare type AvailableQuality = typeof AvailableQuality[number];
export declare type AvailableFormat = typeof AvailableFormat[number];
export declare type AvailableCountries = typeof countries[number];
export declare type AvailableCountriesCodes = typeof countriesCodes[number];
export declare type optionsType = {
	country: AvailableCountriesCodes,
	fetch: boolean,
}
