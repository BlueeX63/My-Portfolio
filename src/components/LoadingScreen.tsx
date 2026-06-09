'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  
  const columns = 20;
  const rows = 20;
  const totalTiles = columns * rows;

  useEffect(() => {
    // Lock scroll instantly natively
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      // Natively set everything to invisible immediately to prevent FOUC
      gsap.set('.char', { opacity: 0 });
      gsap.set('.grid-container', { display: 'none' });
      
      const dummy = { val: 0 };
      
      // Counter Animation
      gsap.to(dummy, {
        val: 100,
        duration: 1.5,
        delay: 0.1, 
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            const currentVal = Math.round(dummy.val);
            counterRef.current.innerText = currentVal === 100 ? "SYSTEM_READY 100%" : `LOADING... ${currentVal}%`;
          }
        }
      });

      // Main Cinematic Timeline
      const tl = gsap.timeline({
        delay: 0.1,
        onComplete: () => {
          // Native DOM removal - ZERO React overhead
          document.body.style.overflow = '';
          if (containerRef.current) {
            containerRef.current.style.display = 'none';
          }
        }
      });

      // Typographic Scatter In (The crazy 3D random scatter)
      tl.fromTo('.char', {
        opacity: 0,
        z: () => gsap.utils.random(-1000, 500),
        x: () => gsap.utils.random(-400, 400),
        y: () => gsap.utils.random(-400, 400),
        rotationX: () => gsap.utils.random(-360, 360),
        rotationY: () => gsap.utils.random(-360, 360),
        rotationZ: () => gsap.utils.random(-360, 360),
        scale: 0.1
      }, {
        opacity: 1,
        z: 0,
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        duration: 2,
        ease: "expo.out",
        stagger: 0.04,
        force3D: true
      }, 0);

      // Wait a moment for visual absorption
      tl.to({}, { duration: 0.4 });

      // The Exit: Grid Stagger & Typography Camera Fly-Through
      tl.addLabel("exit");

      // Swap backgrounds natively
      tl.set('.solid-bg', { display: 'none' }, "exit");
      tl.set('.grid-container', { display: 'grid' }, "exit");

      // Hide the counter first via glitch out
      tl.to(counterRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.in"
      }, "exit");

      // The Shockwave Grid Shatter
      tl.to('.grid-tile', {
        scale: 0,
        rotationX: 90,
        rotationY: 90,
        opacity: 0,
        duration: 1.2,
        ease: "expo.inOut",
        stagger: {
          grid: [rows, columns],
          from: "center",
          amount: 1.2 
        }
      }, "exit");

      // Typography scales infinitely towards the camera
      tl.to('.text-container', {
        scale: 60,
        opacity: 0,
        duration: 1.8,
        ease: "power4.inOut"
      }, "exit");

    }, containerRef);

    return () => {
      document.body.style.overflow = '';
      ctx.revert();
    };
  }, []);

  const nameText = "BHAVIT RAJPUT".split("");

  return (
    <div ref={containerRef} className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center">
      
      {/* High-Performance Solid Background */}
      <div className="solid-bg absolute inset-0 bg-black pointer-events-none" />

      {/* The 20x20 Glassy Grid Background */}
      <div 
        className="grid-container absolute inset-0" 
        style={{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          perspective: "1000px" 
        }}
      >
        {Array.from({ length: totalTiles }).map((_, i) => (
          <div 
            key={i} 
            className="grid-tile bg-black border border-white/[0.03] w-full h-full"
            style={{ transformOrigin: "center center" }}
          />
        ))}
      </div>

      {/* Typography & Counter Container */}
      <div className="text-container relative z-10 flex flex-col items-center justify-center">
        
        {/* Typographic text */}
        <h1 
          className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter text-white m-0 leading-none flex"
          style={{ transformStyle: "preserve-3d" }}
        >
            {nameText.map((char, index) => (
                <span
                    key={index}
                    className={`char inline-block ${char === " " ? "w-4 md:w-8" : ""}`}
                    style={{ WebkitFontSmoothing: "antialiased", backfaceVisibility: "hidden" }}
                >
                    {char}
                </span>
            ))}
        </h1>

        {/* Counter */}
        <div 
          ref={counterRef}
          className="mt-8 text-sm md:text-lg font-mono tracking-[0.3em] text-white/70 shadow-[0_0_15px_rgba(255,255,255,0.1)] bg-black/50 py-2 rounded-full border border-white/10 w-[240px] text-center"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          LOADING... 0%
        </div>

      </div>

    </div>
  );
}
