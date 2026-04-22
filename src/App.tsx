import React from 'react';
import { GrainOverlay } from './components/GrainOverlay';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { WorkSection } from './components/WorkSection';
import { AboutSection } from './components/AboutSection';
import { MarqueeStrip } from './components/MarqueeStrip';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <GrainOverlay />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <MarqueeStrip items={['CREATE', '✦', 'DISRUPT', '✦', 'INSPIRE', '✦', 'EVOLVE', '✦']} />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
