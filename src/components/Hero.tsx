import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import homeImage from '../../assets/home.png';

const getGraphemes = (str: string): string[] => {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter('te', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(str), (s) => s.segment);
  }
  return str.split('');
};

interface HeroProps {
  onThoranamLoaded?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onThoranamLoaded }) => {
  const [showScrollBtn, setShowScrollBtn] = useState(true);

  const word1 = getGraphemes('చెంబాటి');
  const word2 = getGraphemes('వారి');
  const word3 = getGraphemes('గృహప్రవేశ ఆహ్వానం');

  useEffect(() => {
    const handleScroll = () => {
      // Hide button when scrolled down past 50px
      if (window.scrollY > 50) {
        setShowScrollBtn(false);
      } else {
        setShowScrollBtn(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThoranamLoad = () => {
    window.dispatchEvent(new CustomEvent('thoranam_loaded'));
    if (onThoranamLoaded) {
      onThoranamLoaded();
    }
  };

  return (
    <section className="relative w-full flex flex-col justify-start items-center overflow-hidden bg-gradient-to-b from-[#F3E8DD] to-[#F2ECE4] select-none snap-start snap-always pb-0 mb-0 leading-none">
      {/* 2. Top Thoranam (thoranam_1.svg) */}
      <motion.div
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
        onAnimationComplete={handleThoranamLoad}
        className="relative z-20 w-full flex justify-center top-0"
      >
        <img
          src="/assets/thoranam_1.svg"
          alt="Thoranam Decoration"
          onLoad={handleThoranamLoad}
          className="w-full max-w-5xl h-auto object-contain"
        />
      </motion.div>

      {/* Center Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full max-w-lg px-4 pt-1 sm:pt-2">
        {/* 3. Lord Ganesh (lord_ganesh.svg) with floating animation matching splash screen */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-1 sm:mb-1.5"
        >
          <motion.img
            src="/assets/lord_ganesh.svg"
            alt="Lord Ganesh"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 sm:w-[90px] sm:h-[90px] object-contain drop-shadow-md"
          />
        </motion.div>

        {/* 5. Text Sequence: Letter-by-Letter Animations */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Word 1: చెంబాటి (Font: Ponnala) - Color #1B1F24 */}
          <h1 className="font-ponnala text-4xl sm:text-5xl md:text-6xl text-[#1B1F24] font-bold tracking-wider leading-none -mb-1 mt-[12px] flex justify-center flex-wrap">
            {word1.map((char, index) => (
              <motion.span
                key={`w1-${index}`}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.4,
                  delay: 2.0 + index * 0.12,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          {/* Word 2: వారి (Font: Ramabhadra) - Color #9F5A2A */}
          <h2 className="font-ramabhadra text-xl sm:text-2xl md:text-3xl text-[#9F5A2A] font-semibold tracking-wider leading-none mb-[14px] sm:mb-[18px] flex justify-center flex-wrap">
            {word2.map((char, index) => (
              <motion.span
                key={`w2-${index}`}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.4,
                  delay: 2.6 + index * 0.15,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h2>

          {/* Word 3: గృహప్రవేశ ఆహ్వానం in 1 single line (Font: Lakki Reddy) - Color #9F5A2A */}
          <h3 className="font-lakki text-2xl sm:text-4xl md:text-5xl text-[#9F5A2A] drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] leading-tight tracking-normal flex justify-center flex-nowrap whitespace-nowrap">
            {word3.map((char, index) => (
              <motion.span
                key={`w3-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.8, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.45,
                  delay: 3.0 + index * 0.06,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h3>
        </div>
      </div>

      {/* 4. Home (home.png) comes from the bottom with 16px gap below text & zero bottom gap */}
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full mt-[16px] mb-0 pb-0 flex justify-center pointer-events-none leading-none text-[0px]"
      >
        <img
          src={homeImage}
          alt="Home Illustration"
          className="w-full h-auto object-contain block drop-shadow-xl sm:max-w-xl md:max-w-2xl align-bottom"
        />
      </motion.div>

      {/* 5. Theme-Matched Floating Scroll Down Indicator (Disappears smoothly on scroll) */}
      <AnimatePresence>
        {showScrollBtn && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8, delay: 3.6 }}
            onClick={() => {
              window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
            }}
            className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center cursor-pointer group"
          >
            <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F3E8DD]/85 backdrop-blur-md border border-[#9F5A2A]/35 shadow-[0_4px_16px_rgba(159,90,42,0.18)] group-hover:border-[#9F5A2A] group-hover:shadow-[0_6px_20px_rgba(159,90,42,0.28)] transition-all duration-300">
              <span className="font-noto-telugu text-xs font-semibold tracking-wider text-[#9F5A2A]">
                స్క్రోల్ చేయండి
              </span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="material-symbols-outlined text-base text-[#9F5A2A]"
              >
                keyboard_double_arrow_down
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
