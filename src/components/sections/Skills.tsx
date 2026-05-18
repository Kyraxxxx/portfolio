"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Python", percentage: 85 },
  { name: "Node.js", percentage: 70 },
  { name: "HTML & CSS", percentage: 95 },
  { name: "React / Next.js", percentage: 65 },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" className="relative w-full py-20 md:py-32 px-4 md:px-8 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 text-center items-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold uppercase tracking-tight text-gray-900">
            Minhas Habilidades
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-light max-w-2xl">
            Linguagens e tecnologias que domino para construir sistemas web de ponta a ponta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex flex-col gap-8">
            <h3 className="font-syne font-bold text-2xl uppercase tracking-wide text-gray-900 mb-2">Nível de Proficiência</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="flex flex-col gap-2">
                <div className="flex justify-between items-center font-medium text-gray-700">
                  <span className="uppercase tracking-wider">{skill.name}</span>
                  <span className="text-blue-600 font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-blue-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="font-syne font-bold text-2xl uppercase tracking-wide text-gray-900 mb-2">Estatísticas do GitHub</h3>
            
            <div className="p-8 border border-gray-200 rounded-[2rem] bg-gray-50 shadow-sm flex flex-col gap-6">
               <div className="flex justify-between items-center">
                  <span className="text-sm font-medium uppercase tracking-widest text-gray-500">Commits em 2026</span>
                  <span className="text-2xl font-bold text-gray-900">1,204</span>
               </div>
               
               <div className="grid grid-cols-12 gap-2 h-32 content-start">
                  {/* Simulate GitHub contribution graph */}
                  {Array.from({ length: 48 }).map((_, i) => {
                     const intensity = Math.random();
                     let bgColor = "bg-gray-200";
                     if (intensity > 0.8) bgColor = "bg-blue-600";
                     else if (intensity > 0.5) bgColor = "bg-blue-400";
                     else if (intensity > 0.3) bgColor = "bg-blue-200";
                     
                     return (
                        <motion.div 
                           key={i} 
                           initial={{ opacity: 0, scale: 0 }}
                           animate={inView ? { opacity: 1, scale: 1 } : {}}
                           transition={{ duration: 0.4, delay: 0.5 + Math.random() * 0.5 }}
                           className={`w-full aspect-square rounded-sm ${bgColor}`} 
                        />
                     );
                  })}
               </div>
               
               <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-gray-500 font-medium">Linguagem mais usada</span>
                     <span className="font-bold text-gray-900">Python</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-gray-500 font-medium">Linhas de código (aprox.)</span>
                     <span className="font-bold text-gray-900">~150k</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

