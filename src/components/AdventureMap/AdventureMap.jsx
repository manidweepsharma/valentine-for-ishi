import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import milestones from '../../data/milestones';
import MapPath from './MapPath';
import MilestonePin from './MilestonePin';
import MilestoneModal from './MilestoneModal';
import './AdventureMap.css';

export default function AdventureMap({ onComplete }) {
  const [unlockedIndex, setUnlockedIndex] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(null);
  const mapRef = useRef(null);
  const pinRefs = useRef([]);

  const handlePinClick = (index) => {
    if (index === unlockedIndex) {
      setActiveMilestone(milestones[index]);
    }
  };

  const handleModalClose = () => {
    const nextIndex = unlockedIndex + 1;
    setActiveMilestone(null);
    setUnlockedIndex(nextIndex);

    if (nextIndex < milestones.length) {
      setTimeout(() => {
        pinRefs.current[nextIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 400);
    }
  };

  const allComplete = unlockedIndex >= milestones.length;

  useEffect(() => {
    if (pinRefs.current[0]) {
      setTimeout(() => {
        pinRefs.current[0]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 600);
    }
  }, []);

  return (
    <motion.div
      className="adventure-map"
      ref={mapRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="map-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Our Love Story
      </motion.h2>
      <p className="map-subtitle">Tap each milestone to relive our memories</p>

      <div className="map-container">
        <svg
          viewBox="0 0 1000 2200"
          className="map-svg"
          preserveAspectRatio="xMidYMin meet"
        >
          <MapPath progress={(unlockedIndex) / milestones.length} />

          {milestones.map((m, i) => (
            <MilestonePin
              key={m.id}
              milestone={m}
              index={i}
              status={
                i < unlockedIndex ? 'visited' : i === unlockedIndex ? 'active' : 'locked'
              }
              onClick={() => handlePinClick(i)}
              ref={(el) => (pinRefs.current[i] = el)}
            />
          ))}
        </svg>
      </div>

      {activeMilestone && (
        <MilestoneModal
          milestone={activeMilestone}
          onClose={handleModalClose}
        />
      )}

      {allComplete && (
        <motion.div
          className="map-complete"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 0.3 }}
        >
          <p className="map-complete-text">You've relived all our memories!</p>
          <motion.button
            className="map-continue-btn"
            onClick={onComplete}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue to a surprise &hearts;
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
