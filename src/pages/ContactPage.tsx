import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Check, ShieldCheck, Building2 } from 'lucide-react';

interface ContactPageProps {
  onNavigateToPrivacy: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateToPrivacy }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Property Buying Query');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const agencyPhone = '+91 8975456378';
  const whatsappNumber = '918975456378';
  const agencyEmail = 'contact@atlantaestateagency.in';
  const agencyAddress = 'Suite 402, Atlanta Chambers, Hill Road, Bandra West, Mumbai, Maharashtra 400050';
  const reraLicence = 'P51800028472';

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
    if (!message.trim()) errs.message = 'Please enter your message.';
    if (!consent) errs.consent = 'You must accept the Privacy Policy to submit.';
    if (honeypot) errs.bot = 'Spam detected.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Placeholder endpoint simulation: POST /api/contact-message
    console.log('Contact Message:', {
      fullName,
      phone,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    });

    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E2E8F0] pb-6">
        <span className="text-xs font-bold text-[#A67C37] uppercase tracking-wider">
          Direct Communication
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28] mt-1">
          Contact Atlanta Estate Agency
        </h1>
        <p className="text-sm text-[#5A6570] mt-2 max-w-2xl">
          Get in touch with our team for property search assistance, valuation bookings, or office visits in Mumbai.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 card-frame p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-[#172B28] mb-2">
            Send an Online Enquiry
          </h2>
          <p className="text-xs text-[#5A6570] mb-6">
            Complete the form below and a representative will respond within 2 working hours.
          </p>

          {submitted ? (
            <div className="bg-[#F8F9FA] border border-[#E2E8F0] p-8 text-center space-y-4 rounded-xs">
              <div className="w-12 h-12 bg-[#172B28] text-[#A67C37] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#172B28]">
                Message Sent Successfully
              </h3>
              <p className="text-sm text-[#5A6570]">
                Thank you, {fullName}. Our representative will reach out to {phone} or {email}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline text-xs py-2 px-4"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <input
                type="text"
                name="office_phone_ext"
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
                    placeholder="e.g. Amit Kapoor"
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
                  placeholder="e.g. amit@example.com"
                />
                {errors.email && (
                  <p className="text-[11px] text-[#DC2626] mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#172B28] mb-1">
                  Nature of Enquiry
                </label>
                <select
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#F8F9FA] border border-[#E2E8F0] rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]"
                >
                  <option value="Property Buying Query">Property Buying Query</option>
                  <option value="Property Renting / Leasing Query">Property Renting / Leasing Query</option>
                  <option value="Property Valuation Request">Property Valuation Request</option>
                  <option value="Commercial Space Inquiry">Commercial Space Inquiry</option>
                  <option value="General Office Consultation">General Office Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#172B28] mb-1">
                  Your Message <span className="text-[#DC2626]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full bg-[#F8F9FA] border ${
                    errors.message ? 'border-[#DC2626]' : 'border-[#E2E8F0]'
                  } rounded-xs px-3 py-2 text-xs text-[#1E252B] focus:outline-hidden focus:border-[#172B28]`}
                  placeholder="Describe your location preference, budget, or property requirements..."
                />
                {errors.message && (
                  <p className="text-[11px] text-[#DC2626] mt-1">{errors.message}</p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-2 cursor-pointer text-xs text-[#5A6570]">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded-xs border-[#E2E8F0] text-[#172B28]"
                  />
                  <span>
                    I accept the{' '}
                    <button
                      type="button"
                      onClick={onNavigateToPrivacy}
                      className="underline text-[#172B28]"
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

              <button type="submit" className="btn-primary w-full py-3 font-bold text-xs">
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Info Box & NAP */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card-frame p-6 bg-[#172B28] text-[#FFFFFF] space-y-4">
            <h2 className="font-serif text-xl font-bold text-[#FFFFFF]">
              Office NAP Details
            </h2>

            <div className="space-y-3 text-xs text-[#E2E8F0]">
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
                <Mail className="w-4 h-4 text-[#A67C37] shrink-0" />
                <div>
                  <strong>Email:</strong> {agencyEmail}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#A67C37] shrink-0" />
                <div>
                  <strong>MahaRERA Registration:</strong> {reraLicence}
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#243B37]">
                <Clock className="w-4 h-4 text-[#A67C37] shrink-0 mt-0.5" />
                <div>
                  <strong>Office Hours:</strong>
                  <p>Monday to Saturday: 09:30 AM to 07:30 PM</p>
                  <p>Sunday: By Prior Appointment</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent w-full py-2.5 text-xs font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us (+91 8975456378)</span>
              </a>
            </div>
          </div>

          {/* Map Slot */}
          <div className="card-frame overflow-hidden h-64 relative bg-[#F1F5F9]">
            <iframe
              title="Atlanta Estate Agency Location Map"
              src="https://maps.google.com/maps?q=Hill+Road,+Bandra+West,+Mumbai,+Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
