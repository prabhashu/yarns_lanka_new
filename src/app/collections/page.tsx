"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { products, colors } from "@/lib/products";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Collections() {
  return (
    <>
      <Header />
      
      <main className="w-full bg-brand-cream min-h-screen relative">
        {/* --- PAGE HERO --- */}
        <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image 
              src="https://i.pinimg.com/1200x/b5/bc/1d/b5bc1d97b25c0ba47db696d9975ffb40.jpg" 
              alt="Knights Egyptian Cotton Bedding"
              fill
              priority
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
              <h1 className="heading-xl mb-6 text-white drop-shadow-md">The Collection</h1>
              <div className="h-[2px] w-16 bg-brand-gold mx-auto mb-8 opacity-80"></div>
              <p className="text-xl md:text-2xl text-brand-gold-dark font-serif italic max-w-2xl mx-auto px-4">
                Tailored for the discerning taste, where innovation meets the timeless legacy of 100% organic fibers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- PRODUCTS GRID --- */}
        <section className="section-padding bg-brand-cream container mx-auto px-6 relative z-20">
          <div className="mb-20 text-center">
             <SectionTitle 
              subtitle="Individual & Set Options"
              title="Shop The Range"
              centered
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-16">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          {/* Featured Info Card */}
          <AnimatedSection delay={0.6} direction="up" className="mt-20">
            <div className="relative overflow-hidden rounded-3xl border border-brand-accent-sage/30 bg-white shadow-xl p-1">
              <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center">
                <Sparkles className="text-brand-gold mb-6" size={32} />
                <h3 className="heading-md mb-6 text-brand-black">The Complete Experience</h3>
                <p className="text-lg text-brand-charcoal/80 mb-10 font-light max-w-2xl mx-auto">
                  The Yarns LK collection includes a comprehensive bedding range. The complete set features 1 fitted sheet, 1 flat sheet, 1 duvet cover, and 2 standard pillowcases for ultimate coordination.
                </p>
                <Link href="/collections/bed-linen-set" className="inline-flex items-center justify-center px-10 py-4 border border-brand-gold text-brand-gold font-sans text-sm uppercase tracking-[0.15em] font-medium hover:bg-brand-gold hover:text-white transition-all duration-300 group shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  Shop The Set
                  <span className="absolute inset-0 w-full h-full -ml-[100%] transition-all duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:ml-[100%] pointer-events-none" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* --- BRAND STORY / VISION SECTION --- */}
        <section className="py-24 bg-white relative overflow-hidden z-20 border-t border-black/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              
              <div className="lg:col-span-7">
                <AnimatedSection direction="right">
                  <SectionTitle 
                    subtitle="The Vision"
                    title="Knights | Egyptian Cotton Bedding"
                  />
                  <div className="space-y-6 text-lg text-brand-charcoal/70 font-light leading-relaxed max-w-2xl mt-8">
                    <p>
                      Discover our luxurious Egyptian cotton bedding collection of home interior design trends for 2026 that inspire and enhance your living spaces, tailored specifically for the discerning taste.
                    </p>
                    <p>
                      We use <span className="text-brand-black font-medium">100% organic cotton fabrics</span>, widely known as Egyptian cotton, renowned for their long-staple fibers that deliver exceptional softness, durability, and breathability. 
                    </p>
                    <p>
                      Currently serving as a vendor to the USA, we continually refine our products to ensure they remain innovative, sustainable, and distinctive. Offered in designer-inspired solid colours and thread counts ranging from 300 to 600, our bed linen combines refined aesthetics with enduring quality.
                    </p>
                    <p>
                      The Knights BeddinG collection includes a complete bedding range of fitted sheets, flat sheets, duvet covers, and pillowcases. Perfect for a restful night&apos;s sleep.
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-5">
                <AnimatedSection direction="left" delay={0.3}>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/5">
                    <Image 
                      src="https://i.pinimg.com/1200x/ca/f2/84/caf284f7402f5328e3c21ddacab64f75.jpg"
                      alt="Knights Bedding Quality"
                      fill
                      className="object-cover transition-transform duration-[3s] hover:scale-110"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* --- COLLECTION GRADES --- */}
        <section className="py-24 bg-brand-cream/50 relative z-20 border-t border-black/5">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <SectionTitle 
                subtitle="The Hierarchy of Comfort"
                title="The Grades of Luxury"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "STANDARD COLLECTION",
                  desc: "Lightweight and breathable, this collection offers a crisp, fresh feel that is ideal for everyday comfort. Its balanced weave ensures durability while maintaining a smooth and inviting texture.",
                  tc: "300 THREAD COUNT",
                  accent: "bg-brand-accent-sage/20"
                },
                {
                  title: "CLASSIC COLLECTION",
                  desc: "Known for its enhanced softness, the Classic Collection provides a smoother and more refined finish, offering a perfect balance between everyday practicality and elevated comfort.",
                  tc: "400 THREAD COUNT",
                  accent: "bg-brand-gold/10"
                },
                {
                  title: "SIGNATURE COLLECTION",
                  desc: "Our most luxurious offering, the Signature Collection features a rich, silky texture and superior density, delivering exceptional smoothness and an indulgent sleeping experience.",
                  tc: "600 THREAD COUNT",
                  accent: "bg-brand-black/5"
                }
              ].map((item, idx) => (
                <AnimatedSection 
                  key={idx} 
                  delay={idx * 0.1} 
                  direction="up"
                  className="h-full"
                >
                  <div className="bg-white h-full p-10 lg:p-12 rounded-[2.5rem] border border-black/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group relative overflow-hidden">
                    {/* Background Glow */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${item.accent} rounded-full blur-[40px] opacity-20 group-hover:opacity-100 transition-opacity duration-700 -mr-10 -mt-10`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-10">
                        <span className="text-brand-gold font-sans text-[10px] font-bold tracking-[0.3em] uppercase">{item.tc}</span>
                        <div className="w-10 h-10 rounded-full border border-brand-gold/10 flex items-center justify-center text-brand-gold/30 group-hover:text-brand-gold group-hover:border-brand-gold/30 transition-all duration-500">
                           <Sparkles size={18} />
                        </div>
                      </div>
                      
                      <h4 className="font-serif text-2xl lg:text-3xl text-brand-black mb-8 leading-snug group-hover:text-brand-gold transition-colors duration-500">
                        {item.title}
                      </h4>
                      
                      <div className="w-12 h-[1px] bg-brand-gold/30 mb-8 group-hover:w-20 transition-all duration-500"></div>
                      
                      <p className="text-brand-charcoal/70 font-light leading-relaxed text-base md:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

function ProductCard({ product, index }: { product: any, index: number }) {
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const currentImage = product.colorImages?.[selectedColor] || product.image;

  // Render colors that are actually defined
  const availableColors = product.colorImages ? colors.filter(c => product.colorImages?.[c.name]) : colors.slice(0, 1);
  if (availableColors.length === 0) availableColors.push(colors[0]);

  return (
    <AnimatedSection 
      delay={index * 0.15} 
      direction="up" 
      className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-brand-gold/40 transition-all duration-500 shadow-xl"
    >
      <div className="relative h-[320px] overflow-hidden w-full">
        <Link href={`/collections/${product.slug}`} className="block w-full h-full outline-none">
          <Image 
            src={currentImage} 
            alt={product.name} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/30 backdrop-blur-[2px]">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-brand-black border border-brand-black px-6 py-3 backdrop-blur-md bg-white/80 transition-colors duration-300 group-hover:bg-brand-black group-hover:text-white">
              View Details
            </span>
          </div>
        </Link>
      </div>
      
      <div className="p-8 pb-6 flex flex-col flex-grow bg-white">
        <Link href={`/collections/${product.slug}`} className="outline-none">
          <h3 className="font-serif text-2xl text-brand-black mb-3 group-hover:text-brand-gold transition-colors duration-300">
            {product.shortName}
          </h3>
          <p className="text-brand-charcoal/80 text-sm leading-relaxed flex-grow">
            {product.description.substring(0, 90)}...
          </p>
        </Link>

        {/* Color Change Option */}
        <div className="mt-6 flex items-center gap-3">
          {availableColors.map((color) => (
            <button
              key={color.name}
              onClick={(e) => {
                e.preventDefault();
                setSelectedColor(color.name);
              }}
              className={`w-7 h-7 rounded-full border transition-all duration-300 flex items-center justify-center p-[2px] ${
                selectedColor === color.name 
                  ? 'border-brand-gold translate-y-[-2px] shadow-[0_2px_8px_rgba(212,175,55,0.4)] scale-110' 
                  : 'border-black/10 hover:border-black/30'
              }`}
              title={color.name}
            >
              <span 
                className="w-full h-full rounded-full shadow-inner border border-black/20" 
                style={{ backgroundColor: color.hex }}
              ></span>
            </button>
          ))}
        </div>
        
        {/* Fake Footer Action */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/10">
          <Link href={`/collections/${product.slug}`} className="font-sans text-xs uppercase tracking-widest text-brand-gold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300 outline-none">
            Explore <ArrowRight size={14} />
          </Link>
          <span className="text-brand-accent-sage/60"><Sparkles size={14}/></span>
        </div>
      </div>
    </AnimatedSection>
  );
}
