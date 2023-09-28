export const TypeSearch_arr = ['MUSIC', 'VIDEO']
export type TypeSearch_param = typeof TypeSearch_arr[number]
export class TypeSearch {
    static MUSIC: TypeSearch_param = 'MUSIC'
    static VIDEO: TypeSearch_param = 'VIDEO'
}