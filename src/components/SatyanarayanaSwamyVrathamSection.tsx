import React from 'react';
import { motion } from 'motion/react';
import satyanarayanaSwamyImage from '../../assets/satyanarayana_swamy.png';
import { FlowerShower } from './FlowerShower';

const getGraphemes = (str: string): string[] => {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter('te', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(str), (s) => s.segment);
  }
  return str.split('');
};

export const SatyanarayanaSwamyVrathamSection: React.FC = () => {
  const titleLine1 = getGraphemes('శ్రీ సత్యనారాయణ స్వామి');
  const titleLine2 = getGraphemes('వ్రతం');
  const dateStr = getGraphemes('07-09-2026');
  const dayStr = getGraphemes('సోమవారం');
  const timeStr = getGraphemes('ఉదయం 11:00 ని. లకు');

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
          {/* Title: శ్రీ సత్యనారాయణ స్వామి \n వ్రతం (Ponnala, Bold font, Color #1B1F24, stroke FFFFFF) */}
          <h2 className="font-ponnala text-3xl sm:text-5xl md:text-6xl text-[#1B1F24] font-bold leading-tight tracking-wider flex flex-col items-center justify-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)] mb-1">
            <div className="flex justify-center flex-wrap">
              {titleLine1.map((char, index) => (
                <motion.span
                  key={`st1-${index}`}
                  initial={{ opacity: 0, y: 20, scale: 0.8, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1 + index * 0.06,
                    ease: 'easeOut',
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
            <div className="flex justify-center flex-wrap">
              {titleLine2.map((char, index) => (
                <motion.span
                  key={`st2-${index}`}
                  initial={{ opacity: 0, y: 20, scale: 0.8, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1 + (titleLine1.length + index) * 0.06,
                    ease: 'easeOut',
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          </h2>

          {/* Line 2: 07-09-2026 (Ramabhadra, Regular, Color #9F5A2A, ffffff stroke) */}
          <h3 className="font-ramabhadra text-4xl sm:text-6xl md:text-7xl text-[#9F5A2A] font-normal leading-none tracking-wider flex justify-center flex-wrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)] pt-1">
            {dateStr.map((char, index) => (
              <motion.span
                key={`std-${index}`}
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
                key={`stdy-${index}`}
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
                key={`sttm-${index}`}
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

        {/* Latha Border (latha_border_1.svg) */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 1, 0.5, 1] }}
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

      {/* Satyanarayana Swamy Image (satyanarayana_swamy.png) with exact 16px gap after latha_border_1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full mt-[16px] mb-0 pb-0 flex justify-center pointer-events-none leading-none text-[0px]"
      >
        <img
          src={satyanarayanaSwamyImage}
          alt="Satyanarayana Swamy Vratham Illustration"
          className="w-full h-auto object-contain block drop-shadow-2xl sm:max-w-2xl md:max-w-3xl align-bottom"
        />
      </motion.div>
    </section>
  );
};
