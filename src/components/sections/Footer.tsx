"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer id="contact" className="relative w-full min-h-[60vh] flex flex-col justify-between pt-32 px-4 bg-white border-t border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center flex-1 text-center z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-gray-400">Próximo Passo</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-syne font-bold uppercase tracking-tighter leading-none text-gray-900 break-words w-full px-2">
            Vamos trabalhar <br className="sm:hidden" /><span className="text-blue-600">juntos</span>
          </h2>
          <p className="max-w-lg text-base md:text-lg text-gray-500 font-light mt-4 px-4">
            Aberta para novas oportunidades. Se você tem um projeto em mente ou apenas quer trocar ideias sobre tecnologia, entre em contato!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="https://wa.me/5573981891863" target="_blank" rel="noreferrer" className="px-8 py-4 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              (73) 98189-1863
            </a>
            <a href="mailto:railanebastossouza@gmail.com" className="px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-black hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              E-mail
            </a>
          </div>
        </motion.div>
      </div>

      <div className="w-full mt-32 py-8 z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm font-medium uppercase tracking-wider">
          <p>© 2026 Kyraxxxx. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="https://github.com/Kyraxxxx" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
