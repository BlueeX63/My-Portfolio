'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

function GlassShape() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Torus args={[2.5, 0.8, 64, 128]}>
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#ffffff"
        />
      </Torus>
    </Float>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
          <GlassShape />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center pointer-events-none mt-16">
        <motion.h1 
          className="font-heading text-[12vw] md:text-[9vw] font-semibold tracking-tighter leading-none whitespace-nowrap text-white drop-shadow-2xl"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          BHAVIT RAJPUT
        </motion.h1>
        
        <motion.p
          className="mt-6 text-lg md:text-2xl font-light tracking-wide text-muted-foreground/80 max-w-2xl px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          Cyber Security <span className="text-white mx-2 opacity-50">•</span> Full Stack Developer
        </motion.p>

        <motion.div 
          className="mt-16 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        >
          <MagneticButton>
            View Projects
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium">Scroll to explore</span>
        <div className="w-[1px] h-16 bg-white/10 overflow-hidden relative rounded-full">
          <motion.div
            className="w-full h-1/2 bg-white absolute top-0 rounded-full"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
