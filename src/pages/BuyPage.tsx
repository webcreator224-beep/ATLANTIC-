import React, { useState, useMemo } from 'react';
import { PropertyListing, FilterState } from '../types/listing';
import { PropertyCard } from '../components/PropertyCard';
import { SlidersHorizontal, MapPin, Building2, Search, RotateCcw } from 'lucide-react';

interface BuyPageProps {
  listings: PropertyListing[];
  onSelectProperty: (property: PropertyListing) => void;
  initialFilters?: Partial<FilterState>;
}

export const BuyPage: React.FC<BuyPageProps> = ({
  listings,
  onSelectProperty,
  initialFilters = {},
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>(
    initialFilters.location || 'all'
  );
  const [selectedType, setSelectedType] = useState<string>(
    initialFilters.propertyType || 'all'
  );
  const [selectedBedrooms, setSelectedBedrooms] = useState<string>(
    initialFilters.bedrooms || 'all'
  );
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>(
    'featured'
  );

  const buyListings = useMemo(() => {
    return listings.filter((item) => item.type === 'buy');
  }, [listings]);

  const filteredListings = useMemo(() => {
    return buyListings
      .filter((item) => {
        if (selectedLocation !== 'all' && item.location !== selectedLocation) {
          return false;
        }
        if (selectedType !== 'all' && item.propertyType !== selectedType) {
          return false;
        }
        if (selectedBedrooms !== 'all') {
          if (selectedBedrooms === '4') {
            if (item.bedrooms < 4) return false;
          } else {
            if (item.bedrooms !== parseInt(selectedBedrooms, 10)) return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return 0;
      });
  }, [buyListings, selectedLocation, selectedType, selectedBedrooms, sortBy]);

  const handleResetFilters = () => {
    setSelectedLocation('all');
    setSelectedType('all');
    setSelectedBedrooms('all');
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="border-b border-[#E2E8F0] pb-6">
        <span className="text-xs font-semibold text-[#A67C37] uppercase tracking-wider">
          Mumbai Real Estate Market
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28] mt-1">
          Flats and Properties to Buy in Mumbai
        </h1>
        <p className="text-sm text-[#5A6570] mt-2 max-w-2xl">
          Explore residential apartments, penthouses, and commercial spaces available for purchase across Worli, Bandra, Powai, Juhu, and Thane.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xs p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E8F0] pb-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#172B28]">
            <SlidersHorizontal className="w-4 h-4 text-[#A67C37]" />
            <span>Filter Properties ({filteredListings.length} results)</span>
          </div>
          {(selectedLocation !== 'all' ||
            selectedType !== 'all' ||
            selectedBedrooms !== 'all') && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-[#DC2626] hover:underline flex items-center gap-1 font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Location filter */}
          <div>
            <label className="block text-xs font-semibold text-[#172B28] mb-1">
              Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
            >
              <option value="all">All Locations</option>
              <option value="Worli">Worli</option>
              <option value="Bandra West">Bandra West</option>
              <option value="Powai">Powai</option>
              <option value="Juhu">Juhu</option>
              <option value="Lower Parel">Lower Parel</option>
              <option value="Thane West">Thane West</option>
            </select>
          </div>

          {/* Property Type filter */}
          <div>
            <label className="block text-xs font-semibold text-[#172B28] mb-1">
              Property Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
            >
              <option value="all">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          {/* Bedrooms filter */}
          <div>
            <label className="block text-xs font-semibold text-[#172B28] mb-1">
              Bedrooms (BHK)
            </label>
            <select
              value={selectedBedrooms}
              onChange={(e) => setSelectedBedrooms(e.target.value)}
              className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
            >
              <option value="all">Any BHK</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4+ BHK / Penthouse</option>
            </select>
          </div>

          {/* Sort selector */}
          <div>
            <label className="block text-xs font-semibold text-[#172B28] mb-1">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as 'featured' | 'price-asc' | 'price-desc')
              }
              className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
            >
              <option value="featured">Featured / Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid of Property Cards */}
      {filteredListings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((listing) => (
            <PropertyCard
              key={listing.id}
              listing={listing}
              onSelectProperty={onSelectProperty}
            />
          ))}
        </div>
      ) : (
        <div className="card-frame p-12 text-center space-y-4 max-w-lg mx-auto my-12">
          <Search className="w-10 h-10 text-[#A67C37] mx-auto" />
          <h2 className="font-serif text-2xl font-bold text-[#172B28]">
            No Properties Found
          </h2>
          <p className="text-xs text-[#5A6570]">
            No sale properties matched your exact filter choices. Try broadening your location or bedroom search criteria.
          </p>
          <button
            onClick={handleResetFilters}
            className="btn-primary py-2.5 px-6 text-xs"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
