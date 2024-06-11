const date = new Date()

export class AvailableQuality_ {
	static readonly low = 'low'
	static readonly medium = 'medium'
	static readonly high = 'high'
}

export const AvailableQuality = Object.values(AvailableQuality_)
export const AvailableFormat = ['mp3', 'webm']
export const UN_TYPES = ["song", "video", "playlist", "artist", "podcast", "profile", "station", "episode"]
export const all_TYPES = ["album", ...UN_TYPES]
export const TYPE_SEARCH_CODE = {
	song: 'EgWKAQIIAWoOEAMQBBAJEA4QChAFEBU%3D',
	video: 'EgWKAQIQAWoOEAkQBRADEAQQDhAKEBU%3D',
	album: 'EgWKAQIYAWoQEAMQBBAJEAoQBRAREBAQFQ%3D%3D'
}

export const COUNTRIES = [{
	name: "global",
	code: "VLPL4fGSI1pDJn5kI81J1fYWK5eZRl1zJ5kM"
},
	{
		name: "argentina",
		code: "VLPL4fGSI1pDJn403fWAsjzCMsLEgBTOa25K"
	},
	{
		name: "australia",
		code: "VLPL4fGSI1pDJn44PMHPLYatj8rta8WYtZ8_"
	},

]

export default {
	apiUrl: 'https://music.youtube.com/youtubei/v1/',
	header: {
		'Content-Type': 'application/json',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
		'cookie': '',
		'Referer': 'https://music.youtube.com/',
		'Origin': 'https://music.youtube.com',
	},
	body: {
		"context": {
			"client": {
				"clientName": "WEB_REMIX",
				"clientVersion": "1." + date.getUTCFullYear() + (date.getUTCMonth() + 1).toString().padStart(2, '0') + date.getUTCDate().toString().padStart(2, '0') + ".01.00",
				"originalUrl": "https://music.youtube.com"
			},
			"user": {},
		}
	},
}
export const countries = COUNTRIES.map((country) => country.name) || []
export declare type AvailableTypes = typeof all_TYPES[number];
export declare type AvailableQuality = typeof AvailableQuality[number];
export declare type AvailableFormat = typeof AvailableFormat[number];
export declare type AvailableCountries = typeof countries[number];