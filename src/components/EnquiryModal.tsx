import React, { useState } from 'react';
import { X, Check, ShieldCheck, Building2, Phone, Mail, Send } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  propertyTitle?: string;
  onNavigateToPrivacy?: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  title = 'Book a Property Valuation',
  subtitle = 'Get an accurate, expert valuation for your flat or commercial property in Mumbai.',
  propertyTitle,
  onNavigateToPrivacy,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Bandra West');
  const [propertyType, setPropertyType] = useState('2 BHK Flat');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Spam honeypot

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
    if (!consent) {
      errs.consent = 'You must accept the Privacy Policy to submit an enquiry.';
    }
    if (honeypot) {
      errs.bot = 'Spam detected.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Placeholder backend endpoint simulation
    // Form action placeholder: POST /api/valuation-enquiry
    console.log('Form submission:', {
      fullName,
      phone,
      email,
      location,
      propertyType,
      propertyTitle,
      message,
      submittedAt: new Date().toISOString(),
    });

    setSubmitted(true);
  };

  const resetForm = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setConsent(false);
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#172B28]/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-[#FFFFFF] border border-[#E2E8F0] shadow-xl max-w-lg w-full rounded-xs overflow-hidden my-8 relative">
        {/* Header */}
        <div className="bg-[#172B28] text-[#FFFFFF] px-6 py-5 flex items-start justify-between border-b border-[#243B37]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#FFFFFF]">{title}</h2>
            <p className="text-xs text-[#E2E8F0] mt-1">{subtitle}</p>
          </div>
          <button
            onClick={resetForm}
            className="text-[#E2E8F0] hover:text-[#FFFFFF] p-1 rounded-xs focus:outline-hidden"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-[#172B28] text-[#A67C37] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#172B28]">
                Enquiry Received
              </h3>
              <p className="text-sm text-[#5A6570] max-w-sm mx-auto leading-relaxed">
                Thank you, {fullName}. Our senior consultant will contact you at {phone} within 2 hours during office working hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="btn-primary w-full py-2.5 text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Form Action Comment */}
              {/* Form wired to placeholder endpoint /api/valuation-enquiry */}

              {/* Honeypot field hidden from users */}
              <input
                type="text"
                name="website_address"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {propertyTitle && (
                <div className="bg-[#F8F9FA] border border-[#E2E8F0] p-3 text-xs text-[#172B28] font-medium rounded-xs">
                  Enquiring about: <strong>{propertyTitle}</strong>
                </div>
              )}

              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-[#172B28] mb-1">
                  Full Name <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full bg-[#F8F9FA] border ${
                    errors.fullName ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
                  } rounded-xs px-3 py-2 text-sm text-[#1E252B] focus:outline-hidden focus:border-[#172B28]`}
                  placeholder="e.g. Rahul Sharma"
                />
                {errors.fullName && (
                  <p className="text-[11px] text-[#DC2626] mt-1" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    } rounded-xs px-3 py-2 text-sm text-[#1E252B] focus:outline-hidden focus:border-[#172B28]`}
                    placeholder="e.g. 8975456378"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-[#DC2626] mt-1" role="alert">
                      {errors.phone}
                    </p>
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
                    } rounded-xs px-3 py-2 text-sm text-[#1E252B] focus:outline-hidden focus:border-[#172B28]`}
                    placeholder="e.g. rahul@example.com"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-[#DC2626] mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="location" className="block text-xs font-semibold text-[#172B28] mb-1">
                    Property Location
                  </label>
                  <select
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-sm text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
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

                <div>
                  <label htmlFor="propertyType" className="block text-xs font-semibold text-[#172B28] mb-1">
                    Property Details
                  </label>
                  <select
                    id="propertyType"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-sm text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
                  >
                    <option value="1 BHK Flat">1 BHK Flat</option>
                    <option value="2 BHK Flat">2 BHK Flat</option>
                    <option value="3 BHK Flat">3 BHK Flat</option>
                    <option value="4+ BHK / Penthouse">4+ BHK / Penthouse</option>
                    <option value="Commercial Space">Commercial Space</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#172B28] mb-1">
                  Additional Details / Preferred Call Time
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-sm text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
                  placeholder="Provide any specific requirements or property notes..."
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#5A6570]">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded-xs border-[#E2E8F0] text-[#172B28] focus:ring-[#172B28]"
                  />
                  <span>
                    I consent to Atlanta Estate Agency storing my details for property communications in accordance with the{' '}
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
                  <p className="text-[11px] text-[#DC2626] mt-1" role="alert">
                    {errors.consent}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-primary w-full py-3">
                  <Send className="w-4 h-4" />
                  <span>Submit Valuation Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
