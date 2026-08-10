import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  className: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: '/assets/gallery_1.png',
    alt: 'Wedding Gallery Photo 1',
    className: 'col-span-12 md:col-span-7 h-[280px] sm:h-[380px]',
  },
  {
    id: '2',
    src: '/assets/gallery_2.png',
    alt: 'Wedding Gallery Photo 2',
    className: 'col-span-12 md:col-span-5 h-[240px] sm:h-[380px]',
  },
  {
    id: '3',
    src: '/assets/gallery_3.png',
    alt: 'Wedding Gallery Photo 3',
    className: 'col-span-12 sm:col-span-6 md:col-span-4 h-[240px] sm:h-[280px]',
  },
  {
    id: '4',
    src: '/assets/gallery_4.png',
    alt: 'Wedding Gallery Photo 4',
    className: 'col-span-12 sm:col-span-6 md:col-span-4 h-[240px] sm:h-[280px]',
  },
  {
    id: '5',
    src: '/assets/gallery_5.png',
    alt: 'Wedding Gallery Photo 5',
    className: 'col-span-12 md:col-span-4 h-[240px] sm:h-[280px]',
  },
  {
    id: '6',
    src: '/assets/gallery_6.png',
    alt: 'Wedding Gallery Photo 6',
    className: 'col-span-12 md:col-span-6 h-[260px] sm:h-[340px]',
  },
  {
    id: '7',
    src: '/assets/gallery_7.png',
    alt: 'Wedding Gallery Photo 7',
    className: 'col-span-12 md:col-span-6 h-[260px] sm:h-[340px]',
  },
];

export const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0));
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0
      );
    }
  }, [selectedIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    },
    [selectedIndex, handleNext, handlePrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="relative min-h-screen w-full bg-[#E9E5E1] select-none snap-start snap-always overflow-x-hidden py-12 sm:py-16 px-4 sm:px-8 flex flex-col items-center justify-between">
      {/* 1. Background Image (bg_1.svg) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/bg_1.svg"
          alt="Background Texture"
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center my-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-3 sm:gap-5 w-full">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              onClick={() => setSelectedIndex(idx)}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-white shadow-lg group cursor-pointer bg-stone-200/50 transition-all duration-300 hover:shadow-2xl hover:border-[#006B55]/40 hover:-translate-y-1 ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Dark Overlay & Zoom Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn size={22} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/15 text-white hover:bg-white/30 border border-white/20 transition-colors backdrop-blur-sm focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/15 text-white hover:bg-white/30 border border-white/20 transition-colors backdrop-blur-sm focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main Lightbox Image */}
            <div
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                src={GALLERY_IMAGES[selectedIndex].src}
                alt={GALLERY_IMAGES[selectedIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl border-2 border-white/80 shadow-2xl"
              />

              {/* Counter Indicator */}
              <div className="mt-4 px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-noto-telugu font-semibold">
                {selectedIndex + 1} / {GALLERY_IMAGES.length}
              </div>
            </div>

            {/* Navigation Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/15 text-white hover:bg-white/30 border border-white/20 transition-colors backdrop-blur-sm focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
