import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateToBuy: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateToBuy,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-20 text-center space-y-6">
      <div className="w-16 h-16 bg-[#172B28] text-[#A67C37] rounded-xs flex items-center justify-center font-serif text-2xl font-bold mx-auto border border-[#A67C37]">
        404
      </div>
      <span className="text-xs font-semibold text-[#A67C37] uppercase tracking-wider block">
        Page Not Found
      </span>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28]">
        The requested page does not exist
      </h1>
      <p className="text-sm text-[#5A6570] max-w-md mx-auto leading-relaxed">
        The URL you entered may have been moved or updated. You can return to our homepage or explore our property search listings.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button onClick={onNavigateHome} className="btn-primary py-2.5 px-6 text-xs">
          Return to Homepage
        </button>
        <button onClick={onNavigateToBuy} className="btn-outline py-2.5 px-6 text-xs">
          <span>Browse Buy Properties</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
