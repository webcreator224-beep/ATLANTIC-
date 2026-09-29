import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const CookieNotice: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('atlanta_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (accepted: boolean) => {
    localStorage.setItem('atlanta_cookie_consent', accepted ? 'accepted' : 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-[#172B28] text-[#FFFFFF] border-t border-[#243B37] p-4 sm:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#A67C37] shrink-0 mt-0.5" />
          <p className="text-[#E2E8F0] leading-relaxed">
            We use essential cookies to ensure the proper functioning of our property search and valuation tools. No non-essential tracking cookies are stored without your consent.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleChoice(false)}
            className="btn-outline py-2 px-4 text-xs border-[#94A3B8] text-[#FFFFFF] hover:bg-[#243B37]"
            type="button"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="btn-accent py-2 px-4 text-xs"
            type="button"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
};
