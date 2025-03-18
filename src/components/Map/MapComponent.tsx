import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Location } from '@/data/locations';
import { MapPin } from 'lucide-react';

interface MapComponentProps {
  locations: Location[];
  selectedLocation?: Location | null;
  onMarkerClick: (location: Location) => void;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function MapComponent({
  locations,
  selectedLocation,
  onMarkerClick
}: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [91.1655, 25.4670], // Coordinates approximately at the center of Meghalaya
      zoom: 8 // Adjusted zoom level to fit the entire state
    });
    

    map.current.addControl(new mapboxgl.NavigationControl());

    return () => {
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Clear existing markers
    markers.current.forEach(marker => marker.remove());
    markers.current = [];

    // Add new markers
    locations.forEach(location => {
      const el = document.createElement('div');
      el.className = 'marker';

      const markerElement = (
        <div className="">
          <div className={`p-1 rounded-full ${selectedLocation?.id === location.id
            ? 'bg-emerald-500'
            : 'bg-gray-500 hover:bg-emerald-500'
            } cursor-pointer transition-colors duration-200`}>
            <MapPin className="h-6 w-6 text-white" />
          </div>
          new
        </div>
      );

      // Convert React element to HTML
      // Create a temporary container
      const temp = document.createElement('div');

      // Render the React component into the container
      const root = createRoot(temp);
      root.render(markerElement);

      // Append the entire container to the target element
      el.appendChild(temp);

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-2">
          <h3 class="font-bold">${location.name}</h3>
          <p class="text-sm text-gray-600">${location.description}</p>
          ${location.rating ? `<p class="text-sm">Rating: ⭐️ ${location.rating}</p>` : ''}
          ${location.priceRange ? `<p class="text-sm">Price: ${location.priceRange}</p>` : ''}
        </div>
      `);

      const marker = new mapboxgl.Marker(el)
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current!);

      el.addEventListener('click', () => onMarkerClick(location));
      markers.current.push(marker);
    });
  }, [locations, selectedLocation, onMarkerClick]);

  useEffect(() => {
    if (!map.current || !selectedLocation) return;

    map.current.flyTo({
      center: selectedLocation.coordinates,
      zoom: 13,
      duration: 2000
    });
  }, [selectedLocation]);

  return (
    <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
  );
}