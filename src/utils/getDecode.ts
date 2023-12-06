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

function fetchScript(): Promise<any> {
    return new Promise((resolve, reject) => {
        return fetch('https://alexis06030631.github.io/yt_music_api/decoder.js').then(res => {
            return res.text()
        }).then(res => {
            return resolve(eval(res))
        })
    })
}