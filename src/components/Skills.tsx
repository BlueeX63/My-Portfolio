'use client';

import { motion } from 'framer-motion';

const skills = [
  "Java", "Python", "JavaScript", "C", "React", "Redux",
  "Tailwind CSS", "Framer Motion", "Node.js", "Express.js",
  "MongoDB", "MySQL", "NumPy", "Pandas", "Cybersecurity",
  "Penetration Testing", "Burp Suite", "Nmap", "Wireshark", "Git"
];

// Helper to render a group of skills
const SkillGroup = () => (
  <div className="flex gap-6 pr-6">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="px-8 py-5 bg-white/10 rounded-full border border-white/10 text-xl md:text-2xl font-light tracking-wide text-white/80 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-500 cursor-pointer flex-shrink-0"
      >
        {skill}
      </div>
    ))}
  </div>
);

export default function Skills() {
  return (
    <section className="py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 mb-20 relative z-10">
        <h2 className="font-heading text-4xl md:text-6xl uppercase tracking-tighter text-center text-white">
          <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.3)]">Arsenal</span>
        </h2>
      </div>

      <div className="relative flex flex-col gap-6 w-full overflow-hidden py-10 -rotate-2 scale-[1.05] transform-gpu">
        {/* Gradients for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
            will-change: transform;
          }
          .animate-scroll-right {
            animation: scroll-right 50s linear infinite;
            will-change: transform;
          }
        `}} />

        {/* Row 1: Moves Left */}
        <div className="flex w-max animate-scroll-left">
          <SkillGroup />
          <SkillGroup />
        </div>

        {/* Row 2: Moves Right */}
        <div className="flex w-max animate-scroll-right">
          <SkillGroup />
          <SkillGroup />
        </div>
      </div>
    </section>
  );
}
