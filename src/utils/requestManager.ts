import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

let Defaultheaders = {
    'Content-Type': 'application/json',
    'cookie': '',
    'Referer': 'https://music.youtube.com/',
}

let Defaultbody = {
    "context": {
        "client": {
            "clientName": "WEB_REMIX",
            "clientVersion": "1.20220808.01.00",
            "originalUrl": "https://music.youtube.com"
        }
    }
}
let YTmusic_API_URL = 'https://music.youtube.com/youtubei/v1/'
    
async function requestToYtApi(url: string, body:object, header?: object): Promise<AxiosResponse|AxiosError> {
    return new Promise((resolve, reject) => {
        axios.post(makeUrl(url), makeBody(body), {headers: makeHeaders(header)})
            .then((res: AxiosResponse) => {
                resolve(res);
            })
            .catch((err: any) => {
                reject(err);
            })
    })
}

function makeUrl(url: string, ...params: any[]): string {
    if (url.startsWith('http')) {
        return encodeURI(url);
    }else return encodeURI(YTmusic_API_URL + url);
}

function makeHeaders(headers: any): AxiosRequestConfig['headers'] {
    return {...Defaultheaders, ...headers};
}

function makeBody(params:object): AxiosRequestConfig['params'] {
    return {...Defaultbody, ...params};
}

export {
    requestToYtApi,
}