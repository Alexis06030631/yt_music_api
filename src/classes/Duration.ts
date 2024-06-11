export default class Duration {
	/**
	 * The duration in seconds
	 * @example 200
	 */
	public duration: number

	/**
	 * The parsed duration in a human-readable format
	 * @example "3:20"
	 */
	public formatted: string

	/**
	 * The duration in a human-readable long format
	 * @example "3 minutes, 20 seconds"
	 **/
	public formattedLong: string


	constructor(duration: number) {
		this.duration = duration
		this.formatted = format(duration)
		this.formattedLong = formatLong(duration)
	}
}

function formatLong(duration: number): string {
	const hours = Math.floor(duration / 3600)
	const minutes = Math.floor(duration % 3600 / 60)
	const seconds = duration % 60

	return `${hours ? hours + ' hours, ' : ''}${minutes ? minutes + ' minutes, ' : ''}${seconds} seconds`
}

function format(duration: number): string {
	const hours = Math.floor(duration / 3600)
	const minutes = Math.floor(duration % 3600 / 60)
	const seconds = duration % 60

	return `${hours ? hours + ':' : ''}${minutes}:${seconds.toString().padStart(2, '0')}`
}