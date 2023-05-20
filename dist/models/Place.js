"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Place = void 0;
class Place {
    constructor(response) {
        this.alias = response["alias"];
        this.id = Number(response["id"]);
        this.insee = Number(response["insee"]);
        this.type = response["type"];
        this.name = response["real_name"];
        this.coords = {
            lat: Number(response["lat"]),
            lon: Number(response["lng"])
        };
        this.cp = Number(response["cp"]);
    }
}
exports.Place = Place;
class respPlace {
}
