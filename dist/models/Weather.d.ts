export declare class Weather {
    update: Date;
    type: string;
    properties: Properties;
    constructor(response: respWeather);
}
declare class DailyForecast {
    time: Date;
    T_min: number;
    T_max: number;
    T_sea: number;
    relative_humidity_min: number;
    relative_humidity_max: number;
    total_precipitation_24h: number;
    uv_index: number;
    daily_weather_icon: string;
    daily_weather_description: string;
    sunrise_time: Date;
    sunset_time: Date;
    constructor(e: respDailyForecast);
}
declare class Forecast {
    time: Date;
    T: number;
    T_windchill: number;
    relative_humidity: number;
    P_sea: number;
    wind_speed: number;
    wind_speed_gust: number;
    wind_direction: number;
    rain: {
        "1h": number;
        "3h": number;
        "6h": number;
        "12h": number;
        "24h": number;
    };
    snow: {
        "1h": number;
        "3h": number;
        "6h": number;
        "12h": number;
        "24h": number;
    };
    iso0: number;
    rain_snow_limit: number;
    total_cloud_cover: number;
    weather_description: string;
    constructor(e: respForecast);
}
declare class ProbabilityForecast {
    time: Date;
    rain_hazard: {
        "3h": number;
        "6h": number;
    };
    snow_hazard: {
        "3h": number;
        "6h": number;
    };
    freezing_hazard: number;
    storm_hazard: number;
    constructor(e: respProbabilityForecast);
}
declare class Properties {
    altitude: number;
    name: string;
    country: string;
    department: number;
    rain_product_available: boolean;
    timezone: string;
    insee: number;
    bulletin_cote: number;
    daily_forecast: DailyForecast[];
    forecast: Forecast[];
    probability_forecast: ProbabilityForecast[];
    constructor(responseElement: respProperties);
}
declare class respWeather {
    update_time: string;
    type: string;
    geometry: respGeometry;
    properties: respProperties;
}
declare class respGeometry {
    type: string;
    coordinates: Array<number>;
}
declare class respProperties {
    altitude: number;
    name: string;
    country: string;
    french_department: string;
    rain_product_available: number;
    timezone: string;
    insee: string;
    bulletin_cote: number;
    daily_forecast: Array<respDailyForecast>;
    forecast: Array<respForecast>;
    probability_forecast: Array<respProbabilityForecast>;
}
declare class respDailyForecast {
    time: string;
    T_min: number;
    T_max: number;
    T_sea: number;
    relative_humidity_min: number;
    relative_humidity_max: number;
    total_precipitation_24h: number;
    uv_index: number;
    daily_weather_icon: string;
    daily_weather_description: string;
    sunrise_time: string;
    sunset_time: string;
}
declare class respForecast {
    time: string;
    T: number;
    T_windchill: number;
    relative_humidity: number;
    P_sea: number;
    wind_speed: number;
    wind_speed_gust: number;
    wind_direction: number;
    wind_icon: string;
    rain_1h: number;
    rain_3h: number;
    rain_6h: number;
    rain_12h: number;
    rain_24h: number;
    snow_1h: number;
    snow_3h: number;
    snow_6h: number;
    snow_12h: number;
    snow_24h: number;
    iso0: number;
    rain_snow_limit: number;
    total_cloud_cover: number;
    weather_icon: string;
    weather_description: string;
}
declare class respProbabilityForecast {
    time: string;
    rain_hazard_3h: number;
    rain_hazard_6h: number;
    snow_hazard_3h: number;
    snow_hazard_6h: number;
    freezing_hazard: number;
    storm_hazard: number;
}
export {};
