export interface Location {
  id: string;
  name: string;
  category: 'hotel' | 'restaurant' | 'destination' | 'activity';
  coordinates: [number, number];
  description: string;
  rating?: number;
  priceRange?: string;
}

export const locations: Location[] = [
  {
    id: '1',
    name: 'Double Decker Living Root Bridge',
    category: 'destination',
    coordinates: [91.7362, 25.2484],
    description: 'Famous two-tier root bridge in Nongriat village',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Cafe Shillong',
    category: 'restaurant',
    coordinates: [91.8845, 25.5788],
    description: 'Popular cafe serving local and international cuisine',
    rating: 4.5,
    priceRange: '$$'
  },
  {
    id: '3',
    name: 'Ri Kynjai Resort',
    category: 'hotel',
    coordinates: [91.9012, 25.5677],
    description: 'Luxury resort overlooking Umiam Lake',
    rating: 4.7,
    priceRange: '$$$'
  },
  {
    id: '4',
    name: 'Mawsmai Cave',
    category: 'destination',
    coordinates: [91.7288, 25.2516],
    description: 'Natural limestone cave formation',
    rating: 4.3
  },
  {
    id: '5',
    name: 'Nohkalikai Falls',
    category: 'destination',
    coordinates: [91.7220, 25.2841],
    description: 'Highest plunge waterfall in India',
    rating: 4.9
  },
  {
    id: '6',
    name: 'La Terrasse',
    category: 'restaurant',
    coordinates: [91.8832, 25.5691],
    description: 'Fine dining with panoramic city views',
    rating: 4.6,
    priceRange: '$$$'
  },
  {
    id: '7',
    name: 'Kongthong Village',
    category: 'destination',
    coordinates: [91.7456, 25.3321],
    description: 'Unique whistling village',
    rating: 4.4
  },
  {
    id: '8',
    name: 'Mawlynnong',
    category: 'destination',
    coordinates: [91.9156, 25.1985],
    description: "Asia's cleanest village",
    rating: 4.7
  }
];