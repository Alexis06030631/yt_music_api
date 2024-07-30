const {decode, signatureTimestamp} = require('./build/decoder')
const ytb = require('./../dist/')
const axios = require('axios')


process.env.buildProd = true
const object = ytb.download('9bZkp7q19f0')
object.then((data) => {
	console.log(data)

	// Check with axios if the status code is 200 without downloading the file
	axios.get(data.urlDecoded, {
		headers: {
			'Range': 'bytes=0-1'
		}
	}).then((response) => {
		console.log(`It works! Status code: ${response.status}`)
	}).catch((error) => {
		throw error
	})
})

