"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AchievementsSection } from "@/components/achievements-section"
import { SkillsSection } from "@/components/skills-section"
import { BlogSection } from "@/components/blog-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0e27] text-[#F0F4F8]" role="main">
      <h1 className="sr-only">Punit Pal - Web3 Developer, Blockchain Builder, and BuilderBase Founder</h1>
      <Navigation scrollY={scrollY} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <AchievementsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  )
}
