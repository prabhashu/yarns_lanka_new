"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const IMAGES = [
  "https://images.unsplash.com/photo-1659986480984-9b7a847168d4?q=80&w=1943&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620868173320-2d3345be5f0f?q=80&w=1740&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557751949-dd97255ae824?q=80&w=1932&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1630809388741-244e8aedc336?q=80&w=1541&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1932&auto=format&fit=crop"
];

// Circular spinning badge text matching the design
const CircularText = ({ text }: { text: string }) => {
  const characters = text.split("");
  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center animate-[spin_20s_linear_infinite] shrink-0">
      <div className="absolute w-2 h-2 bg-brand-charcoal rounded-full" />
      {characters.map((char, i) => (
        <span
          key={i}
          className="absolute text-[10px] md:text-sm font-semibold uppercase tracking-widest text-brand-charcoal"
          style={{
            transform: `rotate(${i * (360 / characters.length)}deg) translateY(-40px)`,
            transformOrigin: "center",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default function Hero() {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-[#f4f4f4] flex flex-col overflow-hidden h-[100dvh] min-h-[650px]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
          will-change: transform;
        }
      `}} />

      {/* TOP WHITE SECTION */}
      {/* Notice: Z-index 20 keeps it hovering over the image container */}
      <div className="relative z-20 bg-white w-full flex flex-col shrink-0 pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-12">
        
        {/* Text Area */}
        <motion.div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 w-full"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
            <h1 className="text-[2.85rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-serif text-brand-charcoal tracking-tight leading-[1.1] mb-5 md:mb-6 font-semibold max-w-[95%] md:max-w-none mx-auto">
                Enduring Style <br className="md:hidden"/> for a <br className="hidden md:block"/> Refined Lifestyle
            </h1>
            <p className="text-brand-charcoal/60 text-sm sm:text-base md:text-lg max-w-2xl font-light px-2">
                Showcase your true self with our distinctive collection that blends style and individuality perfectly for everyday luxury.
            </p>
        </motion.div>

        {/* Top Wave Mask - Creates the downward arching curve in the center */}
        <svg className="absolute bottom-0 left-0 w-full translate-y-[99%] z-10 pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.03)]" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ height: '7vw', minHeight: '50px' }}>
            {/* Draw from 0,0 to 1440,0 then curve backwards dropping down to 130 */}
            <path d="M0,0 L1440,0 C960,130 480,130 0,0 Z" fill="white" />
        </svg>
      </div>

      {/* MID SECTION - IMAGE MARQUEE */}
      {/* Background is lightly grayed, hidden seamlessly by the white SVG edges */}
      <div className="relative w-full flex-1 min-h-[250px] overflow-hidden z-0">
         <div className="absolute inset-0 flex w-max animate-scroll-left items-center">
            {[...IMAGES, ...IMAGES].map((src, i) => (
                <div key={i} className="flex-none w-[280px] sm:w-[320px] md:w-[350px] lg:w-[450px] h-full relative overflow-hidden bg-brand-cream border-r-4 md:border-r-8 border-white group">
                    <Image 
                      src={src} 
                      alt="Collection showcase" 
                      fill 
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                      sizes="(max-width: 768px) 260px, (max-width: 1024px) 350px, 450px"
                      priority={i < 3}
                    />
                </div>
            ))}
         </div>
      </div>

      {/* BOTTOM WHITE SECTION */}
      <div className="relative z-20 bg-white w-full flex flex-col shrink-0 px-4 md:px-12 pt-12 md:pt-24 pb-8 md:pb-10">
        
        {/* Bottom Wave Mask - Creates the upward arching curve in the center */}
        <svg className="absolute top-0 left-0 w-full -translate-y-[99%] z-10 pointer-events-none drop-shadow-[0_-4px_10px_rgba(0,0,0,0.02)]" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ height: '7vw', minHeight: '50px' }}>
            {/* Draw from 0,100 to 1440,100 then curve upwards rising to near 0 */}
            <path d="M0,100 L1440,100 C960,-30 480,-30 0,100 Z" fill="white" />
        </svg>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1400px] mx-auto gap-4 md:gap-12 lg:gap-8 z-10">
            
            {/* Center: Explore More (Moved for mobile visual flow) */}
            <div className="flex flex-col items-center gap-2 md:gap-4 flex-1 order-1 md:order-2 -mt-10 md:-mt-12 lg:-mt-20">
                <span className="text-[10px] md:text-sm font-semibold text-brand-charcoal uppercase tracking-wider">Explore More</span>
                <button 
                  onClick={handleScroll}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-brand-charcoal/20 flex items-center justify-center hover:bg-brand-charcoal/5 hover:scale-105 transition-all outline-none"
                  aria-label="Scroll Down"
                >
                    <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-brand-charcoal stroke-[1.5]" />
                </button>
            </div>

            {/* Combined Reviews & Badge container for Mobile Layout */}
            <div className="flex flex-row items-center justify-between w-full md:contents order-2 flex-grow-0 md:flex-grow flex-1 mt-2 md:mt-0 px-2 sm:px-6 md:px-0">
                {/* Left: 10K+ Reviews */}
                <div className="flex items-center gap-2 md:gap-4 order-1 pt-0 justify-start">
                    <div className="flex -space-x-3">
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                          <Image src={IMAGES[2]} alt="User 1" fill sizes="48px" className="object-cover" />
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                          <Image src={IMAGES[3]} alt="User 2" fill sizes="48px" className="object-cover" />
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                          <Image src={IMAGES[4]} alt="User 3" fill sizes="48px" className="object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-col text-sm pt-1">
                        <span className="font-bold text-brand-charcoal text-sm md:text-base leading-tight">10K+ Reviews</span>
                        <span className="text-brand-charcoal/60 text-[10px] md:text-xs">Customers satisfied</span>
                    </div>
                </div>

                {/* Right: Circular Badge */}
                <div className="flex justify-end order-3 md:order-3">
                    <CircularText text="QUALITY BEST DESIGN AND " />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
