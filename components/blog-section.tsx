"use client"

import { useEffect } from "react"

import { useRef } from "react"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { Calendar, ArrowRight, FileText } from "lucide-react"

const blogPosts = [
  {
    date: "Jan 2026",
    title: "Building Builder Base: 0 to 3500+ Members",
    description: "Scaling India's premier Web3 & AI community. Hackathons, partnerships, and ecosystem building.",
    category: "Community",
    accentColor: "#a855f7",
    gradient: "from-[#a855f7]/20 to-[#a855f7]/0",
  },
  {
    date: "Dec 2025",
    title: "Pyvax: Python to Smart Contracts",
    description: "Built a Python-to-EVM compiler. Won Avalanche hackathon. Democratizing Web3 development.",
    category: "Projects",
    accentColor: "#00fff0",
    gradient: "from-[#00fff0]/20 to-[#00fff0]/0",
  },
  {
    date: "Nov 2025",
    title: "Web3 Developer Tools: The Future",
    description: "Exploring next-gen tools for blockchain. Lowering barriers. Building accessible infrastructure.",
    category: "Insights",
    accentColor: "#E2E8F0",
    gradient: "from-[#E2E8F0]/20 to-[#E2E8F0]/0",
  },
]

export function BlogSection() {
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 terminal-grid opacity-20" />
      
      {/* Horizontal Lines */}
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
            <span className="text-[8px] font-pixel text-[#00ff00]">{">"} BLOG/</span>
            <div className="flex-1 h-px bg-[#222]" />
          </div>
          <h2 className="text-[16px] sm:text-[20px] font-pixel text-white">
            LATEST FROM THE <span className="text-[#00ff00]">BUILDER</span>
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div 
                className="h-full bg-[#0a0a0a] border border-[#222] hover:border-[#00ff00]/50 transition-all p-4 relative"
              >
                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[6px] font-pixel px-2 py-1 bg-[#00ff00]/10 text-[#00ff00] border border-[#00ff00]/30">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-[6px] text-white/40 font-pixel">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[9px] font-pixel uppercase text-white mb-2 group-hover:text-[#00ff00] transition-all line-clamp-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-[7px] font-mono text-white/50 leading-relaxed line-clamp-3 mb-3">
                  {post.description}
                </p>

                {/* Read More */}
                <button 
                  className="flex items-center gap-1 text-[7px] font-pixel text-[#00ff00] hover:text-[#00ff00]/80 transition-all group/link"
                >
                  READ.md
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                </button>

                {/* Corner Sparkle */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-4 h-4" style={{ color: post.accentColor }} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div
          className={`text-center mt-8 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#00ff00]/50 text-[8px] font-pixel text-[#00ff00] hover:bg-[#00ff00]/10 transition-all"
          >
            VIEW_ALL_UPDATES
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
