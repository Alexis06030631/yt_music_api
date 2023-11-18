export default class Download {
    /**
     * The url of the music for download
     */
    url: string;
    /**
     * The type of the music for download (audio/mp4, audio/webm, ...)
     */
    type: string;
    /**
     * The bitrate of the music
     */
    bitrate: number;
    /**
     * The average bitrate of the music
     */
    averageBitrate: number;
    /**
     * The content length of the music
     */
    contentLength: number;
    /**
     * The quality of the music
     */
    quality: string;
    /**
     * The audio rate of the music (44100, 48000, ...)
     */
    audioRate: number;
    /**
     * The audio channels of the music (1='mono', 2='stereo', ...)
     */
    audioChannels: number;
    /**
     * The duration of the music in milliseconds
     */
    DurationMs: number;
    /**
     * The dB of the music
     */
    dB: number;
    /**
     * The expire date of the url
     */
    expireDate: Date;
    constructor(data: any);
}
//# sourceMappingURL=Download.d.ts.map