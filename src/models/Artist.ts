export default class Artist {
    /**
     * The artist name
     */
    public name: string;
    /**
     * The YouTube Music artist id
     */
    public id: number;

    constructor(artist: any) {
        this.name = artist.name
        this.id = artist.id
    }
}