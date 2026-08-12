import React from 'react';
import { motion } from 'motion/react';

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
  const word2 = getGraphemes('వారి');
  const word3 = getGraphemes('వివాహ ఆహ్వానం');

  const handleThoranamLoad = () => {
    window.dispatchEvent(new CustomEvent('thoranam_loaded'));
    if (onThoranamLoaded) {
      onThoranamLoaded();
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#E9E5E1] select-none snap-start snap-always">
      {/* 1. Background Image (bg_1.svg) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src="/assets/bg_1.svg"
          alt="Background Texture"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

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
        {/* 3. Lord Ganesh (lord_ganesh.svg) - reduced size by 30% */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-1 sm:mb-1.5"
        >
          <img
            src="/assets/lord_ganesh.svg"
            alt="Lord Ganesh"
            className="w-16 h-16 sm:w-[90px] sm:h-[90px] object-contain drop-shadow-md"
          />
        </motion.div>

        {/* 5. Text Sequence: Letter-by-Letter Animations */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Word 1: కోలా (SVG Asset from assets folder - moved down by 12px) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0, ease: 'easeOut' }}
            className="flex justify-center mb-0.5 mt-[12px]"
          >
            <img
              src="/assets/కోలా.svg"
              alt="కోలా"
              className="w-24 sm:w-32 md:w-36 h-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
            />
          </motion.div>

          {/* Word 2: వారి (Font: Ramabhadra) - Color #04230F - moved up by 6px */}
          <h2 className="font-ramabhadra text-xl sm:text-2xl md:text-3xl text-[#04230F] font-semibold tracking-wider leading-none mb-3 sm:mb-4 -mt-[5px] flex justify-center flex-wrap">
            {word2.map((char, index) => (
              <motion.span
                key={`w2-${index}`}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.4,
                  delay: 2.4 + index * 0.15,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h2>

          {/* Word 3: వివాహ ఆహ్వానం (Font: Lakki Reddy) - Color #DF0038 */}
          <h3 className="font-lakki text-3xl sm:text-5xl md:text-6xl text-[#DF0038] drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] leading-none tracking-normal flex justify-center flex-wrap">
            {word3.map((char, index) => (
              <motion.span
                key={`w3-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.8, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.45,
                  delay: 2.8 + index * 0.09,
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

      {/* 4. Temple (temple.svg) comes from the bottom */}
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full mt-auto flex justify-center pointer-events-none"
      >
        <img
          src="/assets/temple.svg"
          alt="Temple Gopuram"
          className="w-full h-auto object-contain object-bottom drop-shadow-xl sm:max-w-xl md:max-w-2xl"
        />
      </motion.div>
    </section>
  );
};
