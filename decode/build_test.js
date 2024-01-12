const {decode, signatureTimestamp} = require('./build/decoder')
const {download} = require('./../dist/managers/downloadManager')
const axios = require('axios')


process.env.buildProd = true
const object = download('9bZkp7q19f0')
object.then((data) => {
    console.log(data)

	// Check with axios if the status code is 200 without downloading the file
	axios.get(data.url, {
		headers: {
			'Range': 'bytes=0-1'
		}
	}).then((response) => {
		console.log(`It works! Status code: ${response.status}`)
	}).catch((error) => {
		throw error
	})
})

