"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Users, Calendar, Code } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-28 relative overflow-hidden bg-black"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 terminal-grid opacity-30" />

      {/* Border Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#00ff00]/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00ff00]/20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[8px] font-pixel text-[#00ff00]">{">"} ABOUT.md</span>
            <div className="flex-1 h-px bg-[#222]" />
          </div>
          <h2 className="text-[16px] sm:text-[20px] font-pixel text-white">
            1+ YEARS IN <span className="text-[#00ff00]">WEB2</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Profile Pixel Art */}
          <div
            className={`flex justify-center transition-all duration-500 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
          >
            <div className="relative">
              {/* Pixel Avatar Frame */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 bg-[#0a0a0a] border-2 border-[#00ff00]/30 relative overflow-hidden">
                {/* Grid lines inside */}
                <div className="absolute inset-0 terminal-grid opacity-50" />

                {/* Pixel P Logo */}
                <svg
                  viewBox="0 0 32 32"
                  className="absolute inset-4 text-[#00ff00]/20"
                >
                  <rect x="4" y="4" width="4" height="4" fill="currentColor" />
                  <rect x="4" y="8" width="4" height="4" fill="currentColor" />
                  <rect x="4" y="12" width="4" height="4" fill="currentColor" />
                  <rect x="4" y="16" width="4" height="4" fill="currentColor" />
                  <rect x="4" y="20" width="4" height="4" fill="currentColor" />
                  <rect x="4" y="24" width="4" height="4" fill="currentColor" />
                  <rect x="8" y="4" width="4" height="4" fill="currentColor" />
                  <rect x="12" y="4" width="4" height="4" fill="currentColor" />
                  <rect x="16" y="8" width="4" height="4" fill="currentColor" />
                  <rect x="16" y="12" width="4" height="4" fill="currentColor" />
                  <rect x="12" y="16" width="4" height="4" fill="currentColor" />
                  <rect x="8" y="16" width="4" height="4" fill="currentColor" />
                </svg>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00ff00]" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00ff00]" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00ff00]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00ff00]" />
              </div>

              {/* Status indicator */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black border border-[#00ff00]/50">
                <span className="text-[6px] font-pixel text-[#00ff00] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#00ff00] animate-pulse" />
                  ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div
            className={`space-y-4 transition-all duration-500 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            <div className="space-y-4 text-[10px] sm:text-[11px] font-mono text-white/70 leading-relaxed">
              <p>
                {">"} Passionate <span className="text-[#00ff00]">Web2 Explorer</span> with 1+ years
                exploring web2 as a data analyst event organizer.
              </p>

              <p>
                {">"} Transitioned to active development, building products and winning{" "}
                <span className="text-[#00ff00]">2 hackathons</span>
              </p>

              <p>
                {">"} Co-Founder of <span className="text-[#00ff00]">Sip&Sow</span> - India&apos;s aspiring startup focusing on<span className="text-white"> sustainable development</span>.
              </p>

              <p>
                {">"} Focus: Full-stack Web development, strategic partnerships, and full-stack App development.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { icon: Trophy, value: "03", label: "HACKATHON_WINS" },
                { icon: Users, value: "3500+", label: "COMMUNITY" },
                { icon: Calendar, value: "01+", label: "YEARS_WEB3" },
                { icon: Code, value: "50+", label: "CONTRIBUTIONS" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group p-3 bg-[#0a0a0a] border border-[#222] hover:border-[#00ff00]/50 transition-all"
                >
                  <stat.icon className="w-4 h-4 text-[#00ff00]/50 mb-2" />
                  <div className="text-[14px] font-pixel text-[#00ff00] group-hover:text-glow transition-all">
                    {stat.value}
                  </div>
                  <div className="text-[6px] font-pixel text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
