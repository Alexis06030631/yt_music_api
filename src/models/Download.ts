export class Download {
    public url: string;
    public type: string;
    public bitrate: number;
    public averageBitrate: number;
    public contentLength: number;
    public quality: string;
    public audioRate: number;
    public audioChannels: number;
    public DurationMs: number;
    public dB: number;
    public expireDate: Date;

    constructor(data:any) {
        this.url = data.url+'&range=0-1000000000';
        this.type = data.mimeType;
        this.bitrate = data.bitrate;
        this.averageBitrate = data.averageBitrate;
        this.contentLength = Number(data.contentLength);
        this.quality = data.quality;
        this.audioRate = Number(data.audioSampleRate);
        this.audioChannels = data.audioChannels;
        this.DurationMs = Number(data.approxDurationMs);
        this.dB = data.loudnessDb;
        this.expireDate = data.expireDate;

    }
}