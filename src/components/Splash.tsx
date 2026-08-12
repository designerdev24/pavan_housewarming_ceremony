import React from 'react';
import { motion } from 'motion/react';
import { SplashFlowerShower } from './SplashFlowerShower';

interface SplashProps {
  onEnter: () => void;
}

export const Splash: React.FC<SplashProps> = ({ onEnter }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        opacity: 0,
        transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] },
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#E9E5E1] px-4 py-8 overflow-hidden select-none"
    >
      {/* Background Texture Image (bg_1.svg) with Soft Blur & Frosted Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/bg_1.svg"
          alt="Background Texture"
          className="w-full h-full object-cover object-center blur-md scale-105 opacity-75"
        />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-lg" />
      </div>

      {/* Realistic Flower Petals Shower Effect - Scoped strictly to Splash Screen */}
      <SplashFlowerShower />

      {/* Center Content Card */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 my-auto flex flex-col items-center justify-center text-center max-w-sm w-full"
      >
        {/* Lord Ganesh Crest (50% width of screen / card) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full flex justify-center mb-5"
        >
          <img
            src="/assets/lord_ganesh.svg"
            alt="Lord Ganesh"
            className="w-[50%] max-w-[210px] sm:max-w-[240px] h-auto object-contain drop-shadow-lg"
          />
        </motion.div>

        <p className="font-noto-telugu text-xs sm:text-sm tracking-wider text-[#04230F] font-semibold mb-3">
          || శ్రీ రస్తు • శుభమస్తు • అవిఘ్నమస్తు ||
        </p>

        {/* Word 1: కోలా */}
        <div className="flex justify-center mb-1">
          <img
            src="/assets/కోలా.svg"
            alt="కోలా"
            className="w-28 sm:w-32 h-auto object-contain drop-shadow-sm"
          />
        </div>

        <h2 className="font-ramabhadra text-xl sm:text-2xl text-[#04230F] font-semibold tracking-wider mb-8">
          వారి
        </h2>

        {/* Glassmorphic Entry Button (Matching FAB Play Button UI) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(61,43,31,0.18)] hover:shadow-[0_12px_36px_rgba(212,175,55,0.35)] transition-all duration-300 group"
        >
          {/* Subtle gold glow aura */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/25 via-[#DF0038]/15 to-[#009174]/25 blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <button
            onClick={onEnter}
            aria-label="ఆహ్వాన పత్రిక"
            className="relative px-8 py-3.5 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#E5C358] to-[#B89228] text-[#3D2B1F] font-noto-telugu font-bold text-base sm:text-lg tracking-wide shadow-md cursor-pointer overflow-hidden z-10 border border-white/50 active:shadow-inner flex items-center justify-center min-w-[190px]"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10">ఆహ్వాన పత్రిక</span>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
