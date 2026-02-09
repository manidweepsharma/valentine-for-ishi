import { useState, useRef } from 'react';
import { motion } from 'motion/react';

const responses = [
  "No",
  "Are you sure? :(",
  "Really really sure?",
  "Mani will be sad...",
  "Please? Pretty please?",
];

export default function NoButton() {
  const [clickCount, setClickCount] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const btnRef = useRef(null);

  const handleClick = () => {
    const next = clickCount + 1;
    setClickCount(next);

    if (next >= responses.length) return;

    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;
    setPos({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2,
    });
  };

  if (clickCount >= responses.length) return null;

  const scale = Math.max(1 - clickCount * 0.15, 0.4);
  const label = responses[Math.min(clickCount, responses.length - 1)];

  return (
    <motion.button
      ref={btnRef}
      className="no-btn"
      onClick={handleClick}
      animate={{
        x: pos.x,
        y: pos.y,
        scale,
        opacity: 1 - clickCount * 0.15,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      whileHover={{ scale: scale * 0.9 }}
    >
      {label}
    </motion.button>
  );
}
