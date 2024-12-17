// src/pages/index.js
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';

import TestimonialsSection from '../components/Home/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />

      <TestimonialsSection />
    </>
  );
}