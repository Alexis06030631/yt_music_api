"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
class Weather {
    constructor(response) {
        this.update = new Date(response["update_time"]);
        this.type = response["type"];
        this.properties = new Properties(response["properties"]);
    }
}
exports.Weather = Weather;
class DailyForecast {
    constructor(e) {
        this.time = new Date(e["time"]);
        this.T_min = e["T_min"];
        this.T_max = e["T_max"];
        this.T_sea = e["T_sea"];
        this.relative_humidity_min = e["relative_humidity_min"];
        this.relative_humidity_max = e["relative_humidity_max"];
        this.total_precipitation_24h = e["total_precipitation_24h"];
        this.uv_index = e["uv_index"];
        this.daily_weather_icon = e["daily_weather_icon"];
        this.daily_weather_description = e["daily_weather_description"];
        this.sunrise_time = new Date(e["sunrise_time"]);
        this.sunset_time = new Date(e["sunset_time"]);
    }
}
class Forecast {
    constructor(e) {
        this.time = new Date(e["time"]);
        this.T = e["T"];
        this.T_windchill = e["T_windchill"];
        this.relative_humidity = e["relative_humidity"];
        this.P_sea = e["P_sea"];
        this.wind_speed = e["wind_speed"];
        this.wind_speed_gust = e["wind_speed_gust"];
        this.wind_direction = e["wind_direction"];
        this.rain = {
            "1h": e["rain_1h"],
            "3h": e["rain_3h"],
            "6h": e["rain_6h"],
            "12h": e["rain_12h"],
            "24h": e["rain_24h"],
        };
        this.snow = {
            "1h": e["snow_1h"],
            "3h": e["snow_3h"],
            "6h": e["snow_6h"],
            "12h": e["snow_12h"],
            "24h": e["snow_24h"]
        };
        this.iso0 = e["iso0"];
        this.rain_snow_limit = e["rain_snow_limit"];
        this.total_cloud_cover = e["total_cloud_cover"];
        this.weather_description = e["weather_description"];
    }
}
class ProbabilityForecast {
    constructor(e) {
        this.time = new Date(e["time"]);
        this.rain_hazard = {
            "3h": e["rain_hazard_3h"],
            "6h": e["rain_hazard_6h"],
        };
        this.snow_hazard = {
            "3h": e["snow_hazard_3h"],
            "6h": e["snow_hazard_6h"],
        };
        this.freezing_hazard = e["freezing_hazard"];
        this.storm_hazard = e["storm_hazard"];
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
        this.insee = Number(responseElement["insee"]);
        this.bulletin_cote = responseElement["bulletin_cote"];
        this.daily_forecast = responseElement["daily_forecast"].map((e) => new DailyForecast(e));
        this.forecast = responseElement["forecast"].map((e) => new Forecast(e));
        this.probability_forecast = responseElement["probability_forecast"].map((e) => new ProbabilityForecast(e));
    }
}
class respWeather {
}
class respGeometry {
}
class respProperties {
}
class respDailyForecast {
}
class respForecast {
}
class respProbabilityForecast {
}
