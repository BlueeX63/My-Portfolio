'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: "Cybersecurity Enthusiast",
    role: "Ethical Hacker & Pentester",
    period: "Ongoing",
    description: "Actively hunting web vulnerabilities using Burp Suite, Nmap, Nessus, and Wireshark. Practicing on HackerOne and TryHackMe. Focused on penetration testing, reconnaissance, and vulnerability assessment to build bulletproof digital infrastructure.",
  },
  {
    id: 2,
    company: "Nexido",
    role: "Technical Lead",
    period: "Present",
    description: "Community Leadership: Organized hackathons, workshops, sponsorship collaborations, and technical events.",
  },
  {
    id: 3,
    company: "Modern Era Public School",
    role: "Class 12 (CBSE)",
    period: "2025",
    description: "Graduated with 92.8%. Built a strong foundation in mathematics and sciences.",
  }
];

function ExperienceCard({
  experience,
  index,
  progress
}: {
  experience: typeof experiences[0];
  index: number;
  progress: MotionValue<number>;
}) {
  const total = experiences.length;
  // Each card gets an equal slice of the scroll progress
  const cardStart = index / total;
  const cardEnd = (index + 1) / total;
  const cardMid = cardStart + (cardEnd - cardStart) * 0.15;

  // Card entrance: slide up from below and fade in
  const y = useTransform(
    progress,
    [cardStart, cardMid, cardEnd - 0.05, cardEnd],
    ['80%', '0%', '0%', '-15%']
  );
  const opacity = useTransform(
    progress,
    [cardStart, cardMid, cardEnd - 0.1, cardEnd],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    progress,
    [cardStart, cardMid, cardEnd - 0.05, cardEnd],
    [0.9, 1, 1, 0.95]
  );
  const blur = useTransform(
    progress,
    [cardStart, cardMid, cardEnd - 0.1, cardEnd],
    [10, 0, 0, 10]
  );
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        filter,
      }}
      className="absolute inset-0 origin-top perspective-[2000px]"
    >
      <div className="w-full h-full rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-3xl p-6 sm:p-8 md:p-16 flex flex-col justify-between shadow-[0_30px_60px_rgba(255,255,255,0.03)] overflow-hidden">
        {/* Decorative huge number */}
        <div className="absolute -right-4 -bottom-10 font-heading text-[15rem] font-bold text-white/5 pointer-events-none select-none">
          0{index + 1}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
          <p className="text-white/80 border-white/20 uppercase tracking-[0.1em] text-sm md:text-base font-medium border rounded-full px-6 py-2 bg-white/5 backdrop-blur-md">
            {experience.period}
          </p>
          <h4 className="text-lg md:text-2xl font-medium text-white/50 uppercase tracking-[0.2em]">
            {experience.company}
          </h4>
        </div>

        <div className="relative z-10 mt-auto">
          <h3 className="font-heading text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter mb-4 md:mb-6 leading-none text-white drop-shadow-lg">
            {experience.role}
          </h3>
          <p className="text-sm sm:text-base md:text-xl text-white/70 font-light leading-relaxed max-w-2xl">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div
      ref={wrapperRef}
      id="experience"
      style={{ height: `${(experiences.length + 1) * 100}vh` }}
      className="relative bg-background"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        <div className="pt-24 pb-8 text-center relative z-20">
          <h2 className="font-heading text-4xl md:text-7xl uppercase tracking-tighter text-white">
            The <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.3)]">Journey</span>
          </h2>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 md:px-0 relative">
          <div className="w-full max-w-5xl h-[70vh] md:h-[65vh] relative">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
