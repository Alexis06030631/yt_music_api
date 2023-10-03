export default class Album {
    public name: string;
    public id: string;

    constructor(album: any) {
        this.name = album.name
        this.id = album.id
    }
}