import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.4-3.6 5 5 0 0 0-.1-3.6s-1.1-.3-3.6 1.4a12.8 12.8 0 0 0-6.8 0C4.3 1.6 3.2 1.9 3.2 1.9a5 5 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3 6.4 6 6.76A4.8 4.8 0 0 0 6 18v4"></path>
  </svg>
);

const projectsData = [
  {
    id: "P03",
    title: "SmartQ",
    description:
      "An intelligent queue management platform utilizing machine learning models to predict service duration times efficiently.",
    tech: ["Python", "FastAPI", "React", "Prisma", "PostgreSQL"],
    github: "https://github.com/Ankit-Mohanty-23/SmartQ",
    external: "#",
  },
  {
    id: "P01",
    title: "BillAlert App",
    description:
      "A comprehensive billing and alert management system built to simplify financial tracking for small businesses with real-time notifications.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/Ankit-Mohanty-23/BillAlert-FullStack-Website",
    external: "https://paypromptdev.vercel.app/",
  },
  {
    id: "P02",
    title: "Markdown Setup Blog",
    description:
      "A statically generated blog specifically designed for developers, featuring markdown support, code highlighting, and optimized SEO.",
    tech: ["Next.js", "Markdown", "Vercel", "Tailwind"],
    github: "https://github.com/Ankit-Mohanty-23/Personal-blog_FullStack_Website",
    external: "https://softinkdev.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
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
            <span className="text-xl font-mono text-accent-green mb-1">
              03.
            </span>
            LOGS
          </h2>
          <div className="tech-line-hz flex-grow max-w-sm hidden sm:block" />
          <span className="hidden sm:block text-xs font-mono text-zinc-600">
            PROJECT_HISTORY_TRACE
          </span>
        </div>

        <div className="relative border-l border-accent-line ml-4 md:ml-8 space-y-12 pb-8">
          {projectsData.map((project, i) => (
            <div key={project.id} className="relative pl-12">
              <div className="absolute -left-[24px] top-1 p-[10px] bg-[#111218] border border-accent-green rounded-sm text-accent-green">
                <Code2 className="w-5 h-5" />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="tech-card group p-8 border-l-2 border-l-accent-green bg-transparent hover:bg-[#111218]/50 transition-colors duration-500"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-mono text-zinc-500 tracking-widest uppercase">
                    {project.id}_DEPLOYMENT
                  </span>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="text-zinc-500 hover:text-accent-green transition-colors"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={project.external}
                      className="text-zinc-500 hover:text-accent-green transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <a
                  href={project.external}
                  className="group-hover:text-accent-green transition-colors block"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-accent-green transition-colors duration-300">
                    {project.title}
                  </h3>
                </a>

                <p className="text-zinc-400 mt-4 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-zinc-500">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="flex items-center before:content-[''] before:w-1 text-accent-green before:h-1 before:bg-accent-line before:rounded-full before:mr-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
