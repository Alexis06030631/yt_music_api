export class Thumbnail {
	/**
	 * The URL of the thumbnail
	 * @example "https://lh3.googleusercontent.com/..."
	 */
	public url: string
	/**
	 * The width of the thumbnail
	 * @example 60
	 */
	public width: number
	/**
	 * The height of the thumbnail
	 * @example 60
	 */
	public height: number

	constructor(data: any) {
		this.url = data.url
		this.width = data.width
		this.height = data.height
	}
}