import default_const from './default'
import {error} from "./error";

let visitorID = process.env.YT_VISITOR_ID || ""

export default function (url: string, body: any = {}, header: object = {}) {
	return new Promise(async (resolve, reject) => {
		const headers = await headerBuilder(header)
		body = bodyBuilder(body)
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

export async function headerBuilder(header: object) {
	const headers = new Headers()

	for (const key in default_const.header) {
		headers.append(key, default_const.header[key])
	}
	for (const key in header) {
		headers.append(key, header[key])
	}

	headers.append('X-Goog-Visitor-Id', await getVisitorId())
	return headers
}

export function bodyBuilder(body: object) {
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