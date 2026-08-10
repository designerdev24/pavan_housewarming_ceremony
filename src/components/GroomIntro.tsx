import React from 'react';
import { motion } from 'motion/react';

const getGraphemes = (str: string): string[] => {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter('te', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(str), (s) => s.segment);
  }
  return str.split('');
};

export const GroomIntro: React.FC = () => {
  const line1 = getGraphemes('వరుడు');
  const line2Part1 = getGraphemes('చి.');
  const line2Part2 = getGraphemes('కార్తికేయ');
  const line3 = getGraphemes('శ్రీ మురమళ్ళ శ్రీపతి &');
  const line4 = getGraphemes('శ్రీమతి నూకరత్నం ల ద్వితీయ కుమారుడు.');

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
        className="absolute top-0 inset-x-0 z-30 w-full flex justify-center pointer-events-none"
      >
        <img
          src="/assets/thoranam_2.svg"
          alt="Thoranam Decoration"
          className="w-full max-w-5xl h-auto object-contain"
        />
      </motion.div>

      {/* Center Content Wrapper */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center w-full max-w-lg px-4 py-8 sm:py-12">
        {/* 3. Groom Image (Groom.png) */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-3 sm:mb-4 flex justify-center"
        >
          <img
            src="/assets/Groom.png"
            alt="Groom Karthikeya"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* 4. Text Sequence with Outer White Stroke */}
        <div className="flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3 w-full">
          {/* Text 1: వరుడు */}
          <h3 className="font-noto-telugu text-xl sm:text-2xl md:text-3xl text-[#009174] font-bold tracking-wide leading-none flex justify-center flex-wrap paint-order-stroke [-webkit-text-stroke:3px_#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
            {line1.map((char, index) => (
              <motion.span
                key={`g-l1-${index}`}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.7 + index * 0.1,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h3>

          {/* Text 2: చి. కార్తికేయ */}
          <div className="flex items-baseline justify-center gap-2 sm:gap-3 flex-wrap my-1 sm:my-2">
            {/* చి. */}
            <span className="font-noto-telugu text-lg sm:text-xl md:text-2xl text-[#AC1619] font-bold leading-none tracking-normal flex justify-center paint-order-stroke [-webkit-text-stroke:2.5px_#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
              {line2Part1.map((char, index) => (
                <motion.span
                  key={`g-l2p1-${index}`}
                  initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 1.1 + index * 0.08,
                    ease: 'easeOut',
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>

            {/* కార్తికేయ */}
            <h2 className="font-ramabhadra text-4xl sm:text-6xl md:text-7xl text-[#AC1619] font-normal leading-none tracking-wider flex justify-center paint-order-stroke [-webkit-text-stroke:4px_#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
              {line2Part2.map((char, index) => (
                <motion.span
                  key={`g-l2p2-${index}`}
                  initial={{ opacity: 0, y: 20, scale: 0.8, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 1.3 + index * 0.08,
                    ease: 'easeOut',
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h2>
          </div>

          {/* Text 3 & 4: శ్రీ మురమళ్ళ శ్రీపతి & శ్రీమతి నూకరత్నం ల ద్వితీయ కుమారుడు. */}
          <div className="font-noto-telugu text-base sm:text-xl md:text-2xl text-[#009174] font-semibold leading-relaxed tracking-normal space-y-1 paint-order-stroke [-webkit-text-stroke:2.5px_#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
            {/* Line 3: శ్రీ మురమళ్ళ శ్రీపతి & */}
            <div className="flex justify-center flex-wrap">
              {line3.map((char, index) => (
                <motion.span
                  key={`g-l3-${index}`}
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 1.8 + index * 0.04,
                    ease: 'easeOut',
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>

            {/* Line 4: శ్రీమతి నూకరత్నం ల ద్వితీయ కుమారుడు. */}
            <div className="flex justify-center flex-wrap">
              {line4.map((char, index) => (
                <motion.span
                  key={`g-l4-${index}`}
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 2.2 + index * 0.03,
                    ease: 'easeOut',
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Latha Border (latha_border_1.svg) drawing effect from center */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 2.7, ease: [0.25, 1, 0.5, 1] }}
          style={{ transformOrigin: 'center' }}
          className="mt-4 sm:mt-6 flex justify-center w-full max-w-[240px] sm:max-w-[300px]"
        >
          <img
            src="/assets/latha_border_1.svg"
            alt="Decorative Border"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* 6. Bottom Decor (bottom_decor_1.svg) */}
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
          className="w-full h-auto object-contain object-bottom drop-shadow-xl sm:max-w-xl md:max-w-2xl"
        />
      </motion.div>
    </section>
  );
};
