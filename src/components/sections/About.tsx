"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="relative w-full min-h-[70vh] py-20 md:py-32 px-4 md:px-8 flex flex-col items-center justify-center bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 md:gap-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-bold uppercase leading-tight text-gray-900">
            Código limpo <br />
            <span className="text-gray-400">Arquitetura sólida</span>
          </h2>
          <div className="w-full h-[1px] bg-gray-200" />
          <p className="text-base md:text-xl text-gray-600 font-light leading-relaxed">
            Sou um desenvolvedor de software focado em construir aplicações modernas, escaláveis e eficientes. Acredito que um bom código vai muito além de apenas funcionar; ele deve ser manutenível, legível e otimizado.
          </p>
          <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed">
            Tenho experiência com diversas tecnologias modernas, desde o backend até o frontend, sempre buscando a melhor arquitetura para resolver problemas complexos com soluções simples e robustas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-[2rem] overflow-hidden bg-white border border-gray-200 shadow-sm flex items-center justify-center"
        >
          <div className="relative z-10 text-center flex flex-col gap-4 items-center">
             <div className="w-24 h-24 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
             </div>
             <p className="font-syne text-xl uppercase tracking-widest text-gray-400 mt-4">Full Stack Developer</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
