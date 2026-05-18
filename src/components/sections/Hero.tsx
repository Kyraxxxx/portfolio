"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const terminalTexts = [
  "Python Backend Developer",
  "React & Next.js Enthusiast",
  "Full Stack Engineer",
  "Building scalable APIs"
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = terminalTexts[textIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % terminalTexts.length);
      } else {
        setDisplayText(currentText.substring(0, displayText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20">
      {/* Subtle grid accent */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHptMjAgMjB2MjBIMjBWMjB6IiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD4KPC9zdmc+')] opacity-50 pointer-events-none" />

      <div className="z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3 px-5 py-2 rounded-md border border-gray-200 bg-gray-50 shadow-sm font-mono text-sm text-gray-700"
        >
          <span className="text-blue-600 font-bold">&gt;</span>
          <span>{displayText}</span>
          <span className="w-2 h-4 bg-gray-400 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] sm:text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter font-syne text-gray-900 leading-[0.9] break-words w-full px-2"
        >
          Kyra<span className="text-blue-600">xxxx</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 text-base md:text-2xl text-gray-600 max-w-2xl font-light px-4"
        >
          Desenvolvedor de Software. Construindo aplicações web modernas, escaláveis e focadas em código limpo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 items-center flex-wrap justify-center w-full px-4"
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-medium rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-gray-900/20 text-center">
            Ver Projetos
          </a>
          <a href="https://github.com/Kyraxxxx" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 text-gray-900 font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
