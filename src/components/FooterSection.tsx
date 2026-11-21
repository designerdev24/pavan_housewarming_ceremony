import React from 'react';
import { motion } from 'motion/react';
import { FlowerShower } from './FlowerShower';

const getGraphemes = (str: string): string[] => {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter('te', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(str), (s) => s.segment);
  }
  return str.split('');
};

export const FooterSection: React.FC = () => {
  const headerTitle = getGraphemes('మీ ఆగమనాభిలాషులు');
  const name1 = getGraphemes('శ్రీ అనుముల పవన్ కుమార్');
  const name2 = getGraphemes('శ్రీ పట్టెం వెంకట లక్ష్మి');

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-[#F3E8DD] to-[#F2ECE4] select-none snap-start snap-always">
      {/* Falling Flower Shower */}
      <FlowerShower />

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
          <motion.img
            src="/assets/lord_ganesh.svg"
            alt="Lord Ganesh"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-14 h-14 sm:w-20 sm:h-20 object-contain drop-shadow-md"
          />
        </motion.div>

        {/* Title: మీ ఆగమనాభిలాషులు */}
        <h2 className="font-ponnala text-3xl sm:text-5xl md:text-6xl text-[#1B1F24] font-bold leading-tight tracking-wider flex justify-center flex-wrap mb-4 sm:mb-6 text-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
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
          {/* Name 1: శ్రీ చెంబాటి కోటేశ్వరరావు */}
          <h3 className="font-ramabhadra text-2xl sm:text-4xl md:text-5xl text-[#9F5A2A] font-normal leading-tight tracking-wide flex justify-center flex-wrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
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

          {/* Name 2: శ్రీమతి చెంబాటి నగరాణి */}
          <h3 className="font-ramabhadra text-2xl sm:text-4xl md:text-5xl text-[#9F5A2A] font-normal leading-tight tracking-wide flex justify-center flex-wrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
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


        {/* Address Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2.2, ease: 'easeOut' }}
          className="mt-2 sm:mt-3 px-6 py-4 rounded-2xl bg-white/45 backdrop-blur-sm border border-[#D4AF37]/40 shadow-sm max-w-lg mx-auto flex flex-col items-center justify-center space-y-1.5"
        >
          <h4 className="font-noto-telugu text-base sm:text-lg text-[#9F5A2A] font-bold tracking-wide text-center">
            చిరునామా
          </h4>
          <p className="font-noto-telugu text-sm sm:text-base text-[#1B1F24] font-semibold leading-relaxed tracking-normal text-center">
            ప్లాట్ నెం. 167 , శ్రీనివాసం లేఅవుట్ ఫేజ్-1 , సత్తెనపల్లి.
          </p>
        </motion.div>

        {/* Location Navigation Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 2.4, ease: 'easeOut' }}
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

    </section>
  );
};
