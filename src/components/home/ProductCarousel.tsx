"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { products, Product } from "@/lib/products";
import SectionTitle from "@/components/ui/SectionTitle";

const infiniteProducts = [...products, ...products, ...products];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(products.length);
  const [cardWidth, setCardWidth] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        const firstCard = scrollRef.current.children[0] as HTMLElement;
        if (firstCard) {
          setCardWidth(firstCard.offsetWidth + 24); // Card width + gap
        }
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const [visibleCount, setVisibleCount] = useState(3);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // Auto-sliding logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 4000); 

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, isTransitioning]);

  // Seamless loop handling
  useEffect(() => {
    if (currentIndex >= products.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(products.length);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 600); 
      return () => clearTimeout(timer);
    }
    if (currentIndex < products.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(products.length * 2 - 1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <section 
      className="section-padding bg-white overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Text - Repositioned for mobile */}
      <div className="absolute top-[15%] left-0 w-full flex justify-center pointer-events-none opacity-[0.03] select-none z-0 overflow-hidden">
        <span className="text-[10rem] sm:text-[15rem] md:text-[20rem] font-serif font-bold text-brand-black leading-none uppercase">LUXURY</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionTitle 
              subtitle="The Collection"
              title="CRAFTED FOR COMFORT"
            />
          </div>
          
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-brand-gold/20 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all duration-500 group shadow-sm hover:shadow-xl bg-white"
              aria-label="Previous products"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-brand-gold/20 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all duration-500 group shadow-sm hover:shadow-xl bg-white"
              aria-label="Next products"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            ref={scrollRef}
            className="flex gap-6 pb-20 items-stretch"
            animate={{ x: -currentIndex * cardWidth }}
            transition={isTransitioning ? { duration: 0 } : { type: "spring", stiffness: 60, damping: 15 }}
          >
            {infiniteProducts.map((product, idx) => {
              // Highlight based on current screen-aware count
              const isActive = idx >= currentIndex && idx < currentIndex + visibleCount;
              
              return (
                <CarouselCard 
                  key={`${product.id}-${idx}`} 
                  product={product} 
                  isActive={isActive}
                />
              );
            })}
          </motion.div>
          
          {/* Custom Progress Bar */}
          <div className="max-w-md mx-auto relative h-[1px] bg-black/5 mt-4">
            <motion.div 
              className="absolute top-0 h-full bg-brand-gold"
              animate={{ 
                width: `${(1 / products.length) * 100}%`,
                left: `${((currentIndex % products.length) / products.length) * 100}%`
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
            <div className="flex justify-between mt-4">
              <span className="text-[10px] font-sans tracking-[0.3em] text-brand-charcoal/30 uppercase font-bold">01 — COLLECTION</span>
              <span className="text-[10px] font-sans tracking-[0.3em] text-brand-charcoal/30 uppercase font-bold">05 — RANGE</span>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <Link 
            href="/collections" 
            className="inline-flex items-center gap-6 text-[10px] font-bold tracking-[0.4em] text-brand-black hover:text-brand-gold transition-all group py-5 px-10 border border-black/10 hover:border-brand-gold rounded-full bg-white shadow-sm hover:shadow-xl uppercase"
          >
            Explore Full Registry 
            <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CarouselCard({ product, isActive }: { product: Product, isActive: boolean }) {
  return (
    <motion.div 
      className={`min-w-[280px] w-[80vw] sm:min-w-[380px] md:min-w-[450px] group transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-80 scale-[0.98]'}`}
    >
      <Link href={`/collections/${product.slug}`} className="block relative">
        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-10 bg-brand-cream/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-1000 group-hover:shadow-[0_30px_60px_rgba(212,175,55,0.15)]">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000"></div>
          
          {/* High-End Label */}
          <div className="absolute top-10 left-10">
            <span className="px-5 py-2.5 bg-white/10 backdrop-blur-xl text-[9px] font-bold tracking-[0.3em] text-white rounded-full border border-white/20 uppercase">
              {product.shortName}
            </span>
          </div>
          
          {/* Floating Detail Action */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000">
             <div className="w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center text-brand-black shadow-2xl scale-50 group-hover:scale-100 transition-all duration-700 ease-out border border-brand-gold/20">
                <ArrowRight size={28} className="mb-1" />
                <span className="text-[8px] font-bold tracking-widest uppercase">View</span>
             </div>
          </div>
        </div>
        
        <div className="space-y-5 px-4">
          <div className="flex items-start justify-between gap-6">
            <h3 className={`text-2xl md:text-3xl font-serif text-brand-black group-hover:text-brand-gold transition-colors duration-700 leading-tight`}>
              {product.name}
            </h3>
            <div className="mt-3 text-brand-gold opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
               <Sparkles size={22} />
            </div>
          </div>
          <p className="text-base text-brand-charcoal/50 font-light line-clamp-2 leading-relaxed max-w-[85%]">
            {product.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
