import {error} from "./error";
import querystring from "querystring";

export function getSignatureTimestamp(): Promise<number> {
	return new Promise((resolve) => {
		// TODO: FIX SIGNATURE TIMESTAMP
		fetchScript().then((res) => {
			resolve(20110)
		})
	})
}

export function getDecodeScript(): Promise<any> {
	return new Promise((resolve) => {
		fetchScript().then((res) => {
			resolve(res)
		})
	})
}

export function getUrlDecode(url: any, retry: boolean = false): Promise<string> {
	return new Promise((resolve, reject) => {
		getDecodeScript().then(async ([decipherScript, nTransformScript]: any) => {
			checkUrlIsMusic(decode(url, decipherScript, nTransformScript).url).then(resolve).catch((e) => {
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
		if (process.env.buildDevDecoderFile) {
			process.emitWarning('You are using a development build, the decoder will be use as local. If you want to use the internet decoder, please use a production build.')
			const file = process.env.buildDevDecoderFile.toString()
			const scriptsS = file.split('\n\n//NTransform\n')
			return resolve(scriptsS)
		}
		//if (cache.has('decoder')) return resolve(eval((cache.get('decoder') || '').toString()))
		return fetch('https://raw.githubusercontent.com/Alexis06030631/yt_music_api/docs/decoder.js').then(res => {
			return res.text()
		}).then(res => {
			//cache.set('decoder', res)
			const scriptsS = res.split('\n\n//NTransform\n')
			return resolve(scriptsS)
		})
	})
}

function runScript(script: string, ...args: any): string {
	try {
		args.forEach((arg: any) => {
			script = script.replace(new RegExp(`${arg.name}`, 'g'), `"${arg.value.replace('"', '\\"')}"`)
		})

		return eval(script)
	} catch (e) {
		return args[0].value
	}
}

export function decode(format: any, decipherScript: string, nTransformScript: string): any {
	try {
		if (!decipherScript) return;
		const decipher = (url: string) => {
			const args: any = querystring.parse(url);
			if (!args.s) return args.url;
			const components = new URL(decodeURIComponent(args.url));
			components.searchParams.set(args.sp || "sig", runScript(decipherScript, {
				name: 'sig',
				value: decodeURIComponent(args.s)
			}));
			return components.toString();
		};
		const nTransform = (url: string) => {
			const components = new URL(decodeURIComponent(url));
			const n = components.searchParams.get("n");
			if (!n || !nTransformScript) return url;
			components.searchParams.set("n", runScript(nTransformScript, {name: 'ncode', value: n}));
			return components.toString();
		};
		const cipher = !format.url;
		const url = format.url || format.signatureCipher || format.cipher;
		format.url = nTransform(cipher ? decipher(url) : url);
		delete format.signatureCipher;
		delete format.cipher;
		return format;
	} catch (e) {
		console.error(e)
		return format
	}
}
