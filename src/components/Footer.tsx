import React from 'react';
import { MapPin, Phone, Mail, Building2, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const agencyPhone = '+91 8975456378';
  const whatsappNumber = '918975456378';
  const agencyEmail = 'contact@atlantaestateagency.in';
  const agencyAddress = 'Suite 402, Atlanta Chambers, Hill Road, Bandra West, Mumbai, Maharashtra 400050';
  const reraLicence = 'P51800028472';

  return (
    <footer className="bg-[#0A1A17] text-[#E2E8F0] pt-14 pb-8 border-t-2 border-[#A67C37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1E3833]">
          {/* Brand & NAP Block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#A67C37] text-[#0A1A17] font-serif font-bold text-xl rounded-xs flex items-center justify-center">
                A
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#FFFFFF] block leading-none">
                  ATLANTA
                </span>
                <span className="text-[10px] tracking-[0.2em] font-bold text-[#A67C37] uppercase block mt-1">
                  ESTATE AGENCY • MUMBAI
                </span>
              </div>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Licensed Mumbai real estate consultancy specializing in residential sales, corporate leasing, and property valuations across Bandra West, Worli, Powai, Juhu, Lower Parel, and Thane West.
            </p>
            <div className="pt-2 text-xs text-[#E2E8F0] space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A67C37] shrink-0 mt-0.5" />
                <span>
                  <strong>Address:</strong> {agencyAddress}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A67C37] shrink-0" />
                <span>
                  <strong>Phone:</strong> {agencyPhone}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A67C37] shrink-0" />
                <span>
                  <strong>Email:</strong> {agencyEmail}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#A67C37] shrink-0" />
                <span>
                  <strong>MahaRERA Reg:</strong> {reraLicence}
                </span>
              </div>
            </div>
          </div>

          {/* Property Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#FFFFFF] mb-4 border-b border-[#1E3833] pb-2">
              Mumbai Properties
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('buy')}
                  className="hover:text-[#FFFFFF] text-[#CBD5E1] transition-colors"
                >
                  Luxury Flats to Buy in Mumbai
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rent')}
                  className="hover:text-[#FFFFFF] text-[#CBD5E1] transition-colors"
                >
                  Verified Rental Apartments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sell')}
                  className="hover:text-[#FFFFFF] text-[#CBD5E1] transition-colors"
                >
                  Sell Your Property with Atlanta
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('areas')}
                  className="hover:text-[#FFFFFF] text-[#CBD5E1] transition-colors"
                >
                  Properties in Bandra West &amp; Worli
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('areas')}
                  className="hover:text-[#FFFFFF] text-[#CBD5E1] transition-colors"
                >
                  Properties in Powai &amp; Juhu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('areas')}
                  className="hover:text-[#FFFFFF] text-[#CBD5E1] transition-colors"
                >
                  Lower Parel &amp; Thane West Complexes
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#FFFFFF] mb-4 border-b border-[#1E3833] pb-2">
              Agency &amp; Legal
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FFFFFF] text-[#CBD5E1] transition-colors"
                >
                  About Atlanta Estate Agency
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('team')}
                  className="hover:text-[#FFFFFF] text-[#CBD5E1] transition-colors"
                >
                  Our Leadership Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('areas')}
                  className="hover:text-[#FFFFFF] text-[#CBD5E1] transition-colors"
                >
                  Areas We Cover in Mumbai
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FFFFFF] text-[#CBD5E1] transition-colors"
                >
                  Contact Our Office
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-[#FFFFFF] text-[#CBD5E1] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-[#FFFFFF] text-[#CBD5E1] transition-colors"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Hours & WhatsApp */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#FFFFFF] border-b border-[#1E3833] pb-2">
              Office Hours &amp; Enquiries
            </h3>
            <div className="text-xs text-[#CBD5E1] space-y-1.5">
              <div className="flex items-center gap-2 text-[#E2E8F0] font-semibold">
                <Clock className="w-4 h-4 text-[#A67C37]" />
                <span>Operating Schedule:</span>
              </div>
              <p>Monday to Saturday: 09:30 AM to 07:30 PM</p>
              <p>Sunday: By Prior Appointment</p>
            </div>
            <div className="pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  'Hello Atlanta Estate Agency, I would like to schedule a property consultation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent w-full text-xs py-2.5 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp ({agencyPhone})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#94A3B8] gap-4">
          <p>
            &copy; {currentYear} Atlanta Estate Agency Pvt. Ltd. All rights reserved. MahaRERA Reg: {reraLicence}.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:underline hover:text-[#FFFFFF]"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:underline hover:text-[#FFFFFF]"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
