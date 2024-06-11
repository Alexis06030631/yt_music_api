import path from "node:path";

const version = require('../version.json')
const themeConfig = require('./themeConfig.json')
export default {
	"title": "YTMusic",
	"description": "A simple API to get music from YouTube Music",
	"base": "/yt_music_api",
	"outDir": './dist',
	"srcDir": path.join(__dirname, '..', 'build'),
	"cleanUrls": true,
	"ignoreDeadLinks": true,
	"head": [
		[
			"link",
			{
				"rel": "icon",
				"href": "/yt_music_api/assets/logo.svg"
			}
		],
		[
			"link",
			{
				"rel": "stylesheet",
				"href": "/yt_music_api/assets/css/theme_edit.css"
			}
		]
	],
	"markdown": {
		"attrs": {
			"disable": false
		}
	},
	"themeConfig": {
		"editLink": {
			"pattern": "https://github.com/Alexis06030631/yt_music_api/edit/main/docs/:path",
			"text": "Edit this page on GitHub"
		},
		"footer": {
			"message": "Made with ❤️ by <a href=\"https://instagram.com/leko_system\">LKS Music</a>"
		},
		"sidebar": themeConfig.sidebar,
		"nav": [
			{
				text: `V${version.latestVersion}`,
				link: '/',
				activeMatch: `/${version.latestVersion}`
			},
			/*{
				"text": `Version: ${version.versions[0].version} ${version.latestVersion === version.versions[0].version ? "(latest)" : ""}`,
				"items": version.versions.sort((a, b) => a.version > b.version ? -1 : 1).map(v => {
					return {
						text: v.version + (v.version === version.latestVersion ? " (latest)" : ""),
						link: `/${v.url}`
					}
				})
			}
			 */
		],
		"socialLinks": [
			{
				"icon": "github",
				"link": "https://github.com/Alexis06030631/yt_music_api/"
			},
			{
				"icon": "npm",
				"link": "https://www.npmjs.com/package/ytmusic_api_unofficial"
			},
			{
				"icon": "instagram",
				"link": "https://www.instagram.com/leko_system/"
			}
		]
	}
}