const {signatureTimestamp} = require('./build/decoder')
const ytb = require('ytmusic_api_unofficial')
const axios = require('axios')
const path = require("node:path");


process.env.YT_DEBUG_MODE = true
process.env.buildDevDecoderPath = path.resolve(__dirname, 'build/decoder.js')
const object = ytb.download('https://music.youtube.com/watch?v=E5NKkXPCi80', 'webm', "high")
object.then((data) => {
	console.log(data)

	// Check with axios if the status code is 200 without downloading the file
	axios.get(data.urlDecoded, {
		headers: {
			'Range': 'bytes=0-1'
		}
	}).then((response) => {
		console.log(`Decoder Info: Signature Timestamp: ${signatureTimestamp}`)
		console.log(`It works! Status code: ${response.status}`)
	}).catch((error) => {
		throw error
	})
}).catch((err) => {
	console.error(`An error occurred:`, err)
	throw err
})


