import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.4-3.6 5 5 0 0 0-.1-3.6s-1.1-.3-3.6 1.4a12.8 12.8 0 0 0-6.8 0C4.3 1.6 3.2 1.9 3.2 1.9a5 5 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3 6.4 6 6.76A4.8 4.8 0 0 0 6 18v4"></path>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute left-0 top-10 w-4 h-px bg-accent-line"></div>
      <div className="absolute left-4 top-10 w-px h-[100%] bg-accent-line/30"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="pl-8 lg:pl-16 relative flex flex-col items-start max-w-2xl"
      >
        <div className="flex items-center gap-6 mb-8 w-full">
          <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-white flex items-center gap-4">
            <span className="text-xl font-mono text-accent-green mb-1">05.</span> 
            TRANSMIT
          </h2>
          <div className="tech-line-hz flex-grow hidden sm:block" />
        </div>

        <p className="text-zinc-400 text-lg leading-relaxed mb-12 font-light">
          My inbox is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you! Building connected tools for the <span className="text-neon">{'{World}'}</span> starts with a simple ping.
        </p>

        <a 
          href="mailto:contact@ankitmohanty.com" 
          className="px-10 py-5 bg-accent-green text-background font-bold tracking-widest uppercase hover:bg-white transition-all flex items-center gap-4 group"
        >
          <span>INITIATE CONTACT</span>
          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <div className="flex flex-col md:flex-row w-full gap-4 sm:gap-6 mt-24">
          <a 
            href="https://github.com/Ankit-Mohanty-23" 
            className="group flex flex-1 items-center gap-4 pr-6 sm:pr-8 bg-[#0a0a0a]/80 backdrop-blur-sm border border-zinc-800/80 hover:border-accent-green/50 hover:bg-[#131410] transition-all duration-300 relative overflow-hidden whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-accent-green scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom z-10" />
            <div className="p-3 sm:p-4 bg-zinc-900 border-r border-zinc-800 group-hover:border-accent-green/40 group-hover:bg-accent-green/10 transition-colors duration-300 flex items-center justify-center relative z-0">
              <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-200 group-hover:text-accent-green transition-colors duration-300" />
            </div>
            <span className="font-mono text-xs sm:text-sm tracking-widest text-zinc-400 group-hover:text-white transition-colors duration-300">// GITHUB</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/ankitmohanty-23dev" 
            className="group flex flex-1 items-center gap-4 pr-6 sm:pr-8 bg-[#0a0a0a]/80 backdrop-blur-sm border border-zinc-800/80 hover:border-accent-green/50 hover:bg-[#131410] transition-all duration-300 relative overflow-hidden whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-accent-green scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom z-10" />
            <div className="p-3 sm:p-4 bg-zinc-900 border-r border-zinc-800 group-hover:border-accent-green/40 group-hover:bg-accent-green/10 transition-colors duration-300 flex items-center justify-center relative z-0">
              <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-200 group-hover:text-accent-green transition-colors duration-300" />
            </div>
            <span className="font-mono text-xs sm:text-sm tracking-widest text-zinc-400 group-hover:text-white transition-colors duration-300">// LINKEDIN</span>
          </a>

          <a 
            href="mailto:contact@ankitmohanty.com" 
            className="group flex flex-1 items-center gap-4 pr-6 sm:pr-8 bg-[#0a0a0a]/80 backdrop-blur-sm border border-zinc-800/80 hover:border-accent-green/50 hover:bg-[#131410] transition-all duration-300 relative overflow-hidden whitespace-nowrap"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-accent-green scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom z-10" />
            <div className="p-3 sm:p-4 bg-zinc-900 border-r border-zinc-800 group-hover:border-accent-green/40 group-hover:bg-accent-green/10 transition-colors duration-300 flex items-center justify-center relative z-0">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-200 group-hover:text-accent-green transition-colors duration-300" />
            </div>
            <span className="font-mono text-xs sm:text-sm tracking-widest text-zinc-400 group-hover:text-white transition-colors duration-300">// EMAIL</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
