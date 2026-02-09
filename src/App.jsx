import { useState, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import Landing from './components/Landing/Landing';
import AdventureMap from './components/AdventureMap/AdventureMap';
import LoveLetter from './components/LoveLetter/LoveLetter';
import BigAsk from './components/BigAsk/BigAsk';
import Celebration from './components/Celebration/Celebration';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import useAudioPlayer from './hooks/useAudioPlayer';
import { asset } from './utils/assetPath';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const { isPlaying, toggle, play } = useAudioPlayer(asset('music/song.mp3'));

  const handleEnter = useCallback(() => {
    play();
    setCurrentPage('adventure');
  }, [play]);

  return (
    <div className="app">
      {currentPage !== 'landing' && (
        <MusicPlayer isPlaying={isPlaying} onToggle={toggle} />
      )}

      <AnimatePresence mode="wait">
        {currentPage === 'landing' && (
          <Landing key="landing" onEnter={handleEnter} />
        )}
        {currentPage === 'adventure' && (
          <AdventureMap
            key="adventure"
            onComplete={() => setCurrentPage('letter')}
          />
        )}
        {currentPage === 'letter' && (
          <LoveLetter
            key="letter"
            onContinue={() => setCurrentPage('bigask')}
          />
        )}
        {currentPage === 'bigask' && (
          <BigAsk
            key="bigask"
            onYes={() => setCurrentPage('celebration')}
          />
        )}
        {currentPage === 'celebration' && (
          <Celebration key="celebration" />
        )}
      </AnimatePresence>
    </div>
  );
}
