"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "WEB2 BUILDER_"

  useEffect(() => {
    setIsVisible(true)

    let i = 0
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeInterval)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Terminal Grid Background */}
      <div className="absolute inset-0 terminal-grid opacity-40" />

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-30" />

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-[#00ff00]/30" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-[#00ff00]/30" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-[#00ff00]/30" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-[#00ff00]/30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Terminal Header */}
        <div
          className={`inline-block mb-8 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#111] border border-[#222]">
            <div className="w-2 h-2 bg-[#ff0000]" />
            <div className="w-2 h-2 bg-[#ffff00]" />
            <div className="w-2 h-2 bg-[#00ff00]" />
            <span className="ml-2 sm:ml-4 text-[7px] sm:text-[8px] font-pixel text-white/50">bhavit@web2:~$</span>
          </div>
        </div>

        {/* Main Title - Pixel Style */}
        <h1
          className={`mb-6 transition-all duration-500 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span className="block text-[9px] sm:text-[11px] md:text-[12px] font-pixel text-white/40 mb-4 tracking-widest">
            {"// INITIALIZING PORTFOLIO..."}
          </span>
          <span className="block font-pixel text-[#00ff00] text-glow leading-tight break-words" style={{ fontSize: 'clamp(20px, 5vw, 48px)' }}>
            {typedText}
            <span className="animate-blink">|</span>
          </span>
        </h1>

        {/* Name */}
        <div
          className={`mb-8 transition-all duration-500 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <h2 className="font-pixel text-white tracking-wider" style={{ fontSize: 'clamp(14px, 3vw, 24px)' }}>
            BHAVIT RAJPUT
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-4 text-[7px] sm:text-[8px] font-pixel text-white/50 px-2">
            <span className="text-[#00ff00]">{">"}  2X HACKATHON WINNER</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-[#00ff00]">{">"}  CO-FOUNDER @SIP&SOW</span>
          </div>
        </div>

        {/* Description */}
        <p
          className={`max-w-xl mx-auto mb-10 text-[9px] sm:text-[10px] md:text-[11px] font-mono text-white/60 leading-relaxed transition-all duration-500 delay-300 px-4 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          Connecting elite builders to create the future.
          <br />
          1+ years building in Web2. Let&apos;s collaborate.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 transition-all duration-500 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <a
            href="#contact"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#00ff00] text-black text-[9px] sm:text-[10px] font-pixel hover:bg-[#00ff00]/80 transition-all animate-pulse-glow flex items-center justify-center gap-2"
          >
            {">"}  CONNECT.exe
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-[#00ff00]/50 text-[#00ff00] text-[9px] sm:text-[10px] font-pixel hover:bg-[#00ff00]/10 hover:border-[#00ff00] transition-all flex items-center justify-center gap-2"
          >
            {">"}  ABOUT_ME
          </a>
        </div>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-16 px-2 transition-all duration-500 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {[
            { value: "02", label: "HACKATHON WINS" },
            { value: "3500+", label: "COMMUNITY" },
            { value: "01+", label: "YEARS WEB2" },
            { value: "50+", label: "CONTRIBUTIONS" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-3 sm:p-4 bg-[#0a0a0a] border border-[#222] hover:border-[#00ff00]/50 transition-all group"
            >
              <div className="text-[14px] sm:text-[16px] md:text-[20px] font-pixel text-[#00ff00] group-hover:text-glow transition-all">
                {stat.value}
              </div>
              <div className="text-[6px] sm:text-[7px] md:text-[8px] font-pixel text-white/40 mt-2 break-words">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[6px] font-pixel text-[#00ff00]/50 tracking-widest">SCROLL</span>
          <ChevronDown className="w-4 h-4 text-[#00ff00]/50 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
