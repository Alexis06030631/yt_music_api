import path from "path";
import NodeCache from "node-cache";

const cache = new NodeCache({stdTTL: 3600})

export function getSignatureTimestamp(): Promise<number> {
	return new Promise((resolve, reject) => {
		fetchScript().then((res) => {
			resolve(res.signatureTimestamp)
		})
	})
}

export function getDecodeScript(): Promise<any> {
	return new Promise((resolve, reject) => {
		fetchScript().then((res) => {
			resolve(res.decode)
		})
	})
}

export function getUrlDecode(url: string): Promise<string> {
	return new Promise((resolve, reject) => {
		getDecodeScript().then(async (decode: any) => {
			checkUrlIsMusic(decode(url)).then(resolve)
		})
	})
}

function checkUrlIsMusic(url: string): Promise<string> {
	return new Promise((resolve, reject) => {
		fetch(url).then(async res => {
			if ((res.headers.get('content-type') || '').match(/audio|video/gm)) return resolve(url)
			else resolve(checkUrlIsMusic(await res.text()))
		})
	})
}

function fetchScript(): Promise<any> {
	return new Promise((resolve, reject) => {
		if (process.env.buildProd) {
			process.emitWarning('You are using a production build, the decoder will be downloaded from the internet. If you want to use a local decoder, please use a development build.')
			return resolve(require(path.join(__dirname, '../../decode/build/decoder.js')))
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