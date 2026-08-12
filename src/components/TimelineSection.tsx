import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, ZoomIn } from 'lucide-react';

const getGraphemes = (str: string): string[] => {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter('te', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(str), (s) => s.segment);
  }
  return str.split('');
};

interface TimelineItemData {
  id: string;
  date: string;
  time: string;
  title: string;
  venueLabel: string;
  addressLines: string[];
  image: string;
  mapUrl?: string;
  isoStart?: string;
  isoEnd?: string;
}

const VENUE_MAP_URL = 'https://maps.app.goo.gl/3XyUUTV83urCTdedA';

const TIMELINE_EVENTS: TimelineItemData[] = [
  {
    id: 'pellikoduku',
    date: '16-08-2026',
    time: 'ఉ.గం. 06:35 ని. లకు',
    title: 'పెళ్లికొడుకు',
    venueLabel: 'వేదిక:',
    addressLines: ['పెళ్లికుమారుని', 'స్వగృహమునందు'],
    image: '/assets/Timeline Pellikoduku.png',
    mapUrl: VENUE_MAP_URL,
    isoStart: '20260816T010500Z',
    isoEnd: '20260816T040500Z',
  },
  {
    id: 'pellikoothuru',
    date: '16-08-2026',
    time: 'ఉ.గం. 07:42 ని. లకు',
    title: 'పెళ్లికూతురు',
    venueLabel: 'వేదిక:',
    addressLines: ['పెళ్లికుమార్తె', 'స్వగృహమునందు'],
    image: '/assets/Timeline Pellikoothuru.png',
    mapUrl: VENUE_MAP_URL,
    isoStart: '20260816T021200Z',
    isoEnd: '20260816T051200Z',
  },
  {
    id: 'haldhi',
    date: '18-08-2026',
    time: 'రా.గం. 07:00 ని. లకు',
    title: 'హల్దీ వేడుక',
    venueLabel: 'వేదిక:',
    addressLines: ['పెళ్లికుమారుని', 'స్వగృహమునందు'],
    image: '/assets/Timeline Haldhi.png',
    mapUrl: VENUE_MAP_URL,
    isoStart: '20260818T133000Z',
    isoEnd: '20260818T163000Z',
  },
  {
    id: 'sumuhurtham',
    date: '24-08-2026',
    time: 'ఉ.గం. 04:35 ని. లకు',
    title: 'సుముహూర్తం',
    venueLabel: 'వేదిక:',
    addressLines: ['కెవిఆర్ కన్వెన్షన్,', 'సర్వవరం జంక్షన్,', 'కాకినాడ.'],
    image: '/assets/Timeline Sumuhurtham.png',
    mapUrl: VENUE_MAP_URL,
    isoStart: '20260823T230500Z',
    isoEnd: '20260824T020500Z',
  },
  {
    id: 'reception',
    date: '25-08-2026',
    time: 'రా.గం. 07:00 ని. లకు',
    title: 'రిసెప్షన్',
    venueLabel: 'వేదిక:',
    addressLines: ['కెవిఆర్ కన్వెన్షన్,', 'సర్వవరం జంక్షన్,', 'కాకినాడ.'],
    image: '/assets/Timeline Reception.png',
    mapUrl: VENUE_MAP_URL,
    isoStart: '20260825T133000Z',
    isoEnd: '20260825T163000Z',
  },
];

const getGoogleCalendarUrl = (item: TimelineItemData): string => {
  const details = `కార్యక్రమం: ${item.title}\nతేదీ: ${item.date}\nసమయం: ${item.time}\nవేదిక: ${item.addressLines.join(' ')}`;
  const location = item.addressLines.join(', ');
  const title = `వివాహ వేడుక - ${item.title}`;

  let datesParam = '';
  if (item.isoStart && item.isoEnd) {
    datesParam = `${item.isoStart}/${item.isoEnd}`;
  } else {
    const parts = item.date.split('-');
    if (parts.length === 3) {
      const yyyymmdd = `${parts[2]}${parts[1]}${parts[0]}`;
      datesParam = `${yyyymmdd}/${yyyymmdd}`;
    }
  }

  const baseUrl = 'https://calendar.google.com/calendar/render';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    details: details,
    location: location,
  });

  let url = `${baseUrl}?${params.toString()}`;
  if (datesParam) {
    url += `&dates=${datesParam}`;
  }
  return url;
};

