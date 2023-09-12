export class Duration {
    public seconds: number;
    public text: string;
    public label: string;

    constructor(duration: any) {
        this.seconds = duration.seconds
        this.text = duration.text
        this.label = duration.label
    }
}