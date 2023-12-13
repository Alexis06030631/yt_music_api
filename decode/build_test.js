const {decode, signatureTimestamp} = require('./build/decoder')
const {download} = require('./../dist/managers/downloadManager')


process.env.buildProd = true
const object = download('9bZkp7q19f0')
object.then((data) => {
    console.log(data)
	console.log(signatureTimestamp)
})

