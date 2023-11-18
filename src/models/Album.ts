export default class Album {
    /**
     * The name of the album
     */
    public name: string;
    /**
     * The YT id of the album
     */
    public id: string;

    constructor(album: any) {
        this.name = album.name
        this.id = album.id
    }
}