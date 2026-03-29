import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Structural layout lines */}
      <div className="absolute left-0 top-10 w-4 h-px bg-accent-line"></div>
      <div className="absolute left-4 top-10 w-px h-[100%] bg-accent-line/30"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="pl-8 lg:pl-16 relative"
      >
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-white flex items-center gap-4">
            <span className="text-xl font-mono text-accent-green mb-1">01.</span> 
            HOW IT WORKS?
          </h2>
          <div className="tech-line-hz flex-grow max-w-sm hidden sm:block" />
          <span className="hidden sm:block text-xs font-mono text-zinc-600">ABOUT_ME</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 text-zinc-400 text-lg leading-relaxed relative">
          <div className="space-y-6 relative z-10">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:float-left first-letter:mr-2">
              Hello! My name is Ankit and I enjoy creating things that live on the internet.
              My interest in web development started back when I decided to try editing custom Tumblr themes
              — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, Computer Science undergraduate (B.Tech, SOA University – ITER, 2027) with proven hands-on experience building and shipping production-level full-stack web applications used by real users. 
              Passionate about clean code, scalable systems, and delivering measurable business outcomes. My main focus these days is building <span className="text-white">accessible, inclusive products</span> and
              digital experiences for a variety of clients.
            </p>
          </div>

          <div className="relative group lg:mt-0 mt-8">
            {/* Tech Decoration */}
            <div className="absolute -inset-4 border border-accent-line border-dashed rounded-lg opacity-30 group-hover:opacity-100 transition-opacity z-0" />
            <div className="absolute -inset-4 bg-accent-surface/50 z-0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="tech-card p-8 h-full z-10">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-accent-line">
                <div className="p-3 bg-accent-green/10 text-accent-green rounded">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide uppercase">Active Process</h3>
                  <div className="text-xs font-mono text-accent-green mt-1">STATUS: COMPILING_SIDE_PROJECTS</div>
                </div>
              </div>

              <p className="mb-5 text-zinc-400">
                Working on <span className="text-white font-medium border-b border-accent-green">
                cutting-edge React infrastructure</span> and diving deep into modern web performance and animations.
                Demonstrates strong ability to architect modular backends, design RESTful APIs, implement JWT authentication, automate workflows with cron jobs, and optimize database queries. 
              </p>

              <div className="flex flex-wrap gap-2">
                {['JavaScript (ES6+)', 'React', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'].map((tag, i) => (
                  <span key={tag} className="px-3 py-1 bg-[#111218] border border-accent-line text-xs font-mono text-zinc-400 rounded hover:border-accent-green hover:text-accent-green transition-colors cursor-default">
                    {'{'}{tag}{'}'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
