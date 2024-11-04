export interface DestinationDataType { 
    id?: string; // Unique identifier for the destination (UUID)
    created_at?: string; // Timestamp indicating when the destination was created (ISO 8601 format)
    lastUpdated?: string; // Timestamp of the last update to this destination's information (ISO 8601 format)
    slug: string; // URL-friendly identifier for the destination
    name?: string; // Name of the destination
    tagline?: string; // Short description to display on cards
    description?: string; // Detailed description for the Description Section
    highlights?: {
        name: string; // highlights name
        description: string; // highlights short description
        imgUrl: string; // image path for the highlight
    }[]; // List of highlights or main attractions for visitors
    transport?: { // Accessibility options for reaching the destination
        road: boolean; // Accessible by road
        airport: boolean; // Accessible by air
        water: boolean; // Accessible by water
    };
    district?: string; // The district where the destination is located
    category?: string; // Category of the destination (e.g., historical, natural, cultural)
    images?: string[]; // URLs for images associated with the destination
    coordinate?: { // Geographic coordinates of the destination
        latitude: string; // Latitude of the destination
        longitude: string; // Longitude of the destination
    };
    address?: string; // Physical address from Google Maps
    addressGLink?: string; // Link to the destination's location on Google Maps
    tags?: string[]; // Tags for search optimization and categorization
    timing?: { // Operating hours for the destination
        day: string; // Day or days of the week
        time: { open: string, close: string }; // Opening and closing times in a structured format
    }[];
    ticket?: { // Ticket prices or charges associated with entry
        All?: { type: string; price: string }[]; // General ticket types and prices
        Indians?: { type: string; price: string }[]; // Ticket prices for Indian citizens
        Foreigners?: { type: string; price: string }[]; // Ticket prices for foreign nationals
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
    bestTimeToVisit?: { // Ideal months or seasons for visiting
        month: string; // Recommended month(s)
        season: string; // Recommended season(s)
    };
    safetyTips?: string[]; // Safety tips or rules for visitors to follow
    emergencyContacts?: { // Emergency contacts for essential services
        type: string; // Type of contact (e.g., hospital, police)
        number: string; // Contact number
        address?: string; // Address if applicable
    }[];
    nearby_attractions: string[]; // IDs of other nearby destinations (references)
}