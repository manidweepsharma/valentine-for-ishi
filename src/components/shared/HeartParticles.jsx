import { useMemo } from 'react';
import './HeartParticles.css';

export default function HeartParticles({ count = 25 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 6,
      size: 10 + Math.random() * 25,
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }, [count]);

  return (
    <div className="heart-particles">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-particle"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
          }}
        >
          &hearts;
        </span>
      ))}
    </div>
  );
}
