"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { 
  Palette, 
  Users, 
  Globe2, 
  Shield, 
  Lightbulb
} from "lucide-react";

export default function About() {
  return (
    <>
      <Header />
      
      <main className="w-full bg-brand-black overflow-hidden relative">
        {/* --- PAGE HERO --- */}
        <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image 
              src="https://i.pinimg.com/1200x/11/2e/b1/112eb1747bdfbf0a62cc3ae49371dee1.jpg" 
              alt="Yarns Lanka manufacturing facility"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Dark Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-black/80 z-10"></div>
          </div>
          
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="heading-xl mb-6">Our Story</h1>
              <div className="h-[2px] w-16 bg-brand-gold mx-auto mb-8 opacity-80"></div>
              <p className="text-xl md:text-2xl text-brand-gold-light font-serif italic max-w-2xl mx-auto px-4">
                Building a future where timeless textiles bring joy, comfort, and sustainability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- WHO WE ARE (Dark Split Grid) --- */}
        <section className="section-padding container mx-auto px-6 relative z-20 -mt-10 md:-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center glass-dark rounded-3xl p-6 md:p-8 lg:p-16 shadow-2xl border border-white/5">
            <AnimatedSection direction="right" className="space-y-6">
              <SectionTitle 
                subtitle="The Company"
                title="Who We Are" 
              />
              <p className="text-xl text-brand-cream font-serif italic leading-relaxed">
                <strong className="font-sans font-normal not-italic text-brand-gold">Yarns Lanka (Pvt) Ltd</strong> is a fabrics and textiles company committed to setting industry benchmarks in sustainable and ethical manufacturing.
              </p>
              <p className="text-brand-grey-medium leading-relaxed">
                Built on strong partnerships, we bring together technology, responsibility, and craftsmanship under one organization. We are focused on long-term value creation, trust, and thoughtful growth across international markets.
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="left" className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
              <Image 
                src="/hero-bedroom.png" 
                alt="Luxury bedding by Yarns Lanka" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(5,5,5,0.8)] pointer-events-none"></div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- WHAT WE DO (Light/Cream Split) --- */}
        <section className="section-padding bg-brand-cream text-brand-black relative mt-20 md:mt-32">
          {/* Top curve detail */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -mt-px">
            <svg className="relative block w-[calc(110%+1.3px)] h-[80px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-brand-black"></path>
            </svg>
          </div>

          <div className="container mx-auto px-6 mt-10 md:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center lg:flex-row-reverse">
              <AnimatedSection direction="left" className="order-2 lg:order-1 relative h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image 
                  src="/product-sheets.png" 
                  alt="Close up of fabric weaving" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </AnimatedSection>

              <AnimatedSection direction="right" className="order-1 lg:order-2 space-y-6">
                <SectionTitle 
                  subtitle="Our Expertise"
                  title="What We Do" 
                  light
                />
                <p className="text-xl text-brand-charcoal font-serif italic leading-relaxed">
                  We design and manufacture a refined bed linen collection under our flagship brand <strong>KNIGHTS</strong>.
                </p>
                <div className="space-y-4 text-brand-grey-dark leading-relaxed">
                  <p>
                    Our collection balances designer sensibility with enduring simplicity — styles created to last beyond trends. Through Knights, we deliver premium bedding while sourcing quality raw materials and adding value through skilled local expertise.
                  </p>
                  <p>
                    Our scalable production capacity serves wholesale buyers, designers, and international partners with precision.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* --- MISSION & VISION (Cards) --- */}
        <section className="section-padding container mx-auto px-6">
          <SectionTitle 
            subtitle="Our Purpose"
            title="Mission & Vision"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mt-10 md:mt-16 max-w-5xl mx-auto">
            <AnimatedSection direction="up" delay={0.1} className="glass-panel p-8 md:p-10 lg:p-14 rounded-2xl relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="font-sans text-xl tracking-[0.2em] uppercase text-white mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand-gold"></span>
                Our Mission
              </h3>
              <p className="text-brand-grey-light text-lg leading-relaxed font-light">
                To place design, people, and the planet at the heart of everything we do, creating timeless fabrics that inspire freedom of expression, empower people, and shape a sustainable future.
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.3} className="glass-panel p-8 md:p-10 lg:p-14 rounded-2xl relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="font-sans text-xl tracking-[0.2em] uppercase text-white mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand-gold"></span>
                Our Vision
              </h3>
              <p className="text-brand-grey-light text-lg leading-relaxed font-light">
                We envision a future where timeless textiles bring joy and comfort, where we thrive together, and the planet is protected for generations to come.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* --- VALUES (Bento Grid) --- */}
        <section className="section-padding bg-black/40 border-t border-white/5 relative">
          <div className="container mx-auto px-6">
            <SectionTitle 
              subtitle="Core Principles"
              title="Our Values" 
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16 max-w-6xl mx-auto">
              
              <AnimatedSection delay={0.1} className="glass-panel p-6 md:p-8 rounded-2xl group hover:border-brand-gold/40 transition-colors duration-500 lg:col-span-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-brand-gold/20 transition-all duration-700"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                  <div className="w-16 h-16 rounded-2xl bg-brand-charcoal border border-white/10 flex items-center justify-center text-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.15)] flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Palette size={32} />
                  </div>
                  <div>
                    <h4 className="font-sans text-lg uppercase tracking-widest text-white mb-3">1. Creativity</h4>
                    <p className="text-brand-grey-medium leading-relaxed max-w-lg">We are artists with a disciplined eye, and we lose fear because art is freedom.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="glass-panel p-6 md:p-8 rounded-2xl group hover:border-brand-gold/40 transition-colors duration-500 relative overflow-hidden">
                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-[50px] translate-y-1/2 translate-x-1/4 group-hover:bg-brand-gold/20 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-charcoal border border-white/10 flex items-center justify-center text-brand-gold mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:scale-110 transition-transform duration-500">
                    <Users size={28} />
                  </div>
                  <h4 className="font-sans text-base uppercase tracking-widest text-white mb-3">2. People First</h4>
                  <p className="text-brand-grey-medium text-sm leading-relaxed">We always strive to live by values, because it truly makes us human beings.</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="glass-panel p-6 md:p-8 rounded-2xl group hover:border-brand-gold/40 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-[50px] -translate-y-1/2 -translate-x-1/4 group-hover:bg-brand-gold/20 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-charcoal border border-white/10 flex items-center justify-center text-brand-gold mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:scale-110 transition-transform duration-500">
                    <Globe2 size={28} />
                  </div>
                  <h4 className="font-sans text-base uppercase tracking-widest text-white mb-3">3. Love Planet</h4>
                  <p className="text-brand-grey-medium text-sm leading-relaxed">We protect the planet, because it provides enough to satisfy everyone&apos;s need.</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4} className="glass-panel p-6 md:p-8 rounded-2xl group hover:border-brand-gold/40 transition-colors duration-500 relative overflow-hidden">
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/4 group-hover:bg-brand-gold/20 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-charcoal border border-white/10 flex items-center justify-center text-brand-gold mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:scale-110 transition-transform duration-500">
                    <Shield size={28} />
                  </div>
                  <h4 className="font-sans text-base uppercase tracking-widest text-white mb-3">4. Honesty</h4>
                  <p className="text-brand-grey-medium text-sm leading-relaxed">We act with honesty and integrity, because it is the highest form of intimacy.</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5} className="glass-panel p-6 md:p-8 rounded-2xl group hover:border-brand-gold/40 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-gold/5 rounded-full blur-[60px] group-hover:bg-brand-gold/15 transition-all duration-700 pointer-events-none"></div>
                <div className="relative z-10 shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-brand-charcoal border border-white/10 flex items-center justify-center text-brand-gold mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:scale-110 transition-transform duration-500">
                    <Lightbulb size={28} />
                  </div>
                  <h4 className="font-sans text-base uppercase tracking-widest text-white mb-3">5. Innovation</h4>
                  <p className="text-brand-grey-medium text-sm leading-relaxed">We have a passion for innovation because there&apos;s always a way to do it better.</p>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
