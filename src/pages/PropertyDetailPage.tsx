import React, { useState, useEffect } from 'react';
import { PropertyListing } from '../types/listing';
import { getListingImage } from '../data/listingsData';
import { PriceTrendChart } from '../components/PriceTrendChart';
import { MortgageCalculator } from '../components/MortgageCalculator';
import { MapPin, Bed, Bath, Maximize2, Building2, Calendar, Car, Shield, Check, MessageSquare, Phone, Share2, Copy, Send, ChevronRight, ChevronLeft } from 'lucide-react';

interface PropertyDetailPageProps {
  property: PropertyListing;
  onNavigateToBuy: () => void;
  onNavigateToPrivacy: () => void;
}

export const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({
  property,
  onNavigateToBuy,
  onNavigateToPrivacy,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    `Hello, I would like to arrange a viewing for ${property.title} in ${property.location}.`
  );
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const agencyPhone = '+91 8975456378';
  const whatsappNumber = '918975456378';

  const currentImage = property.images[selectedImageIndex] || property.images[0];
  const activeImageUrl = getListingImage(
    currentImage?.url || '',
    property.title,
    selectedImageIndex
  );

  // Inject JSON-LD structured data for RealEstateListing
  useEffect(() => {
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      name: property.title,
      description: property.description,
      url: window.location.href,
      offers: {
        '@type': 'Offer',
        price: property.price,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
      itemOffered: {
        '@type': 'Accommodation',
        name: property.title,
        address: {
          '@type': 'PostalAddress',
          addressLocality: property.location,
          addressRegion: 'Mumbai, Maharashtra',
          addressCountry: 'IN',
        },
        numberOfBedrooms: property.bedrooms,
        numberOfBathroomsTotal: property.bathrooms,
        floorSize: {
          '@type': 'QuantitativeValue',
          value: property.areaSqFt,
          unitCode: 'FTK',
        },
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'listing-json-ld';
    script.text = JSON.stringify(jsonLdData);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('listing-json-ld');
      if (existing) existing.remove();
    };
  }, [property]);

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required.';
    if (!phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!consent) errs.consent = 'You must accept the Privacy Policy to enquire.';
    if (honeypot) errs.bot = 'Spam detected.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Placeholder endpoint simulation: POST /api/property-enquiry
    console.log('Property Enquiry:', {
      propertyId: property.id,
      propertyTitle: property.title,
      fullName,
      phone,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    setSubmitted(true);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Atlanta Estate Agency, I am enquiring about "${property.title}" (${property.priceFormatted}, Address: ${property.address}). Please confirm current availability.`
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-10">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#5A6570]" aria-label="Breadcrumb">
        <button onClick={onNavigateToBuy} className="hover:text-[#172B28] font-medium">
          Property Listings
        </button>
        <ChevronRight className="w-3 h-3 text-[#A67C37]" />
        <span>{property.location}</span>
        <ChevronRight className="w-3 h-3 text-[#A67C37]" />
        <span className="text-[#172B28] font-semibold truncate max-w-xs">{property.title}</span>
      </nav>

      {/* Main Header Block */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#E2E8F0] pb-6 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#172B28] text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-xs">
              {property.type === 'buy' ? 'For Sale' : 'For Rent'}
            </span>
            <span className="bg-[#A67C37] text-[#FFFFFF] text-xs font-semibold px-2.5 py-0.5 rounded-xs">
              {property.possessionStatus}
            </span>
            <span className="text-xs text-[#5A6570] font-medium">
              ID: {property.id}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28]">
            {property.title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-[#5A6570]">
            <MapPin className="w-4 h-4 text-[#A67C37]" />
            <span>{property.address}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
          <div className="text-left sm:text-right">
            <span className="text-xs text-[#5A6570] font-medium block">Guide Price</span>
            <span className="font-serif text-3xl font-bold text-[#172B28]">
              {property.priceFormatted}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="btn-outline py-2.5 px-4 text-xs"
              type="button"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Listing'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="space-y-3">
        <div className="relative aspect-16/9 md:aspect-21/9 bg-[#172B28] overflow-hidden rounded-xs border border-[#E2E8F0] group">
          {/* photo slot comment */}
          {/* {currentImage?.comment && <!-- ${currentImage.comment} -->} */}
          <img
            src={activeImageUrl}
            alt={currentImage?.alt || property.title}
            loading="eager"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';
            }}
            className="w-full h-full object-cover"
          />

          {property.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#172B28]/80 text-[#FFFFFF] p-2 rounded-xs hover:bg-[#172B28] transition-colors"
                aria-label="Previous property photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#172B28]/80 text-[#FFFFFF] p-2 rounded-xs hover:bg-[#172B28] transition-colors"
                aria-label="Next property photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-3 right-3 bg-[#172B28]/80 text-[#FFFFFF] text-xs px-3 py-1 rounded-xs">
            Photo {selectedImageIndex + 1} of {property.images.length}
          </div>
        </div>

        {/* Thumbnail Bar */}
        {property.images.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative w-24 aspect-3/2 rounded-xs overflow-hidden border-2 shrink-0 transition-colors ${
                  idx === selectedImageIndex
                    ? 'border-[#A67C37]'
                    : 'border-[#E2E8F0] opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={getListingImage(img.url, property.title, idx)}
                  alt={`Thumbnail ${idx + 1}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Key Specs, Description, Features, Floor Plan, Map */}
        <div className="lg:col-span-8 space-y-10">
          {/* Key Facts Grid */}
          <div className="card-frame p-6 bg-[#FFFFFF]">
            <h2 className="font-serif text-xl font-bold text-[#172B28] mb-4 border-b border-[#E2E8F0] pb-2">
              Property Specifications
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-[#1E252B]">
              <div>
                <span className="text-[#5A6570] block font-medium">Bedrooms</span>
                <span className="text-sm font-bold text-[#172B28] flex items-center gap-1 mt-0.5">
                  <Bed className="w-4 h-4 text-[#A67C37]" />
                  {property.bedrooms > 0 ? `${property.bedrooms} BHK` : 'Commercial'}
                </span>
              </div>

              <div>
                <span className="text-[#5A6570] block font-medium">Bathrooms</span>
                <span className="text-sm font-bold text-[#172B28] flex items-center gap-1 mt-0.5">
                  <Bath className="w-4 h-4 text-[#A67C37]" />
                  {property.bathrooms} Baths
                </span>
              </div>

              <div>
                <span className="text-[#5A6570] block font-medium">Built-Up Area</span>
                <span className="text-sm font-bold text-[#172B28] flex items-center gap-1 mt-0.5">
                  <Maximize2 className="w-4 h-4 text-[#A67C37]" />
                  {property.areaSqFt} sq ft
                </span>
              </div>

              <div>
                <span className="text-[#5A6570] block font-medium">Carpet Area</span>
                <span className="text-sm font-bold text-[#172B28] flex items-center gap-1 mt-0.5">
                  <Maximize2 className="w-4 h-4 text-[#A67C37]" />
                  {property.carpetAreaSqFt} sq ft
                </span>
              </div>

              <div>
                <span className="text-[#5A6570] block font-medium">Furnishing</span>
                <span className="text-sm font-bold text-[#172B28] mt-0.5 block">
                  {property.furnishing}
                </span>
              </div>

              <div>
                <span className="text-[#5A6570] block font-medium">Floor Position</span>
                <span className="text-sm font-bold text-[#172B28] mt-0.5 block">
                  {property.floor}
                </span>
              </div>

              <div>
                <span className="text-[#5A6570] block font-medium">Reserved Parking</span>
                <span className="text-sm font-bold text-[#172B28] mt-0.5 block">
                  {property.parking}
                </span>
              </div>

              <div>
                <span className="text-[#5A6570] block font-medium">Possession</span>
                <span className="text-sm font-bold text-[#172B28] mt-0.5 block">
                  {property.possessionStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="card-frame p-6 bg-[#FFFFFF]">
            <h2 className="font-serif text-2xl font-bold text-[#172B28] mb-3">
              Property Description
            </h2>
            <p className="text-sm text-[#1E252B] leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Features & Amenities List */}
          <div className="card-frame p-6 bg-[#FFFFFF]">
            <h2 className="font-serif text-2xl font-bold text-[#172B28] mb-4">
              Key Features &amp; Society Amenities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#1E252B]">
              {property.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-[#A67C37] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Micro-Market Historical Price Trend Visualization */}
          <PriceTrendChart location={property.location} propertyType={property.propertyType} />

          {/* Mortgage Home Loan Calculator */}
          <MortgageCalculator propertyPrice={property.price} propertyTitle={property.title} />

          {/* Floor Plan Slot */}
          <div className="card-frame p-6 bg-[#FFFFFF]">
            <h2 className="font-serif text-2xl font-bold text-[#172B28] mb-3">
              Architectural Floor Plan
            </h2>
            <p className="text-xs text-[#5A6570] mb-4">
              Schematic layout illustration. Dimensions are approximate based on society records.
            </p>
            {/* floor plan photo slot comment */}
            {/* <!-- architectural floor plan slot for ${property.title} --> */}
            <div className="border border-[#E2E8F0] rounded-xs p-2 bg-[#F8F9FA]">
              <img
                src={property.floorPlanUrl}
                alt={`Floor plan for ${property.title}`}
                loading="lazy"
                width="800"
                height="600"
                className="w-full h-auto max-h-96 object-contain mx-auto"
              />
            </div>
          </div>

          {/* Map Location Slot */}
          <div className="card-frame p-6 bg-[#FFFFFF]">
            <h2 className="font-serif text-2xl font-bold text-[#172B28] mb-3">
              Neighborhood Location
            </h2>
            <div className="h-72 border border-[#E2E8F0] rounded-xs overflow-hidden bg-[#F1F5F9]">
              <iframe
                title={`Map for ${property.title}`}
                src={property.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Direct Enquiry Form & WhatsApp */}
        <div className="lg:col-span-4 space-y-6 sticky top-24">
          <div className="card-frame p-6 bg-[#FFFFFF] space-y-4">
            <h2 className="font-serif text-xl font-bold text-[#172B28]">
              Enquire About This Property
            </h2>
            <p className="text-xs text-[#5A6570]">
              Schedule a site inspection or speak directly with our senior consultant.
            </p>

            {submitted ? (
              <div className="bg-[#F8F9FA] border border-[#E2E8F0] p-6 text-center space-y-3 rounded-xs">
                <div className="w-10 h-10 bg-[#172B28] text-[#A67C37] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#172B28]">
                  Enquiry Submitted
                </h3>
                <p className="text-xs text-[#5A6570]">
                  Thank you, {fullName}. Our representative will contact you shortly at {phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                {/* Form Action Placeholder: POST /api/property-enquiry */}

                <input
                  type="text"
                  name="telephone_office"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#172B28] mb-1">
                    Your Full Name <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full bg-[#F8F9FA] border ${
                      errors.fullName ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
                    } rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]`}
                    placeholder="e.g. Priya Shah"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-[#DC2626] mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#172B28] mb-1">
                    Phone Number <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full bg-[#F8F9FA] border ${
                      errors.phone ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
                    } rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]`}
                    placeholder="e.g. 8975456378"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-[#DC2626] mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#172B28] mb-1">
                    Email Address <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-[#F8F9FA] border ${
                      errors.email ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
                    } rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]`}
                    placeholder="e.g. priya@example.com"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-[#DC2626] mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#172B28] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-2 cursor-pointer text-xs text-[#5A6570]">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 rounded-xs border-[#E2E8F0] text-[#172B28]"
                    />
                    <span>
                      I agree to the{' '}
                      <button
                        type="button"
                        onClick={onNavigateToPrivacy}
                        className="underline text-[#172B28]"
                      >
                        Privacy Policy
                      </button>
                      .
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-[11px] text-[#DC2626] mt-1">{errors.consent}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full py-2.5 text-xs">
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Enquiry</span>
                </button>
              </form>
            )}

            <div className="pt-2 border-t border-[#E2E8F0] text-center space-y-2">
              <span className="text-[11px] font-semibold text-[#5A6570] block uppercase tracking-wider">
                Instant Communication
              </span>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent w-full py-2.5 text-xs font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 8975456378)</span>
              </a>
              <a
                href={`tel:${agencyPhone.replace(/\s+/g, '')}`}
                className="btn-outline w-full py-2.5 text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {agencyPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Only Sticky Property Action Bar */}
      <div className="lg:hidden fixed bottom-14 inset-x-0 z-40 bg-[#0F201D] text-[#FFFFFF] border-t border-[#A67C37]/40 p-2.5 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${agencyPhone.replace(/\s+/g, '')}`}
          className="btn-outline flex-1 border-[#FFFFFF] text-[#FFFFFF] py-2.5 text-xs font-bold"
        >
          <Phone className="w-3.5 h-3.5 text-[#A67C37]" />
          <span>Call Agency</span>
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent flex-1 py-2.5 text-xs font-bold"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
