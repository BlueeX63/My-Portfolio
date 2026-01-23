"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "WINS", href: "#achievements" },
  { name: "CONTACT", href: "#contact" },
]

interface NavigationProps {
  scrollY: number
}

export function Navigation({ scrollY }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrolled = scrollY > 50

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-black/95 border-b border-[#00ff00]/30"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Pixel Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <svg width="28" height="28" viewBox="0 0 32 32" className="text-[#00ff00]">
              {/* Left vertical */}
              <rect x="4" y="4" width="4" height="4" fill="currentColor" />
              <rect x="4" y="8" width="4" height="4" fill="currentColor" />
              <rect x="4" y="12" width="4" height="4" fill="currentColor" />
              <rect x="4" y="16" width="4" height="4" fill="currentColor" />
              <rect x="4" y="20" width="4" height="4" fill="currentColor" />
              <rect x="4" y="24" width="4" height="4" fill="currentColor" />

              {/* Top bar */}
              <rect x="8" y="4" width="4" height="4" fill="currentColor" />
              <rect x="12" y="4" width="4" height="4" fill="currentColor" />

              {/* Top right curve */}
              <rect x="16" y="8" width="4" height="4" fill="currentColor" />
              <rect x="16" y="12" width="4" height="4" fill="currentColor" />

              {/* Middle bar */}
              <rect x="8" y="14" width="4" height="4" fill="currentColor" />
              <rect x="12" y="14" width="4" height="4" fill="currentColor" />

              {/* Bottom right curve */}
              <rect x="16" y="18" width="4" height="4" fill="currentColor" />
              <rect x="16" y="22" width="4" height="4" fill="currentColor" />

              {/* Bottom bar */}
              <rect x="8" y="24" width="4" height="4" fill="currentColor" />
              <rect x="12" y="24" width="4" height="4" fill="currentColor" />

              {/* Optional blinking pixel */}
              <rect x="24" y="24" width="4" height="4" fill="currentColor" className="animate-pulse" />
            </svg>

            <span className="font-pixel text-[8px] sm:text-[10px] text-[#00ff00] tracking-wide group-hover:text-glow transition-all">
              BLUEE
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2 xl:px-3 py-2 text-[7px] xl:text-[8px] font-pixel text-white/60 hover:text-[#00ff00] hover:bg-[#00ff00]/5 transition-all duration-200 border-r border-[#222] last:border-r-0"
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:bhavitraj@gmail.com"
              className="ml-2 xl:ml-4 px-3 xl:px-4 py-2 text-[7px] xl:text-[8px] font-pixel bg-[#00ff00] text-black hover:bg-[#00ff00]/80 transition-colors animate-pulse-glow"
            >
              HIRE_ME
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#00ff00] hover:bg-[#00ff00]/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black border-t border-[#00ff00]/30 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="px-4 py-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-[8px] font-pixel text-white/60 hover:text-[#00ff00] border-b border-[#111] last:border-0"
            >
              {">"} {link.name}
            </a>
          ))}
          <a
            href="mailto:bhavitraj@gmail.com"
            onClick={() => setMobileMenuOpen(false)}
            className="block mt-3 py-3 text-[8px] font-pixel text-center bg-[#00ff00] text-black"
          >
            {">"} EXECUTE HIRE_ME.exe
          </a>
        </div>
      </div>
    </nav>
  )
}
