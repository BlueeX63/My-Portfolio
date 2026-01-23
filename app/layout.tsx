import React from "react"
import type { Metadata, Viewport } from "next"
import { Press_Start_2P, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: "400",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"), 
  title: {
    default: "Bhavit Raj - Full Stack Developer & Startup Builder",
    template: "%s | Bhavit Raj Portfolio",
  },
  description:
    "Bhavit Raj is a full-stack developer and startup founder specializing in React, Next.js, TypeScript, and scalable e-commerce platforms. Passionate about UI/UX, gamified experiences, and building impactful digital products.",
  keywords: [
    "Bhavit Raj",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "UI/UX Designer",
    "Startup Founder",
    "E-commerce Developer",
    "Gamified UX",
    "Scalable Platforms",
    "Web Developer India",
    "Portfolio",
  ],
  authors: [{ name: "Bhavit Raj", url: "https://yourdomain.com" }],
  creator: "Bhavit Raj",
  publisher: "Bhavit Raj",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Bhavit Raj - Full Stack Developer & Startup Builder",
    description:
      "Portfolio of Bhavit Raj | Full-stack developer | Startup builder | Expert in React, Next.js, TypeScript, and scalable e-commerce solutions.",
    siteName: "Bhavit Raj Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhavit Raj Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bhavit Raj",
    url: "https://yourdomain.com",
    image: "https://yourdomain.com/og-image.png",
    sameAs: [
      "https://twitter.com/your_twitter_handle",
      "https://github.com/your_github_username",
      "https://linkedin.com/in/your_linkedin_id",
    ],
    jobTitle: "Full Stack Developer & Startup Builder",
    worksFor: {
      "@type": "Organization",
      name: "Your Startup Name",
      url: "https://yourstartup.com",
    },
    description:
      "Full-stack developer specializing in React, Next.js, TypeScript, and scalable e-commerce platforms. Passionate about UI/UX and gamified experiences.",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "UI/UX Design",
      "E-commerce Development",
      "Startup Building",
      "Scalable Platforms",
      "Gamified UX",
    ],
    award: ["Patent Filing Journey", "Startup Launch", "Hackathon Participation"],
  }

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${pressStart2P.variable} ${spaceMono.variable} font-mono antialiased bg-black text-white selection:bg-[#00ff00] selection:text-black`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}