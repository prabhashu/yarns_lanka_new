"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { 
  Users, 
  Globe2, 
  Shield, 
  Lightbulb,
  Factory,
  Heart,
  Sparkles
} from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      
      <main ref={containerRef} className="w-full bg-brand-cream overflow-hidden relative">
        {/* --- PAGE HERO --- */}
        <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image 
              src="https://i.pinimg.com/1200x/11/2e/b1/112eb1747bdfbf0a62cc3ae49371dee1.jpg" 
              alt="Yarns Lanka manufacturing facility"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/20 z-10"></div>
            <div className="absolute inset-0 bg-brand-black/20 z-10"></div>
          </div>
          
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-serif font-light uppercase text-white leading-[1.2] tracking-widest mb-6 drop-shadow-md">Our Story</h1>
              <div className="h-[2px] w-16 bg-brand-gold mx-auto mb-8 opacity-80"></div>
              <p className="text-xl md:text-2xl text-brand-gold-dark font-serif italic max-w-2xl mx-auto px-4">
                Building a future where timeless textiles bring joy, comfort, and sustainability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- WHO WE ARE (Parallax Scroll) --- */}
        <section className="relative bg-white py-24 z-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <AnimatedSection>
                <SectionTitle 
                  subtitle="The Company"
                  title="Who We Are"
                />
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.2} className="mt-8 md:mt-0 max-w-xl">
                <p className="text-xl text-brand-charcoal/80 font-light leading-relaxed font-serif italic border-l-2 border-brand-gold pl-6">
                  <strong className="text-brand-gold-dark not-italic font-sans">Yarns Lanka</strong> is a distinguished name in the Home Textiles industry, combining large-scale mastery with refined quality.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">
              <AnimatedSection direction="right" className="space-y-12">
                <div>
                  <h3 className="text-2xl font-serif text-brand-black mb-4 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-brand-gold"></span> WE CHANGE THE GAME
                  </h3>
                  <p className="text-brand-charcoal/70 text-base leading-relaxed font-light mb-6">
                    Nestled in the Pearl of the Indian Ocean Sri Lanka, Yarns Lanka is a distinguished name in the Home Textiles industry. Guided by foresight, integrity, and enduring partnerships, we combine large-scale mastery with refined quality.
                  </p>
                  <p className="text-brand-charcoal/70 text-base leading-relaxed font-light">
                    Now stepping confidently into international markets, we bring refined home textiles that embody elegance, reliability, and timeless innovation.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif text-brand-black mb-4 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-brand-gold"></span> WE ARE IN THIS TOGETHER
                  </h3>
                  <p className="text-brand-charcoal/70 text-base leading-relaxed font-light">
                    Our atmosphere reflects a clear identity while staying true to our core values, which are deeply rooted in our culture. As the brand grows, so does our team, giving people the freedom to express themselves and strive to create a positive impact that extends beyond business. We believe in putting people first—it is our touchstone, our point of reference, and our defining identity.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" className="space-y-12">
                <div className="relative h-[250px] md:h-[350px] rounded-3xl overflow-hidden group shadow-xl">
                  <Image 
                    src="/hero-bedroom.png" 
                    alt="Luxury bedding by Yarns Lanka" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h3 className="text-xl font-serif text-brand-black mb-4">Commitment to Excellence</h3>
                    <p className="text-brand-charcoal/70 text-sm leading-relaxed font-light">
                      Excellence guides everything we do. Through disciplined processes, ethical practices, and unwavering attention to detail, we deliver enduring quality, inspire trust, and set new benchmarks in every endeavor.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-brand-black mb-4">Attracted to Positivity</h3>
                    <p className="text-brand-charcoal/70 text-sm leading-relaxed font-light">
                      We embrace positivity to make a meaningful impact. A change of perspective is all it takes to see the light, unlock new opportunities, and create solutions that transform challenges into lasting value.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* --- FORGING NEW HORIZONS (Cinematic Pan) --- */}
        <section className="relative py-24 md:py-32 overflow-hidden rounded-t-[40px] md:rounded-t-[60px] -mt-8 mx-0 md:mx-4 z-30 bg-brand-cream border border-black/5">
          <div className="absolute inset-0 z-0">
             <Image 
                src="/collection-overview.png" 
                alt="Knights Bedding Layout" 
                fill
                sizes="100vw"
                className="object-cover -scale-x-100 opacity-[0.15] mix-blend-multiply" 
              />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <AnimatedSection direction="up">
                <span className="text-brand-gold font-sans tracking-[0.3em] text-sm md:text-base uppercase mb-6 block drop-shadow-sm">Evolution</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-black leading-tight mb-12 drop-shadow-xl">
                  FORGING <span className="italic text-brand-gold">NEW</span><br/> HORIZONS
                </h2>
                
                <div className="bg-white/90 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-[30px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-white space-y-6 relative group">
                  <p className="text-brand-charcoal md:text-lg font-light leading-relaxed relative z-10">
                    With KNIGHTS, we set out to redefine comfort and style while nurturing our communities and caring for the planet. Every step of our process is guided by responsibility, innovation, and a commitment to bridging gaps in quality and sustainability.
                  </p>
                  <p className="text-brand-charcoal md:text-lg font-light leading-relaxed relative z-10">
                    Starting with sourcing the finest materials in Sri Lanka, we combine craftsmanship and technical expertise to create bedding that elevates everyday living. KNIGHTS reflects our vision of a seamless ecosystem where design, ethics, and quality come together to shape timeless, enduring products.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* --- WHAT WE DO (Staggered Floating Cards) --- */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="hidden md:block absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="hidden md:block absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent-sage/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-20">
              <AnimatedSection direction="up">
                 <SectionTitle 
                  subtitle="Capabilities"
                  title="What We Do"
                />
                <div className="max-w-4xl border-l-4 border-brand-gold pl-6 md:pl-10 mt-8">
                  <p className="text-2xl md:text-3xl text-brand-charcoal font-serif italic mb-6 leading-tight">
                    &quot;We are a company with humanity at its core.&quot;
                  </p>
                  <p className="text-base md:text-lg text-brand-charcoal/70 font-light leading-relaxed">
                    From environmentally responsible products to ethical workplace practices, we strive to protect the planet while building a better tomorrow. Our teams work collaboratively to solve customer challenges—addressing logistics, customization, and operational efficiency—while continuously exploring opportunities to expand a diverse, future-ready brand portfolio.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-24">
              <AnimatedSection direction="up" delay={0.1} className="h-full">
                <div className="bg-brand-cream/50 h-full p-8 md:p-10 rounded-[30px] hover:bg-white hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-brand-black/5 hover:border-brand-gold/30 group">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-brand-black/5 flex items-center justify-center text-brand-gold mb-8 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Heart size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif text-brand-black mb-4">Designed Around Living</h4>
                  <p className="text-brand-charcoal/70 font-light leading-relaxed text-base">
                    Homes are living spaces that evolve with people and lifestyles. Our textiles are created to complement this evolution—bringing together comfort, functionality, and timeless aesthetics. Each fabric is thoughtfully designed to enrich everyday living while responding to global trends and changing consumer expectations.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.2} className="h-full md:translate-y-12">
                <div className="bg-brand-cream/50 h-full p-8 md:p-10 rounded-[30px] hover:bg-white hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-brand-black/5 hover:border-brand-gold/30 group">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-brand-black/5 flex items-center justify-center text-brand-gold mb-8 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Lightbulb size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif text-brand-black mb-4">Shaping Tomorrow&apos;s Textiles</h4>
                  <p className="text-brand-charcoal/70 font-light leading-relaxed text-base">
                   We believe progress is driven by curiosity and collaboration. By exploring emerging yarn technologies, sustainable materials, and new design possibilities, we continue to push the boundaries of home textiles. Our ambition is to shape fabrics that not only meet the needs of today, but anticipate the homes of tomorrow.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3} className="h-full md:translate-y-24">
                <div className="bg-brand-cream/50 h-full p-8 md:p-10 rounded-[30px] hover:bg-white hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-brand-black/5 hover:border-brand-gold/30 group">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-brand-black/5 flex items-center justify-center text-brand-gold mb-8 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Factory size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif text-brand-black mb-4">Technology</h4>
                  <p className="text-brand-charcoal/70 font-light leading-relaxed text-base">
                    Our products are processed in-house through the latest machinery within an ISO 9001:2015 certified facility. With a dedicated strong workforce, we deliver mass-produced yet finely crafted yarns, featuring neat stitching, high-quality finish, and unique colors that ensure enduring beauty and performance in every creation.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Spacer for staggered cards */}
            <div className="h-0 md:h-24"></div>
          </div>
        </section>

        {/* --- MISSION & VISION (Massive Typography) --- */}
        <section className="py-24 md:py-32 bg-brand-charcoal text-white relative overflow-hidden rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
          {/* Background Text */}
          <div className="absolute top-10 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
             <span className="text-[10rem] md:text-[15rem] font-serif font-bold whitespace-nowrap">PURPOSE PURPOSE</span>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <AnimatedSection direction="right">
                <h3 className="text-brand-gold font-sans text-xs md:text-sm tracking-[0.4em] uppercase mb-8 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-brand-gold"></span> MISSION
                </h3>
                <p className="text-2xl md:text-4xl font-serif leading-[1.3] text-white italic drop-shadow-lg">
                  &quot;To enrich lives and inspire better lifestyles through timeless home textiles, <span className="text-brand-gold not-italic">one home at a time.</span>&quot;
                </p>
              </AnimatedSection>
              
              <AnimatedSection direction="left" delay={0.2}>
                <h3 className="text-brand-gold font-sans text-xs md:text-sm tracking-[0.4em] uppercase mb-8 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-brand-gold"></span> VISION
                </h3>
                <p className="text-2xl md:text-4xl font-serif leading-[1.3] text-white italic drop-shadow-lg">
                  &quot;To be the leading home-textiles brand, inspiring better lifestyles worldwide through <span className="text-brand-gold not-italic">trend-evolving products</span> in every home.&quot;
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* --- VALUES (Dynamic Bento) --- */}
        <section className="py-24 bg-brand-cream border-t border-black/5 relative">
          <div className="container mx-auto px-6">
            <AnimatedSection>
               <SectionTitle 
                subtitle="Core Principles"
                title="Our Values" 
                centered
              />
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16 max-w-7xl mx-auto">
              
              <AnimatedSection delay={0.1} className="col-span-1 md:col-span-2 bg-white backdrop-blur-md border border-black/5 shadow-lg p-8 md:p-12 rounded-[30px] group hover:border-brand-gold/30 transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-md shrink-0">
                    <Sparkles size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-sans text-xl uppercase tracking-widest text-brand-black mb-4">1. Inspired Living</h4>
                    <p className="text-brand-charcoal/70 text-base leading-relaxed font-light">We inspire elevated living. By re-imagining the ordinary, we break conventional patterns to create thoughtful solutions that enrich lifestyles and promote better living worldwide.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="col-span-1 bg-white backdrop-blur-md border border-black/5 shadow-lg p-8 md:p-10 rounded-[30px] group hover:border-brand-gold/30 transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 shadow-md">
                    <Users size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-sans text-lg uppercase tracking-widest text-brand-black mb-4">2. People First</h4>
                    <p className="text-brand-charcoal/70 text-base leading-relaxed font-light">We place people at the heart of everything we do. Guided by strong values and integrity, we believe that honouring our principles defines us not only as a company, but as human beings.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="col-span-1 bg-white backdrop-blur-md border border-black/5 shadow-lg p-8 md:p-10 rounded-[30px] group hover:border-brand-gold/30 transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 shadow-md">
                    <Globe2 size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-sans text-lg uppercase tracking-widest text-brand-black mb-4">3. Love Planet</h4>
                    <p className="text-brand-charcoal/70 text-base leading-relaxed font-light">We are committed to safeguarding our planet, recognizing that it generously provides for all. By embracing sustainable practices and mindful stewardship, we ensure its resources are preserved.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4} className="col-span-1 bg-white backdrop-blur-md border border-black/5 shadow-lg p-8 md:p-10 rounded-[30px] group hover:border-brand-gold/30 transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 shadow-md">
                    <Shield size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-sans text-lg uppercase tracking-widest text-brand-black mb-4">4. Integrity</h4>
                    <p className="text-brand-charcoal/70 text-base leading-relaxed font-light">We uphold the utmost honesty and integrity, recognizing it as the supreme expression of trust and human connection. In every decision and interaction, we remain steadfast to these principles.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5} className="col-span-1 bg-white backdrop-blur-md border border-black/5 shadow-lg p-8 md:p-10 rounded-[30px] group hover:border-brand-gold/30 transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tl from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 shadow-md">
                    <Lightbulb size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-sans text-lg uppercase tracking-widest text-brand-black mb-4">5. Innovation</h4>
                    <p className="text-brand-charcoal/70 text-base leading-relaxed font-light">We are driven by a relentless passion for innovation, always seeking new ways to elevate excellence. Guided by creativity and vision, we continually explore opportunities to improve.</p>
                  </div>
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
