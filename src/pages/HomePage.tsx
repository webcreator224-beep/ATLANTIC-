import React, { useState } from 'react';
import { PropertyListing, FilterState } from '../types/listing';
import { PropertySearchBar } from '../components/PropertySearchBar';
import { PropertyCard } from '../components/PropertyCard';
import { ClientExperiencesSlider } from '../components/ClientExperiencesSlider';
import { MapPin, ArrowRight, Building2, ShieldCheck, CheckCircle2, Phone, MessageSquare, Clock, UserCheck, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface HomePageProps {
  featuredListings: PropertyListing[];
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onSelectProperty: (property: PropertyListing) => void;
  onOpenValuationModal: () => void;
  onSearch: (filters: Partial<FilterState>) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  featuredListings,
  onNavigate,
  onSelectProperty,
  onOpenValuationModal,
  onSearch,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const agencyPhone = '+91 8975456378';
  const whatsappNumber = '918975456378';
  const agencyAddress = 'Suite 402, Atlanta Chambers, Hill Road, Bandra West, Mumbai, Maharashtra 400050';

  const faqs = [
    {
      question: 'What legal documents should I verify before buying a flat in Mumbai?',
      answer: 'Essential legal documents include the Index II registration deed, chain of title agreements, Society Share Certificate, Commencement Certificate (CC), Occupation Certificate (OC), and MahaRERA project registration status. Atlanta Estate Agency conducts title verification for all listed properties.',
    },
    {
      question: 'How does a Leave & Licence agreement differ from a traditional lease?',
      answer: 'Under the Maharashtra Rent Control Act, residential rentals in Mumbai are executed as registered "Leave & Licence" agreements (typically 11 to 36 months). It grants a temporary permissive licence to occupy without creating perpetual tenancy rights, requiring online bio-metric registration and mandatory stamp duty.',
    },
    {
      question: 'What are the additional government taxes when purchasing Mumbai property?',
      answer: 'Mandatory transaction costs include Stamp Duty (5% for female buyers, 6% for male buyers + 1% Metro Cess in Maharashtra), Sub-Registrar Fee (1% capped at ₹30,000), Society Transfer Premium, Advance Maintenance Deposit, and Legal Conveyancing fees.',
    },
    {
      question: 'How are property valuations calculated in Worli, Bandra, and Powai?',
      answer: 'Property valuations are derived from physical Index II sub-registrar sale registrations in the building or immediate locality, carpet area efficiency, floor height, reserved parking allocation, cooperative society maintenance health, and premium view attributes.',
    },
    {
      question: 'What is MahaRERA and why is it important for buyers?',
      answer: 'MahaRERA (Maharashtra Real Estate Regulatory Authority) enforces consumer protection, mandatory escrow account management, strict completion timelines, and carpet area transparency. Atlanta Estate Agency is registered under MahaRERA Licence No. P51800028472.',
    },
    {
      question: 'Can NRIs (Non-Resident Indians) buy or rent properties through your agency?',
      answer: 'Yes. NRIs and OCI cardholders can acquire residential or commercial property in Mumbai under general RBI permissions without prior government approval. We manage remote property inspections, power of attorney execution, and leave & licence tenancy management.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0F201D] text-[#FFFFFF] pt-28 sm:pt-32 pb-16 lg:pb-24 border-b border-[#243B37] overflow-hidden">
        {/* Fixed Top Hanging Signboards Section - Left, Centre, Right */}
        <div className="absolute top-0 inset-x-0 max-w-7xl mx-auto px-2 sm:px-6 z-30 pointer-events-none">
          <div className="relative w-full h-20 flex justify-between items-start">
            {/* Left Hanging Signboard */}
            <div className="pointer-events-auto group flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-500">
              {/* String attached to top border */}
              <div className="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-[#A67C37] via-[#D4AF37] to-[#A67C37] shadow-md relative">
                <div className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#A67C37] border border-[#FFFFFF]"></div>
              </div>
              {/* Wooden/Brass Hanging Signboard */}
              <div className="bg-[#172B28] border-2 border-[#A67C37] px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xs shadow-2xl text-[#FFFFFF] font-medium text-[11px] sm:text-sm flex items-center justify-center gap-1.5 transform group-hover:rotate-1 transition-transform duration-300 border-t-4 border-t-[#A67C37]">
                <span className="font-serif tracking-wide text-[#FFFFFF] font-bold whitespace-nowrap">
                  Find Your Perfect Place ✨
                </span>
              </div>
            </div>

            {/* Centre Hanging Signboard */}
            <div className="pointer-events-auto group flex flex-col items-center animate-in fade-in slide-in-from-top-6 duration-700">
              {/* String attached to top border */}
              <div className="w-0.5 h-6 sm:h-9 bg-gradient-to-b from-[#A67C37] via-[#D4AF37] to-[#A67C37] shadow-md relative">
                <div className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#A67C37] border border-[#FFFFFF]"></div>
              </div>
              {/* Wooden/Brass Hanging Signboard */}
              <div className="bg-[#172B28] border-2 border-[#A67C37] px-3 sm:px-5 py-2 sm:py-2.5 rounded-xs shadow-2xl text-[#FFFFFF] font-semibold text-xs sm:text-base flex items-center justify-center gap-1.5 transform group-hover:-rotate-1 transition-transform duration-300 border-t-4 border-t-[#A67C37]">
                <span className="font-serif tracking-wide text-[#FFFFFF] font-bold whitespace-nowrap">
                  Where Better Living Begins 🏡
                </span>
              </div>
            </div>

            {/* Right Hanging Signboard */}
            <div className="pointer-events-auto group flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-500">
              {/* String attached to top border */}
              <div className="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-[#A67C37] via-[#D4AF37] to-[#A67C37] shadow-md relative">
                <div className="absolute -top-1 -left-[3px] w-2 h-2 rounded-full bg-[#A67C37] border border-[#FFFFFF]"></div>
              </div>
              {/* Wooden/Brass Hanging Signboard */}
              <div className="bg-[#172B28] border-2 border-[#A67C37] px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xs shadow-2xl text-[#FFFFFF] font-medium text-[11px] sm:text-sm flex items-center justify-center gap-1.5 transform group-hover:rotate-1 transition-transform duration-300 border-t-4 border-t-[#A67C37]">
                <span className="font-serif tracking-wide text-[#FFFFFF] font-bold whitespace-nowrap">
                  Your Property, Your Future 🚀
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#1A332F] text-[#A67C37] px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-xs border border-[#A67C37]/30">
              <Building2 className="w-3.5 h-3.5" />
              Licensed Real Estate Agency in Mumbai • MahaRERA Reg: P51800028472
            </div>

            {/* Factual Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] leading-tight">
              Homes and commercial properties to buy and rent in Mumbai
            </h1>

            {/* Factually grounded supporting line */}
            <p className="text-base sm:text-lg text-[#E2E8F0] font-normal leading-relaxed max-w-2xl">
              Atlanta Estate Agency assists buyers, tenants, and property owners across Bandra West, Worli, Powai, Juhu, Lower Parel, and Thane West.
            </p>

            {/* Two Clear Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('buy')}
                className="btn-accent py-3 px-6 text-sm font-semibold shadow-md"
                type="button"
              >
                <span>Browse Properties</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenValuationModal}
                className="btn-outline border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#0F201D] py-3 px-6 text-sm font-semibold"
                type="button"
              >
                <span>Book a Valuation</span>
              </button>
            </div>
          </div>

          {/* Right Hero Image Slot with Uploaded Property Photo */}
          <div className="lg:col-span-5 relative">
            <div className="card-frame overflow-hidden border-[#A67C37]/50 bg-[#1A332F] shadow-2xl rounded-xs">
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
                alt="Exterior view of luxury sunset villa in Juhu Bandra sector Mumbai"
                loading="eager"
                width="800"
                height="533"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="p-4 bg-[#0F201D] text-xs text-[#E2E8F0] border-t border-[#A67C37]/30 flex items-center justify-between">
                <span className="font-medium">Featured Sector: Juhu &amp; Bandra West</span>
                <span className="text-[#A67C37] font-bold">MahaRERA Registered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Property Search Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12">
          <PropertySearchBar onSearch={onSearch} />
        </div>
      </section>

      {/* 2. FEATURED PROPERTIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E2E8F0] gap-4">
          <div>
            <span className="text-xs font-bold tracking-wider text-[#A67C37] uppercase">
              Current Listings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28] mt-1">
              Featured Properties in Mumbai
            </h2>
          </div>
          <button
            onClick={() => onNavigate('buy')}
            className="btn-outline text-xs py-2 px-4"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.slice(0, 6).map((listing) => (
            <PropertyCard
              key={listing.id}
              listing={listing}
              onSelectProperty={onSelectProperty}
            />
          ))}
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="bg-[#FFFFFF] py-16 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-wider text-[#A67C37] uppercase">
              Core Advisory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28] mt-1">
              Our Real Estate Services
            </h2>
            <p className="text-sm text-[#5A6570] mt-2">
              Straightforward advisory services for buying, leasing, and selling properties across Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-frame p-6 space-y-3">
              <div className="w-10 h-10 bg-[#172B28] text-[#A67C37] rounded-xs flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-[#172B28]">Property Buying</h3>
              <p className="text-xs text-[#5A6570] leading-relaxed">
                Assistance with site visits, property title checks, price negotiation, and documentation for flats in Mumbai.
              </p>
              <button
                onClick={() => onNavigate('buy')}
                className="text-xs font-bold text-[#172B28] hover:text-[#A67C37] flex items-center gap-1 pt-2"
              >
                <span>Browse Buy Listings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="card-frame p-6 space-y-3">
              <div className="w-10 h-10 bg-[#172B28] text-[#A67C37] rounded-xs flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-[#172B28]">Property Renting</h3>
              <p className="text-xs text-[#5A6570] leading-relaxed">
                Verified rental options for families and corporate executives with leave and licence agreement support.
              </p>
              <button
                onClick={() => onNavigate('rent')}
                className="text-xs font-bold text-[#172B28] hover:text-[#A67C37] flex items-center gap-1 pt-2"
              >
                <span>Browse Rental Flats</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="card-frame p-6 space-y-3">
              <div className="w-10 h-10 bg-[#172B28] text-[#A67C37] rounded-xs flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-[#172B28]">Property Selling</h3>
              <p className="text-xs text-[#5A6570] leading-relaxed">
                Market valuation, buyer screening, and complete sale transaction management for Mumbai owners.
              </p>
              <button
                onClick={() => onNavigate('sell')}
                className="text-xs font-bold text-[#172B28] hover:text-[#A67C37] flex items-center gap-1 pt-2"
              >
                <span>Sell With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="card-frame p-6 space-y-3">
              <div className="w-10 h-10 bg-[#172B28] text-[#A67C37] rounded-xs flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-serif text-xl font-bold text-[#172B28]">Property Management</h3>
              <p className="text-xs text-[#5A6570] leading-relaxed">
                Lease renewals, rent collection monitoring, and tenant management for non-resident and resident landlords.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="text-xs font-bold text-[#172B28] hover:text-[#A67C37] flex items-center gap-1 pt-2"
              >
                <span>Inquire Management</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW SELLING WITH US WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider text-[#A67C37] uppercase">
            Transparent Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28] mt-1">
            How Selling With Us Works
          </h2>
          <p className="text-sm text-[#5A6570] mt-2">
            Four practical steps to sell your property in Mumbai without unverified leads or delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-frame p-6 relative space-y-3">
            <span className="text-xs font-bold text-[#A67C37] tracking-wider uppercase">Step 1</span>
            <h3 className="font-serif text-lg font-bold text-[#172B28]">Property Inspection</h3>
            <p className="text-xs text-[#5A6570] leading-relaxed">
              We conduct a physical review of your flat or commercial premises in Mumbai to assess layout and condition.
            </p>
          </div>

          <div className="card-frame p-6 relative space-y-3">
            <span className="text-xs font-bold text-[#A67C37] tracking-wider uppercase">Step 2</span>
            <h3 className="font-serif text-lg font-bold text-[#172B28]">Valuation Report</h3>
            <p className="text-xs text-[#5A6570] leading-relaxed">
              We provide realistic pricing guidance based on recent registered sale deeds in your specific building or locality.
            </p>
          </div>

          <div className="card-frame p-6 relative space-y-3">
            <span className="text-xs font-bold text-[#A67C37] tracking-wider uppercase">Step 3</span>
            <h3 className="font-serif text-lg font-bold text-[#172B28]">Direct Marketing</h3>
            <p className="text-xs text-[#5A6570] leading-relaxed">
              Your listing is shared with pre-qualified buyers and verified corporate clients looking for Mumbai real estate.
            </p>
          </div>

          <div className="card-frame p-6 relative space-y-3">
            <span className="text-xs font-bold text-[#A67C37] tracking-wider uppercase">Step 4</span>
            <h3 className="font-serif text-lg font-bold text-[#172B28]">Sale Closing</h3>
            <p className="text-xs text-[#5A6570] leading-relaxed">
              We coordinate agreement drafting, society NOC clearance, and final registration at the sub-registrar office.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onOpenValuationModal}
            className="btn-primary py-3 px-8 text-xs font-bold"
          >
            Start Valuation Process
          </button>
        </div>
      </section>

      {/* 5. AREAS WE COVER */}
      <section className="bg-[#172B28] text-[#FFFFFF] py-16 border-y border-[#243B37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#243B37] gap-4">
            <div>
              <span className="text-xs font-bold tracking-wider text-[#A67C37] uppercase">
                Location Expertise
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFFFFF] mt-1">
                Areas We Cover in Mumbai
              </h2>
            </div>
            <button
              onClick={() => onNavigate('areas')}
              className="btn-outline border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#172B28] text-xs py-2 px-4"
            >
              <span>Explore All Mumbai Areas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Worli', desc: 'Sea face residential towers and commercial headquarters.', count: 'Primary Sector' },
              { name: 'Bandra West', desc: 'Prime luxury flats, Pali Hill residences, and sea view apartments.', count: 'Primary Sector' },
              { name: 'Powai', desc: 'Hiranandani township residences and lake facing penthouses.', count: 'Primary Sector' },
              { name: 'Juhu', desc: 'Coastal villas, low-density luxury buildings, and beachside rentals.', count: 'Primary Sector' },
              { name: 'Lower Parel', desc: 'Commercial business hubs, corporate offices, and modern high-rises.', count: 'Commercial Hub' },
              { name: 'Thane West', desc: 'Spacious residential complexes along Ghodbunder Road.', count: 'Growth Sector' },
            ].map((area) => (
              <button
                key={area.name}
                onClick={() => {
                  onSearch({ location: area.name });
                  onNavigate('buy');
                }}
                className="text-left bg-[#243B37] border border-[#2A4540] hover:border-[#A67C37] p-5 rounded-xs transition-colors group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-[#FFFFFF] group-hover:text-[#A67C37] transition-colors">
                    {area.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#172B28] text-[#A67C37] px-2 py-0.5 rounded-xs border border-[#A67C37]/30">
                    {area.count}
                  </span>
                </div>
                <p className="text-xs text-[#E2E8F0]">{area.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#A67C37]">
                  <span>View Properties in {area.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TEAM PREVIEW - REAL INDIAN NAMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E2E8F0] gap-4">
          <div>
            <span className="text-xs font-bold tracking-wider text-[#A67C37] uppercase">
              Our Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28] mt-1">
              Experienced Real Estate Team
            </h2>
          </div>
          <button
            onClick={() => onNavigate('team')}
            className="btn-outline text-xs py-2 px-4"
          >
            <span>Meet Full Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Rajesh Sharma',
              role: 'Founder & Managing Director',
              desc: 'Specialising in Worli and Bandra West high-value residential transactions with 18+ years in Mumbai real estate.',
            },
            {
              name: 'Priya Kulkarni',
              role: 'Senior Luxury Consultant',
              desc: 'Handling leasing and luxury residential acquisitions across Powai lakefront and Juhu Beach sectors.',
            },
            {
              name: 'Amitabh Varma',
              role: 'Commercial Real Estate Lead',
              desc: 'Advising corporate tenants and buyers in Lower Parel business hubs and Thane West commercial complexes.',
            },
          ].map((member, i) => (
            <div key={i} className="card-frame p-6 text-center space-y-4">
              <div className="w-20 h-20 bg-[#172B28] text-[#A67C37] rounded-full mx-auto flex items-center justify-center font-serif text-2xl font-bold border-2 border-[#A67C37]">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#172B28]">{member.name}</h3>
                <p className="text-xs font-semibold text-[#A67C37]">{member.role}</p>
              </div>
              <p className="text-xs text-[#5A6570] leading-relaxed">{member.desc}</p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hello ${member.name}, I would like to speak with you regarding property in Mumbai.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-bold hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Contact on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="bg-[#FFFFFF] py-16 border-y border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold tracking-wider text-[#A67C37] uppercase flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#A67C37]" />
              Mumbai Real Estate Guide
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6570] leading-relaxed">
              Clear information regarding property purchases, Leave &amp; Licence agreements, and MahaRERA compliance in Mumbai.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`card-frame border transition-all duration-200 ${
                    isOpen
                      ? 'border-[#A67C37] shadow-md bg-[#F8F9FA]'
                      : 'border-[#E2E8F0] hover:border-[#A67C37]/50 bg-[#FFFFFF]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#172B28] pr-2">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#172B28] text-[#A67C37]' : 'bg-[#F1F5F9] text-[#172B28]'
                    }`}>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-[#5A6570] leading-relaxed border-t border-[#E2E8F0]/60 mt-1 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-6 bg-[#172B28] text-[#FFFFFF] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#FFFFFF]">Have a Specific Property Query?</h3>
              <p className="text-xs text-[#E2E8F0] mt-0.5">Speak with our senior real estate consultants for custom advice in Mumbai.</p>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Atlanta Estate Agency, I have a specific property query regarding Mumbai real estate.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-xs py-2.5 px-5 font-bold shrink-0 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. CLIENT EXPERIENCES SLIDER */}
      <ClientExperiencesSlider />

      {/* 8. CONTACT STRIP WITH NAP & MAP */}
      <section className="bg-[#FFFFFF] py-12 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold tracking-wider text-[#A67C37] uppercase">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#172B28]">
              Visit Our Agency Office
            </h2>
            <p className="text-xs text-[#5A6570] leading-relaxed">
              We welcome prospective buyers, sellers, and tenants to visit our Mumbai office or schedule a phone consultation.
            </p>

            <div className="space-y-3 pt-2 text-xs text-[#1E252B]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A67C37] shrink-0 mt-0.5" />
                <div>
                  <strong>Address:</strong> {agencyAddress}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A67C37] shrink-0" />
                <div>
                  <strong>Phone:</strong> {agencyPhone}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#A67C37] shrink-0" />
                <div>
                  <strong>Hours:</strong> Mon - Sat: 9:30 AM to 7:30 PM
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary text-xs py-2.5 px-5 font-bold"
              >
                Contact Page
              </button>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2.5 px-5 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-[#FFFFFF] font-bold"
              >
                Direct WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Embedded map placeholder */}
            <div className="card-frame overflow-hidden h-72 relative bg-[#F1F5F9]">
              <iframe
                title="Atlanta Estate Agency Mumbai Map"
                src="https://maps.google.com/maps?q=Hill+Road,+Bandra+West,+Mumbai,+Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
