"use client"; // Marca como Client Component

import React from 'react';
import Header from '../components/organisms/Header'; // Se añadió .tsx
import HeroSection from '../components/organisms/HeroSection'; // Se añadió .tsx
import CategoryHighlights from '../components/organisms/CategoryHighlights'; // Se añadió .tsx
import FeaturedProducts from '../components/organisms/FeaturedProducts'; // Se añadió .tsx
import WhyChooseUs from '../components/organisms/WhyChooseUs'; // Se añadió .tsx
import ServiceCTA from '../components/organisms/ServiceCTA'; // Se añadió .tsx
import Footer from '../components/organisms/Footer'; // Se añadió .tsx

export default function Home() {
  return (
    <div className="antialiased text-slate-800 bg-slate-50 min-h-screen">
      <Header />
      <HeroSection />
      <CategoryHighlights />
      <FeaturedProducts />
      <WhyChooseUs />
      <ServiceCTA />
      <Footer />
    </div>
  );
}

