'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

const TEXT_CONTENT = "I don't just build websites; I engineer secure digital foundations. As a full-stack developer with a deep focus on cybersecurity, I craft high-performance, robust platforms that can withstand the modern web. My mission is to empower small startups, providing them with enterprise-grade web solutions at accessible prices. Every line of code is written with purpose, blending flawless design with impenetrable architecture to help your business scale safely.";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Vertical Parallax Effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const parallaxY = useTransform(smoothProgress, [0, 1], [150, -150]);
  
  // Word reveal effect setup
  const words = TEXT_CONTENT.split(" ");

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen w-full bg-background text-foreground py-32 perspective-[1000px]">
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row relative items-center gap-16">
        
        {/* Left: Scroll Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl md:text-7xl uppercase tracking-tighter mb-12 text-white"
          >
            The <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.3)]">Vision</span>
          </motion.h2>
          
          <div className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-white flex flex-wrap gap-x-2 gap-y-1">
            {words.map((word, i) => {
              const start = i / words.length;
              // Calculate opacity based on scroll progress passing this word's threshold
              // We map a small window of scroll progress to fade this word in
              // For simplicity in this static map, we will just use a stagger reveal on view
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.1, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.8, delay: i * 0.02, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        </div>

        {/* Right: Scrolling Glass Image */}
        <div className="w-full md:w-1/2 h-full pt-16 flex items-center justify-center">
          <motion.div 
            style={{ y: parallaxY }}
            className="w-full max-w-md aspect-[3/4] relative"
          >
            {/* The Image Card */}
            <motion.div 
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(255,255,255,0.05)] border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image 
                src="/images/me.jpeg" 
                alt="Vision Abstract" 
                fill
                className="object-cover rounded-2xl filter grayscale-[50%] transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-2xl"></div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
