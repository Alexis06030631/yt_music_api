export function getSignatureTimestamp(): Promise<number> {
    return new Promise((resolve, reject) => {
        fetchScript().then((res) => {
            resolve(res.signatureTimestamp)
        })
    })
}

export function getDecodeScript(): Promise<any>{
    return new Promise((resolve, reject) => {
        fetchScript().then((res) => {
            resolve(res.decode)
        })
    })
}

import * as path from 'path'
function fetchScript(): Promise<any> {
    return new Promise((resolve, reject) => {
        if(process.env.buildProd) {
            process.emitWarning('You are using a production build, the decoder will be downloaded from the internet. If you want to use a local decoder, please use a development build.')
            return resolve(require(path.join(__dirname, '../../decode/build/decoder.js')))
        }
        return fetch('https://alexis06030631.github.io/yt_music_api/decoder.js').then(res => {
            return res.text()
        }).then(res => {
            return resolve(eval(res))
        })
    })
}