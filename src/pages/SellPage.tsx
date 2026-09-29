import React, { useState } from 'react';
import { Send, Check, ShieldCheck, Building2, Phone, MessageSquare, FileText, CheckCircle2 } from 'lucide-react';

interface SellPageProps {
  onNavigateToPrivacy: () => void;
}

export const SellPage: React.FC<SellPageProps> = ({ onNavigateToPrivacy }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [buildingName, setBuildingName] = useState('');
  const [location, setLocation] = useState('Bandra West');
  const [propertyType, setPropertyType] = useState('2 BHK Apartment');
  const [carpetArea, setCarpetArea] = useState('');
  const [expectedPrice, setExpectedPrice] = useState('');
  const [timeline, setTimeline] = useState('Immediate (within 1 month)');
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const agencyPhone = '+91 8975456378';
  const whatsappNumber = '918975456378';

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
    if (!buildingName.trim()) errs.buildingName = 'Building or society name is required.';
    if (!consent) errs.consent = 'You must accept the Privacy Policy to submit your listing.';
    if (honeypot) errs.bot = 'Spam detected.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Form submission endpoint simulation: POST /api/sell-valuation
    console.log('Valuation Request:', {
      fullName,
      phone,
      email,
      buildingName,
      location,
      propertyType,
      carpetArea,
      expectedPrice,
      timeline,
      notes,
      submittedAt: new Date().toISOString(),
    });

    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E2E8F0] pb-6">
        <span className="text-xs font-bold text-[#A67C37] uppercase tracking-wider">
          Property Owner Services
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28] mt-1">
          Sell Your Flat or Property in Mumbai
        </h1>
        <p className="text-sm text-[#5A6570] mt-2 max-w-2xl">
          Request a physical inspection and realistic valuation based on recent registered transactions in your society or neighbourhood.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form */}
        <div className="lg:col-span-7 card-frame p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-[#172B28] mb-2">
            Property Valuation &amp; Listing Submission
          </h2>
          <p className="text-xs text-[#5A6570] mb-6">
            Fill in the property details below. A senior consultant will review recent society sale precedents and schedule a site visit.
          </p>

          {submitted ? (
            <div className="bg-[#F8F9FA] border border-[#E2E8F0] p-8 text-center space-y-4 rounded-xs">
              <div className="w-12 h-12 bg-[#172B28] text-[#A67C37] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#172B28]">
                Submission Received
              </h3>
              <p className="text-sm text-[#5A6570] max-w-md mx-auto leading-relaxed">
                Thank you, {fullName}. Our valuation specialist for {location} will contact you at {phone} within 2 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs py-2.5 px-6 font-bold"
                >
                  Submit Another Property
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <input
                type="text"
                name="fax_number"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    placeholder="e.g. Vikram Mehta"
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
                  placeholder="e.g. vikram@example.com"
                />
                {errors.email && (
                  <p className="text-[11px] text-[#DC2626] mt-1">{errors.email}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="buildingName" className="block text-xs font-semibold text-[#172B28] mb-1">
                    Building / Society Name <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    id="buildingName"
                    type="text"
                    value={buildingName}
                    onChange={(e) => setBuildingName(e.target.value)}
                    className={`w-full bg-[#F8F9FA] border ${
                      errors.buildingName ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
                    } rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]`}
                    placeholder="e.g. Samudra Towers"
                  />
                  {errors.buildingName && (
                    <p className="text-[11px] text-[#DC2626] mt-1">{errors.buildingName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="location" className="block text-xs font-semibold text-[#172B28] mb-1">
                    Location / Area
                  </label>
                  <select
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
                  >
                    <option value="Worli">Worli</option>
                    <option value="Bandra West">Bandra West</option>
                    <option value="Powai">Powai</option>
                    <option value="Juhu">Juhu</option>
                    <option value="Lower Parel">Lower Parel</option>
                    <option value="Thane West">Thane West</option>
                    <option value="Other Area in Mumbai">Other Area in Mumbai</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="propertyType" className="block text-xs font-semibold text-[#172B28] mb-1">
                    Property Configuration
                  </label>
                  <select
                    id="propertyType"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
                  >
                    <option value="1 BHK Apartment">1 BHK Apartment</option>
                    <option value="2 BHK Apartment">2 BHK Apartment</option>
                    <option value="3 BHK Apartment">3 BHK Apartment</option>
                    <option value="4+ BHK / Penthouse">4+ BHK / Penthouse</option>
                    <option value="Commercial Space">Commercial Space</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="carpetArea" className="block text-xs font-semibold text-[#172B28] mb-1">
                    Carpet Area (sq ft)
                  </label>
                  <input
                    id="carpetArea"
                    type="text"
                    value={carpetArea}
                    onChange={(e) => setCarpetArea(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
                    placeholder="e.g. 1250"
                  />
                </div>

                <div>
                  <label htmlFor="expectedPrice" className="block text-xs font-semibold text-[#172B28] mb-1">
                    Expected Price (₹)
                  </label>
                  <input
                    id="expectedPrice"
                    type="text"
                    value={expectedPrice}
                    onChange={(e) => setExpectedPrice(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
                    placeholder="e.g. 4.5 Cr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-xs font-semibold text-[#172B28] mb-1">
                  Target Sale Timeline
                </label>
                <select
                  id="timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
                >
                  <option value="Immediate (within 1 month)">Immediate (within 1 month)</option>
                  <option value="1 to 3 months">1 to 3 months</option>
                  <option value="3 to 6 months">3 to 6 months</option>
                  <option value="Just exploring market value">Just exploring market value</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-[#172B28] mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
                  placeholder="Mention floor number, parking slots, sea view, or renovation status..."
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#5A6570]">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded-xs border-[#E2E8F0] text-[#172B28] focus:ring-[#172B28]"
                  />
                  <span>
                    I agree to allow Atlanta Estate Agency to store my information in accordance with the{' '}
                    <button
                      type="button"
                      onClick={onNavigateToPrivacy}
                      className="underline text-[#172B28] hover:text-[#A67C37]"
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

              <div className="pt-2">
                <button type="submit" className="btn-primary w-full py-3 font-bold text-xs">
                  <Send className="w-4 h-4" />
                  <span>Submit Property for Valuation</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card-frame p-6 bg-[#172B28] text-[#FFFFFF]">
            <h3 className="font-serif text-xl font-bold text-[#FFFFFF] mb-3">
              Why List With Atlanta Estate Agency?
            </h3>
            <ul className="space-y-3 text-xs text-[#E2E8F0]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A67C37] shrink-0 mt-0.5" />
                <span>
                  <strong>Data-backed valuations:</strong> Based on physical sub-registrar index II sale registrations, not inflated portal listings.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A67C37] shrink-0 mt-0.5" />
                <span>
                  <strong>Qualified buyers:</strong> Direct access to vetted corporate clients and genuine buyers in Worli, Bandra, and Powai.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A67C37] shrink-0 mt-0.5" />
                <span>
                  <strong>Full Legal Support:</strong> Guidance with cooperative housing society NOCs, share certificate transfers, and sub-registrar deeds.
                </span>
              </li>
            </ul>
          </div>

          <div className="card-frame p-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#172B28]">
              Prefer Direct Telephone Assistance?
            </h3>
            <p className="text-xs text-[#5A6570] leading-relaxed">
              Speak directly with our managing consultant for immediate property queries or valuation appointments.
            </p>
            <div className="space-y-2 pt-1 text-xs font-semibold text-[#172B28]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A67C37]" />
                <span>{agencyPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline"
                >
                  WhatsApp: +91 8975456378
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
