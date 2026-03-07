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
      
      <main className="w-full bg-brand-black min-h-screen">
        {/* --- PAGE HERO --- */}
        <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="https://i.pinimg.com/1200x/b5/bc/1d/b5bc1d97b25c0ba47db696d9975ffb40.jpg" 
              alt="Egyptian Cotton Bedding Collection"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black"></div>
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-xl mb-6">Signature Collections</h1>
              <div className="h-[2px] w-16 bg-brand-gold mx-auto mb-8 opacity-80"></div>
              <p className="text-lg md:text-xl text-brand-grey-light font-light max-w-2xl mx-auto">
                Discover our luxurious Egyptian cotton bedding, featuring high-quality fabric that is soft, durable, and perfect for a restful night's sleep.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- PRODUCTS GRID --- */}
        <section className="section-padding container mx-auto px-6 relative -mt-10 z-20">
          <SectionTitle 
            subtitle="Shop The Range"
            title="Individual & Set Options" 
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-16">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          {/* Featured Info Card */}
          <AnimatedSection delay={0.6} direction="up" className="mt-20">
            <div className="relative overflow-hidden rounded-3xl border border-brand-gold/30 bg-gradient-to-br from-brand-charcoal to-brand-black p-1">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10 p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center">
                <Sparkles className="text-brand-gold mb-6" size={32} />
                <h3 className="heading-md mb-6">The Complete Experience</h3>
                <p className="text-lg text-brand-grey-light mb-10 font-light max-w-2xl mx-auto">
                  The Yarns LK collection includes a comprehensive bedding range. The complete set features 1 fitted sheet, 1 flat sheet, 1 duvet cover, and 2 standard pillowcases for ultimate coordination.
                </p>
                <Link href="/collections/bed-linen-set" className="inline-flex items-center justify-center px-10 py-4 border border-brand-gold text-brand-gold font-sans text-sm uppercase tracking-[0.15em] font-medium hover:bg-brand-gold hover:text-black transition-all duration-300 group shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  Shop The Set
                  <span className="absolute inset-0 w-full h-full -ml-[100%] transition-all duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:ml-[100%] pointer-events-none" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
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
      className="group flex flex-col h-full bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-brand-gold/40 transition-all duration-500 shadow-xl"
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
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-black/30 backdrop-blur-[2px]">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-white border border-white px-6 py-3 backdrop-blur-md bg-black/20 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
              View Details
            </span>
          </div>
        </Link>
      </div>
      
      <div className="p-8 pb-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/40">
        <Link href={`/collections/${product.slug}`} className="outline-none">
          <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
            {product.shortName}
          </h3>
          <p className="text-brand-grey-medium text-sm leading-relaxed flex-grow">
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
                  : 'border-white/20 hover:border-white/50'
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
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
          <Link href={`/collections/${product.slug}`} className="font-sans text-xs uppercase tracking-widest text-brand-gold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300 outline-none">
            Explore <ArrowRight size={14} />
          </Link>
          <span className="text-brand-grey-dark"><Sparkles size={14}/></span>
        </div>
      </div>
    </AnimatedSection>
  );
}
