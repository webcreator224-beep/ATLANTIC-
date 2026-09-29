import React from 'react';
import { ShieldCheck, FileText, Mail, Phone, MapPin } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const agencyPhone = '+91 8975456378';
  const agencyEmail = 'contact@atlantaestateagency.in';
  const agencyAddress = 'Suite 402, Atlanta Chambers, Hill Road, Bandra West, Mumbai, Maharashtra 400050';
  const legalName = 'Atlanta Estate Agency Pvt. Ltd.';
  const jurisdiction = 'Mumbai, Maharashtra, India';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-8">
      {/* Legal Notice */}
      <div className="bg-[#FFFBEB] border border-[#FCD34D] text-[#92400E] p-4 rounded-xs text-xs font-medium space-y-1">
        <strong className="block text-sm font-serif font-bold text-[#78350F]">
          Legal Notice: Website Document
        </strong>
        <p>
          This Privacy Policy governs data processing by {legalName} under the applicable laws of {jurisdiction}.
        </p>
      </div>

      <div className="border-b border-[#E2E8F0] pb-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#5A6570] mt-1">
          Last Updated: 29 September 2026 | {legalName}
        </p>
      </div>

      <div className="space-y-6 text-xs text-[#1E252B] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-[#172B28]">1. Data Collection Overview</h2>
          <p>
            {legalName} operates the official website for Atlanta Estate Agency. This policy details how personal information submitted through valuation enquiry forms, contact forms, and property search tools is collected, stored, and processed.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-[#172B28]">2. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide when enquiring about properties or requesting valuations, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-[#5A6570]">
            <li>Full name, telephone number, and email address.</li>
            <li>Property address, building name, unit configuration, and target sale or rent price.</li>
            <li>Communications and notes submitted through contact forms.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-[#172B28]">3. How We Use Your Data</h2>
          <p>Personal information is processed strictly for legitimate real estate advisory purposes:</p>
          <ul className="list-disc pl-5 space-y-1 text-[#5A6570]">
            <li>Responding to property enquiries and arranging site viewings in Mumbai.</li>
            <li>Preparing physical property inspection reports and society valuation assessments.</li>
            <li>Managing communication regarding leave and licence agreements or sale deeds.</li>
            <li>Complying with statutory obligations under MahaRERA and local regulations.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-[#172B28]">4. Cookies and Session Storage</h2>
          <p>
            Our website uses minimal essential cookies and browser storage to retain filter choices and store your cookie preference. We do not sell tracking data to third-party marketing networks.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-[#172B28]">5. Data Retention &amp; Security</h2>
          <p>
            Personal data is retained only for as long as necessary to complete your property transaction or fulfill legal compliance periods under the laws of {jurisdiction}. We implement technical safeguards to prevent unauthorized access.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-[#172B28]">6. User Rights &amp; Contact Information</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal information held by {legalName}.
          </p>
          <div className="bg-[#F8F9FA] border border-[#E2E8F0] p-4 rounded-xs mt-2 space-y-1 text-[#172B28]">
            <p><strong>Data Officer Email:</strong> {agencyEmail}</p>
            <p><strong>Office Phone:</strong> {agencyPhone}</p>
            <p><strong>Registered Address:</strong> {agencyAddress}</p>
          </div>
        </section>
      </div>
    </div>
  );
};
