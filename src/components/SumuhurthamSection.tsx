import React from 'react';
import { motion } from 'motion/react';

const getGraphemes = (str: string): string[] => {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter('te', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(str), (s) => s.segment);
  }
  return str.split('');
};

export const SumuhurthamSection: React.FC = () => {
  const title = getGraphemes('సుముహూర్తం');
  const line2a = getGraphemes('స్వస్తిశ్రీ సోబకృత నామ సంవత్సర');
  const line2b = getGraphemes('చైత్ర శుక్ల తిధియ');
  const dateStr = getGraphemes('24-08-2026');
  const timeStr = getGraphemes('ఉ.గం. 04:35 ని. లకు');
  const lagnamStr = getGraphemes('వృషబ లగ్న పుష్కరాంశము నందు');

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

      {/* Center Content Area */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center w-full max-w-xl px-4 pt-16 pb-64 sm:pt-20 sm:pb-80">
        {/* Text Sequence */}
        <div className="flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3">
          {/* Title: సుముహూర్తం (Dhurjati, Regular font, 006B55 color, stroke FFFFFF) */}
          <h2 className="font-dhurjati text-4xl sm:text-6xl md:text-7xl text-[#006B55] font-normal leading-tight tracking-wider flex justify-center flex-wrap paint-order-stroke [-webkit-text-stroke:3px_#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)] mb-1">
            {title.map((char, index) => (
              <motion.span
                key={`t-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.8, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.4 + index * 0.1,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h2>

          {/* Line 2: స్వస్తిశ్రీ సోబకృత నామ సంవత్సర చైత్ర శుక్ల తిధియ (Noto Sans Telugu, medium, 006B55 color, stroke ffffff) */}
          <div className="font-noto-telugu text-base sm:text-xl md:text-2xl text-[#006B55] font-medium leading-snug tracking-normal space-y-0.5 paint-order-stroke [-webkit-text-stroke:2px_#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
            <div className="flex justify-center flex-wrap">
              {line2a.map((char, index) => (
                <motion.span
                  key={`l2a-${index}`}
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 0.9 + index * 0.03,
                    ease: 'easeOut',
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
            <div className="flex justify-center flex-wrap">
              {line2b.map((char, index) => (
                <motion.span
                  key={`l2b-${index}`}
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 1.4 + index * 0.04,
                    ease: 'easeOut',
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Line 3: 24-08-2026 (Ramabhadra, Regular, AC1619 color, ffffff stroke) */}
          <h3 className="font-ramabhadra text-4xl sm:text-6xl md:text-7xl text-[#AC1619] font-normal leading-none tracking-wider flex justify-center flex-wrap paint-order-stroke [-webkit-text-stroke:4px_#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)] pt-1">
            {dateStr.map((char, index) => (
              <motion.span
                key={`d-${index}`}
                initial={{ opacity: 0, y: 18, scale: 0.8, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 1.8 + index * 0.08,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h3>

          {/* Line 4: ఉ.గం. 04:35 ని. లకు (Noto Sans Telugu, SemiCondensedBold, AC1619 color, ffffff stroke) */}
          <h4 className="font-noto-telugu text-xl sm:text-3xl md:text-4xl text-[#AC1619] font-bold leading-none tracking-wide flex justify-center flex-wrap paint-order-stroke [-webkit-text-stroke:3px_#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
            {timeStr.map((char, index) => (
              <motion.span
                key={`tm-${index}`}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 2.3 + index * 0.06,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h4>

          {/* Line 5: వృషబ లగ్న పుష్కరాంశము నందు (Noto Sans Telugu, medium, 006B55 color, stroke ffffff) */}
          <div className="font-noto-telugu text-base sm:text-xl md:text-2xl text-[#006B55] font-medium leading-normal tracking-normal flex justify-center flex-wrap paint-order-stroke [-webkit-text-stroke:2px_#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)] pt-0.5">
            {lagnamStr.map((char, index) => (
              <motion.span
                key={`lgn-${index}`}
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: 2.8 + index * 0.04,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Latha Border (latha_border_1.svg) drawing effect from center */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 3.3, ease: [0.25, 1, 0.5, 1] }}
          style={{ transformOrigin: 'center' }}
          className="mt-4 sm:mt-5 flex justify-center w-full max-w-[240px] sm:max-w-[300px]"
        >
          <img
            src="/assets/latha_border_1.svg"
            alt="Decorative Border"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Sumuhurtham Mandapam SVG (sumuhurtham.svg) from the bottom with smooth slow animation */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 inset-x-0 z-10 w-full flex justify-center pointer-events-none"
      >
        <img
          src="/assets/sumuhurtham.svg"
          alt="Sumuhurtham Mandapam"
          className="w-full h-auto object-contain object-bottom drop-shadow-2xl sm:max-w-2xl md:max-w-3xl max-h-[48vh] sm:max-h-[55vh]"
        />
      </motion.div>
    </section>
  );
};
