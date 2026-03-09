"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Button from "@/components/ui/Button";

const IMAGES = [
  "https://images.unsplash.com/photo-1659986480984-9b7a847168d4?q=80&w=1943&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620868173320-2d3345be5f0f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1557751949-dd97255ae824?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1630809388741-244e8aedc336?q=80&w=1541&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

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

  const slideVariants = {
    initial: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0.8 }),
    animate: { x: "0%", opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0.8 }),
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[500px] md:h-[110vh] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Dynamic Background Image Slider */}
      <motion.div
        style={{ y: yImage }}
        className="absolute inset-0 w-full h-full scale-110 will-change-transform transform-gpu"
      >
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={currentImageIndex}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
            className="absolute inset-0 w-full h-full z-0"
          >
            <Image
              src={IMAGES[currentImageIndex]}
              alt={`Luxury KNIGHTS Bedding ${currentImageIndex + 1}`}
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center will-change-transform transform-gpu"
            />
          </motion.div>
        </AnimatePresence>

        {/* Sophisticated Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/20 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-brand-black/30 z-10 pointer-events-none"></div>
        {/* Glass Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] hidden md:block z-10"></div>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: yOpacity, y: yContent }}
        className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Masked Text Reveal Headline */}
        <div className="overflow-hidden mb-8 w-full px-4 max-w-7xl">
          <motion.h1
            variants={revealVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] font-serif font-light uppercase text-white leading-[1.2] md:leading-[1.1] tracking-widest pb-2"
          >
            Enduring Style for a <br className="hidden md:block" />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark pr-2 xl:pr-4">
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

      {/* Elegant Side Navigation Dots */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 hidden lg:flex z-20">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i === currentImageIndex) return;
              setDirection(i > currentImageIndex ? 1 : -1);
              setCurrentImageIndex(i);
            }}
            className={`w-1 transition-all rounded-full duration-500 ease-out focus:outline-none ${
              i === currentImageIndex ? "bg-brand-gold h-8" : "bg-white/40 h-2 hover:bg-white/70 hover:h-4"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <div className="relative w-[1px] h-20 bg-white/20 overflow-hidden">
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
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none hidden md:block z-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none hidden md:block z-20"></div>
    </section>
  );
}
