'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000); // Reset status after 5s
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-16">

          {/* Left Side: Text */}
          <div className="w-full md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-heading text-5xl md:text-8xl uppercase tracking-tighter mb-8 leading-none text-white"
            >
              Let&apos;s <br /> <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.3)]">Talk</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl font-light text-white/60 mb-12 max-w-md"
            >
              Ready to engineer something extraordinary? Send a message and let&apos;s shape the future.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="space-y-4 text-lg font-light tracking-widest uppercase"
            >
              <a href="mailto:quorvoxed@gmail.com" className="block text-white/80 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all w-fit">
                quorvoxed@gmail.com
              </a>
              <div className="flex gap-8 pt-8">
                <a href="https://linkedin.com/in/bhavit-rajput-10653b389/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all">
                  <LinkedinIcon size={24} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/BlueeX63" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all">
                  <GithubIcon size={24} />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-1/2 max-w-xl">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="space-y-10" 
              onSubmit={handleSubmit}
            >
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="peer w-full bg-transparent border-b border-white/20 py-4 text-xl font-light text-white focus:outline-none focus:border-white transition-colors placeholder-transparent"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-sm font-medium tracking-widest uppercase text-white/40 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-placeholder-shown:font-light peer-focus:-top-3.5 peer-focus:text-sm peer-focus:font-medium peer-focus:text-white"
                >
                  Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="peer w-full bg-transparent border-b border-white/20 py-4 text-xl font-light text-white focus:outline-none focus:border-white transition-colors placeholder-transparent"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-sm font-medium tracking-widest uppercase text-white/40 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-placeholder-shown:font-light peer-focus:-top-3.5 peer-focus:text-sm peer-focus:font-medium peer-focus:text-white"
                >
                  Email
                </label>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="peer w-full bg-transparent border-b border-white/20 py-4 text-xl font-light text-white focus:outline-none focus:border-white transition-colors placeholder-transparent resize-none"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-sm font-medium tracking-widest uppercase text-white/40 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-placeholder-shown:font-light peer-focus:-top-3.5 peer-focus:text-sm peer-focus:font-medium peer-focus:text-white"
                >
                  Message
                </label>
              </div>

              <div className="pt-8 flex justify-end items-center gap-4 h-24">
                <AnimatePresence mode="wait">
                  {status === 'idle' || status === 'error' ? (
                    <motion.div
                      key="form-btn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center gap-4"
                    >
                      {status === 'error' && (
                        <span className="text-red-400 text-sm tracking-widest uppercase">{errorMessage}</span>
                      )}
                      <MagneticButton className="px-12 py-5 text-sm">
                        Send Message
                      </MagneticButton>
                    </motion.div>
                  ) : status === 'loading' ? (
                    <motion.div
                      key="loading-btn"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <div className="px-12 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center gap-3">
                        <motion.div 
                          animate={{ rotate: 360 }} 
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
                        />
                        <span className="text-sm uppercase tracking-widest text-white/70">Encrypting...</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-btn"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                      <div className="px-12 py-5 rounded-full border border-green-500/50 bg-green-500/10 backdrop-blur-md flex items-center gap-3 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                        <motion.svg 
                          initial={{ pathLength: 0 }} 
                          animate={{ pathLength: 1 }} 
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="w-6 h-6 text-green-400" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </motion.svg>
                        <span className="text-sm uppercase tracking-widest text-green-400 font-medium">Transmission Sent</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.form>
          </div>

        </div>
      </div>

      {/* Massive Background Text */}
      <div className="absolute bottom-[-5%] left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none z-0 flex justify-center">
        <h2 className="font-heading text-[12vw] tracking-tighter leading-none whitespace-nowrap">
          BHAVIT RAJPUT
        </h2>
      </div>
    </section>
  );
}
