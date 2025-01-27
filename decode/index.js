const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const pathUserData = process.platform === 'darwin' ? path.join(process.env.HOME, 'Library', 'Application Support', 'Google', 'Chrome', 'YTmusicDownloader') : process.platform === 'win32' ? path.join(process.env.APPDATA, 'Google', 'Chrome', 'YTmusicDownloader') : path.join(process.env.HOME, '.config', 'google-chrome', 'YTmusicDownloader');
if (!fs.existsSync(pathUserData)) {
	fs.mkdirSync(pathUserData, {recursive: true});
}
getBaseUrl().then((url) => {
	console.log(url)
	axios.get(url).then((res) => {
		fs.writeFileSync(path.join(__dirname, 'base.js'), res.data);
		console.log('base.js saved');
		require('./decoderBuilderV2.js');
	}).catch((err) => {
		console.log(err);
	})
})

function getBaseUrl() {
	return new Promise(async (resolve, reject) => {
		const browser = await puppeteer.launch({
			headless: 'new',
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
		});
		const page = await browser.newPage();
		await page.setRequestInterception(true);
		await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36');
		await page.setExtraHTTPHeaders({
			'Accept-Language': 'en-US;q=0.8,en;q=0.7'
		});
		await page.setCookie(
			{
				name: 'CONSENT',
				value: 'PENDING+999',
				domain: '.youtube.com'
			},
			{
				name: 'SOCS',
				value: 'CAESNQgREitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjMxMjAzLjA5X3AwGgJmciACGgYIgNC5qwY',
				domain: '.youtube.com'
			},
			{
				name: 'CONSENT',
				value: 'PENDING+388',
				domain: '.google.com'
			}
		);

		page.setDefaultNavigationTimeout(0);

		page.on('request', async function (interceptedRequest) {
			if (interceptedRequest.isInterceptResolutionHandled()) return;
			if (interceptedRequest.url().endsWith('.png') || interceptedRequest.url().includes('css') || interceptedRequest.url().includes('svg') || interceptedRequest.url().includes('animations') || interceptedRequest.url().includes('es5') || interceptedRequest.url().includes('img/') || interceptedRequest.url().includes('image') || interceptedRequest.url().includes('ytmusicweb') || interceptedRequest.url().includes('usercontent') || interceptedRequest.url().includes('play.google') || interceptedRequest.url().includes('googleapis.com') || interceptedRequest.url().includes('googlead') || interceptedRequest.url().includes('doubleclick') || interceptedRequest.url().includes('.gstatic.com') || interceptedRequest.url().endsWith('.jpg'))
				interceptedRequest.abort();
			else {
				if (interceptedRequest.url().includes('base.js')) {
					resolve(interceptedRequest.url());
				} else interceptedRequest.continue();
			}
		});
		await page.goto('https://music.youtube.com', {waitUntil: 'domcontentloaded'});
		await browser.close();
	})

}
