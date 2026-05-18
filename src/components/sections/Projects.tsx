"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Sistema de Gestão Financeira",
    category: "Full Stack / Next.js",
    year: "2026",
    color: "bg-gray-100",
    url: "https://github.com/Kyraxxxx",
  },
  {
    title: "API de Integração OpenBanking",
    category: "Backend / Node.js",
    year: "2025",
    color: "bg-gray-50",
    url: "https://github.com/Kyraxxxx",
  },
  {
    title: "Dashboard Analítico",
    category: "Frontend / React",
    year: "2025",
    color: "bg-white",
    url: "https://github.com/Kyraxxxx",
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="relative w-full py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-syne font-bold uppercase tracking-tight text-gray-900 break-words">Projetos & Repositórios</h2>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-xl">Uma seleção de trabalhos recentes e contribuições open-source, focados em resolver problemas reais com código limpo.</p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full p-6 md:p-8 lg:p-12 rounded-[2rem] overflow-hidden group cursor-pointer border border-gray-200 ${project.color} hover:border-gray-300 transition-colors duration-300 shadow-sm hover:shadow-md flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-8`}
            >
              <div className="flex flex-col gap-4 md:gap-6 z-10 w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
                  <span className="text-xs md:text-sm tracking-widest uppercase font-medium text-blue-600">{project.category}</span>
                  <span className="text-xs md:text-sm tracking-widest uppercase font-medium text-gray-400">{project.year}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-syne font-bold uppercase text-gray-900 group-hover:text-blue-600 transition-colors break-words">{project.title}</h3>
              </div>
              <div className="min-w-12 w-12 h-12 md:min-w-16 md:w-16 md:h-16 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shadow-md flex-shrink-0 self-end md:self-auto mt-4 md:mt-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="10 5 19 5 19 14"></polyline></svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
