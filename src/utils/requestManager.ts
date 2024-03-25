import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {makeAxiosError, YTjsErrorError} from "../errors";
import ErrorCode from "../errors/errorCodes";

let Defaultheaders = {
    'Content-Type': 'application/json',
    'cookie': '',
    'Referer': 'https://music.youtube.com/',
}

let Defaultbody = {
    "context": {
        "client": {
            "clientName": "WEB_REMIX",
            "clientVersion": "1.20231009.01.00",
            "originalUrl": "https://music.youtube.com"
        }
    }
}
let YTmusic_API_URL = 'https://music.youtube.com/youtubei/v1/'

async function requestToYtApi(url: string, body: object, header?: object): Promise<AxiosResponse | AxiosError> {
    return new Promise((resolve, reject) => {
        axios.post(makeUrl(url), makeBody(body), {headers: makeHeaders(header)})
            .then((res: AxiosResponse) => {
                resolve(res);
            })
            .catch((err: any) => {
                if (err.response?.data?.error?.status) {
                    if (ErrorCode[err.response?.data?.error?.status]) {
                        return reject(new YTjsErrorError(err.response?.data?.error?.status, err.response?.data?.error?.errors?.[0]?.message))
                    }
                }
                reject(makeAxiosError(err.response?.data?.error?.status || err.message, err, err.response?.data?.error));
            })
    })
}

function makeUrl(url: string): string {
    if (url.startsWith('http')) {
        return encodeURI(url);
    } else return encodeURI(YTmusic_API_URL + url + '?prettyPrint=false');
}

function makeHeaders(headers: any): AxiosRequestConfig['headers'] {
    return {...Defaultheaders, ...headers};
}

function makeBody(params: object): AxiosRequestConfig['params'] {
    return {...Defaultbody, ...params};
}

export {
    requestToYtApi,
}