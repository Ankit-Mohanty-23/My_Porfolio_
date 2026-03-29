import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent-darkGreen/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Typography Container */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-8"
        >
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
            <span className="w-12 h-px bg-accent-green/50"></span>
            Software Engineer / Full-Stack
          </div>
          
          <h1 className="text-5xl md:text-7xl font-sans font-medium tracking-tight text-white leading-[1.1]">
            Developer <span className="font-mono text-accent-green">
              {"{Loading"}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }}
              >.</motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.2 }}
              >.</motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.4 }}
              >.</motion.span>
              {"}"}
            </span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed">
            I specialize in building exceptional digital experiences, scaling reliable platforms, 
            and giving innovators the tools they need to create at the speed of inspiration.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <a href="#projects" className="px-8 py-4 bg-accent-green text-background font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center gap-3 group">
              <span>EXPLORE WORK</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#about" className="px-8 py-4 border border-accent-line text-zinc-300 font-bold uppercase tracking-wider text-sm hover:border-white hover:text-white transition-colors">
              HOW IT WORKS
            </a>
          </div>
        </motion.div>

        {/* Right Code Window Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-6 mt-12 lg:mt-0 relative"
        >
          {/* Decorative tech background lines */}
          <div className="absolute top-0 right-0 w-full h-full">
            <svg viewBox="0 0 600 400" className="absolute -right-20 -top-20 w-[120%] h-[120%] stroke-accent-line/30 stroke-1 fill-none z-[-1]">
              <path d="M50 350 L100 350 L150 250 L350 250 L400 300 L600 300" />
              <circle cx="100" cy="350" r="3" className="fill-accent-line" />
              <circle cx="400" cy="300" r="3" className="fill-accent-line" />
              <path d="M 0 100 L 200 100 L 250 180 L 500 180" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="tech-card bg-[#0b0c10] border-accent-line/50 p-1 font-mono text-sm leading-relaxed shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
            
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111218] border-b border-accent-line/50 rounded-t-lg">
              <div className="flex gap-2 group cursor-default">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-[#27c93f]"></div>
              </div>
              <div className="text-zinc-500 text-xs">TheProgrammer_</div>
              <div className="flex gap-2 items-center">
                <div className="w-6 h-1 bg-accent-line rounded-full transition-colors duration-300 group-hover:bg-[#ff5f56]"></div>
                <div className="w-3 h-3 border border-accent-line rounded-sm transition-colors duration-300 group-hover:bg-[#FFFFFF]"></div>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-6 overflow-x-auto text-zinc-400">
              <div className="flex">
                <div className="text-zinc-700 select-none pr-4 text-right min-w-[2rem] border-r border-accent-line/30 mr-4 flex flex-col">
                  {Array.from({length: 12}).map((_, i) => <span key={i}>{i+1}</span>)}
                </div>
                <div className="flex-1 whitespace-pre">
                  <span className="text-zinc-500">{'// Ankit.exe…'}</span><br/>
                  <span className="token keyword text-pink-400">const</span> {'System'} <span className="token keyword text-pink-400">=</span> {'require('}<span className="token string text-accent-green">'@world/core'</span>{');'}<br/>
                  <br/>
                  <span className="token keyword text-pink-400">async function</span> <span className="token function text-sky-400">bootSequence</span>{'() {'}<br/>
                  {'  '}<span className="token keyword text-pink-400">const</span> {'developer'} <span className="token keyword text-pink-400">=</span> <span className="token keyword text-pink-400">new</span> {'System.Developer({'}<br/>
                  {'    name: '}<span className="token string text-accent-green">'Ankit Mohanty'</span>{','}<br/>
                  {'    focus: '}<span className="token string text-accent-green">'Full-Stack Engineering'</span>{','}<br/>
                  {'    innovating: '}<span className="text-orange-400">true</span><br/>
                  {'  });'}<br/>
                  <br/>
                  {'  '}<span className="token keyword text-pink-400">await</span> {'developer.'}<span className="token function text-sky-400">buildPlatform</span>{'();'}<br/>
                  {'  console.'}<span className="token function text-sky-400">log</span>{'('}<span className="token string text-accent-green">'Creation successful.'</span>{');'}<br/>
                  {'}'}<br/>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative infinite scroll indicator or bottom line */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center">
        <div className="w-px h-16 bg-gradient-to-b from-accent-line to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
