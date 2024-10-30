export interface LocationDataType {
    id?: string;
    slug: string;
    name?: string;
    description?: string;
    about?: string;
    highlights?: string[];
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
     All?:{
        type: string,
        price:string,
     }[],
     Indians?:{
        type: string,
        price:string,
     }[],
     Foreigners?:{
        type: string,
        price:string,
     }[]    
    };      
    parking?: {
        type: string,
        price: string,
    }[];
    distance?: {
        distance:string,
        link:string
    }[];
    activities?: string[];
    bestTimeToVisit?: string;
    accommodations?: {
        name: string;
        type: string;
        priceRange: string;
        rating?: number;
        contact?: string
    }[];
    weatherInfo?: string;
    safetyTips?: string[];
    cuisine?: string[];
    accessibility?: string;
    localCustoms?: string[];
    reviews?: {
        user: string;
        rating: number;
        comment: string;
        date: string;
    }[];
    emergencyContacts?: {
        type: string;
        number: string;
        address?: string;
    }[];
    nearby_attractions: string[];
}