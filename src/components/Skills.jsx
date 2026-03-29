import React from 'react';
import { motion } from 'framer-motion';

const skillsCategories = [
  {
    title: "LANGUAGES",
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C++/LSFM Library', "C Language"]
  },
  {
    title: "FRONTEND",
    skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Javascript', 'Responsive Design']
  },
  {
    title: "BACKEND",
    skills: ['Node.js', 'Express.js', 'REST API Design', 'JWT', 'Cron Jobs', 'FastAPI']
  },
  {
    title: "DATABASES",
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Schema Design', 'ACID Transaction']
  },
  {
    title: "TOOLS & DEVOPS",
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm', 'nodemailer']
  },
  {
    title: "CONCEPTS",
    skills: ['Full Stack', 'MVC Architecture', 'API Integration', 'Auth & Authorization']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
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
            <span className="text-xl font-mono text-accent-green mb-1">02.</span> 
            DEVELOP
          </h2>
          <div className="tech-line-hz flex-grow max-w-sm hidden sm:block" />
          <span className="hidden sm:block text-xs font-mono text-zinc-600">TOOLCHAIN_INDEX</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-4 lg:pr-16">
          {skillsCategories.map((category, i) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-6 sm:p-8 border border-zinc-900 bg-[#0a0a0a]/50 backdrop-blur-sm hover:border-zinc-800 transition-all duration-300 overflow-hidden h-full flex flex-col"
            >
              {/* Hover Accent Line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-green/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 bg-accent-green shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                <h3 className="font-mono text-sm tracking-widest text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="px-3 py-1.5 font-mono text-[12px] md:text-[13px] text-zinc-400 bg-zinc-900/50 border border-zinc-800/50 hover:text-accent-green hover:border-accent-green/30 hover:bg-accent-green/5 transition-all duration-300 cursor-default rounded-none shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
