export default class Lyrics {
    lyrics: string;
    source: string;

    constructor(data: any) {
        this.lyrics = data.lyrics
        this.source = data.source
    }
}