const ytb = require('../dist')
const axios = require('axios')
const path = require("node:path");


process.env.YT_DEBUG_MODE = true
process.env.buildDevDecoderPath = path.resolve(__dirname, 'build/decoder.js')

ytb.getPlayers('wOdxJXfoJE4').then(async (data) => {
	console.log(await data.audios[0].url())
})

ytb.getUrlDecodeT({
		itag: 137,
		mimeType: 'video/mp4; codecs="avc1.640020"',
		bitrate: 257900,
		width: 1080,
		height: 1080,
		initRange: [Object],
		indexRange: [Object],
		lastModified: '1665086313715092',
		contentLength: '6400724',
		quality: 'hd1080',
		fps: 25,
		qualityLabel: '1080p',
		projectionType: 'RECTANGULAR',
		averageBitrate: 255365,
		approxDurationMs: '200520',
		signatureCipher: 's=YJWYJWfksJz2iFuEM92_2BimoevjQB181XTOsoZddMOPuHICY49CxBxnV5wxUr0rcaAZg6r5Ypd3kvXvz0Pejf91UUIgIARwsSdQfJAfJA&sp=sig&url=https://rr6---sn-cv0tb0xn-atoe.googlevideo.com/videoplayback%3Fexpire%3D1738034324%26ei%3DNPiXZ4fSA5rEmLAPjuXFwAE%26ip%3D2a04%253Acec0%253A1929%253A2fe%253Ab9e9%253A55da%253A1ee7%253Ae4f7%26id%3Do-AL7zURMdPBCUURaOxLcgC6YxRhpgmXqY7vc5BwAl49BI%26itag%3D137%26source%3Dyoutube%26requiressl%3Dyes%26xpc%3DEgVo2aDSNQ%253D%253D%26met%3D1738012724%252C%26mh%3DC4%26mm%3D31%252C29%26mn%3Dsn-cv0tb0xn-atoe%252Csn-hgn7rn7k%26ms%3Dau%252Crdu%26mv%3Dm%26mvi%3D6%26pl%3D49%26rms%3Dau%252Cau%26gcr%3Dfr%26initcwndbps%3D1408750%26bui%3DAY2Et-NJKzh-5Cs17A8Tc0VjX6xgNfX_XuuIXn5JvHli30jScdcpP8hM0Eq6i7c4SxkkF9ws3nLEuChk%26spc%3D9kzgDaYSAMSK-ZMVrb2QxkrHxgJWK7wpjtAXpZ3Sq0KUS07f55e_AAPba3gyLr53s0kzms8%26vprv%3D1%26svpuc%3D1%26mime%3Dvideo%252Fmp4%26ns%3DseCoPhJyNkoZmpmToElBtBsQ%26rqh%3D1%26gir%3Dyes%26clen%3D6400724%26dur%3D200.520%26lmt%3D1665086313715092%26mt%3D1738012375%26fvip%3D4%26keepalive%3Dyes%26fexp%3D51326932%252C51353498%252C51371294%26c%3DWEB_REMIX%26sefc%3D1%26txp%3D2319224%26n%3Djoi0CCXYzQZSBz-N%26sparams%3Dexpire%252Cei%252Cip%252Cid%252Citag%252Csource%252Crequiressl%252Cxpc%252Cgcr%252Cbui%252Cspc%252Cvprv%252Csvpuc%252Cmime%252Cns%252Crqh%252Cgir%252Cclen%252Cdur%252Clmt%26lsparams%3Dmet%252Cmh%252Cmm%252Cmn%252Cms%252Cmv%252Cmvi%252Cpl%252Crms%252Cinitcwndbps%26lsig%3DAGluJ3MwRQIhALE4hyvjNnxC67N0ZVKRZ2GcYTV2G0nDu5WESVLtJ09xAiAzSyQ42cNXBcAYqiM6MukNiv3gi1plwKtWXAUnfOKTFg%253D%253D'
	}
).then((data) => {
	console.log(data)
})

/*
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
 */

