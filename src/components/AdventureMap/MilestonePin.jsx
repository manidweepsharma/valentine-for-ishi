import { forwardRef } from 'react';
import { motion } from 'motion/react';

const MilestonePin = forwardRef(function MilestonePin(
  { milestone, index, status, onClick },
  ref
) {
  const { position, icon, title } = milestone;
  const isActive = status === 'active';
  const isVisited = status === 'visited';
  const isLocked = status === 'locked';

  return (
    <g
      ref={ref}
      transform={`translate(${position.x}, ${position.y})`}
      onClick={isActive ? onClick : undefined}
      style={{ cursor: isActive ? 'pointer' : 'default' }}
    >
      {/* Glow ring for active pin */}
      {isActive && (
        <motion.circle
          cx={0}
          cy={0}
          r={42}
          fill="none"
          stroke="#FF1493"
          strokeWidth={2}
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Main circle */}
      <motion.circle
        cx={0}
        cy={0}
        r={32}
        fill={isLocked ? '#333' : isVisited ? '#C41E3A' : '#FF1493'}
        stroke={isLocked ? '#555' : '#fff'}
        strokeWidth={3}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 * index, type: 'spring', stiffness: 200 }}
        style={{
          filter: isActive
            ? 'drop-shadow(0 0 12px rgba(255, 20, 147, 0.6))'
            : isVisited
            ? 'drop-shadow(0 0 6px rgba(196, 30, 58, 0.4))'
            : 'none',
        }}
      />

      {/* Icon / status */}
      <text
        x={0}
        y={isLocked ? 6 : 8}
        textAnchor="middle"
        fontSize={isLocked ? 20 : 26}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {isLocked ? '\uD83D\uDD12' : isVisited ? '\u2764\uFE0F' : icon}
      </text>

      {/* Title label */}
      <text
        x={0}
        y={52}
        textAnchor="middle"
        fill={isLocked ? '#666' : '#FFB6C1'}
        fontSize={13}
        fontFamily="'Poppins', sans-serif"
        fontWeight={isActive ? 600 : 300}
        style={{ pointerEvents: 'none' }}
      >
        {title}
      </text>
    </g>
  );
});

export default MilestonePin;
