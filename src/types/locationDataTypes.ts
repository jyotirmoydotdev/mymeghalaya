export interface LocationDataType { // NOTE: LocationDataType -> DestinationDataType
    id?: string; // UUID ()
    created_at ?: string //timestamptz  // time when this destination is created 
    slug: string; // Url
    name?: string; // Destination Name
    description?: string; // Destination description to shown in card. NOTE : description -> tagline
    about?: string; // Location of the Description Section. NOTE : about -> description
    highlights?: string[]; // Hightlight are the which people there to visit. NOTE : change type : strings[] -> jsonb[]
    transport?:{ // This section indicate is we can reach there by
        road: boolean;
        airport: boolean;
        water: boolean;
    }
    location?:string; // This tells in which district does the destination is located. NOTE: location -> district
    category?: string; // 
    images?: string[]; // Link of the images for a destination
    coordinate?: { // coordinate for a destination
        latitude: string,
        longitude: string,
    };
    address?: string; // Address from google maps
    addressGLink?:string; // Link to google maps for this destination
    lastUpdated?: string; //timestamptz // updated the last time when new changes is made
    tags?: string[]; // Tags will in search
    timing?:{ // Destination opening time and closing time, NOTE:  Need to change with proper time formate insted of string
        day: string,
        time: string,
    }[];
    ticket?: { // Destination ticket price or any other charges
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
    parking?: { // destination parking price 
        type: string,
        price: string,
    }[];
    distance?: { // destination distance and like to goole maps for the route from the nearest major city like (tura, guwahati, shillong)
        distance:string,
        link:string
    }[];
    activities?: string[]; // Any exciting activity near that destination like (boating, joy ride or any other)
    bestTimeToVisit?: string; // in which month and season, NOTE: string -> {month: string, season: string}
    accommodations?: { // probably I will create a new database for this and only like it with forenkey
        name: string;
        type: string;
        priceRange: string;
        rating?: number;
        contact?: string
    }[];
    weatherInfo?: string; // Need to remove because I will fetch live wether data from api
    safetyTips?: string[]; // List of safetytips or rule to follow when visiting that destination
    cuisine?: string[]; // probably I will create a new database for this and only like it with forenkey
    accessibility?: string; // may be remove this 
    localCustoms?: string[]; // need to remove this
    reviews?: { // probably I will create a new database for this and only like it with forenkey
        user: string;
        rating: number;
        comment: string;
        date: string;
    }[];
    emergencyContacts?: { // Enmergency contact like hospital, mechanic, police stataion, etc.
        type: string;
        number: string;
        address?: string;
    }[];
    nearby_attractions: string[]; // this table store the id of other destination which is near that destiantion
}