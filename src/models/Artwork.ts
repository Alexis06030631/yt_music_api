export class Artwork {
    public url: string;
    public width: number;
    public height: number;

    constructor(artwork: any) {
        this.url = artwork.url
        this.width = artwork.width
        this.height = artwork.height
    }
}