export default class Artwork {
    /**
     * The url of the artwork
     */
    public url: string;
    /**
     * The width of the artwork (in pixels)
     */
    public width: number;
    /**
     * The height of the artwork (in pixels)
     */
    public height: number;

    constructor(artwork: any) {
        this.url = artwork.url
        this.width = artwork.width
        this.height = artwork.height
    }
}