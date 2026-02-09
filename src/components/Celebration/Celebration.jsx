import { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import FloatingHearts from './FloatingHearts';
import galleryPhotos from '../../data/galleryPhotos';
import './Celebration.css';

export default function Celebration() {
  useEffect(() => {
    const colors = ['#e74c3c', '#e91e63', '#ff69b4', '#ffd700', '#ff1493'];

    const interval = setInterval(() => {
      confetti({
        particleCount: 30,
        spread: 70,
        origin: { x: Math.random(), y: Math.random() * 0.4 },
        colors,
      });
    }, 2500);

    // Initial burst
    confetti({ particleCount: 100, spread: 100, origin: { y: 0.6 }, colors });

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="celebration"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingHearts count={35} />

      <div className="celebration-content">
        <motion.h1
          className="celebration-title"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
        >
          You made me the happiest!
        </motion.h1>

        <motion.p
          className="celebration-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Happy Valentine's Day, Ishi! &hearts;
        </motion.p>

        <motion.div
          className="photo-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={i}
              className="photo-grid-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.15 }}
            >
              <img src={photo.src} alt={photo.caption} />
              <span className="photo-grid-caption">{photo.caption}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="celebration-closing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 + galleryPhotos.length * 0.15 + 0.5 }}
        >
          Here's to us, forever and always. &hearts;
        </motion.p>
        <motion.p
          className="celebration-sign"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 + galleryPhotos.length * 0.15 + 1 }}
        >
          With all my love, Mani
        </motion.p>
      </div>
    </motion.div>
  );
}
