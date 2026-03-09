"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import ProductCarousel from "@/components/home/ProductCarousel";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Factory } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-white overflow-x-hidden relative">
        <Hero />


        {/* --- BRAND INTRO --- */}
        <section className="section-padding container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <AnimatedSection direction="right" className="space-y-8">
              <SectionTitle 
                subtitle="COMPANY INTRODUCTION"
                title="YARNS LANKA PRIVATE LIMITED"
              />
              <p className="text-lg text-brand-charcoal leading-relaxed font-light">
                <strong className="text-brand-black font-semibold">Bringing vision to reality</strong>, Yarns Lanka manufactures Home Textiles that enhance lifestyle and set new thresholds for trends. Built to last, inspiring people, purposefully designed to enhance comfort and wellbeing.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed">
                Guided by foresight to see potential, we respond to the evolving needs of the past and anticipate the possibilities of the future—setting the blueprint forward through commitment to the planet and care for mankind across the world.
              </p>
              
              <div className="pt-8 mt-8">
                <Button href="/about" variant="outline">
                  GET TO KNOW US
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="relative h-[300px] sm:h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden group">
              <Image 
                src="/product-sheets.png" 
                alt="Detailed fabric texture by Yarns Lanka" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
              
              {/* Floating inner image */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-64 h-64 rounded-xl overflow-hidden border-4 border-white shadow-2xl hidden md:block"
              >
                <Image 
                  src="/product-pillow.png" 
                  alt="Knights pillows" 
                  fill
                  sizes="256px"
                  quality={80}
                  className="object-cover" 
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </section>


        {/* --- DISCOVER YARNS --- */}
        <section className="section-padding relative overflow-hidden bg-brand-cream/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <AnimatedSection direction="left" className="order-2 lg:order-2 space-y-8 relative z-10 lg:pl-12">
                <SectionTitle 
                  subtitle="The Knights Portfolio"
                  title="DISCOVER YARNS"
                />
                
                <div className="mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image 
                      src="/logos/KNIGHT Logo.png" 
                      alt="Knights Brand Logo" 
                      width={260} 
                      height={260} 
                      className="opacity-90 drop-shadow-sm object-contain"
                    />
                  </motion.div>
                </div>
                
                <div className="relative">
                  <span className="absolute -left-6 -top-6 text-8xl text-brand-gold/20 font-serif leading-none select-none">&quot;</span>
                  <p className="text-xl text-brand-charcoal mb-6 font-light leading-relaxed relative z-10">
                    Our brand KNIGHTS deliver premium Egyptian cotton bed linen designed for enduring style and everyday luxury.
                  </p>
                  <p className="text-brand-charcoal/80 leading-relaxed font-light relative z-10">
                    Guided by innovation, ethical manufacturing, and global standards, we aim to build trusted partnerships while bringing thoughtfully crafted products to homes around the world.
                  </p>
                </div>
                
                <div className="pt-8 flex items-center">
                  <Button href="/collections" variant="primary" size="lg" className="shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    YARNS BEDDING COLLECTION
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" className="order-1 lg:order-1 relative h-[450px] md:h-[600px] w-full rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl group">
                <Image 
                  src="/collection-overview.png" 
                  alt="Discover Yarns Knights Collection" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/50 via-transparent to-white/10 opacity-60"></div>
                <div className="absolute inset-0 border-[3px] border-brand-gold/30 rounded-tl-[100px] rounded-br-[100px] m-6 pointer-events-none transition-all duration-700 ease-out group-hover:m-3 group-hover:border-brand-gold/60"></div>
              </AnimatedSection>
            </div>
          </div>
          
          {/* Decorative background element */}
          <div className="hidden md:block absolute -left-[10%] -bottom-[20%] w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none"></div>
        </section>

        {/* --- PRODUCT CAROUSEL --- */}
        <ProductCarousel />

        {/* --- ART OF PRODUCTION --- */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-brand-charcoal">
          {/* Infinite Marquee Background */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none flex z-0">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap"
            >
              <span className="text-[20rem] font-serif font-bold tracking-tighter text-white leading-none px-12">YARNS LANKA MANUFACTURING </span>
              <span className="text-[20rem] font-serif font-bold tracking-tighter text-white leading-none px-12">YARNS LANKA MANUFACTURING </span>
            </motion.div>
          </div>
          
          {/* Subtle Grid Pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_60%,transparent_100%)] z-0 pointer-events-none"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                 {/* Left Column / Title */}
                 <div className="lg:col-span-5 flex flex-col items-start">
                   <AnimatedSection direction="left" className="sticky top-32">
                     <motion.div 
                       initial={{ scale: 0, rotate: -45 }}
                       whileInView={{ scale: 1, rotate: 0 }}
                       transition={{ duration: 0.7, type: "spring", stiffness: 200, delay: 0.1 }}
                       viewport={{ once: true }}
                       className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-8 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                     >
                       <Factory size={28} strokeWidth={1.5} />
                     </motion.div>
                     
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1]">
                       ART OF <br/>
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark italic">PRODUCTION</span>
                     </h2>
                     
                     <div className="w-12 h-[2px] bg-brand-gold mt-8"></div>
                   </AnimatedSection>
                 </div>
                 
                 {/* Right Column / Content */}
                 <div className="lg:col-span-7 lg:pl-10 lg:border-l border-white/10 lg:py-6">
                   <AnimatedSection direction="up" delay={0.2} className="space-y-12">
                     <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-light leading-snug">
                       Our state-of-the-art production facilities in Sri Lanka form the backbone of our commitment to quality and excellence.
                     </p>
                     
                     <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent"></div>
                     
                     <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                       Designed for efficient large-scale production, our operations combine advanced technology with skilled craftsmanship. By managing the entire production cycle in-house, we retain full control over every stage of the process—ensuring precision, reliability, and products that meet our rigorous quality benchmarks before reaching customers worldwide.
                     </p>
                     
                     <div className="pt-4">
                       <Button href="/about" variant="primary" size="lg" className="min-w-[200px] shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_35px_rgba(212,175,55,0.3)]">
                         WHAT WE DO
                       </Button>
                     </div>
                   </AnimatedSection>
                 </div>
              </div>
              
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
