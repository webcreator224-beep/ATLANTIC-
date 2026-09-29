import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, MapPin, Building2 } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: 'Buyer' | 'Renter' | 'Owner';
  propertyType: string;
  quote: string;
  rating: number;
  date: string;
  imageUrl: string;
}

export const ClientExperiencesSlider: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Karan & Radhika Singhania',
      location: 'Worli Sea Face, Mumbai',
      role: 'Buyer',
      propertyType: '3 BHK Sea Face Luxury Flat',
      quote:
        'Rajesh and the team at Atlanta Estate Agency provided absolute pricing clarity based on registered Index II sale precedent records in Worli. Their legal verification and society NOC coordination made buying our dream sea-view home completely stress-free.',
      rating: 5,
      date: 'August 2026',
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '2',
      name: 'Ananya Deshmukh',
      location: 'Juhu Tara Road, Mumbai',
      role: 'Renter',
      propertyType: '2 BHK Fully Furnished Rental',
      quote:
        'Finding a verified beachside apartment in Juhu usually takes weeks. Priya shortlisted three genuine properties on day one and facilitated the biometric Leave & Licence registration within 48 hours.',
      rating: 5,
      date: 'September 2026',
      imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '3',
      name: 'Siddharth & Meera Merchant',
      location: 'Hiranandani Gardens, Powai',
      role: 'Buyer',
      propertyType: '4 BHK Duplex Penthouse',
      quote:
        'We specifically wanted a lake-facing duplex penthouse in Powai. Atlanta Estate Agency arranged access to an off-market listing and guided us through society share certificate transfer seamlessly.',
      rating: 5,
      date: 'July 2026',
      imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '4',
      name: 'Dr. Vikram Sethi',
      location: 'Pali Hill, Bandra West',
      role: 'Buyer',
      propertyType: '4 BHK Independent Villa',
      quote:
        'Pali Hill transactions demand meticulous title chain checks and MahaRERA compliance expertise. Atlanta Estate Agency represented us with utmost discretion and professional integrity.',
      rating: 5,
      date: 'June 2026',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '5',
      name: 'Rohan & Neha Kapoor',
      location: 'Lower Parel, Mumbai',
      role: 'Renter',
      propertyType: '3 BHK High-Rise Apartment',
      quote:
        'Relocating to Lower Parel for work required a quick rental setup. The team negotiated fair lease terms, coordinated society car parking allocation, and delivered a hassle-free move-in experience.',
      rating: 5,
      date: 'September 2026',
      imageUrl: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto scroll every 5 seconds unless user interacts
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-[#0F201D] text-[#FFFFFF] py-16 border-y border-[#243B37] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#243B37] gap-4">
          <div>
            <span className="text-xs font-bold tracking-wider text-[#A67C37] uppercase flex items-center gap-1.5">
              <Quote className="w-4 h-4 text-[#A67C37]" />
              Verified Client Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFFFFF] mt-1">
              Client Experiences in Mumbai
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xs bg-[#172B28] hover:bg-[#A67C37] hover:text-[#FFFFFF] text-[#A67C37] border border-[#A67C37]/40 flex items-center justify-center transition-colors focus:outline-hidden"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold text-[#A67C37] tracking-widest px-2">
              0{currentIndex + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xs bg-[#172B28] hover:bg-[#A67C37] hover:text-[#FFFFFF] text-[#A67C37] border border-[#A67C37]/40 flex items-center justify-center transition-colors focus:outline-hidden"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Slider Main Card */}
        <div className="relative bg-[#172B28] border border-[#243B37] p-6 sm:p-10 rounded-xs shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Photo & Badges */}
            <div className="lg:col-span-5 relative">
              <div className="card-frame overflow-hidden border border-[#A67C37]/40 relative">
                <img
                  src={currentTestimonial.imageUrl}
                  alt={`Property in ${currentTestimonial.location}`}
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F201D] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#E2E8F0] font-semibold">
                  <span className="bg-[#172B28]/90 text-[#A67C37] border border-[#A67C37]/40 px-2.5 py-1 rounded-xs flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[#A67C37]" />
                    {currentTestimonial.propertyType}
                  </span>
                  <span className="bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 px-2 py-0.5 rounded-xs flex items-center gap-1 text-[11px]">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Transaction
                  </span>
                </div>
              </div>
            </div>

            {/* Right Quote Content */}
            <div className="lg:col-span-7 space-y-5">
              {/* Star Rating & Role Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#243B37] pb-4">
                <div className="flex items-center gap-1 text-[#A67C37]">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A67C37]" />
                  ))}
                  <span className="text-xs text-[#CBD5E1] ml-2 font-semibold">5.0 Star Experience</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider bg-[#243B37] text-[#A67C37] px-3 py-1 rounded-xs border border-[#A67C37]/30">
                  {currentTestimonial.role} • {currentTestimonial.date}
                </span>
              </div>

              {/* Quote text */}
              <blockquote className="font-serif text-lg sm:text-xl text-[#F8F9FA] leading-relaxed italic relative pl-4 border-l-2 border-[#A67C37]">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="pt-2">
                <h3 className="font-serif text-xl font-bold text-[#FFFFFF]">
                  {currentTestimonial.name}
                </h3>
                <p className="text-xs text-[#A67C37] font-semibold flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#A67C37]" />
                  <span>{currentTestimonial.location}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-hidden ${
                currentIndex === idx
                  ? 'w-8 bg-[#A67C37]'
                  : 'w-2.5 bg-[#243B37] hover:bg-[#A67C37]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
