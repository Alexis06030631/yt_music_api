export class AvailableCountry {
    name: string;
    id: string;

    constructor(data: any, id: string) {
        this.name = data.title.runs[0].text;
        this.id = id
    }
}