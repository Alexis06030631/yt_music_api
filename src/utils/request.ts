import default_const, {default_options, options} from './default'
import {error} from "./error";

let visitorID = process.env.YT_VISITOR_ID || ""

export default function (url: string, body: any = {}, header: object = {}, options: options = default_options): Promise<any> {
	return new Promise(async (resolve, reject) => {
		const headers = await headerBuilder(header, options)
		body = bodyBuilder(body, options)
		url = makeUrl(url)

		fetch(url, {
			method: 'POST',
			headers: headers,
			body: body
		}).then(async (res: any) => {
			res = await res.json();
			if (res.error) reject(error(res.error.code, {message: res.error.message, url: url}))
			else resolve(res)
		}).catch((e) => {
			reject(error(1000, e))
		})

	})
}

export function makeUrl(url: string, params?: Array<any>): string {
	if (!url.startsWith('http')) {
		url = default_const.apiUrl + url
	}

	if (url.split('?').length <= 1) url += '?prettyPrint=false&alt=json'

	if (params) {
		for (const param of params) {
			url += `&${param}`
		}
	}
	return encodeURI(url)
}

export async function headerBuilder(header: object, options?: options) {
	const headers = new Headers()

	for (const key in default_const.header) {
		if (default_const.header[key]) {
			headers.append(key, default_const.header[key])
		}
	}
	for (const key in header) {
		if (header[key]) {
			headers.append(key, header[key])
		}
	}

	headers.append('X-Goog-Visitor-Id', await getVisitorId())
	return headers
}

export function bodyBuilder(body: object, options: options): string {
	const def_body = default_const.body
	for (const key in options) {
		switch (key) {
			case "language": {
				def_body.context.client.hl = options.language
				break
			}
		}
	}
	return JSON.stringify(Object.assign(default_const.body, body))
}


async function getVisitorId(): Promise<string> {
	try {
		if (visitorID || process.env.NODE_ENV !== "production") return visitorID
		let response = await (await fetch('https://music.youtube.com/',
			{
				method: 'GET',
				headers: {
					'User-Agent': default_const.header['User-Agent'],
					'cookie': default_const.header['cookie'],
					'Referer': default_const.header['Referer'],
				},
			})).text()
		const matches = response.match(/ytcfg\.set\s*\(\s*({.+?})\s*\)\s*;/);
		if (matches && matches.length > 0) {
			const ytcfg = JSON.parse(matches[1]);
			visitorID = ytcfg?.INNERTUBE_CONTEXT?.client.visitorData || '';
		}
		return visitorID
	} catch (error) {
		process.emitWarning(`Failed to get visitor ID: ${error}`, 'uncaughtException')
		return visitorID
	}
}
