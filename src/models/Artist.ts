export class Artist {
    public name: string;
    public id: number;

    constructor(artist: any) {
        this.name = artist.name
        this.id = artist.id
    }
}