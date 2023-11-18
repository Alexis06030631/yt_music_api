export default class Lyrics {
    /**
     * The lyrics of the song
     */
    public lyrics: string;
    /**
     * The source where the lyrics were fetched from
     */
    public source: string;

    constructor(data: any) {
        this.lyrics = data.lyrics
        this.source = data.source
    }
}