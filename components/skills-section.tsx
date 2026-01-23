"use client"

import { useEffect, useRef, useState } from "react"
import { Terminal, Braces } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "Python", "JavaScript", "Java"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB"],
  },
]

export function SkillsSection() {
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
    <section ref={sectionRef} id="skills" className="py-20 md:py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 terminal-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-[#00ff00]/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00ff00]/20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[8px] font-pixel text-[#00ff00]">{">"} TECH_STACK.json</span>
            <div className="flex-1 h-px bg-[#222]" />
          </div>
          <h2 className="text-[16px] sm:text-[20px] font-pixel text-white">
            SKILLS & <span className="text-[#00ff00]">TECHNOLOGIES</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div 
                className="h-full bg-[#0a0a0a] border border-[#222] hover:border-[#00ff00]/50 transition-all p-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-4 h-4 text-[#00ff00]" />
                  <h3 className="text-[9px] font-pixel uppercase text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[6px] px-2 py-1 bg-black border border-[#222] text-white/40 font-pixel hover:text-[#00ff00] hover:border-[#00ff00]/50 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
