import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Bhavit Rajput | AI & Full Stack Developer",
  description:
    "Portfolio of Bhavit Rajput, an AI & Data Science student specializing in scalable MERN platforms and secure web applications.",
  keywords: [
    "Bhavit Rajput",
    "Full Stack Developer",
    "Cybersecurity",
    "MERN Stack",
    "AI Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Bhavit Rajput | AI & Full Stack Developer",
    description:
      "Portfolio of Bhavit Rajput, an AI & Data Science student specializing in scalable MERN platforms and secure web applications.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <head>
        {/* Preconnect to external domains for faster asset loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SmoothScroll>
          <LoadingScreen />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
