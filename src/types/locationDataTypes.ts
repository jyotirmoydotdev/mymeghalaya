export interface LocationDataType {
    id?: number;
    slug: string;
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
        latitude: string,
        longitude: string,
    };
    address?: string;
    addressGLink?:string;
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
    others: string[];
}