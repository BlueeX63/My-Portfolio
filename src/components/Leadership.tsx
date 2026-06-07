'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, type Variants } from 'framer-motion';

const stats = [
  { label: "Hackathons", value: "10+", suffix: "Organized" },
  { label: "Workshops", value: "20+", suffix: "Conducted" },
  { label: "Community", value: "500+", suffix: "Members" },
];

const highlights = [
  "Hackathons",
  "Tech Workshops",
  "Sponsorship Collabs",
  "Community Events",
  "Technical Talks",
  "Mentorship Programs",
];

export default function Leadership() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.85, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const smoothTitleScale = useSpring(titleScale, { stiffness: 100, damping: 30 });
  const smoothTitleOpacity = useSpring(titleOpacity, { stiffness: 100, damping: 30 });

  // 3D tilt on mouse move
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(((y - centerY) / centerY) * -8);
    rotateY.set(((x - centerX) / centerX) * 8);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-background overflow-hidden relative">
      {/* Floating background orb */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none"
      />

      {/* Section Title */}
      <motion.div
        style={{ scale: smoothTitleScale, opacity: smoothTitleOpacity }}
        className="container mx-auto px-6 md:px-12 mb-20 md:mb-28"
      >
        <h2 className="font-heading text-4xl md:text-7xl uppercase tracking-tighter text-center text-white">
          Community{" "}
          <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.3)]">
            Leadership
          </span>
        </h2>
      </motion.div>

      {/* Main Card with 3D tilt */}
      <div className="container mx-auto px-6 md:px-12" style={{ perspective: "1200px" }}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-5xl mx-auto rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer"
        >
          {/* Animated gradient border glow */}
          <div className="absolute -inset-[1px] rounded-[2.5rem] overflow-hidden pointer-events-none z-0">
            <div
              className="absolute inset-0 animate-spin"
              style={{
                animationDuration: "8s",
                background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.15), transparent, rgba(255,255,255,0.08), transparent)",
              }}
            />
          </div>

          {/* Mouse follow spotlight */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0 transition-opacity duration-500"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: "-50%",
              translateY: "-50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
              opacity: isHovered ? 1 : 0,
            }}
          />

          <div className="relative z-10 p-10 md:p-16">
            {/* Top: Role pill + Status */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <span className="px-5 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm uppercase tracking-[0.2em] font-medium backdrop-blur-md">
                Technical Lead
              </span>
              <span className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/50">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Active
              </span>
            </motion.div>

            {/* Title: NEXIDO with character-by-character reveal */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="font-heading text-6xl md:text-9xl text-white uppercase tracking-tighter leading-none">
                {"NEXIDO".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 60, rotateX: -90 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl font-light text-white/70 leading-relaxed max-w-3xl mb-14"
            >
              Leading a thriving tech community that empowers developers through hands-on experience,
              competitive events, and real-world collaboration with industry partners.
            </motion.p>

            {/* Scrolling highlights ribbon */}
            <motion.div variants={itemVariants} className="mb-14 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] py-4">
              <motion.div
                className="flex w-max gap-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              >
                {[...highlights, ...highlights].map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-3 text-white/50 uppercase tracking-[0.15em] text-sm font-medium whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.8 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative group/stat p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <p className="relative z-10 font-heading text-4xl md:text-5xl text-white tracking-tighter mb-2">
                    {stat.value}
                  </p>
                  <p className="relative z-10 text-white/40 uppercase tracking-[0.2em] text-xs font-medium">
                    {stat.label} {stat.suffix}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
