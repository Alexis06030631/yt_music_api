"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Download = void 0;
class Download {
    constructor(data) {
        this.url = data.url + '&range=0-1000000000';
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
exports.Download = Download;