const TimelineItem: React.FC<{
  item: TimelineItemData;
  index: number;
  onSelect: (item: TimelineItemData) => void;
}> = ({ item, index, onSelect }) => {
  const dateChars = getGraphemes(item.date);
  const timeChars = getGraphemes(item.time);
  const titleChars = getGraphemes(item.title);
  const venueLabelChars = getGraphemes(item.venueLabel);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      className="relative flex items-center justify-between gap-2 sm:gap-4 py-2 sm:py-3.5 w-full max-w-lg mx-auto"
    >
      {/* Timeline Node Circle Dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute -left-[17px] sm:-left-[21px] top-5 sm:top-6 z-20 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#006B55] ring-3 ring-[#E9E5E1] flex items-center justify-center"
      >
        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white" />
      </motion.div>

      {/* Left Details Column */}
      <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1 pl-1 sm:pl-2">
        {/* Date */}
        <h3 className="font-ramabhadra text-lg sm:text-xl md:text-2xl text-[#AC1619] font-normal leading-none tracking-wide flex flex-nowrap whitespace-nowrap">
          {dateChars.map((char, i) => (
            <motion.span
              key={`d-${index}-${i}`}
              initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
              className="inline-block paint-order-stroke [-webkit-text-stroke:2px_#ffffff]"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h3>

        {/* Time */}
        <h4 className="font-noto-telugu text-xs sm:text-sm md:text-base text-[#AC1619] font-bold leading-tight flex flex-nowrap whitespace-nowrap">
          {timeChars.map((char, i) => (
            <motion.span
              key={`tm-${index}-${i}`}
              initial={{ opacity: 0, y: 6, filter: 'blur(3px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.03 }}
              className="inline-block paint-order-stroke [-webkit-text-stroke:1.5px_#ffffff]"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h4>

        {/* Event Title */}
        <h2 className="font-noto-telugu text-xl sm:text-3xl md:text-4xl text-[#006B55] font-bold leading-snug flex flex-wrap pt-0.5">
          {titleChars.map((char, i) => (
            <motion.span
              key={`t-${index}-${i}`}
              initial={{ opacity: 0, y: 10, scale: 0.9, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.5 + i * 0.05 }}
              className="inline-block paint-order-stroke [-webkit-text-stroke:2px_#ffffff]"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h2>

        {/* Venue Label */}
        <div className="font-noto-telugu text-xs sm:text-sm text-[#AC1619] font-bold leading-tight flex flex-nowrap whitespace-nowrap pt-0.5">
          {venueLabelChars.map((char, i) => (
            <motion.span
              key={`vl-${index}-${i}`}
              initial={{ opacity: 0, filter: 'blur(3px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.65 + i * 0.04 }}
              className="inline-block paint-order-stroke [-webkit-text-stroke:1.5px_#ffffff]"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>

        {/* Venue Address */}
        <div className="font-noto-telugu text-xs sm:text-sm text-[#006B55] font-semibold leading-tight space-y-0.5">
          {item.addressLines.map((line, lineIdx) => {
            const lineChars = getGraphemes(line);
            return (
              <div key={`al-${index}-${lineIdx}`} className="flex flex-wrap">
                {lineChars.map((char, i) => (
                  <motion.span
                    key={`alc-${index}-${lineIdx}-${i}`}
                    initial={{ opacity: 0, y: 4, filter: 'blur(3px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 0.75 + lineIdx * 0.15 + i * 0.02 }}
                    className="inline-block paint-order-stroke [-webkit-text-stroke:1.5px_#ffffff]"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Frame Image */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0, x: 15 }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        onClick={() => onSelect(item)}
        className="shrink-0 w-[40%] max-w-[210px] aspect-[4/5] relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-2 border-white group bg-stone-100 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-[#D4AF37] hover:scale-[1.02]"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay with Zoom Indicator on Hover */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 flex items-center justify-center text-white shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <ZoomIn className="w-5 h-5" />
          </div>
        </div>
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl sm:rounded-2xl pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export const TimelineSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineItemData | null>(null);
  const headerTitle = getGraphemes('కార్యక్రమాలు');

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedEvent(null);
    }
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent, handleKeyDown]);

  return (
    <section className="relative min-h-screen w-full bg-[#E9E5E1] select-none snap-start snap-always overflow-x-hidden">
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

      {/* Main Timeline Content */}
      <div className="relative z-20 w-full max-w-xl mx-auto px-3 sm:px-4 pt-8 sm:pt-12 pb-20 sm:pb-28 flex flex-col items-center">
        {/* Header: కార్యక్రమాలు */}
        <h2 className="font-dhurjati text-[42px] sm:text-5xl md:text-6xl text-[#006B55] font-bold leading-tight tracking-wider flex justify-center flex-wrap mb-4 sm:mb-8 text-center">
          {headerTitle.map((char, index) => (
            <motion.span
              key={`ht-${index}`}
              initial={{ opacity: 0, y: 15, scale: 0.8, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.2 + index * 0.08,
                ease: 'easeOut',
              }}
              className="inline-block paint-order-stroke [-webkit-text-stroke:2.5px_#ffffff]"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h2>

        {/* Timeline Axis & Items */}
        <div className="relative w-full pl-4 sm:pl-5 pr-1">
          {/* Vertical Teal Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top center' }}
            className="absolute left-[4px] sm:left-[5px] top-5 bottom-5 w-1 bg-[#006B55] rounded-full z-10"
          />

          {/* Timeline Items */}
          <div className="space-y-8">
            {TIMELINE_EVENTS.map((eventItem, idx) => (
              <TimelineItem
                key={eventItem.id}
                item={eventItem}
                index={idx}
                onSelect={setSelectedEvent}
              />
            ))}
          </div>
        </div>

        {/* Latha Border Accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          style={{ transformOrigin: 'center' }}
          className="mt-6 sm:mt-10 flex justify-center w-full max-w-[200px] sm:max-w-[260px]"
        >
          <img
            src="/assets/latha_border_1.svg"
            alt="Decorative Border"
            className="w-full h-auto object-contain"
          />
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
          className="w-full h-auto object-contain object-bottom drop-shadow-xl sm:max-w-xl md:max-w-2xl opacity-60"
        />
      </motion.div>

      {/* Event Details Modal Popup */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#E9E5E1] rounded-2xl sm:rounded-3xl border-2 border-[#D4AF37] shadow-2xl overflow-hidden my-auto"
            >
              {/* Background texture inside modal */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <img
                  src="/assets/bg_1.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 rounded-full bg-white/80 hover:bg-white text-[#AC1619] shadow-md border border-[#D4AF37] transition-all hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 p-4 sm:p-6 flex flex-col items-center text-center space-y-4">
                {/* Event Title */}
                <h3 className="font-dhurjati text-3xl sm:text-4xl text-[#006B55] font-bold leading-tight pt-2">
                  {selectedEvent.title}
                </h3>

                {/* Event Image */}
                <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-3 border-white ring-2 ring-[#D4AF37]/50 bg-stone-100">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Details Section */}
                <div className="w-full space-y-2 pt-1 px-2">
                  {/* Date & Time */}
                  <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                    <span className="font-ramabhadra text-xl sm:text-2xl text-[#AC1619] font-bold">
                      {selectedEvent.date}
                    </span>
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span className="font-noto-telugu text-base sm:text-lg text-[#AC1619] font-bold">
                      {selectedEvent.time}
                    </span>
                  </div>

                  {/* Venue */}
                  <div className="font-noto-telugu text-sm sm:text-base text-[#006B55] font-semibold space-y-0.5 bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-[#D4AF37]/30">
                    <div className="text-[#AC1619] font-bold text-xs sm:text-sm">
                      {selectedEvent.venueLabel}
                    </div>
                    {selectedEvent.addressLines.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>

                {/* Decorative Separator */}
                <div className="w-32 h-auto opacity-70 py-1">
                  <img
                    src="/assets/latha_border_1.svg"
                    alt=""
                    className="w-full h-auto"
                  />
                </div>

                {/* Action Buttons */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
                  {/* Map Directions Button */}
                  <a
                    href={selectedEvent.mapUrl || VENUE_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 py-2.5 px-4 rounded-full bg-[#006B55] hover:bg-[#005241] text-white font-noto-telugu font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md border border-[#D4AF37] transition-all hover:shadow-lg active:scale-95"
                  >
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span>వేదికకు దారి</span>
                  </a>

                  {/* Google Calendar Button */}
                  <a
                    href={getGoogleCalendarUrl(selectedEvent)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 py-2.5 px-4 rounded-full bg-[#AC1619] hover:bg-[#881114] text-white font-noto-telugu font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md border border-[#D4AF37] transition-all hover:shadow-lg active:scale-95"
                  >
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>క్యాలెండర్</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
