import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Pause, Play } from 'lucide-react';
import audioFile from '../../assets/audio.mp3';

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlay = true }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  useEffect(() => {
    audioRef.current = new Audio(audioFile);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (autoPlay && audioRef.current && !hasInteracted) {
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
          setIsPlaying(true);
          setHasInteracted(true);
        } catch (error) {
          console.log("Autoplay was blocked by browser:", error);
        }
      };
      playAudio();
    }
  }, [autoPlay, hasInteracted]);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => {
          console.error("Audio playback failed: ", err);
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:right-[calc(50vw-215px+24px)] z-50 select-none">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
        className="relative p-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(61,43,31,0.18)] hover:shadow-[0_12px_36px_rgba(212,175,55,0.35)] transition-all duration-300 group"
      >
        {/* Subtle gold glow aura */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/25 via-[#DF0038]/15 to-[#009174]/25 blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Circular FAB Button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#E5C358] to-[#B89228] text-[#3D2B1F] flex items-center justify-center cursor-pointer overflow-hidden z-10 border border-white/50 shadow-md active:shadow-inner"
        >
          {/* Vinyl spin animation border */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-white/40 pointer-events-none"
          />

          {/* Play/Pause icon */}
          <div className="relative z-10 text-[#2B1B10] flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
};
