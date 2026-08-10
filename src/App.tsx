import React from 'react';
import { Hero } from './components/Hero';
import { BrideIntro } from './components/BrideIntro';
import { GroomIntro } from './components/GroomIntro';
import { SumuhurthamSection } from './components/SumuhurthamSection';
import { TimelineSection } from './components/TimelineSection';
import { GallerySection } from './components/GallerySection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <main className="w-full min-h-screen bg-[#E9E5E1] text-[#3D2B1F] antialiased overflow-x-hidden snap-y snap-mandatory scroll-smooth no-scrollbar">
      <Hero />
      <BrideIntro />
      <GroomIntro />
      <SumuhurthamSection />
      <TimelineSection />
      <GallerySection />
      <FooterSection />
    </main>
  );
}


