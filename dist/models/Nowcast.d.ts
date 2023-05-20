export declare class Nowcast {
    update: Date;
    type: string;
    properties: Properties;
    constructor(response: respWeather);
}
declare class Forecast {
    time: Date;
    rain_intensity: number;
    rain_intensity_description: string;
    constructor(e: respForecast);
}
declare class Properties {
    altitude: number;
    name: string;
    country: string;
    department: number;
    rain_product_available: boolean;
    timezone: string;
    confidence: number;
    forecast: Forecast[];
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
    confidence: number;
    forecast: Array<respForecast>;
}
declare class respForecast {
    time: string;
    rain_intensity: number;
    rain_intensity_description: string;
}
export {};
