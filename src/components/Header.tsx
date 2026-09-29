import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Building2, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onOpenValuationModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenValuationModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const agencyPhone = '+91 8975456378';
  const whatsappNumber = '918975456378';
  const reraLicence = 'P51800028472';

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'buy', label: 'Buy Properties' },
    { id: 'rent', label: 'Rent Properties' },
    { id: 'sell', label: 'Sell With Us' },
    { id: 'areas', label: 'Areas We Cover' },
    { id: 'about', label: 'About Agency' },
    { id: 'team', label: 'Leadership' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-t-2 border-[#A67C37] shadow-xl">
      {/* Dense Upper Announcement & Contact Strip */}
      <div className="bg-[#0A1A17] text-[#E2E8F0] text-xs py-1.5 px-4 sm:px-8 border-b border-[#1E3833]/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* RERA Badge & Location Scope */}
          <div className="flex items-center gap-3 text-[11px] font-medium overflow-x-auto whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 bg-[#172B28] text-[#A67C37] px-2.5 py-0.5 rounded-xs border border-[#A67C37]/30 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A67C37]" />
              MahaRERA: {reraLicence}
            </span>
            <span className="hidden sm:inline text-[#64748B]">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#CBD5E1]">
              <MapPin className="w-3 h-3 text-[#A67C37]" />
              Bandra • Worli • Powai • Juhu • Lower Parel • Thane
            </span>
          </div>

          {/* Direct Phone & WhatsApp CTAs */}
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden lg:inline-flex items-center gap-1 text-[#94A3B8]">
              <Clock className="w-3 h-3 text-[#A67C37]" />
              Mon - Sat: 9:30 AM - 7:30 PM
            </span>
            <span className="hidden lg:inline text-[#64748B]">•</span>
            <a
              href={`tel:${agencyPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 font-semibold text-[#FFFFFF] hover:text-[#A67C37] transition-colors"
              aria-label="Call Atlanta Estate Agency"
            >
              <Phone className="w-3.5 h-3.5 text-[#A67C37]" />
              <span>{agencyPhone}</span>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Hello Atlanta Estate Agency, I am looking for property assistance in Mumbai.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#25D366] hover:text-[#FFFFFF] transition-colors bg-[#25D366]/10 px-2 py-0.5 rounded-xs border border-[#25D366]/30"
              aria-label="Chat on WhatsApp"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
              </span>
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Online</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main High-Visibility Denser Navigation Bar */}
      <div className="bg-[#112421]/95 backdrop-blur-md text-[#FFFFFF] border-b border-[#A67C37]/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Logo Wordmark with Metallic Monogram Badge */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-hidden focus:ring-2 focus:ring-[#A67C37] rounded-xs group"
          >
            <div className="w-10 h-10 bg-[#A67C37] text-[#112421] font-serif text-2xl font-bold rounded-xs flex items-center justify-center shadow-md group-hover:bg-[#FFFFFF] transition-colors shrink-0 border border-[#FFFFFF]/20">
              A
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFFFF] block leading-none group-hover:text-[#A67C37] transition-colors">
                ATLANTA
              </span>
              <span className="text-[10px] tracking-[0.2em] font-bold text-[#A67C37] uppercase block mt-1">
                ESTATE AGENCY • MUMBAI
              </span>
            </div>
          </button>

          {/* Dense Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0A1A17]/60 p-1.5 rounded-xs border border-[#243B37]" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs font-semibold px-3 py-2 rounded-xs transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#A67C37] text-[#FFFFFF] shadow-sm font-bold'
                      : 'text-[#CBD5E1] hover:bg-[#1E3833] hover:text-[#FFFFFF]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button Group */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenValuationModal}
              className="btn-accent py-2.5 px-4 text-xs font-semibold shadow-md hover:shadow-lg transition-all border border-[#FFFFFF]/20"
              type="button"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFFFFF]" />
              <span>Book Valuation</span>
            </button>
          </div>

          {/* Mobile Navigation Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#FFFFFF] hover:bg-[#1E3833] rounded-xs focus:outline-hidden focus:ring-2 focus:ring-[#A67C37] border border-[#A67C37]/40"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Full-Featured Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1A17] border-b border-[#A67C37] px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top duration-200">
            <div className="p-3 bg-[#112421] border border-[#243B37] rounded-xs text-xs text-[#CBD5E1] space-y-2">
              <div className="flex items-center justify-between text-[#A67C37] font-semibold">
                <span>MahaRERA: {reraLicence}</span>
                <span className="text-[#25D366]">Online</span>
              </div>
              <p>Mumbai Real Estate Consultants • Bandra, Worli, Powai, Juhu</p>
            </div>

            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 text-sm font-semibold rounded-xs transition-colors ${
                      isActive
                        ? 'bg-[#A67C37] text-[#FFFFFF]'
                        : 'text-[#E2E8F0] hover:bg-[#112421]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-[#1E3833] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenValuationModal();
                }}
                className="btn-accent w-full py-3 text-xs font-semibold"
              >
                Book a Property Valuation
              </button>
              <a
                href={`tel:${agencyPhone.replace(/\s+/g, '')}`}
                className="btn-outline w-full py-3 text-xs font-semibold border-[#FFFFFF] text-[#FFFFFF]"
              >
                <Phone className="w-4 h-4" />
                <span>Call {agencyPhone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
