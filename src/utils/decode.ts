import {error} from "./error";
import querystring from "querystring";

export function getSignatureTimestamp(): Promise<number> {
	return new Promise((resolve) => {
		fetchScript("SignatureTimestamp").then((res) => {
			resolve(eval(res))
		})
	})
}

export function getDecodeScript(): Promise<any> {
	return new Promise((resolve) => {
		fetchScript(['ExtractDecipher', 'NTransform']).then((res) => {
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

function fetchScript(nameFunc: [string, string] | string = "ExtractDecipher"): Promise<any> {
	return new Promise(async (resolve, reject) => {
		let file: string | any = null
		if (process.env.buildDevDecoderFile) {
			process.emitWarning('You are using a development build, the decoder will be use as local. If you want to use the internet decoder, please use a production build.')
			file = process.env.buildDevDecoderFile.toString()
		}
		if (!file) {
			await fetch('https://raw.githubusercontent.com/Alexis06030631/yt_music_api/docs/decoder.js').then(res => {
				return res.text()
			}).then(res => {
				file = res
			})
		}
		if (!file) return reject(error(5000, {code: 1005, message: 'The decoder file is not available'}))
		let scriptsS: any[] | string | null = null
		if (typeof nameFunc === 'string') {
			scriptsS = file.match(new RegExp(`//${nameFunc}\n((?:.|\n)*?)(?:\n\n|$)`))[1]
		}
		if (Array.isArray(nameFunc)) {
			scriptsS = nameFunc.map((name) => {
				return file.match(new RegExp(`//${name}\n((?:.|\n)*?)(?:\n\n|$)`))[1]
			})
		}
		return resolve(scriptsS)
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
