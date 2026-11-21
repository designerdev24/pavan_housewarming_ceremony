import React from 'react';
import { motion } from 'motion/react';
import sumuhurthamImage from '../../assets/sumuhurtham.png';
import { FlowerShower } from './FlowerShower';

const getGraphemes = (str: string): string[] => {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter('te', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(str), (s) => s.segment);
  }
  return str.split('');
};

export const SumuhurthamSection: React.FC = () => {
  const title = getGraphemes('సుముహూర్తం');
  const dateStr = getGraphemes('07-09-2026');
  const dayStr = getGraphemes('సోమవారం');
  const timeStr = getGraphemes('ఉదయం 10:24 ని. లకు');

  return (
    <section className="relative w-full flex flex-col justify-start items-center overflow-hidden bg-gradient-to-b from-[#F3E8DD] to-[#F2ECE4] select-none snap-start snap-always pb-0 mb-0 leading-none">
      {/* Falling Flower Shower */}
      <FlowerShower />

      {/* 2. Top Thoranam (thoranam_2.svg) */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="relative z-20 w-full flex justify-center top-0 pointer-events-none leading-none"
      >
        <img
          src="/assets/thoranam_2.svg"
          alt="Thoranam Decoration"
          className="w-full max-w-5xl h-auto object-contain block"
        />
      </motion.div>

      {/* Content Area positioned 24px below thoranam_2 */}
      <div className="relative z-20 flex flex-col items-center justify-start w-full max-w-xl px-4 mt-[24px] mb-0">
        {/* Text Sequence */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4">
          {/* Title: సుముహూర్తం (Ponnala, Bold font, Color #1B1F24, stroke FFFFFF) */}
          <h2 className="font-ponnala text-4xl sm:text-6xl md:text-7xl text-[#1B1F24] font-bold leading-tight tracking-wider flex justify-center flex-wrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)] mb-1">
            {title.map((char, index) => (
              <motion.span
                key={`t-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.8, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + index * 0.08,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h2>

          {/* Line 2: 07-09-2026 (Ramabhadra, Regular, Color #9F5A2A, ffffff stroke) */}
          <h3 className="font-ramabhadra text-4xl sm:text-6xl md:text-7xl text-[#9F5A2A] font-normal leading-none tracking-wider flex justify-center flex-wrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)] pt-1">
            {dateStr.map((char, index) => (
              <motion.span
                key={`d-${index}`}
                initial={{ opacity: 0, y: 18, scale: 0.8, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + index * 0.06,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h3>

          {/* Line 3: సోమవారం (Noto Sans Telugu, bold, Color #1B1F24, stroke ffffff) */}
          <h4 className="font-noto-telugu text-2xl sm:text-4xl md:text-5xl text-[#1B1F24] font-bold leading-none tracking-wide flex justify-center flex-wrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
            {dayStr.map((char, index) => (
              <motion.span
                key={`dy-${index}`}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.7 + index * 0.05,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h4>

          {/* Line 4: ఉ.గం. 10:24 ని. లకు (Noto Sans Telugu, SemiCondensedBold, Color #9F5A2A, ffffff stroke) */}
          <h4 className="font-noto-telugu text-xl sm:text-3xl md:text-4xl text-[#9F5A2A] font-bold leading-none tracking-wide flex justify-center flex-wrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
            {timeStr.map((char, index) => (
              <motion.span
                key={`tm-${index}`}
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
          </h4>
        </div>

        {/* Address Location Button (Replaces latha_border_1) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 1.3, ease: 'easeOut' }}
          className="mt-4 sm:mt-5 z-30 flex justify-center w-full"
        >
          <button
            onClick={() => window.open('https://maps.app.goo.gl/z1Wanysbny4YSmUF6?g_st=aw', '_blank')}
            aria-label="చిరునామా"
            className="group relative px-8 py-2.5 rounded-full bg-[#1B1F24] hover:bg-[#2A3038] text-white font-noto-telugu font-bold text-base sm:text-lg tracking-wide shadow-lg cursor-pointer overflow-hidden z-10 border border-white/30 active:shadow-inner flex items-center justify-center gap-2.5 hover:scale-105 transition-all duration-300 min-w-[170px]"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <img
              src="/assets/pin.svg"
              alt="Location Pin"
              className="w-5 h-5 object-contain brightness-0 invert relative z-10"
            />
            <span className="relative z-10 font-noto-telugu font-bold">చిరునామా</span>
          </button>
        </motion.div>
      </div>

      {/* Sumuhurtham Image (sumuhurtham.png) with exact 16px gap after latha_border_1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full mt-[16px] mb-0 pb-0 flex justify-center pointer-events-none leading-none text-[0px]"
      >
        <img
          src={sumuhurthamImage}
          alt="Sumuhurtham Illustration"
          className="w-full h-auto object-contain block drop-shadow-2xl sm:max-w-2xl md:max-w-3xl align-bottom"
        />
      </motion.div>
    </section>
  );
};
