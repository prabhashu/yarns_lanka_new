"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  const revealVariants = {
    hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        duration: 1.2,
        ease: [0.19, 1, 0.22, 1] as const,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[500px] md:h-[110vh] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Dynamic Background Image */}
      <motion.div
        style={{ y: yImage }}
        className="absolute inset-0 w-full h-full scale-110"
      >
        <Image
          src="https://images.unsplash.com/photo-1659986480984-9b7a847168d4?q=80&w=1943&auto=format&fit=crop"
          alt="Luxury KNIGHTS Bedding"
          fill
          priority
          className="object-cover object-center transition-transform duration-[10s] ease-out scale-100 group-hover:scale-105"
          unoptimized
        />
        {/* Sophisticated Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/20"></div>
        <div className="absolute inset-0 bg-brand-black/20"></div>
        {/* Glass Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: yOpacity, y: yContent }}
        className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Subtle Pre-header */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-1 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-sm">
            Est. 2026 — Yarns Lanka
          </span>
        </motion.div>

        {/* Masked Text Reveal Headline */}
        <div className="overflow-hidden mb-8 w-full px-4">
          <motion.h1
            variants={revealVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] md:leading-[0.9] tracking-tight pb-2"
          >
            Enduring Style for a <br className="hidden md:block" />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark italic pr-2 md:pr-6">
              Refined
            </span>{" "}
            Lifestyle
          </motion.h1>
        </div>

        {/* Refined Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-brand-cream/90 text-sm md:text-xl font-light leading-relaxed mb-8 md:mb-12 px-4"
        >
          Discover the finest collection of premium Home Textiles. <br className="hidden md:block" />
          Crafted with integrity, designed to enhance everyday living.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto px-4"
        >
          <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px] shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            Partner With Us
          </Button>
        </motion.div>
      </motion.div>

      {/* Elegant Side Navigation Dots (Visual Only for now) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 hidden lg:flex">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full ${
              i === 0 ? "bg-brand-gold h-4" : "bg-black/20"
            } transition-all duration-500`}
          />
        ))}
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="relative w-[1px] h-20 bg-black/10 overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-brand-gold to-transparent"
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-white font-bold drop-shadow-md">
          Scroll
        </span>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    </section>
  );
}
