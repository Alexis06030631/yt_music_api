import Player from "./Player";

export default class StreamPlayer {
	/**
	 * The array of the music files streamable
	 */
	public audios: Array<Player>;
	/**
	 * The array of the video files streamable
	 */
	public videos: Array<Player>;
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

	constructor(data: any) {
		this.audios = data.audios.map((item: any) => new Player(item))
		this.videos = data.videos.map((item: any) => new Player(item))
		this.available = data.available
		if (!this.available) this.unplayable_reason = data.unplayable_reason
		this.maxBitrate = data.maxBitrate
	}

	/**
	 * Get the best audio quality
	 */
	bestAudio(): Player {
		return this.audios[0]
	}

	/**
	 * Get the best video quality
	 */
	bestVideo(): Player {
		return this.videos[0]
	}
}