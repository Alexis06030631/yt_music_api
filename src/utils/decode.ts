import NodeCache from "node-cache";
import {error} from "./error";

const cache = new NodeCache({stdTTL: 3600})

export function getSignatureTimestamp(): Promise<number> {
	return new Promise((resolve) => {
		fetchScript().then((res) => {
			resolve(res.signatureTimestamp)
		})
	})
}

export function getDecodeScript(): Promise<any> {
	return new Promise((resolve) => {
		fetchScript().then((res) => {
			resolve(res.decode)
		})
	})
}

export function getUrlDecode(url: string, retry: boolean = false): Promise<string> {
	return new Promise((resolve, reject) => {
		getDecodeScript().then(async (decode: any) => {
			checkUrlIsMusic(decode(url)).then(resolve).catch((e) => {
				if (!retry) return resolve(getUrlDecode(url, true))
				reject(e)
			})
		})
	})
}

function checkUrlIsMusic(url: string): Promise<string> {
	return new Promise((resolve, reject) => {
		fetch(url).then(async res => {
			if ((res.headers.get('content-type') || '').match(/audio|video/gm)) return resolve(url)
			else {
				if (res.status === 403) return reject(error(2005, {
					url,
					error: 'The download link returned is not valid, please retry or report the error'
				}))
				resolve(checkUrlIsMusic(await res.text()))
			}
		}).catch((e) => {
			reject(error(2005, {url, error: e.message}))
		})
	})
}

function fetchScript(): Promise<any> {
	return new Promise((resolve, reject) => {
		if (process.env.buildDevDecoderPath) {
			process.emitWarning('You are using a development build, the decoder will be use as local. If you want to use the internet decoder, please use a production build.')
			return resolve(require(process.env.buildDevDecoderPath))
		}
		if (cache.has('decoder')) return resolve(eval((cache.get('decoder') || '').toString()))
		return fetch('https://raw.githubusercontent.com/Alexis06030631/yt_music_api/docs/decoder.js').then(res => {
			return res.text()
		}).then(res => {
			cache.set('decoder', res)
			return resolve(eval(res))
		})
	})
}
