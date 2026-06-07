'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [loading, lenis]);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        // Random increment for realistic feel
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Main Title Reveal */}
          <div className="overflow-hidden mb-12 py-2 -my-2">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Expo ease out for buttery smoothness
              className="font-heading text-4xl md:text-6xl uppercase tracking-tighter will-change-transform"
            >
              BHAVIT RAJPUT
            </motion.h1>
          </div>

          {/* Progress Container */}
          <div className="w-64 max-w-[80vw]">
            <div className="flex justify-between items-end mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              <span>Loading</span>
              <motion.span>{Math.min(progress, 100)}%</motion.span>
            </div>
            
            {/* Progress Bar */}
            <div className="h-[2px] w-full bg-border overflow-hidden">
              <motion.div 
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
