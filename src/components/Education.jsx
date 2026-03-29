import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="absolute left-0 top-10 w-4 h-px bg-accent-line"></div>
      <div className="absolute left-4 top-10 w-px h-[100%] bg-accent-line/30"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="pl-8 lg:pl-16 relative"
      >
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-white flex items-center gap-4">
            <span className="text-xl font-mono text-accent-green mb-1">04.</span> 
            LOGS
          </h2>
          <div className="tech-line-hz flex-grow max-w-sm hidden sm:block" />
          <span className="hidden sm:block text-xs font-mono text-zinc-600">HISTORY_TRACE</span>
        </div>

        <div className="relative border-l border-accent-line ml-4 md:ml-8 space-y-12 pb-8">
          
          <div className="relative pl-12">
            <div className="absolute -left-[24px] top-1 p-[10px] bg-[#111218] border border-accent-green rounded-sm text-accent-green">
              <Briefcase className="w-5 h-5" />
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="tech-card p-8 border-l-2 border-l-accent-green"
            >
              <span className="text-sm font-mono text-zinc-500 mb-2 block tracking-widest uppercase">Present_Active</span>
              <h3 className="text-xl md:text-2xl font-bold text-zinc-100">Software Developer</h3>
              <p className="text-zinc-400 mt-4 leading-relaxed font-light">
                Specializing in building exceptional digital experiences, leading frontend architectures and scalable backend services. Innovating reliable platforms at the speed of inspiration.
              </p>
            </motion.div>
          </div>

          <div className="relative pl-12">
            <div className="absolute -left-[24px] top-1 p-[10px] bg-[#111218] border border-zinc-700 rounded-sm text-zinc-500">
              <GraduationCap className="w-5 h-5" />
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="tech-card p-8 bg-transparent"
            >
              <span className="text-sm font-mono text-zinc-600 mb-2 block tracking-widest uppercase">Past_Execution</span>
              <h3 className="text-xl md:text-2xl font-bold text-zinc-300">Bachelor's Degree in Computer Science</h3>
              <p className="text-zinc-500 mt-4 leading-relaxed font-light">
                Developed foundational programming skills, participating in hackathons, and exploring web technologies, turning an initial curiosity into a strong career path.
              </p>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Education;
