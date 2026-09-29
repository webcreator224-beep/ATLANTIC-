import React from 'react';
import { Home, Search, Building2, Phone, MessageSquare, Sparkles, SlidersHorizontal } from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenValuationModal: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPage,
  onNavigate,
  onOpenValuationModal,
}) => {
  const agencyPhone = '+918975456378';
  const whatsappNumber = '918975456378';

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0F201D] text-[#E2E8F0] border-t border-[#A67C37]/50 shadow-2xl px-2 py-2 backdrop-blur-md bg-opacity-95">
      <div className="grid grid-cols-5 items-center text-center gap-1">
        {/* Home */}
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center justify-center py-1 rounded-xs transition-colors ${
            currentPage === 'home'
              ? 'text-[#A67C37] font-bold'
              : 'text-[#94A3B8] hover:text-[#FFFFFF]'
          }`}
          aria-label="Home"
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Home</span>
        </button>

        {/* Buy */}
        <button
          onClick={() => onNavigate('buy')}
          className={`flex flex-col items-center justify-center py-1 rounded-xs transition-colors ${
            currentPage === 'buy'
              ? 'text-[#A67C37] font-bold'
              : 'text-[#94A3B8] hover:text-[#FFFFFF]'
          }`}
          aria-label="Buy Properties"
        >
          <Search className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Buy</span>
        </button>

        {/* Valuation Button (Center Highlight) */}
        <button
          onClick={onOpenValuationModal}
          className="flex flex-col items-center justify-center py-1 bg-[#A67C37] text-[#FFFFFF] rounded-xs shadow-md active:scale-95 transition-transform"
          aria-label="Book Valuation"
        >
          <Sparkles className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-bold">Valuation</span>
        </button>

        {/* Phone Call */}
        <a
          href={`tel:${agencyPhone}`}
          className="flex flex-col items-center justify-center py-1 text-[#94A3B8] hover:text-[#FFFFFF] transition-colors"
          aria-label="Call Agency"
        >
          <Phone className="w-5 h-5 mb-0.5 text-[#A67C37]" />
          <span className="text-[10px]">Call Us</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            'Hello Atlanta Estate Agency, I need assistance with property in Mumbai.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#25D366] hover:text-[#FFFFFF] transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
