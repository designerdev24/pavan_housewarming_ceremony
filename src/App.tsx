import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { BrideIntro } from './components/BrideIntro';
import { GroomIntro } from './components/GroomIntro';
import { SumuhurthamSection } from './components/SumuhurthamSection';
import { TimelineSection } from './components/TimelineSection';
import { GallerySection } from './components/GallerySection';
import { FooterSection } from './components/FooterSection';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [playMusic, setPlayMusic] = useState(false);

  const handleEnterInvitation = () => {
    setShowSplash(false);
    // User click gesture unlocks unmuted browser audio playback 100%
    setPlayMusic(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#1A1816] flex justify-center items-start overflow-x-hidden">
      {/* Mobile L Container (Fixed max-width ~430px on desktop screens, full width on mobile devices) */}
      <main className="w-full max-w-[430px] min-h-screen bg-[#E9E5E1] text-[#3D2B1F] antialiased overflow-x-hidden snap-y snap-mandatory scroll-smooth no-scrollbar relative shadow-[0_0_60px_rgba(0,0,0,0.6)] sm:border-x sm:border-[#D4AF37]/30">
        {/* 1. Splash Welcome Screen Portal */}
        <AnimatePresence mode="wait">
          {showSplash && (
            <Splash onEnter={handleEnterInvitation} />
          )}
        </AnimatePresence>

        {/* Main Wedding Invitation Sections */}
        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full flex flex-col"
          >
            <Hero />
            <BrideIntro />
            <GroomIntro />
            <SumuhurthamSection />
            <TimelineSection />
            <GallerySection />
            <FooterSection />
            <MusicPlayer autoPlay={playMusic} />
          </motion.div>
        )}
      </main>
    </div>
  );
}


