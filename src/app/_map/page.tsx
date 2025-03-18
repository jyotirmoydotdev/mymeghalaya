'use client';

import { useState } from 'react';
import MapComponent from '@/components/Map/MapComponent';
import SearchBar from '@/components/Map/SearchBar';
import CategoryFilters from '@/components/Map/CategoryFilters';
import { locations, Location } from '@/data/locations';
import Logo from '@/components/layout/logo';

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Location['category'] | null>(null);

  const filteredLocations = locations.filter(location => 
    !selectedCategory || location.category === selectedCategory
  );

  return (
    <div className="h-[95vh] flex flex-col">
      <div className="bg-white p-4 pb-0 space-y-4">
        <div className="flex flex-col sm:flex-row gap-5 justify-between">
          <Logo/>
          <SearchBar 
            locations={locations} 
            onLocationSelect={setSelectedLocation} 
          />
        </div>
        <CategoryFilters
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </div>
      
      <div className="flex-1">
        <MapComponent
          locations={filteredLocations}
          selectedLocation={selectedLocation}
          onMarkerClick={setSelectedLocation}
        />
      </div>
    </div>
  );
}