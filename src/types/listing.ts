export interface ImageItem {
  url: string;
  alt: string;
  comment?: string;
}

export interface PropertyListing {
  id: string;
  title: string;
  slug: string;
  type: 'buy' | 'rent';
  propertyType: 'Apartment' | 'Penthouse' | 'Villa' | 'Commercial';
  price: number;
  priceFormatted: string;
  address: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  carpetAreaSqFt: number;
  furnishing: string;
  possessionStatus: string;
  floor: string;
  parking: string;
  description: string;
  features: string[];
  images: ImageItem[];
  floorPlanUrl: string;
  mapEmbedUrl: string;
  createdDate: string;
}

export interface FilterState {
  type: 'all' | 'buy' | 'rent';
  location: string;
  propertyType: string;
  maxPrice: number;
  bedrooms: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'area-desc';
}
