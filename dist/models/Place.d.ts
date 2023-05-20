export declare class Place {
    alias: string;
    id: number;
    insee: number;
    type: string;
    name: string;
    coords: {
        lon: number;
        lat: number;
    };
    cp: number;
    constructor(response: respPlace);
}
declare class respPlace {
    alias: string;
    id: number;
    insee: number;
    type: string;
    real_name: string;
    lat: number;
    lng: number;
    cp: number;
}
export {};
