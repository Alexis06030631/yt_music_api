import {error} from "./error";
import querystring from "querystring";
import {getQuickJS} from "quickjs-emscripten";

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
			checkUrlIsMusic((await decode(url, decipherScript, nTransformScript)).url).then(resolve).catch((e) => {
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
			const scripts = scriptsS.map((script: string) => {
				return new vm.Script(script)
			})
			return resolve(scripts)
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

async function runScript(script: string, ...args: any): Promise<any> {
	return new Promise(async (resolve, reject) => {
		let vm: any
		try {
			const QuickJS = await getQuickJS()
			vm = QuickJS.newContext()

			args.forEach((arg: any, i: number) => {
				const value = vm.newString(arg.value)
				vm.setProp(vm.global, arg.name, value)
				value.dispose()
			})

			const result = vm.evalCode(script)
			if (result.error) {
				reject(vm.dump(result.error))
				result.error.dispose()
			} else {
				resolve(vm.dump(result.value))
				result.value.dispose()
			}

		} catch (e) {
			if (vm) vm.dispose()
			reject(e)
		}
	})
}

export async function decode(format: any, decipherScript: string, nTransformScript: string): any {
	try {
		if (!decipherScript) return;
		const decipher = async (url: string) => {
			const args: any = querystring.parse(url);
			if (!args.s) return args.url;
			const components = new URL(decodeURIComponent(args.url));
			components.searchParams.set(args.sp || "sig", await runScript(decipherScript, {
				name: 'sig',
				value: decodeURIComponent(args.s)
			}));
			return components.toString();
		};
		const nTransform = async (url: string) => {
			const components = new URL(decodeURIComponent(url));
			const n = components.searchParams.get("n");
			if (!n || !nTransformScript) return url;
			components.searchParams.set("n", await runScript(nTransformScript, {name: 'ncode', value: n}));
			return components.toString();
		};
		const cipher = !format.url;
		const url = format.url || format.signatureCipher || format.cipher;
		format.url = await nTransform(cipher ? await decipher(url) : url);
		delete format.signatureCipher;
		delete format.cipher;
		return format;
	} catch (e) {
		console.error(e)
		return format
	}
}
