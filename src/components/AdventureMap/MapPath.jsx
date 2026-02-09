import { motion } from 'motion/react';

const PATH_D =
  "M 500,80 C 700,120 850,250 750,380 C 650,510 200,420 250,580 C 300,740 850,680 750,850 C 650,1020 200,960 250,1120 C 300,1280 850,1220 750,1390 C 650,1560 200,1500 250,1660 C 300,1820 600,1880 500,2020";

export default function MapPath({ progress }) {
  return (
    <>
      {/* Background path (dashed trail) */}
      <path
        d={PATH_D}
        fill="none"
        stroke="rgba(255, 182, 193, 0.15)"
        strokeWidth={4}
        strokeDasharray="12 8"
      />
      {/* Animated progress path */}
      <motion.path
        d={PATH_D}
        fill="none"
        stroke="url(#pathGradient)"
        strokeWidth={5}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: Math.min(progress, 1) }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      {/* Gradient definition */}
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF1493" />
          <stop offset="50%" stopColor="#C41E3A" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </>
  );
}
