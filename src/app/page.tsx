"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/home/Hero";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { 
  ShieldCheck, 
  Globe2, 
  Leaf, 
  Sparkles,
  Droplets,
  Wind,
  ThermometerSun,
  Factory,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full bg-brand-black overflow-hidden relative">
        <Hero />

        {/* --- TRUST BANNER --- */}
        <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-dark rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
          >
            {/* Shimmer effect inside banner */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
                <Leaf className="text-brand-gold mb-4" size={32} strokeWidth={1.5} />
                <h3 className="text-white font-sans uppercase tracking-widest text-sm font-semibold mb-2">100% Organic</h3>
                <p className="text-brand-grey-medium text-sm">Finest Egyptian Cotton</p>
              </div>
              
              <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
                <ShieldCheck className="text-brand-gold mb-4" size={32} strokeWidth={1.5} />
                <h3 className="text-white font-sans uppercase tracking-widest text-sm font-semibold mb-2">ISO 9001:2015</h3>
                <p className="text-brand-grey-medium text-sm">Certified facility operations</p>
              </div>
              
              <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
                <Globe2 className="text-brand-gold mb-4" size={32} strokeWidth={1.5} />
                <h3 className="text-white font-sans uppercase tracking-widest text-sm font-semibold mb-2">Global Reach</h3>
                <p className="text-brand-grey-medium text-sm">Residential & Hospitality</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- BRAND INTRO --- */}
        <section className="section-padding container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <AnimatedSection direction="right" className="space-y-8">
              <SectionTitle 
                subtitle="The Parent Company"
                title="Yarns Lanka: A Legacy in Textiles"
              />
              <p className="text-lg text-brand-grey-light leading-relaxed font-light">
                <strong className="text-white font-normal">Yarns Lanka (Pvt) Ltd</strong> is a premier fabrics and textiles company committed to setting industry benchmarks in sustainable and ethical manufacturing.
              </p>
              <p className="text-brand-grey-medium leading-relaxed">
                By bringing together innovative technology, responsibility, and generations of craftsmanship under one organization, we create long-term value for our partners across international markets.
              </p>
              
              <div className="pt-8 border-t border-white/10 mt-8">
                <h4 className="font-serif text-2xl text-white mb-4 italic">Introducing KNIGHTS</h4>
                <p className="text-brand-grey-medium leading-relaxed mb-8">
                  Designed and manufactured exclusively by Yarns Lanka, KNIGHTS balances designer sensibility with enduring simplicity. It is our flagship bed linen collection created to last beyond trends.
                </p>
                <Button href="/about" variant="outline">
                  Our Story
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="relative h-[600px] w-full rounded-2xl overflow-hidden group">
              <Image 
                src="/product-sheets.png" 
                alt="Detailed fabric texture by Yarns Lanka" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent"></div>
              
              {/* Floating inner image */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-64 h-64 rounded-xl overflow-hidden border-4 border-brand-black shadow-2xl hidden md:block"
              >
                <Image 
                  src="/product-pillow.png" 
                  alt="Knights pillows" 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- COLLECTIONS GRID --- */}
        <section className="section-padding bg-brand-charcoal relative">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
          
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <SectionTitle 
                subtitle="The Knights Portfolio"
                title="Curated Thread Counts"
              />
              <Link href="/collections" className="group flex items-center gap-2 text-brand-gold font-sans uppercase tracking-widest text-sm font-semibold hover:text-white transition-colors duration-300">
                View All <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { tc: "300 TC", name: "Standard Collection", img: "/hero-bedroom.png", desc: "Classic, long-wearing and wonderfully soft with a subtle sateen sheen." },
                { tc: "400 TC", name: "Classic Collection", img: "/product-duvet.png", desc: "The perfect balance of crispness and silky softness for year-round comfort." },
                { tc: "600 TC", name: "Signature Collection", img: "/collection-overview.png", desc: "Ultra-premium, heavy drape luxury reminiscent of five-star hospitality." }
              ].map((col, index) => (
                <AnimatedSection 
                  key={col.tc} 
                  delay={index * 0.2} 
                  className="group relative h-[450px] rounded-xl overflow-hidden cursor-pointer"
                >
                  <Image src={col.img} alt={col.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Default Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="inline-block px-3 py-1 bg-brand-gold text-brand-black font-sans font-bold text-xs uppercase tracking-widest rounded-lg w-max mb-4">
                      {col.tc}
                    </span>
                    <h3 className="font-serif text-2xl text-white mb-3">{col.name}</h3>
                    
                    {/* Hover Reveal Text */}
                    <div className="overflow-hidden">
                      <p className="text-brand-grey-light text-sm line-clamp-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 h-0 group-hover:h-auto group-hover:mt-2">
                        {col.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Interactive Border */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-brand-gold/50 rounded-xl transition-colors duration-500 m-4"></div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- ADVANTAGES --- */}
        <section className="section-padding container mx-auto px-6">
          <SectionTitle 
            subtitle="The Knights Advantage"
            title="Why Choose Our Linens"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
            {[
              { icon: <Sparkles size={28}/>, title: "Long-Staple Fibers", desc: "Prevents pilling and fraying for superior, lasting softness." },
              { icon: <Factory size={28}/>, title: "Expert Craftsmanship", desc: "Sateen weave combining luxury gloss with robust durability." },
              { icon: <Wind size={28}/>, title: "Light & Airy", desc: "Feathery softness tailored for ultimate comfort." },
              { icon: <ThermometerSun size={28}/>, title: "Temperature Regulating", desc: "Keeps you cool in summer and cozy in winter." },
              { icon: <Leaf size={28}/>, title: "Eco-Friendly", desc: "Responsibly sourced materials protecting our planet." },
              { icon: <Droplets size={28}/>, title: "Allergy-Friendly", desc: "Naturally hypoallergenic and gentle on sensitive skin." }
            ].map((feature, idx) => (
              <AnimatedSection 
                key={idx} 
                delay={idx * 0.1} 
                className="glass-panel p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-gold/0 via-brand-gold/20 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-charcoal border border-white/10 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                    {feature.icon}
                  </div>
                  <h4 className="font-sans font-semibold uppercase tracking-wider text-sm text-white mb-3">{feature.title}</h4>
                  <p className="text-brand-grey-medium text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* --- B2B / MANUFACTURING --- */}
        <section className="relative py-32 overflow-hidden border-t border-white/10">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-brand-black"></div>
          <div className="absolute inset-[-50%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_50%)] bg-[length:100%_100%] animate-[spin_60s_linear_infinite] pointer-events-none"></div>

          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <AnimatedSection direction="up">
              <span className="inline-block p-4 rounded-3xl bg-brand-charcoal border border-brand-gold/30 text-brand-gold mb-8 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <Factory size={32} />
              </span>
              
              <h2 className="heading-lg mb-6">Wholesale & Manufacturing</h2>
              
              <p className="text-xl text-brand-grey-light mb-12 font-light">
                Yarns Lanka supports scalable production for wholesale buyers, interior designers, and hospitality partners globally. Let us bring your vision to life with precision manufacturing.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button href="/contact" variant="primary" size="lg">
                  Partner With Us
                </Button>
                <div className="flex items-center gap-3 text-brand-grey-medium font-sans text-sm tracking-wider uppercase">
                  <CheckCircle2 className="text-brand-gold" size={20} />
                  <span>Custom Sizing Available</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
