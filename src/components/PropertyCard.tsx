import React from 'react';
import { PropertyListing } from '../types/listing';
import { getListingImage } from '../data/listingsData';
import { MapPin, Bed, Bath, Maximize2, MessageSquare, ChevronRight } from 'lucide-react';

interface PropertyCardProps {
  listing: PropertyListing;
  onSelectProperty: (property: PropertyListing) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  listing,
  onSelectProperty,
}) => {
  const primaryImage = listing.images[0];
  const imageUrl = getListingImage(primaryImage?.url || '', listing.title, 0);
  const whatsappNumber = '918975456378';

  const whatsappMessage = encodeURIComponent(
    `Hello Atlanta Estate Agency, I am enquiring about "${listing.title}" (Price: ${listing.priceFormatted}, Address: ${listing.address}). Please share more details.`
  );

  return (
    <article className="card-frame group flex flex-col h-full overflow-hidden hover:border-[#172B28] transition-colors">
      {/* Property Photo Slot */}
      <div className="relative aspect-3/2 bg-[#F1F5F9] overflow-hidden">
        {/* Comment in HTML for required photo slot */}
        {/* {primaryImage?.comment && <!-- ${primaryImage.comment} -->} */}
        <img
          src={imageUrl}
          alt={primaryImage?.alt || listing.title}
          loading="lazy"
          width="600"
          height="400"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';
          }}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-[#172B28] text-[#FFFFFF] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs">
            {listing.type === 'buy' ? 'For Sale' : 'For Rent'}
          </span>
          <span className="bg-[#A67C37] text-[#FFFFFF] text-[11px] font-semibold px-2.5 py-1 rounded-xs">
            {listing.possessionStatus}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 bg-[#172B28]/90 backdrop-blur-xs text-[#FFFFFF] text-lg font-serif font-bold px-3 py-1 rounded-xs border border-[#A67C37]/30">
          {listing.priceFormatted}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#5A6570] font-medium mb-1">
            <MapPin className="w-3.5 h-3.5 text-[#A67C37]" />
            <span>{listing.address}</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-[#172B28] leading-snug group-hover:text-[#A67C37] transition-colors line-clamp-2">
            {listing.title}
          </h3>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#E2E8F0] text-xs text-[#1E252B]">
          {listing.bedrooms > 0 ? (
            <div className="flex items-center gap-1.5 font-medium">
              <Bed className="w-4 h-4 text-[#A67C37]" />
              <span>{listing.bedrooms} Beds</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 font-medium">
              <Bed className="w-4 h-4 text-[#A67C37]" />
              <span>Office</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 font-medium">
            <Bath className="w-4 h-4 text-[#A67C37]" />
            <span>{listing.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Maximize2 className="w-4 h-4 text-[#A67C37]" />
            <span>{listing.areaSqFt} sq ft</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={() => onSelectProperty(listing)}
            className="btn-primary flex-1 py-2 text-xs"
            type="button"
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline py-2 px-3 text-xs border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-[#FFFFFF]"
            aria-label={`Enquire on WhatsApp about ${listing.title}`}
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
};
