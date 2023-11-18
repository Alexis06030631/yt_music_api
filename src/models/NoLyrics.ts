export default class NoLyrics {
    /**
     * The message of the error
     */
    public message: string;
    /**
     * The status of the error
     */
    public status: boolean;
    constructor(message:string) {
        this.message = message
        this.status = false
    }
}