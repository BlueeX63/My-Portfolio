'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "FOREVER E-Commerce",
    category: "Full Stack Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    year: "MERN Stack"
  },
  {
    id: 2,
    title: "GenZ AI",
    category: "AI Productivity Platform",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    year: "Claude API"
  },
  {
    id: 3,
    title: "Exam Prep Web App",
    category: "EdTech Platform",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    year: "MERN Stack"
  },
  {
    id: 4,
    title: "AI Voice Assistant",
    category: "Math & Physics AI",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    year: "Gemini API"
  },
  {
    id: 5,
    title: "Dynamic AI Agent",
    category: "Agentic AI System",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    year: "LangGraph"
  }
];

// Card width: 50vw on desktop, 80vw on mobile. Gap: 4rem (64px).
// We need roughly (numCards * cardWidth + gaps) of horizontal distance.
// The wrapper height creates the vertical scroll runway that maps to horizontal movement.

export default function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-70%"]);

  return (
    <div 
      ref={wrapperRef} 
      id="projects"
      style={{ height: `${projects.length * 100}vh` }}
      className="relative bg-background"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <div className="absolute top-24 left-6 md:left-12 z-20 pointer-events-none">
          <h2 className="font-heading text-6xl md:text-8xl uppercase tracking-tighter text-white">
            Selected <br /> <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.3)]">Works</span>
          </h2>
        </div>

        <div className="h-full flex items-center">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-12 pl-6 md:pl-[20vw] pr-[10vw] h-[60vh] md:h-[70vh] items-center perspective-[2000px]"
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="group relative h-full w-[85vw] md:w-[50vw] flex-shrink-0 overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 cursor-pointer shadow-[0_30px_60px_rgba(255,255,255,0.05)]"
                whileHover="hover"
                initial="initial"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    variants={{
                      initial: { scale: 1, filter: "brightness(0.7)" },
                      hover: { scale: 1.05, filter: "brightness(1.1)" }
                    }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-1000"></div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 flex flex-col justify-end backdrop-blur-md bg-black/20 group-hover:backdrop-blur-none group-hover:bg-transparent transition-all duration-700 h-[40%] group-hover:h-full border-t border-white/5">
                  <div className="flex justify-between items-end w-full mt-auto">
                    <div className="overflow-hidden">
                      <motion.p 
                        className="text-white/60 uppercase tracking-[0.2em] text-xs md:text-sm font-medium mb-3"
                        variants={{
                          initial: { y: 20, opacity: 0 },
                          hover: { y: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {project.category}
                      </motion.p>
                      <h3 className="font-heading text-4xl md:text-6xl text-white uppercase tracking-tighter leading-none">
                        {project.title}
                      </h3>
                    </div>
                    <div className="hidden md:block flex-shrink-0">
                      <motion.div 
                        className="text-white text-lg font-medium border border-white/20 rounded-full px-8 py-3 backdrop-blur-xl bg-white/5"
                        variants={{
                          initial: { opacity: 0, scale: 0.8 },
                          hover: { opacity: 1, scale: 1 }
                        }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                      >
                        {project.year}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
