export interface Position {
    name: string;
    x: number;
    y: number;
    z: number;
}

export interface Distance {
    from: string;
    to: string;
    distance: number;
}

export interface LocationData {
    id?: number;
    url?:string,
    name?: string;
    description?: string;
    about?: string;
    location?:string;
    category?: string;
    subcategory?: string;
    images?: string[];
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