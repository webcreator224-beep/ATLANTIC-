import React, { useState } from 'react';
import { Search, MapPin, Building2, SlidersHorizontal } from 'lucide-react';
import { FilterState } from '../types/listing';

interface PropertySearchBarProps {
  onSearch: (filters: Partial<FilterState>) => void;
  initialType?: 'all' | 'buy' | 'rent';
}

export const PropertySearchBar: React.FC<PropertySearchBarProps> = ({
  onSearch,
  initialType = 'buy',
}) => {
  const [activeType, setActiveType] = useState<'buy' | 'rent'>(
    initialType === 'rent' ? 'rent' : 'buy'
  );
  const [location, setLocation] = useState<string>('all');
  const [propertyType, setPropertyType] = useState<string>('all');
  const [bedrooms, setBedrooms] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const locations = [
    { value: 'all', label: 'All Mumbai Locations' },
    { value: 'Worli', label: 'Worli' },
    { value: 'Bandra West', label: 'Bandra West' },
    { value: 'Powai', label: 'Powai' },
    { value: 'Juhu', label: 'Juhu' },
    { value: 'Lower Parel', label: 'Lower Parel' },
    { value: 'Thane West', label: 'Thane West' },
  ];

  const propertyTypes = [
    { value: 'all', label: 'All Property Types' },
    { value: 'Apartment', label: 'Apartment / Flat' },
    { value: 'Penthouse', label: 'Penthouse' },
    { value: 'Villa', label: 'Villa / Independent House' },
    { value: 'Commercial', label: 'Commercial Office Space' },
  ];

  const handleApplySearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      type: activeType,
      location,
      propertyType,
      bedrooms,
      maxPrice,
    });
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm rounded-xs p-4 sm:p-6 max-w-5xl mx-auto">
      {/* Buy / Rent Toggle */}
      <div className="flex border-b border-[#E2E8F0] mb-5">
        <button
          type="button"
          onClick={() => setActiveType('buy')}
          className={`py-2.5 px-6 font-semibold text-sm transition-colors border-b-2 ${
            activeType === 'buy'
              ? 'border-[#172B28] text-[#172B28]'
              : 'border-transparent text-[#5A6570] hover:text-[#172B28]'
          }`}
        >
          Buy Properties
        </button>
        <button
          type="button"
          onClick={() => setActiveType('rent')}
          className={`py-2.5 px-6 font-semibold text-sm transition-colors border-b-2 ${
            activeType === 'rent'
              ? 'border-[#172B28] text-[#172B28]'
              : 'border-transparent text-[#5A6570] hover:text-[#172B28]'
          }`}
        >
          Rent Properties
        </button>
      </div>

      <form onSubmit={handleApplySearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Location Dropdown */}
        <div>
          <label className="block text-xs font-semibold text-[#172B28] mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#A67C37]" />
            Location in Mumbai
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-[#F8F9FA] border border-[#E2E8F0] text-sm text-[#1E252B] rounded-xs px-3 py-2.5 focus:outline-hidden focus:border-[#172B28]"
          >
            {locations.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type Dropdown */}
        <div>
          <label className="block text-xs font-semibold text-[#172B28] mb-1.5 flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5 text-[#A67C37]" />
            Property Type
          </label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full bg-[#F8F9FA] border border-[#E2E8F0] text-sm text-[#1E252B] rounded-xs px-3 py-2.5 focus:outline-hidden focus:border-[#172B28]"
          >
            {propertyTypes.map((pt) => (
              <option key={pt.value} value={pt.value}>
                {pt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms Dropdown */}
        <div>
          <label className="block text-xs font-semibold text-[#172B28] mb-1.5 flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#A67C37]" />
            Bedrooms (BHK)
          </label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full bg-[#F8F9FA] border border-[#E2E8F0] text-sm text-[#1E252B] rounded-xs px-3 py-2.5 focus:outline-hidden focus:border-[#172B28]"
          >
            <option value="all">Any Bedrooms</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4+ BHK / Penthouse</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button type="submit" className="btn-primary w-full py-2.5">
            <Search className="w-4 h-4" />
            <span>Search Properties</span>
          </button>
        </div>
      </form>
    </div>
  );
};
