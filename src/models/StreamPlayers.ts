import Download from "./Download";
export default class StreamPlayers {
    /**
     * The array of the music files streamable
     */
    public audios: Array<Download>;
    /**
     * The array of the video files streamable
     */
    public videos: Array<Download>;
    /**
     * If it's available
     */
    public available: boolean;

    /**
     * Show unplayable reason
     */
    public unplayable_reason: string

    /**
     * The max bitrate of the music
     */
    public maxBitrate: number;

    constructor(data:any) {
        this.audios = data.audios.map((item:any) => new Download(item))
        this.videos = data.videos.map((item:any) => new Download(item))
        this.available = data.available
        if(!this.available) this.unplayable_reason = data.unplayable_reason
        this.maxBitrate = data.maxBitrate
    }
}