export interface LocationDataType {
    id?: number;
    name?: string;
    description?: string;
    about?: string;
    transport?:{
        road: boolean;
        airport: boolean;
        water: boolean;
    }
    location?:string;
    category?: string;
    images?: string[];
    coordinate?: {
        longitude: string,
        latitude: string,
    }[];
    address?: string;
    addressGLink?:string;
    embedMapLink?: string;
    lastUpdated?: string;
    tags?: string[];
    timing?:{
        day: string,
        time: string,
    }[];
    ticket?: {
        type: string,
        price: string,
    }[];
    parking?: {
        type: string,
        price: string,
    }[];
    distance?: {
        distance:string,
        link:string
    }[];
    others: number[];
}