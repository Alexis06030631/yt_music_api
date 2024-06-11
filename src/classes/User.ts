import {Thumbnail} from "./Thumbnail";

export default class User {
	/**
	 * The userName
	 * @example "toto24"
	 */
	public name: string;
	/**
	 * The YouTube Music user id
	 * @example "UCRw0x9_EfawqmgDI2IgQLLg"
	 */
	public id: number;

	/**
	 * Thumbnails of the user
	 * @example
	 * ```json
	 * {
	 * 	"url": "https://lh3.googleusercontent.com/...",
	 * 		"width": 60,
	 * 		"height": 60
	 * 		}
	 * 		```
	 */
	public thumbnails: Thumbnail


	constructor(user: any) {
		this.thumbnails = user?.thumbnails?.map((thumbnail: any) => new Thumbnail(thumbnail))
		this.name = user.name
		this.id = user?.id
	}
}