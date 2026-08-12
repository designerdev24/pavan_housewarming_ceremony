import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface Petal {
  id: number;
  xStart: number;
  xDrift: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  spinDir: number;
  opacity: number;
  colorType: 'marigold' | 'rose' | 'jasmine' | 'gold';
}

export const FlowerShower: React.FC = () => {
  // Curated list of falling petals with staggered timing for a serene, calm shower
  const petals = useMemo<Petal[]>(() => {
    const types: ('marigold' | 'rose' | 'jasmine' | 'gold')[] = [
      'marigold',
      'rose',
      'marigold',
      'jasmine',
      'gold',
      'rose',
    ];

    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      xStart: Math.random() * 100,
      xDrift: (Math.random() - 0.5) * 50,
      size: 14 + Math.random() * 14,
      duration: 9 + Math.random() * 7,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
      spinDir: Math.random() > 0.5 ? 1 : -1,
      opacity: 0.45 + Math.random() * 0.45,
      colorType: types[i % types.length],
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30 select-none">
      {petals.map((p) => {
        const petalColor =
          p.colorType === 'marigold'
            ? 'fill-[#FFB703] stroke-[#E85D04]/30'
            : p.colorType === 'rose'
            ? 'fill-[#DF0038] stroke-[#AC1619]/40'
            : p.colorType === 'gold'
            ? 'fill-[#D4AF37] stroke-[#F2CA50]/50'
            : 'fill-[#FFFDF6] stroke-[#D4AF37]/40';

        return (
          <motion.div
            key={p.id}
            initial={{
              top: '-6%',
              left: `${p.xStart}%`,
              opacity: 0,
              scale: 0.6,
              rotate: p.rotation,
            }}
            animate={{
              top: '106%',
              x: [0, p.xDrift, -p.xDrift, 0],
              rotate: p.rotation + 360 * p.spinDir,
              opacity: [0, p.opacity, p.opacity, 0],
              scale: [0.7, 1, 0.9, 0.7],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              width: p.size,
              height: p.size * 1.35,
            }}
          >
            <svg
              viewBox="0 0 24 32"
              className={`w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)] ${petalColor}`}
              style={{ strokeWidth: 0.7 }}
            >
              {/* Natural curved flower petal SVG */}
              <path d="M12 0 C 20 8, 24 20, 12 32 C 0 20, 4 8, 12 0 Z" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};
