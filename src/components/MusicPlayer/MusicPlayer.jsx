import './MusicPlayer.css';

export default function MusicPlayer({ isPlaying, onToggle }) {
  return (
    <button
      className={`music-player ${isPlaying ? 'playing' : ''}`}
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      <span className="music-icon">{isPlaying ? '\u266B' : '\u266A'}</span>
    </button>
  );
}
