import React from 'react';
import { motion } from 'motion/react';

const getGraphemes = (str: string): string[] => {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter('te', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(str), (s) => s.segment);
  }
  return str.split('');
};

export const FooterSection: React.FC = () => {
  const headerTitle = getGraphemes('మీ ఆగమనాభిలాషులు');
  const name1 = getGraphemes('శ్రీ కోలా వెంకటరమణ');
  const name2 = getGraphemes('జనకమ్మ');

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#E9E5E1] select-none snap-start snap-always">
      {/* 1. Background Image (bg_1.svg) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/bg_1.svg"
          alt="Background Texture"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. Top Thoranam (thoranam_2.svg) */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.01 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="sticky top-0 inset-x-0 z-30 w-full flex justify-center pointer-events-none"
      >
        <img
          src="/assets/thoranam_2.svg"
          alt="Thoranam Decoration"
          className="w-full max-w-5xl h-auto object-contain"
        />
      </motion.div>

      {/* Center Content Wrapper */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center w-full max-w-lg px-4 pt-12 pb-24 sm:pt-16 sm:pb-28 text-center">
        {/* Lord Ganesh Icon Accent */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-3 sm:mb-4 flex justify-center"
        >
          <img
            src="/assets/lord_ganesh.svg"
            alt="Lord Ganesh"
            className="w-14 h-14 sm:w-20 sm:h-20 object-contain drop-shadow-md"
          />
        </motion.div>

        {/* Title: మీ ఆగమనాభిలాషులు */}
        <h2 className="font-dhurjati text-3xl sm:text-5xl md:text-6xl text-[#006B55] font-bold leading-tight tracking-wider flex justify-center flex-wrap mb-4 sm:mb-6 text-center paint-order-stroke [-webkit-text-stroke:2.5px_#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
          {headerTitle.map((char, index) => (
            <motion.span
              key={`f-ht-${index}`}
              initial={{ opacity: 0, y: 15, scale: 0.8, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.4 + index * 0.08,
                ease: 'easeOut',
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h2>

        {/* Host Names */}
        <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 mb-4">
          {/* Name 1: శ్రీ కోలా వెంకటరమణ */}
          <h3 className="font-ramabhadra text-2xl sm:text-4xl md:text-5xl text-[#AC1619] font-normal leading-tight tracking-wide flex justify-center flex-wrap paint-order-stroke [-webkit-text-stroke:3px_#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
            {name1.map((char, index) => (
              <motion.span
                key={`f-n1-${index}`}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 1.0 + index * 0.05,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h3>

          {/* Name 2: జనకమ్మ */}
          <h3 className="font-ramabhadra text-2xl sm:text-4xl md:text-5xl text-[#AC1619] font-normal leading-tight tracking-wide flex justify-center flex-wrap paint-order-stroke [-webkit-text-stroke:3px_#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
            {name2.map((char, index) => (
              <motion.span
                key={`f-n2-${index}`}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 1.5 + index * 0.06,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h3>
        </div>

        {/* Latha Border Accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.25, 1, 0.5, 1] }}
          style={{ transformOrigin: 'center' }}
          className="my-3 sm:my-5 flex justify-center w-full max-w-[200px] sm:max-w-[260px]"
        >
          <img
            src="/assets/latha_border_1.svg"
            alt="Decorative Border"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Bottom Note (Well Wishers) in Small Letters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2.1, ease: 'easeOut' }}
          className="mt-2 sm:mt-4 px-4 py-3 sm:py-3.5 rounded-2xl bg-white/45 backdrop-blur-sm border border-[#D4AF37]/40 shadow-sm max-w-lg mx-auto"
        >
          <p className="font-noto-telugu text-xs sm:text-sm text-[#006B55] font-semibold leading-relaxed tracking-normal text-center drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            శ్రీయుతులు వాడపల్లి గంగాధర శాస్త్రి, ప్రభల పరదేశి, మలపాక రామకృష్ణ,వాడపల్లి వేణుగోపాల్, వాడపల్లి లక్ష్మీగణేష్ మరియు బంధుమిత్రుల అభినందనలతో...
          </p>
        </motion.div>
      </div>

      {/* 3. Bottom Decor (bottom_decor_1.svg) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.01 }}
        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        className="absolute bottom-0 inset-x-0 z-10 w-full flex justify-center pointer-events-none"
      >
        <img
          src="/assets/bottom_decor_1.svg"
          alt="Bottom Decoration"
          className="w-full h-auto object-contain object-bottom drop-shadow-xl sm:max-w-xl md:max-w-2xl opacity-70"
        />
      </motion.div>
    </section>
  );
};
