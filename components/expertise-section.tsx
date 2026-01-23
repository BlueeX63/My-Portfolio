"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Users, Layers, Handshake } from "lucide-react"

const expertiseAreas = [
  {
    icon: Users,
    title: "COMMUNITY",
    description: "Founded and scaled Builder Base from 0 to 3500+ members. Expert in Web3 community growth.",
    technologies: ["Growth", "Events", "Strategy", "Network"],
  },
  {
    icon: Layers,
    title: "FULL_STACK",
    description: "End-to-end dApp development with modern frameworks. From smart contracts to polished frontends.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    icon: Handshake,
    title: "BD_&_PARTNERSHIPS",
    description: "8+ months driving strategic partnerships for BuilderBase. Secured collaborations with major Web3 protocols and ecosystem partners.",
    technologies: ["Partnerships", "Ecosystem", "Strategy", "Networking"],
    partners: ["Arbitrum", "Avalanche", "Aptos", "Monad", "Polygon", "Solana"],
  },
]

export function ExpertiseSection() {
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
      id="expertise"
      className="py-20 md:py-28 bg-[#050505] relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 terminal-grid opacity-20" />

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
            <span className="text-[8px] font-pixel text-[#00ff00]">{">"} SKILLS.json</span>
            <div className="flex-1 h-px bg-[#222]" />
          </div>
          <h2 className="text-[16px] sm:text-[20px] font-pixel text-white">
            WHAT I <span className="text-[#00ff00]">DO</span>
          </h2>
        </div>

        {/* Expertise Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className={`group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="h-full bg-[#0a0a0a] border border-[#222] hover:border-[#00ff00]/50 transition-all p-5">
                {/* Icon */}
                <div className="w-10 h-10 border border-[#00ff00]/30 flex items-center justify-center mb-4 group-hover:border-[#00ff00]/60 transition-colors">
                  <area.icon className="w-5 h-5 text-[#00ff00]" />
                </div>

                {/* Content */}
                <h3 className="text-[10px] font-pixel text-[#00ff00] mb-3 group-hover:text-glow transition-all">
                  {area.title}
                </h3>
                <p className="text-[9px] font-mono text-white/50 leading-relaxed mb-4">
                  {area.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {area.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[6px] font-pixel px-2 py-1 bg-black border border-[#222] text-white/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Partners Section - Only for BD card */}
                {area.partners && (
                  <div className="mt-4 pt-4 border-t border-[#222]">
                    <p className="text-[6px] font-pixel text-white/40 mb-3">NOTABLE_COLLABORATIONS:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {area.partners.map((partner) => (
                        <div
                          key={partner}
                          className="px-2 py-1.5 bg-black border border-[#00ff00]/20 hover:border-[#00ff00]/50 transition-all text-center"
                        >
                          <span className="text-[6px] font-pixel text-[#00ff00]/70">
                            {partner}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
