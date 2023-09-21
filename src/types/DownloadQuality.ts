export const DownloadQuality_arr = ['low', 'medium', 'high']
export type DownloadQuality_param = typeof DownloadQuality_arr[number]
export class DownloadQuality {
    static low: DownloadQuality_param = 'low'
    static medium: DownloadQuality_param = 'medium'
    static high: DownloadQuality_param = 'high'
}