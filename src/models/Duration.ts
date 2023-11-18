export default class Duration {
    /**
     * Duration in seconds
     */
    public seconds: number;
    /**
     * Duration in text format
     */
    public text: string;
    /**
     * Duration in label format
     */
    public label: string;

    constructor(duration: any) {
        this.seconds = duration.seconds
        this.text = duration.text
        this.label = duration.label
    }
}