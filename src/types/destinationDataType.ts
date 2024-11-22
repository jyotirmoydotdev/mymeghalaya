export interface DestinationDataType { 
    id?: string; // Unique identifier for the destination (UUID)
    is_active: boolean;
    created_at?: string; // Timestamp indicating when the destination was created (ISO 8601 format)
    last_updated?: string; // Timestamp of the last update to this destination's information (ISO 8601 format)
    slug: string; // URL-friendly identifier for the destination
    name: string; // Name of the destination
    tagline?: string; // Short description to display on cards (10 - 15 words)
    description?: string; // Detailed description for the Description Section
    highlights?: {
        name: string; // highlights name
        description: string; // highlights short description
        imgUrl: string; // image path for the highlight
        imageBlurDataUrl: string;
    }[]; // List of highlights or main attractions for visitors
    transport?: { // Accessibility options for reaching the destination
        road: boolean; // Accessible by road
        airport: boolean; // Accessible by air
        water: boolean; // Accessible by water
    };
    district?: (
        "South West Garo Hills" |
        "West Garo Hills" |
        "North Garo Hills" |
        "East Garo Hills" |
        "South Garo Hills" |
        "West Khasi Hills" |
        "Eastern West Khasi Hills" |
        "South West Khasi Hills" |
        "Ri Bhoi" |
        "East Khasi Hills" |
        "West Jaintia Hills" |
        "East Jaintia Hills" 
    ); // The district where the destination is located
    category?: (
        "garden" |
        "gym" |
        "hiking area" |
        "historical landmark" |
        "museum" |
        "park" |
        "playground" |
        "sports club" |
        "tourist attraction"
    ); // Category of the destination (e.g., historical, natural, cultural)
    images: {
        imageUrl: string;
        imageTitle: string;
        imageBlurDataUrl: string;
        imageCredit?: string;
        imageCreditLink?: string;
    }[]; // URLs for images associated with the destination
    coordinate?: { // Geographic coordinates of the destination
        latitude: string; // Latitude of the destination
        longitude: string; // Longitude of the destination
    };
    address?: string; // Physical address from Google Maps
    address_g_link?: string; // Link to the destination's location on Google Maps
    tags?: string[]; // Tags for search optimization and categorization
    timing?: { // Operating hours for the destination
       all:{
            day: string; // Day or days of the week
            time: { open: string, close: string }; // Opening and closing times in a structured format
        }[],
        summer:{
            day: string; // Day or days of the week
            time: { open: string, close: string }; // Opening and closing times in a structured format
        }[],
       winter:{
            day: string; // Day or days of the week
            time: { open: string, close: string }; // Opening and closing times in a structured format
        }[]
    };
    ticket?: { // Ticket prices or charges associated with entry
        all?: { type: string; price: string }[]; // General ticket types and prices
        indians?: { type: string; price: string }[]; // Ticket prices for Indian citizens
        foreigners?: { type: string; price: string }[]; // Ticket prices for foreign nationals
    };
    parking?: { // Parking information and fees
        type: string; // Type of parking (e.g., car, bike)
        price: string; // Fee for parking
    }[];
    distance?: { // Distance and route links from major nearby cities
        distance: string; // Distance to the nearest major city
        link: string; // Google Maps route link
    }[];
    activities?: string[]; // List of activities available near the destination (e.g., boating, joy rides)
    best_time_to_visit?: { // Ideal months or seasons for visiting
        months: number[]; // Recommended month(s)
        season: string; // Recommended season(s)
    };
    safety_tips?: string[]; // Safety tips or rules for visitors to follow
    emergency_contacts?: { // Emergency contacts for essential services
        type: string; // Type of contact (e.g., hospital, police)
        number: string; // Contact number
        address?: string; // Address if applicable
    }[];
    nearby_attractions: string[]; // Slugs of other nearby destinations (references)
}