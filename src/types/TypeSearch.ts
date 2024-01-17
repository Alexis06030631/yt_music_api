export class TypeSearchData {
    static MUSIC: any = {
        param: 'EgWKAQIIAWoOEAMQBBAJEA4QChAFEBU%3D',
        ytID: 'Songs'
    }
    static VIDEO: any = {
        param: 'EgWKAQIQAWoOEAkQBRADEAQQDhAKEBU%3D',
        ytID: 'Videos'
    }
    static ALBUM: any = {
        param: 'EgWKAQIYAWoQEAMQBBAJEAoQBRAREBAQFQ%3D%3D',
        ytID: 'Albums'
    }
    static ALL: any = {
        param: '',
        ytID: ''
    }
}

export const TypeSearch = ['MUSIC', 'VIDEO', 'ALBUM', 'ALL']
export type TypeSearch_param = 'MUSIC' | 'VIDEO' | 'ALBUM' | 'ALL'

export function getTypeSearchParam(search: string): TypeSearchData {
    if(TypeSearch.includes(search)) {
        return TypeSearchData[search]
    }else{
        throw new Error('Invalid search type')
    }
}