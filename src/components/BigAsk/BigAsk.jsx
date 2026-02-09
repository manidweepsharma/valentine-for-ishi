import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import NoButton from './NoButton';
import './BigAsk.css';

function fireConfetti() {
  const defaults = {
    colors: ['#e74c3c', '#e91e63', '#ff69b4', '#ffd700', '#ff1493', '#C41E3A'],
  };

  confetti({
    ...defaults,
    particleCount: 100,
    spread: 80,
    origin: { y: 0.65 },
  });

  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 60,
      spread: 100,
      origin: { x: 0.3, y: 0.6 },
    });
  }, 200);

  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 60,
      spread: 100,
      origin: { x: 0.7, y: 0.6 },
    });
  }, 400);
}

export default function BigAsk({ onYes }) {
  const handleYes = () => {
    fireConfetti();
    setTimeout(() => {
      fireConfetti();
      setTimeout(() => onYes(), 800);
    }, 600);
  };

  return (
    <motion.div
      className="big-ask"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="big-ask-content">
        <motion.p
          className="big-ask-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Ishi...
        </motion.p>

        <motion.h1
          className="big-ask-question"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}
        >
          Will you be my Valentine?
        </motion.h1>

        <motion.div
          className="big-ask-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.button
            className="yes-btn"
            onClick={handleYes}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Yes! &hearts;
          </motion.button>

          <NoButton />
        </motion.div>
      </div>
    </motion.div>
  );
}
