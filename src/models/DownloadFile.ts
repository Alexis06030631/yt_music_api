export default class DownloadFile {
    /**
     * The relative path where the music is located
     */
    public path: string;
    /**
     * The size of the music (in MB)
     */
    public size: number;

    constructor(data: any) {
        this.path = data.path
        this.size = data.size
    }
}