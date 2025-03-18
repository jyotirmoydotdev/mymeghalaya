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
    transport: number[]; // road, air, water
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
        image_url: string;
        image_title: string;
        image_blur_data_url: string;
    }[]; // URLs for images associated with the destination
    coordinate?: number[]; // [latitude, longitude] Geographic coordinates of the destination
    address?: string; // Physical address from Google Maps
    address_g_link?: string; // Link to the destination's location on Google Maps
    tags?: string[]; // Tags for search optimization and categorization

    /**
     * @note Operating hours for the destination.
     * 
     * @desc The format is an array of numbers representing the operating hours for the destination,
     *        structured as follows:
     *        - The first number indicates the season (1 for Summer, 2 for Winter, 0 for All).
     *        - The second number represents the opening hour (in 24-hour format).
     *        - The third number represents the closing hour (in 24-hour format).
     *        - This pattern repeats for each day of the week (7 days in total).
     *        
     * Example:
     * For Summer operating hours (Monday to Sunday):
     * ```json
     * [1.0, 5.0, 17.0, 1.0, 6.0, 18.0, 1.0, 7.0, 19.0, 1.0, 8.0, 20.0, 1.0, 9.0, 21.0, 1.0, 6.0, 19.0, 1.0, 7.0, 18.0]
     * ```
     * This represents:
     * - Monday (Summer): Open at 5 AM, Close at 5 PM
     * - Tuesday (Summer): Open at 6 AM, Close at 6 PM
     * - etc.
     * 
     * The same structure can be applied for Winter or All seasons, allowing for flexibility in storing operating hours.
     */
    timing: string[];

    embedding: number[];

    tickets?: { // Ticket prices or charges associated with entry
        id: string;
        visitor: string;
        type: string;
        price: number;
    }[];
    parkings?: { // Parking information and fees
        id: string;
        type: string; // Type of parking (e.g., car, bike)
        price: number; // Fee for parking 
        description: string
    }[];
    distance?: { // Distance and route links from major nearby cities
        distance: string; // Distance to the nearest major city
        link: string; // Google Maps route link
    }[];
    activities?: string[]; // List of activities available near the destination (e.g., boating, joy rides)
    best_time_to_visit?: number[]; // Ideal months or seasons for visiting
    safety_tips?: string[]; // Safety tips or rules for visitors to follow
    contacts: {
        id: string;
        contact_type: string;
        name: string;
        phone_number: string[];
        email: string;
        address: string;
        additional_info: any;
    }[];
    nearby_attractions: string[]; // Slugs of other nearby destinations (references)
    rating: number;
}