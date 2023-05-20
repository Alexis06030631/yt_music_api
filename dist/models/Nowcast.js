"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nowcast = void 0;
class Nowcast {
    constructor(response) {
        this.update = new Date(response["update_time"]);
        this.type = response["type"];
        this.properties = new Properties(response["properties"]);
    }
}
exports.Nowcast = Nowcast;
class Forecast {
    constructor(e) {
        this.time = new Date(e["time"]);
        this.rain_intensity = e["rain_intensity"];
        this.rain_intensity_description = e["rain_intensity_description"];
    }
}
class Properties {
    constructor(responseElement) {
        this.altitude = responseElement["altitude"];
        this.name = responseElement["name"];
        this.country = responseElement["country"];
        this.department = Number(responseElement["french_department"]);
        this.rain_product_available = !!responseElement["rain_product_available"];
        this.timezone = responseElement["timezone"];
        this.confidence = responseElement["confidence"];
        this.forecast = responseElement["forecast"].map((e) => new Forecast(e));
    }
}
class respWeather {
}
class respGeometry {
}
class respProperties {
}
class respForecast {
}
