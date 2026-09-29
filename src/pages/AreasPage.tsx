import React from 'react';
import { MapPin, ArrowRight, Building2, Phone, MessageSquare } from 'lucide-react';
import { FilterState } from '../types/listing';

interface AreasPageProps {
  onSearchArea: (filters: Partial<FilterState>) => void;
  onNavigateToBuy: () => void;
}

export const AreasPage: React.FC<AreasPageProps> = ({
  onSearchArea,
  onNavigateToBuy,
}) => {
  const whatsappNumber = '918975456378';

  const areas = [
    {
      name: 'Worli',
      sector: 'South Mumbai Coastal Sector',
      description: 'High-rise sea facing residential towers, premium duplex apartments, and corporate headquarters on Dr Annie Besant Road and Worli Sea Face.',
      highlights: ['Worli Sea Face Promenade', 'Bandra-Worli Sea Link Access', 'Luxury High-Rises', 'Commercial Hubs'],
      comment: 'photo slot: aerial view of Worli Sea Face skyline, 16:9 ratio',
    },
    {
      name: 'Bandra West',
      sector: 'Western Suburbs Luxury Hub',
      description: 'Pali Hill residences, Carter Road sea view flats, Turners Road retail, and quiet residential lanes with traditional character and modern amenities.',
      highlights: ['Pali Hill', 'Carter Road', 'Bandstand Promenade', 'Boutique Retail & Dining'],
      comment: 'photo slot: street view of Pali Hill tree lined residential lane in Bandra West, 16:9',
    },
    {
      name: 'Powai',
      sector: 'Central Suburbs Planned Township',
      description: 'Master-planned township in Hiranandani Gardens featuring neoclassic residential towers, Powai Lake views, IT parks, and international schools.',
      highlights: ['Hiranandani Gardens', 'Powai Lake Views', 'IIT Bombay Sector', 'Corporate Parks'],
      comment: 'photo slot: Hiranandani Gardens architecture in Powai, 16:9',
    },
    {
      name: 'Juhu',
      sector: 'Coastal Prime Sector',
      description: 'Beachside luxury apartments, low-density residential buildings, celebrity homes, and prime rental properties walking distance from Juhu Beach.',
      highlights: ['Juhu Beach', 'Juhu Tara Road', 'JW Marriott Proximity', 'Low Density Residential'],
      comment: 'photo slot: beachside residential view in Juhu Mumbai, 16:9',
    },
    {
      name: 'Lower Parel',
      sector: 'Central Commercial Hub',
      description: 'Major business district with corporate office towers, Phoenix Palladium shopping destination, and luxury residential complexes built on former mill lands.',
      highlights: ['Phoenix Palladium Mall', 'Senapati Bapat Marg', 'Corporate Towers', 'Monorail & Rail Connectivity'],
      comment: 'photo slot: high rise commercial skyline of Lower Parel, 16:9',
    },
    {
      name: 'Thane West',
      sector: 'Metropolitan Growth Corridor',
      description: 'Spacious residential complexes along Ghodbunder Road and Pokhran Road featuring modern amenities, greenery, and improved road connectivity to Mumbai.',
      highlights: ['Ghodbunder Road Corridor', 'Viviana Mall', 'Pokhran Road', 'Spacious 2 & 3 BHK Layouts'],
      comment: 'photo slot: residential high rise complex in Thane West, 16:9',
    },
  ];

  const handleSelectArea = (areaName: string) => {
    onSearchArea({ location: areaName, type: 'all' });
    onNavigateToBuy();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E2E8F0] pb-6">
        <span className="text-xs font-semibold text-[#A67C37] uppercase tracking-wider">
          Geographic Coverage
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28] mt-1">
          Areas We Cover in Mumbai
        </h1>
        <p className="text-sm text-[#5A6570] mt-2 max-w-2xl">
          Detailed local market knowledge across key residential, luxury, and commercial property sectors in the Mumbai Metropolitan Region.
        </p>
      </div>

      <div className="space-y-8">
        {areas.map((area) => (
          <div key={area.name} className="card-frame p-6 sm:p-8 bg-[#FFFFFF] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
              <div>
                <span className="text-xs font-semibold text-[#A67C37] uppercase tracking-wider">
                  {area.sector}
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#172B28]">{area.name}</h2>
              </div>
              <button
                onClick={() => handleSelectArea(area.name)}
                className="btn-primary text-xs py-2 px-4 self-start sm:self-auto"
              >
                <span>Browse {area.name} Properties</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-[#1E252B] leading-relaxed max-w-3xl">
              {area.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {area.highlights.map((h, i) => (
                <span key={i} className="text-[11px] bg-[#F8F9FA] text-[#172B28] border border-[#E2E8F0] px-2.5 py-1 rounded-xs font-medium">
                  {h}
                </span>
              ))}
            </div>

            {/* photo slot comment */}
            {/* {area.comment && <!-- ${area.comment} -->} */}
          </div>
        ))}
      </div>
    </div>
  );
};
