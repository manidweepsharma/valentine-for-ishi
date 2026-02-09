import { motion } from 'motion/react';
import letterContent from '../../data/letterContent';
import './LoveLetter.css';

export default function LoveLetter({ onContinue }) {
  return (
    <motion.div
      className="love-letter-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="letter-card"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ transformOrigin: 'top center' }}
      >
        <motion.p
          className="letter-greeting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {letterContent.greeting}
        </motion.p>

        {letterContent.paragraphs.map((paragraph, i) => (
          <motion.p
            key={i}
            className="letter-paragraph"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.5, duration: 0.6 }}
          >
            {paragraph}
          </motion.p>
        ))}

        <motion.div
          className="letter-closing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 + letterContent.paragraphs.length * 0.5 + 0.3 }}
        >
          <p className="letter-closing-text">{letterContent.closing}</p>
          <p className="letter-signature">{letterContent.signature}</p>
        </motion.div>

        <div className="letter-seal">
          <span className="seal-text">My Love</span>
        </div>
      </motion.div>

      <motion.button
        className="letter-continue-btn"
        onClick={onContinue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 + letterContent.paragraphs.length * 0.5 + 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Continue to a surprise &rarr;
      </motion.button>
    </motion.div>
  );
}
