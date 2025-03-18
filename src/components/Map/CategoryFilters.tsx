import { Location } from '@/data/locations';
import { MapPin, Hotel, Utensils, Mountain } from 'lucide-react';

interface CategoryFiltersProps {
  onCategorySelect: (category: Location['category'] | null) => void;
  selectedCategory: Location['category'] | null;
}

export default function CategoryFilters({ 
  onCategorySelect, 
  selectedCategory 
}: CategoryFiltersProps) {
  const categories = [
    { id: 'all', label: 'All', icon: MapPin },
    { id: 'hotel', label: 'Hotels', icon: Hotel },
    { id: 'restaurant', label: 'Restaurants', icon: Utensils },
    { id: 'destination', label: 'Destinations', icon: Mountain }
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onCategorySelect(id === 'all' ? null : id as Location['category'])}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap
            ${selectedCategory === (id === 'all' ? null : id)
              ? 'bg-emerald-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'}
            transition-colors duration-200
          `}
        >
          <Icon className="h-4 w-4" />
          {label}
        </button>
      ))}
    </div>
  );
}