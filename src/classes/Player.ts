import {getUrlDecode} from "../utils/decode";

export default class Player {
	/**
	 * The url of the player content
	 */
	public url: () => Promise<string>;
	/**
	 * The url of the player content decoded
	 */
	public urlDecoded: string;
	/**
	 * The type of the content (audio/mp4, audio/webm, ...)
	 */
	public type: string;
	/**
	 * The bitrate of the player content
	 */
	public bitrate: number;
	/**
	 * The average bitrate of the music
	 */
	public averageBitrate: number;
	/**
	 * The content length of the music
	 */
	public contentLength: number;
	/**
	 * The quality of the music
	 */
	public quality: string;
	/**
	 * The audio rate of the music (44100, 48000, ...)
	 */
	public audioRate: number;
	/**
	 * The audio channels of the music (1='mono', 2='stereo', ...)
	 */
	public audioChannels: number;
	/**
	 * The duration of the music in milliseconds
	 */
	public DurationMs: number;
	/**
	 * The dB of the music
	 */
	public dB: number;
	/**
	 * The expire date of the url
	 */
	public expireDate: Date;

	constructor(data: any, decode: boolean = false) {
		this.url = () => getUrlDecode(data)
		this.urlDecoded = data.urlDecoded
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
