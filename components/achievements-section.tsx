"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Users, Code, Calendar, Github, Award, Sparkles } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "2x Hackathon Champion",
    description: "Winner: Coddy IO, Codeblooded",
    color: "#00ff00",
    gradient: "from-[#00ff00] to-[#00cc00]",
  },
  {
    icon: Users,
    title: "3500+ Community",
    description: "Founder of Builder Base - India's premier Web3 community",
    color: "#00ff00",
    gradient: "from-[#00ff00] to-[#00cc00]",
  },
  {
    icon: Code,
    title: "50+ Contributions",
    description: "Active GitHub contributor and open-source Web3 developer",
    color: "#00ff00",
    gradient: "from-[#00ff00] to-[#00cc00]",
  },
  {
    icon: Calendar,
    title: "3+ Major Events",
    description: "Organizer for hackathons",
    color: "#00ff00",
    gradient: "from-[#00ff00] to-[#00cc00]",
  },
]

export function AchievementsSection() {
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
      id="achievements"
      className="py-24 md:py-32 bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 terminal-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00ff00]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      {/* Horizontal Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff00]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff00]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#00ff00]/30 mb-6">
            <Award className="w-4 h-4 text-[#00ff00]" />
            <span className="text-[8px] font-pixel uppercase tracking-wider text-[#00ff00]">{">"} ACHIEVEMENTS</span>
          </div>
          <h2 className="text-[16px] sm:text-[20px] font-pixel text-white">
            HACKATHON <span className="text-[#00ff00]">WINS</span> & IMPACT
          </h2>
          <p className="text-[9px] sm:text-[10px] font-mono text-white/50 mt-4 max-w-2xl mx-auto leading-relaxed">
            {">"} 4x Hackathon Champion. Building communities. Creating impact.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div 
                className="relative h-full bg-[#0a0a0a] border border-[#222] hover:border-[#00ff00]/50 transition-all p-4 text-center overflow-hidden"
              >
                {/* Icon */}
                <div 
                  className="relative inline-flex p-3 border border-[#00ff00]/30 mb-3"
                >
                  <achievement.icon className="w-5 h-5 text-[#00ff00]" />
                </div>

                {/* Title */}
                <h3 className="relative text-[9px] font-pixel uppercase text-white mb-2">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="relative text-[7px] font-mono text-white/50 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Activity Section */}
        <div
          className={`mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-[#0a0a0a] border border-[#222] p-5">
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-5 h-5 text-[#00ff00]" />
              <h3 className="text-[10px] font-pixel uppercase text-white">GitHub Stats</h3>
            </div>

            <div className="flex flex-wrap justify-start gap-6 text-[8px]">
              {[
                { label: "CONTRIBUTIONS", value: "50+" },
                { label: "REPOSITORIES", value: "10+" },
                { label: "OPEN_SOURCE", value: "5+" },
              ].map((stat) => (
                <span key={stat.label} className="flex flex-col gap-1">
                  <span className="font-pixel text-[#00ff00]">{stat.value}</span>
                  <span className="font-pixel text-white/40">{stat.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
