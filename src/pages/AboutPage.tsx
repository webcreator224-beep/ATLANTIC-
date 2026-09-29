import React from 'react';
import { Building2, ShieldCheck, MapPin, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

interface AboutPageProps {
  onOpenValuationModal: () => void;
  onNavigateToContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenValuationModal,
  onNavigateToContact,
}) => {
  const agencyPhone = '+91 8975456378';
  const whatsappNumber = '918975456378';
  const reraLicence = 'P51800028472';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E2E8F0] pb-6">
        <span className="text-xs font-bold text-[#A67C37] uppercase tracking-wider">
          Company Overview
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28] mt-1">
          About Atlanta Estate Agency
        </h1>
        <p className="text-sm text-[#5A6570] mt-2 max-w-2xl">
          Independent real estate consultancy based in Mumbai, representing property buyers, tenants, and owners across prime residential and commercial sectors.
        </p>
      </div>

      {/* Main Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-4 text-sm text-[#1E252B] leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-[#172B28]">
            Practical Advisory in Mumbai Real Estate
          </h2>
          <p>
            Atlanta Estate Agency was established to provide transparent real estate services in Mumbai. We operate across key residential localities including Bandra West, Worli, Powai, Juhu, Lower Parel, and Thane West.
          </p>
          <p>
            Our core focus is assisting clients through verified property search, realistic valuation assessments, and clear legal documentation. We do not engage in speculative pricing or unverified listings.
          </p>
          <p>
            Whether you are looking to purchase a family residence, lease commercial office space, or list a property for sale, our team coordinates every stage of the transaction directly.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={onOpenValuationModal}
              className="btn-primary text-xs py-2.5 px-5 font-bold"
            >
              Book a Valuation
            </button>
            <button
              onClick={onNavigateToContact}
              className="btn-outline text-xs py-2.5 px-5 font-bold"
            >
              Contact Our Office
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="card-frame overflow-hidden border border-[#E2E8F0]">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
              alt="Atlanta Estate Agency consultation lounge in Bandra West Mumbai"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full h-52 object-cover"
            />
          </div>

          <div className="card-frame p-6 bg-[#172B28] text-[#FFFFFF] space-y-4">
            <div className="w-10 h-10 bg-[#243B37] text-[#A67C37] rounded-xs flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#FFFFFF]">
              Agency Licence &amp; Compliance
            </h3>
            <p className="text-xs text-[#E2E8F0] leading-relaxed">
              Atlanta Estate Agency maintains complete compliance with Maharashtra Real Estate Regulatory Authority standards.
            </p>
            <div className="text-xs text-[#A67C37] font-bold border-t border-[#243B37] pt-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#A67C37]" />
              <span>MahaRERA Registration: {reraLicence}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Operational Principles */}
      <div className="bg-[#FFFFFF] p-8 border border-[#E2E8F0] rounded-xs space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#172B28]">
          Our Operational Standards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-serif text-lg font-bold text-[#172B28]">
              <CheckCircle2 className="w-5 h-5 text-[#A67C37]" />
              <span>Verified Title Checks</span>
            </div>
            <p className="text-xs text-[#5A6570] leading-relaxed">
              Every property listed for sale or rent undergoes primary document checks, cooperative society verification, and title validation.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-serif text-lg font-bold text-[#172B28]">
              <CheckCircle2 className="w-5 h-5 text-[#A67C37]" />
              <span>Factual Market Valuations</span>
            </div>
            <p className="text-xs text-[#5A6570] leading-relaxed">
              Property prices are based on physical sub-registrar index II sale registrations in the locality rather than inflated portal estimates.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-serif text-lg font-bold text-[#172B28]">
              <CheckCircle2 className="w-5 h-5 text-[#A67C37]" />
              <span>End-to-End Execution</span>
            </div>
            <p className="text-xs text-[#5A6570] leading-relaxed">
              We manage society NOC clearance, leave and licence registration, sale deed execution, and final possession handover.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
