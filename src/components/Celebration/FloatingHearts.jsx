import { useMemo } from 'react';
import './FloatingHearts.css';

export default function FloatingHearts({ count = 30 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 5,
      size: 12 + Math.random() * 30,
      hue: 330 + Math.random() * 40,
    }));
  }, [count]);

  return (
    <div className="floating-hearts">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
            color: `hsl(${h.hue}, 90%, 60%)`,
          }}
        >
          &hearts;
        </span>
      ))}
    </div>
  );
}
