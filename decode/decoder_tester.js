const ytb = require('ytmusic_api_unofficial')
const path = require("node:path");
const core = require('@actions/core');
const {readFileSync} = require("node:fs");


process.env.YT_DEBUG_MODE = true
const file = readFileSync(path.resolve(__dirname, 'build/decoder.js')).toString()
process.env.buildDevDecoderFile = file
core.info("Decoder truncated: " + file.substring(0, 50))


ytb.getPlayers('dQw4w9WgXcQ').then(async (data) => {
	let validUrlCount = 0

	data.audios.push(...data.videos)
	for (let i = 0; i < data.audios.length; i++) {
		await data.audios[i].url().then((url) => {
			core.info(`itag: ${url.match(/itag=(\d+)/)[1]} passed`)
			validUrlCount++
		}).catch((e) => {
			core.notice(`itag: ${e.details.url.match(/itag=(\d+)/)[1]} FAILED`)
		})
	}

	if (validUrlCount === 0) {
		core.setFailed("No valid URL found")
	} else {
		core.info("Test passed with " + validUrlCount + " valid URLs")
	}
}).catch((err) => {
	core.setFailed(`An error occurred: ${err}`)
	throw err
})
