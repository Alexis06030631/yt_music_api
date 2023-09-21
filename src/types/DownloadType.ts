export const DownloadType_arr = ['mp3', 'webm']
export type DownloadType_param = typeof DownloadType_arr[number]
export class DownloadType {
    static mp3: DownloadType_param = '.mp3'
    static webm: DownloadType_param = '.webm'
}