const {decode, signatureTimestamp} = require('./build/decoder')
const {getStreamPlayers} = require('./../dist/managers/downloadManager')


process.env.buildProd = true
const object = getStreamPlayers('9bZkp7q19f0')
object.then((data) => {
    console.log(data)
	console.log(signatureTimestamp)
})

