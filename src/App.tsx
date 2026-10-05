/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { JourneysSection } from './components/JourneysSection';
import { WesternGhatsSection } from './components/WesternGhatsSection';
import { EcoResortsSection, ResortItem } from './components/EcoResortsSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { TravelStoriesSection } from './components/TravelStoriesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsletterCtaSection } from './components/NewsletterCtaSection';
import { FooterSection } from './components/FooterSection';
import { BookingModal } from './components/BookingModal';
import { AuthModal } from './components/AuthModal';
import { ResortDetailModal } from './components/ResortDetailModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedResortDetails, setSelectedResortDetails] = useState<ResortItem | null>(null);
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);

  const [bookingDetails, setBookingDetails] = useState({
    name: 'Munnar Eco Trail Sanctuary',
    price: '₹12,000',
  });

  const handleOpenBooking = (name: string = 'Munnar Eco Trail Sanctuary', price: string = '₹12,000') => {
    setBookingDetails({ name, price });
    setIsBookingOpen(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFDFB] text-[#1B4332] selection:bg-[#2D6A4F]/20 selection:text-[#1B4332] relative font-sans antialiased">
      {/* 1. Header: Announcement Bar & Sticky Translucent Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenAuth={() => setIsAuthOpen(true)}
        currentUser={currentUser}
      />

      <main>
        {/* 2. Hero Section: Spacious layout, geometric typography, CTAs & Panoramic visual */}
        <HeroSection
          onExploreJourneys={() => scrollTo('journeys')}
          onDiscoverResorts={() => scrollTo('resorts')}
        />

        {/* 3. Section 1: Journeys ("Travel with Purpose") */}
        <JourneysSection
          onSelectJourney={(title) => handleOpenBooking(title, '₹15,000')}
        />

        {/* 4. Section 2: Western Ghats ("Where the Earth Breathes") */}
        <WesternGhatsSection
          onExploreGhats={() => scrollTo('resorts')}
        />

        {/* 5. Section 3: Eco Resorts ("Stay Close to Nature") */}
        <EcoResortsSection
          onSelectResort={(name, price) => handleOpenBooking(name, price)}
          onViewResortDetails={(resort) => setSelectedResortDetails(resort)}
        />

        {/* 6. Section 4: Sustainability (Zero Plastic, Carbon Conscious, Local Communities, Wildlife) */}
        <SustainabilitySection />

        {/* 7. Section 5: Travel Stories ("Stories Before the Journey") */}
        <TravelStoriesSection />

        {/* 8. Section 6: Testimonials */}
        <TestimonialsSection />

        {/* 9. Section 7: Newsletter / CTA ("Travel gently. Leave a lighter footprint.") */}
        <NewsletterCtaSection />
      </main>

      {/* 10. Section 8: Premium Dark-Green Footer */}
      <FooterSection />

      {/* Booking / Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        destinationName={bookingDetails.name}
        price={bookingDetails.price}
      />

      {/* Interactive User Authentication Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={currentUser}
        onLoginSuccess={(user) => setCurrentUser(user)}
        onLogout={() => setCurrentUser(null)}
      />

      {/* Resort Details Modal */}
      <ResortDetailModal
        resort={selectedResortDetails}
        onClose={() => setSelectedResortDetails(null)}
        onBookNow={(name, price) => handleOpenBooking(name, price)}
      />
    </div>
  );
}
