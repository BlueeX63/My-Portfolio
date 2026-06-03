"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden bg-black"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 terminal-grid opacity-20" />

      {/* Border Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#00ff00]/20" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div
          className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Terminal Header */}
          <div className="inline-block mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#222]">
              <div className="w-2 h-2 bg-[#ff0000]" />
              <div className="w-2 h-2 bg-[#ffff00]" />
              <div className="w-2 h-2 bg-[#00ff00]" />
              <span className="ml-4 text-[7px] font-pixel text-white/50">contact@punit:~$</span>
            </div>
          </div>

          {/* Header */}
          <h2 className="text-[14px] sm:text-[18px] md:text-[24px] font-pixel text-white mb-4">
            READY TO <span className="text-[#00ff00]">BUILD</span>?
          </h2>

          <p className="text-[9px] sm:text-[10px] font-mono text-white/50 max-w-lg mx-auto mb-8 leading-relaxed">
            {">"} Whether you want to collaborate on a project, need help with community building,
            or just want to connect about Web2 - I&apos;m always open to new opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="mailto:quorvoxed@gmail.com"
              className="group px-8 py-3 bg-[#00ff00] text-black text-[9px] font-pixel hover:bg-[#00ff00]/80 transition-all animate-pulse-glow flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              COLLABORATE.exe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://www.instagram.com/bhvt.jsx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[#00ff00]/50 text-[#00ff00] text-[9px] font-pixel hover:bg-[#00ff00]/10 hover:border-[#00ff00] transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              DM_INSTAGRAM
            </a>
          </div>

          {/* Contact Info */}
          <div className="p-6 bg-[#0a0a0a] border border-[#222]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-[#00ff00]/30 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#00ff00]" />
                </div>
                <div className="text-left">
                  <p className="text-[6px] font-pixel text-white/40">EMAIL</p>
                  <a
                    href="mailto:founder@builderbase.xyz"
                    className="text-[8px] font-pixel text-[#00ff00] hover:text-glow transition-all"
                  >
                    quorvoxed@gmail.com
                  </a>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-[#222]" />

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-[#00ff00]/30 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-[#00ff00]" />
                </div>
                <div className="text-left">
                  <p className="text-[6px] font-pixel text-white/40">INSTAGRAM</p>
                  <a
                    href="https://www.instagram.com/bhvt.jsx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[8px] font-pixel text-[#00ff00] hover:text-glow transition-all"
                  >
                    @bhvt.jsx
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
