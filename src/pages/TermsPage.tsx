import React from 'react';

export const TermsPage: React.FC = () => {
  const legalName = 'Atlanta Estate Agency Pvt. Ltd.';
  const jurisdiction = 'Mumbai, Maharashtra, India';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-8">
      {/* Legal Notice */}
      <div className="bg-[#FFFBEB] border border-[#FCD34D] text-[#92400E] p-4 rounded-xs text-xs font-medium space-y-1">
        <strong className="block text-sm font-serif font-bold text-[#78350F]">
          Terms and Conditions
        </strong>
        <p>
          These Terms and Conditions govern the use of the website operated by {legalName} in {jurisdiction}.
        </p>
      </div>

      <div className="border-b border-[#E2E8F0] pb-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#172B28]">
          Terms and Conditions
        </h1>
        <p className="text-xs text-[#5A6570] mt-1">
          Last Updated: 29 September 2026 | {legalName}
        </p>
      </div>

      <div className="space-y-6 text-xs text-[#1E252B] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-[#172B28]">1. Acceptance of Terms</h2>
          <p>
            By accessing or browsing this website operated by {legalName}, you agree to be bound by these Terms and Conditions. If you do not agree with these terms, please refrain from using our services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-[#172B28]">2. Property Information Disclaimer</h2>
          <p>
            Property details, prices, specifications, and floor plans published on this site are for general guidance only. While Atlanta Estate Agency verifies property records, final terms, carpet areas, and prices are governed exclusively by formal sale deeds and leave and licence agreements signed between parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-[#172B28]">3. Intellectual Property Rights</h2>
          <p>
            All content, wordmarks, layout designs, property photographs, and text published on this website are protected intellectual property of {legalName} or its licensors. Reproduction without prior written authorization is prohibited.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-[#172B28]">4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by the laws of {jurisdiction}, {legalName} shall not be liable for any indirect, incidental, or consequential damages resulting from reliance on website listings or temporary unavailability of online forms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-[#172B28]">5. Third-Party Links &amp; External Portals</h2>
          <p>
            Links to external services, Google Maps embeds, or sub-registrar portals are provided for convenience. {legalName} assumes no responsibility for third-party privacy practices or external website content.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-[#172B28]">6. Governing Law &amp; Jurisdiction</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of {jurisdiction}. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in {jurisdiction}.
          </p>
        </section>
      </div>
    </div>
  );
};
