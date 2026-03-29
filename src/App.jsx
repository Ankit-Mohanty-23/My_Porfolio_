import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative font-sans text-zinc-300">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32 py-24 relative z-10 w-full overflow-hidden">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;