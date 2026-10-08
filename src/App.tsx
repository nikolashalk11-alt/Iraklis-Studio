/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { defaultGymData, GymData } from './data/gymData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScheduleSection } from './components/ScheduleSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';

export default function App() {
  const [gymData] = useState<GymData>(defaultGymData);

  useEffect(() => {
    // Global smooth scroll interceptor for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfcf8] text-[#18181b] flex flex-col font-sans selection:bg-[#6EC454] selection:text-black">
      {/* Simple Initial Preload Screen with Center Logo */}
      <Preloader gymName={gymData.name} />

      {/* Top clean header */}
      <Navbar gymData={gymData} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero gymData={gymData} />

        {/* Operating Schedule & Real-time Status */}
        <ScheduleSection gymData={gymData} />

        {/* Community & Reviews */}
        <TestimonialsSection gymData={gymData} />

        {/* Location & Contact Section */}
        <ContactSection gymData={gymData} />
      </main>

      {/* Footer */}
      <Footer gymData={gymData} />
    </div>
  );
}
