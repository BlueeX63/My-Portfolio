"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Trophy, Globe, Twitter } from "lucide-react"

const projects = [
  {
    title: "X4PN",
    subtitle: "Next-Gen Decentralized VPN Platform",
    description: "Revolutionary dVPN platform enabling secure, high-speed VPN services with blockchain technology. Pay with USDC, earn X4PN tokens for usage rewards.",
    techStack: ["dVPN", "Blockchain", "USDC", "Privacy", "Web3"],
    badges: ["DEFI", "PRIVACY"],
    links: {
      site: null,
      twitter: "https://twitter.com/X402_VPN",
    },
  },
  {
    title: "PYVAX",
    subtitle: "Python to EVM Smart Contracts",
    description: "Democratizing smart contract development by enabling Python developers to write contracts on Avalanche without Solidity knowledge.",
    techStack: ["Python", "Avalanche", "CLI", "EVM"],
    badges: ["HACKATHON_WINNER", "AVALANCHE"],
    links: {
      site: "https://www.pyvax.xyz/",
      github: null,
    },
  },
  {
    title: "ZEROTHON",
    subtitle: "Python to EVM Smart Contract Development",
    description: "A development tool that enables writing smart contracts in Python and compiling them to EVM-compatible bytecode for deployment on Ethereum and other EVM chains.",
    techStack: ["Python", "EVM", "Solidity", "Smart Contracts"],
    badges: ["DEV_TOOL", "WEB3"],
    links: {
      site: "https://zerothon.vercel.app/",
      github: null,
    },
  },
  {
    title: "BUILDER_BASE",
    subtitle: "India's Web3 & AI Community",
    description: "Built and scaled community from 0 to 3500+ elite builders. Contributed 5+ major hackathons across India.",
    techStack: ["Community", "Events", "Partnerships", "Growth"],
    badges: ["FOUNDER", "3500+_MEMBERS"],
    impact: "3500+ members | 20+ events ",
    links: {
      site: "https://builderbase.xyz",
      github: null,
    },
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 md:py-28 relative overflow-hidden bg-black"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 terminal-grid opacity-20" />

      {/* Border Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#00ff00]/20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[8px] font-pixel text-[#00ff00]">{">"} PROJECTS/</span>
            <div className="flex-1 h-px bg-[#222]" />
          </div>
          <h2 className="text-[16px] sm:text-[20px] font-pixel text-white">
            FEATURED <span className="text-[#00ff00]">WORK</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="bg-[#0a0a0a] border border-[#222] hover:border-[#00ff00]/50 transition-all p-4 sm:p-6">
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.badges.map((badge) => (
                        <span
                          key={badge}
                          className={`text-[6px] font-pixel px-2 py-1 ${badge.includes("WINNER") || badge.includes("FOUNDER")
                              ? "bg-[#00ff00]/10 text-[#00ff00] border border-[#00ff00]/30"
                              : "bg-[#111] text-white/50 border border-[#222]"
                            }`}
                        >
                          {badge.includes("WINNER") && <Trophy className="inline w-2.5 h-2.5 mr-1" />}
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-[12px] sm:text-[14px] font-pixel text-[#00ff00] group-hover:text-glow transition-all">
                      {project.title}
                    </h3>
                    <p className="text-[8px] font-pixel text-white/50 mt-1">{project.subtitle}</p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.links.site && (
                      <a
                        href={project.links.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-[#222] hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all"
                      >
                        <Globe className="w-4 h-4 text-white/50 hover:text-[#00ff00]" />
                      </a>
                    )}
                    {project.links.twitter && (
                      <a
                        href={project.links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-[#222] hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all"
                      >
                        <Twitter className="w-4 h-4 text-white/50 hover:text-[#00ff00]" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-[#222] hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all"
                      >
                        <Github className="w-4 h-4 text-white/50 hover:text-[#00ff00]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[9px] sm:text-[10px] font-mono text-white/60 leading-relaxed mb-4">
                  {">"} {project.description}
                </p>

                {/* Impact */}
                {project.impact && (
                  <div className="flex items-center gap-2 text-[8px] font-pixel text-[#00ff00]/70 mb-4">
                    <span className="w-1.5 h-1.5 bg-[#00ff00] animate-pulse" />
                    {project.impact}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[7px] font-pixel px-2 py-1 bg-black border border-[#222] text-white/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div
          className={`text-center mt-8 transition-all duration-500 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <a
            href="https://github.com/ShahiTechnovation/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#00ff00]/50 text-[8px] font-pixel text-[#00ff00] hover:bg-[#00ff00]/10 transition-all"
          >
            <Github className="w-4 h-4" />
            VIEW_ALL_PROJECTS
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
