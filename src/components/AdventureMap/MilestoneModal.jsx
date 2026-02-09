import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './MilestoneModal.css';

export default function MilestoneModal({ milestone, onClose }) {
  const [revealed, setRevealed] = useState(false);
  const isFlip = milestone.interaction === 'flip';

  const handleReveal = () => setRevealed(true);

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-card"
        initial={{ scale: 0.7, opacity: 0, rotateY: isFlip ? -90 : 0 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {!revealed ? (
          <div className="modal-front" onClick={handleReveal}>
            <div className="modal-icon-large">{milestone.icon}</div>
            <h3 className="modal-title">{milestone.title}</h3>
            <p className="modal-hint">
              {isFlip ? 'Tap to flip & reveal' : 'Tap to reveal'}
            </p>
          </div>
        ) : (
          <motion.div
            className="modal-revealed"
            initial={isFlip ? { rotateY: 90 } : { opacity: 0, y: 20 }}
            animate={isFlip ? { rotateY: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="modal-photo-wrapper">
              <img
                src={milestone.photo}
                alt={milestone.title}
                className="modal-photo"
              />
            </div>
            <h3 className="modal-title">{milestone.title}</h3>
            <p className="modal-caption">{milestone.caption}</p>
            <motion.button
              className="modal-close-btn"
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue &hearts;
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
