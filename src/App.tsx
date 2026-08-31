import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { SumuhurthamSection } from './components/SumuhurthamSection';
import { SatyanarayanaSwamyVrathamSection } from './components/SatyanarayanaSwamyVrathamSection';
import { VindhuSection } from './components/VindhuSection';
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
    <div className="w-full min-h-screen bg-gradient-to-b from-[#F3E8DD] to-[#F2ECE4] flex justify-center items-start overflow-x-hidden">
      {/* Responsive Container spanning full width for webview */}
      <main className="w-full min-h-screen bg-gradient-to-b from-[#F3E8DD] to-[#F2ECE4] text-[#3D2B1F] antialiased overflow-x-hidden snap-y snap-mandatory scroll-smooth no-scrollbar relative">
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
            <SumuhurthamSection />
            <SatyanarayanaSwamyVrathamSection />
            <VindhuSection />
            <GallerySection />
            <FooterSection />
            <MusicPlayer autoPlay={playMusic} />
          </motion.div>
        )}
      </main>
    </div>
  );
}


