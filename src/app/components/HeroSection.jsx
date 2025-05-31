"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [readyToPlay, setReadyToPlay] = useState(false);
  const clipRef = useRef(null);
  const playerRef = useRef(null);

  // Play silent clip on mount
  useEffect(() => {
    clipRef.current?.play();
  }, []);

  // Prevent background scroll when video player is open
  useEffect(() => {
    document.body.style.overflow = showPlayer ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showPlayer]);

  const handleShowPlayer = () => {
    setShowPlayer(true);
    setReadyToPlay(true);
  };

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.muted = false;
      playerRef.current.play();
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 40s silent clip background */}
      <video
        ref={clipRef}
        autoPlay
        muted
        loop
        className="absolute inset-0 -z-30 w-full h-full object-cover brightness-75"
      >
        <source src="/videos/hero-clip.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 px-4 max-w-4xl mx-auto py-16 flex flex-col justify-center items-center min-h-screen text-center">
        <p className="font-title text-xl md:text-3xl text-antique mb-6 leading-relaxed">
          Juke Blue's Double Blue instills the holy essence of nature into every blessed drop.
          Its secret was revealed as he stood destitute on the shores of the Aegean Sea.
        </p>
        <button
          onClick={handleShowPlayer}
          className="mt-6 px-8 py-3 text-lg bg-antique text-nautical border-2 border-nautical rounded-lg font-title shadow-md hover:bg-blush transition-all duration-200"
        >
          See how he got there →
        </button>
      </div>

      <AnimatePresence>
        {showPlayer && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Fullscreen video element */}
            <motion.video
              ref={playerRef}
              controls
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onCanPlay={() => readyToPlay && handlePlay()}
            >
              <source src="/videos/hero-full.mp4" type="video/mp4" />
            </motion.video>

            {/* Custom play overlay */}
            {!readyToPlay && (
              <button
                onClick={handlePlay}
                className="absolute z-50 text-white text-6xl"
                aria-label="Play video with sound"
              >
                ▶
              </button>
            )}

            {/* Close button */}
            <button
              onClick={() => setShowPlayer(false)}
              className="absolute top-20 right-4 text-white text-3xl hover:text-red-500"
              aria-label="Close"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}



