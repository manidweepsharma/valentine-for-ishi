import { motion } from 'motion/react';
import HeartParticles from '../shared/HeartParticles';
import './Landing.css';

const words = ["Ishi,", "I", "made", "something", "special", "for", "you..."];

export default function Landing({ onEnter }) {
  return (
    <motion.div
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <HeartParticles count={30} />
      <div className="landing-content">
        <motion.h1 className="landing-title">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.25, duration: 0.5 }}
              className="landing-word"
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="landing-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          Click to begin our adventure
        </motion.p>

        <motion.button
          className="landing-btn"
          onClick={onEnter}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="btn-heart">&hearts;</span> Begin
        </motion.button>
      </div>
    </motion.div>
  );
}
