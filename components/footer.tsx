"use client"

import React from "react"
import { Github, Twitter, Linkedin, Mail, Link as LinkIcon, Hexagon, Zap } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bhavit-rajput-10653b389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: Linkedin,
    hoverColor: '#00fff0',
  },
  {
    name: "Email",
    href: "mailto:bhavitraj@gmail.com",
    icon: Mail,
    hoverColor: '#00fff0',
  },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#222] relative overflow-hidden">
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#00ff00]/20" />
      
      {/* Background Grid */}
      <div className="absolute inset-0 terminal-grid opacity-20" />
      
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
          {/* Left: Profile Info */}
          <div className="border border-[#222] bg-[#0a0a0a] p-4">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#222]">
              <span className="text-[9px] font-pixel text-[#00ff00]">{">"} PROFILE</span>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-[7px] font-pixel text-white/40 mb-1">NAME</p>
                <p className="text-[9px] font-pixel text-white">BHAVIT RAJPUT</p>
              </div>
              <div>
                <p className="text-[7px] font-pixel text-white/40 mb-1">SPECIALIZATION</p>
                <p className="text-[9px] font-pixel text-[#00ff00]">WEB2_BUILDER</p>
              </div>
              <div>
                <p className="text-[7px] font-pixel text-white/40 mb-1">TAGLINE</p>
                <p className="text-[7px] font-pixel text-white/50">Hackathon Winner | EVENT ORGANISER</p>
              </div>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="border border-[#222] bg-[#0a0a0a] p-4">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#222]">
              <span className="text-[9px] font-pixel text-[#00ff00]">{">"} SOCIALS</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#222] bg-black hover:bg-[#00ff00]/5 hover:border-[#00ff00]/50 transition-all p-3 text-center group"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 mx-auto mb-1 text-white/40 group-hover:text-[#00ff00] transition-colors" />
                  <p className="text-[6px] font-pixel text-white/40 group-hover:text-[#00ff00] transition-colors">
                    {social.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#222] pt-6 text-center">
          <p className="text-[7px] font-pixel text-white/40 mb-2">
            <span className="text-[#00ff00]">{"<"}</span> © {new Date().getFullYear()} BHAVIT_RAJPUT <span className="text-[#00ff00]">{"/>"}</span>
          </p>
          <p className="text-[6px] font-pixel text-white/30">
            BUILT_WITH <span className="text-[#00ff00]">{"{ WEB2, PASSION, CODE }"}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
