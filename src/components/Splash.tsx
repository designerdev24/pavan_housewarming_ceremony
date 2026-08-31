import React from 'react';
import { motion } from 'motion/react';
import { SplashFlowerShower } from './SplashFlowerShower';
import doorImage from '../../assets/door_image.png';
import gruhapraveshamText from '../../assets/gruhapravesham_text.png';

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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#F3E8DD] to-[#F2ECE4] px-4 py-4 overflow-hidden select-none"
    >
      {/* Realistic Flower Petals Shower Effect - Scoped strictly to Splash Screen */}
      <SplashFlowerShower />

      {/* Centered Stack */}
      <div className="relative z-20 flex flex-col items-center justify-center my-auto space-y-[8px] max-w-lg sm:max-w-xl w-full">
        {/* Top Header: Mantra Text & Lord Ganesh Crest */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center text-center space-y-[4px]"
        >
          {/* Mantra Text */}
          <p className="font-noto-telugu text-xs sm:text-sm tracking-wider text-[#04230F] font-semibold">
            || ఓం గణేశాయ నమః ||
          </p>

          {/* Lord Ganesh Crest */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex justify-center"
          >
            <img
              src="/assets/lord_ganesh.svg"
              alt="Lord Ganesh"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-md"
            />
          </motion.div>
        </motion.div>

        {/* Middle Door Image Container: shrink-wraps height directly to image bounds so 8px gap is exact */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative flex items-center justify-center shrink-0"
        >
          {/* Door Image */}
          <img
            src={doorImage}
            alt="Traditional Door"
            className="h-[46vh] sm:h-[56vh] max-h-[480px] w-auto object-contain drop-shadow-2xl"
          />

          {/* Gruhapravesham Text Image centered over the door (reduced mobile size by 10%) */}
          <img
            src={gruhapraveshamText}
            alt="గృహప్రవేశం"
            className="absolute inset-0 m-auto w-[28%] sm:w-[32%] max-w-[110px] sm:max-w-[144px] h-auto object-contain drop-shadow-xl pointer-events-none"
          />
        </motion.div>

        {/* Bottom Entry Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex justify-center shrink-0"
        >
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
              className="relative px-8 py-3 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#E5C358] to-[#B89228] text-[#3D2B1F] font-noto-telugu font-bold text-base sm:text-lg tracking-wide shadow-md cursor-pointer overflow-hidden z-10 border border-white/50 active:shadow-inner flex items-center justify-center min-w-[190px]"
            >
              {/* Shimmer sweep effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10">ఆహ్వాన పత్రిక</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
