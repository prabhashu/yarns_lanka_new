"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader after a short loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100vh",
            opacity: 1, 
            transition: { 
              duration: 1, 
              ease: [0.76, 0, 0.24, 1], // Custom cinematic bezier curve
              delay: 0.1 
            } 
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-brand-black w-full h-[100dvh] overflow-hidden"
        >
          {/* subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative flex flex-col items-center z-10">
            {/* Logo Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative w-[280px] h-[80px]"
            >
              <Image 
                src="/logos/Yarns_Logo_White.svg" 
                alt="Yarns Lanka Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
            
            {/* Progress Line */}
            <div className="mt-12 w-[240px] h-[1px] bg-white/10 overflow-hidden relative">
              <motion.div 
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.65, 0, 0.35, 1],
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-brand-grey-medium to-transparent"
              />
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 flex items-center gap-4"
            >
              <span className="w-8 h-[1px] bg-brand-grey-medium"></span>
              <p className="font-sans text-[10px] tracking-[0.4em] text-white/50 uppercase">
                Premium Home Textiles
              </p>
              <span className="w-8 h-[1px] bg-brand-grey-medium"></span>
            </motion.div>
          </div>

          {/* Curtain Overlay to make the exit feel heavier/smooth */}
          <motion.div 
            initial={{ opacity: 0 }}
            exit={{ opacity: 0.5, transition: { duration: 0.8 } }}
            className="absolute inset-0 bg-black pointer-events-none z-[-1]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
