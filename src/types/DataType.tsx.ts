export interface DataType {
    id?: number;
    slug: string;
    name: string;  // Name is required for a destination
    description?: string;
    about?: string;
    highlights?: string[];  // Key attractions or highlights of the destination
    transport?: TransportOptions;
    location?: string;
    category?: string;  // E.g., Beach, Hill Station, Historical Place
    images?: string[];
    coordinate?: Coordinates;
    address?: string;
    addressGLink?: string;
    lastUpdated?: string;
    tags?: string[];
    timing?: Timing[];
    ticket?: Pricing[];
    parking?: Pricing[];
    distance?: Distance[];
    activities?: string[];  // Activities at the destination (e.g., hiking, boating)
    bestTimeToVisit?: string;  // Best time to visit the destination
    accommodations?: Accommodation[];  // Information about staying options
    weatherInfo?: string;  // Brief info about the weather
    safetyTips?: string[];  // Safety tips for travelers
    nearbyAttractions?: NearbyAttraction[];  // Other attractions nearby
    cuisine?: string[];  // Local cuisine or must-try foods
    accessibility?: string;  // Accessibility information
    localCustoms?: string[];  // Information on local customs and etiquette
    reviews?: Review[];  // Reviews and ratings from travelers
    emergencyContacts?: EmergencyContact[];  // Local emergency contacts
}

interface TransportOptions {
    road: boolean;
    airport: boolean;
    water: boolean;
}

interface Coordinates {
    latitude: string;
    longitude: string;
}

interface Timing {
    day: string;
    time: string;
}

interface Pricing {
    type: string;
    price: string;
}

interface Distance {
    distance: string;
    link: string;
}

interface Accommodation {
    name: string;
    type: string;  // E.g., Hotel, Resort, Guesthouse
    priceRange: string;  // E.g., $$, $$$
    rating?: number;  // Optional rating field
    contact?: string;
}

interface NearbyAttraction {
    name: string;
    distance: string;  // Distance from the destination
    description?: string;  // Brief description of the nearby attraction
}

interface Review {
    user: string;
    rating: number;  // Rating out of 5 or 10
    comment: string;  // User's review
    date: string;  // Date of the review
}

interface EmergencyContact {
    type: string;  // E.g., Hospital, Police
    number: string;  // Contact number
    address?: string;  // Address of the emergency service
}
