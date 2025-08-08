import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;