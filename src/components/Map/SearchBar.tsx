import { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Location } from '@/data/locations';

interface SearchBarProps {
  locations: Location[];
  onLocationSelect: (location: Location) => void;
}

export default function SearchBar({ locations, onLocationSelect }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Location[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const filtered = locations.filter(location => 
      location.name.toLowerCase().includes(query.toLowerCase()) ||
      location.category.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  }, [query, locations]);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          placeholder="Search locations..."
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
        />
        <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg">
          <ul className="py-1">
            {results.map(location => (
              <li
                key={location.id}
                onClick={() => {
                  onLocationSelect(location);
                  setQuery('');
                  setIsOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">{location.name}</p>
                    <p className="text-sm text-gray-500 capitalize">{location.category}</p>
                  </div>
                  {location.rating && (
                    <span className="text-sm text-gray-600">⭐️ {location.rating}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}