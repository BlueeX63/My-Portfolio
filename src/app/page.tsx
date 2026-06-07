import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative flex flex-col w-full selection:bg-accent selection:text-background">
      <CustomCursor />
      <Navigation />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Leadership />
      <Contact />
      
      <footer className="py-8 bg-background border-t border-border text-center text-muted-foreground text-sm uppercase tracking-widest font-light">
        <p>&copy; {new Date().getFullYear()} Bhavit Rajput. All rights reserved.</p>
      </footer>
    </main>
  );
}
