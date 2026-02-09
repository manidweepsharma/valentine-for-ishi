import { useState, useEffect, useRef, useCallback } from 'react';
import { Howl } from 'howler';

export default function useAudioPlayer(src) {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [src],
      loop: true,
      volume: 0.4,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [src]);

  const play = useCallback(() => {
    if (soundRef.current && !soundRef.current.playing()) {
      soundRef.current.play();
    }
  }, []);

  const toggle = useCallback(() => {
    if (!soundRef.current) return;
    if (soundRef.current.playing()) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
  }, []);

  return { isPlaying, toggle, play };
}
