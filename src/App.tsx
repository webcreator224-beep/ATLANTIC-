/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { CookieNotice } from './components/CookieNotice';
import { MobileBottomNav } from './components/MobileBottomNav';
import { HomePage } from './pages/HomePage';
import { BuyPage } from './pages/BuyPage';
import { RentPage } from './pages/RentPage';
import { SellPage } from './pages/SellPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { AreasPage } from './pages/AreasPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { listingsData } from './data/listingsData';
import { PropertyListing, FilterState } from './types/listing';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const [isValuationModalOpen, setIsValuationModalOpen] = useState(false);
  const [searchFilters, setSearchFilters] = useState<Partial<FilterState>>({});

  // Parse path from URL hash or window location
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#/', '');
      if (!hash || hash === '') {
        setCurrentPage('home');
      } else if (hash.startsWith('property/')) {
        const id = hash.replace('property/', '');
        const found = listingsData.find((p) => p.id === id || p.slug === id);
        if (found) {
          setSelectedProperty(found);
          setCurrentPage('property');
        } else {
          setCurrentPage('404');
        }
      } else if (
        ['buy', 'rent', 'sell', 'about', 'team', 'areas', 'contact', 'privacy', 'terms'].includes(hash)
      ) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('404');
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL and document title on navigation
  const navigateTo = (page: string, params?: Record<string, string>) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'home') {
      window.history.pushState(null, '', '#/');
      document.title = 'Atlanta Estate Agency - Mumbai Real Estate';
    } else if (page === 'property' && params?.id) {
      window.history.pushState(null, '', `#/property/${params.id}`);
      const prop = listingsData.find((p) => p.id === params.id);
      if (prop) {
        setSelectedProperty(prop);
        document.title = `${prop.title} | Atlanta Estate Agency`;
      }
    } else {
      window.history.pushState(null, '', `#/${page}`);
      const titles: Record<string, string> = {
        buy: 'Flats & Properties to Buy in Mumbai | Atlanta Estate Agency',
        rent: 'Flats & Properties to Rent in Mumbai | Atlanta Estate Agency',
        sell: 'Sell Your Property in Mumbai | Atlanta Estate Agency',
        about: 'About Us | Atlanta Estate Agency Mumbai',
        team: 'Our Real Estate Team | Atlanta Estate Agency Mumbai',
        areas: 'Areas We Cover in Mumbai | Atlanta Estate Agency',
        contact: 'Contact Us | Atlanta Estate Agency Mumbai',
        privacy: 'Privacy Policy | Atlanta Estate Agency',
        terms: 'Terms & Conditions | Atlanta Estate Agency',
        '404': '404 Page Not Found | Atlanta Estate Agency',
      };
      document.title = titles[page] || 'Atlanta Estate Agency - Mumbai Real Estate';
    }
  };

  const handleSelectProperty = (property: PropertyListing) => {
    setSelectedProperty(property);
    navigateTo('property', { id: property.id });
  };

  const handleSearchFromHero = (filters: Partial<FilterState>) => {
    setSearchFilters(filters);
    if (filters.type === 'rent') {
      navigateTo('rent');
    } else {
      navigateTo('buy');
    }
  };

  // Inject RealEstateAgent JSON-LD for local SEO
  useEffect(() => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Atlanta Estate Agency',
      image: 'https://atlantaestateagency.in/favicon.svg',
      telephone: '+91 8975456378',
      email: 'info@atlantaestateagency.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '[Agency address]',
        addressLocality: 'Bandra West',
        addressRegion: 'Mumbai, Maharashtra',
        postalCode: '400050',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.0596,
        longitude: 72.8295,
      },
      url: 'https://atlantaestateagency.in',
      priceRange: '₹₹₹₹',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:30',
          closes: '19:30',
        },
      ],
    };

    const faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What legal documents should I verify before buying a flat in Mumbai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Essential legal documents include the Index II registration deed, chain of title agreements, Society Share Certificate, Commencement Certificate (CC), Occupation Certificate (OC), and MahaRERA project registration status.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does a Leave & Licence agreement differ from a traditional lease?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under the Maharashtra Rent Control Act, residential rentals in Mumbai are executed as registered Leave & Licence agreements (11 to 36 months). It grants a permissive licence to occupy without creating tenancy rights.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the additional government taxes when purchasing Mumbai property?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mandatory transaction costs include Stamp Duty (5% for female buyers, 6% for male buyers + 1% Metro Cess in Maharashtra) and Sub-Registrar Fees (1% capped at ₹30,000).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is MahaRERA and why is it important for buyers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MahaRERA enforces consumer protection, mandatory escrow account management, strict completion timelines, and carpet area transparency. Atlanta Estate Agency is registered under MahaRERA Licence No. P51800028472.',
          },
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'agent-json-ld';
    script.text = JSON.stringify([jsonLd, faqLd]);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('agent-json-ld');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#1E252B] selection:bg-[#172B28] selection:text-[#FFFFFF]">
      {/* Skip to Content Accessibility Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#172B28] text-[#FFFFFF] px-4 py-2 text-xs z-50 rounded-xs"
      >
        Skip to main content
      </a>

      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenValuationModal={() => setIsValuationModalOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            featuredListings={listingsData}
            onNavigate={navigateTo}
            onSelectProperty={handleSelectProperty}
            onOpenValuationModal={() => setIsValuationModalOpen(true)}
            onSearch={handleSearchFromHero}
          />
        )}

        {currentPage === 'buy' && (
          <BuyPage
            listings={listingsData}
            onSelectProperty={handleSelectProperty}
            initialFilters={searchFilters}
          />
        )}

        {currentPage === 'rent' && (
          <RentPage
            listings={listingsData}
            onSelectProperty={handleSelectProperty}
            initialFilters={searchFilters}
          />
        )}

        {currentPage === 'sell' && (
          <SellPage onNavigateToPrivacy={() => navigateTo('privacy')} />
        )}

        {currentPage === 'property' && selectedProperty && (
          <PropertyDetailPage
            property={selectedProperty}
            onNavigateToBuy={() => navigateTo('buy')}
            onNavigateToPrivacy={() => navigateTo('privacy')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenValuationModal={() => setIsValuationModalOpen(true)}
            onNavigateToContact={() => navigateTo('contact')}
          />
        )}

        {currentPage === 'team' && <TeamPage />}

        {currentPage === 'areas' && (
          <AreasPage
            onSearchArea={(filters) => {
              setSearchFilters(filters);
            }}
            onNavigateToBuy={() => navigateTo('buy')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigateToPrivacy={() => navigateTo('privacy')} />
        )}

        {currentPage === 'privacy' && <PrivacyPolicyPage />}

        {currentPage === 'terms' && <TermsPage />}

        {currentPage === '404' && (
          <NotFoundPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateToBuy={() => navigateTo('buy')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Valuation Modal */}
      <EnquiryModal
        isOpen={isValuationModalOpen}
        onClose={() => setIsValuationModalOpen(false)}
        onNavigateToPrivacy={() => {
          setIsValuationModalOpen(false);
          navigateTo('privacy');
        }}
      />

      {/* Cookie Notice */}
      <CookieNotice />

      {/* Mobile Sticky Bottom Navigation Bar */}
      <MobileBottomNav
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenValuationModal={() => setIsValuationModalOpen(true)}
      />
    </div>
  );
}
