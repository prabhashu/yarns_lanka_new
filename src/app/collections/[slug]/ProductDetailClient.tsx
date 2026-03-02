"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { 
  type Product, 
  features, 
  careInstructions, 
  colors 
} from "@/lib/products";
import { ChevronDown, ArrowLeft, Ruler, Sparkles, Droplets } from "lucide-react";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedTc, setSelectedTc] = useState("300");
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [isCareOpen, setIsCareOpen] = useState(false);

  return (
    <>
      <Header />
      
      <main className="w-full bg-brand-black min-h-screen pt-[120px] pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Back Link */}
          <Link href="/collections" className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-brand-grey-medium hover:text-brand-gold transition-colors duration-300 mb-12">
            <ArrowLeft size={16} /> Back to Collections
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Gallery Section - Sticky left */}
            <AnimatedSection direction="right" className="lg:col-span-6 lg:sticky lg:top-[120px]">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-brand-charcoal border border-white/5 group">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(5,5,5,0.4)] pointer-events-none"></div>
              </div>
              
              <div className="flex gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer border-2 border-brand-gold">
                  <Image src={product.image} alt="Thumbnail 1" fill className="object-cover" />
                </div>
                <div className="relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-brand-gold/50 transition-colors">
                  <Image src={product.image} alt="Thumbnail 2" fill className="object-cover opacity-70 hover:opacity-100" />
                </div>
                <div className="relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-brand-gold/50 transition-colors">
                  <Image src={product.image} alt="Thumbnail 3" fill className="object-cover opacity-70 hover:opacity-100" />
                </div>
              </div>
            </AnimatedSection>

            {/* Content Section - Right */}
            <AnimatedSection direction="left" className="lg:col-span-6">
              
              {/* Product Header */}
              <div className="mb-10">
                <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold block mb-4">
                  KNIGHTS by Yarns Lanka
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl text-white mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="font-serif italic text-xl text-brand-grey-light">Wholesale inquiry</p>
              </div>

              {/* Selectors Block */}
              <div className="glass-panel rounded-2xl p-8 mb-10">
                
                {/* Thread Count Selector */}
                <div className="mb-8">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-white">Thread Count</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {["300", "400", "600"].map((tc) => (
                      <button 
                        key={tc}
                        onClick={() => setSelectedTc(tc)}
                        className={`flex flex-col items-center gap-1 border rounded-xl py-3 px-2 transition-all duration-300 ${
                          selectedTc === tc 
                            ? 'border-brand-gold bg-brand-gold/10 shadow-[0_0_15px_rgba(212,175,55,0.15)]' 
                            : 'border-white/10 hover:border-brand-gold/50 hover:bg-white/5'
                        }`}
                      >
                        <span className={`font-sans font-bold ${selectedTc === tc ? 'text-brand-gold' : 'text-white'}`}>
                          {tc} TC
                        </span>
                        <span className="text-xs text-brand-grey-medium">
                          {tc === "300" ? "Standard" : tc === "400" ? "Classic" : "Signature"}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selector */}
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-white">Color</span>
                    <span className="text-sm font-serif italic text-brand-grey-medium">{selectedColor}</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {colors.map((color) => (
                      <button 
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center p-[2px] ${
                          selectedColor === color.name 
                            ? 'border-brand-gold translate-y-[-2px] shadow-[0_4px_10px_rgba(212,175,55,0.3)]' 
                            : 'border-transparent hover:border-white/30 hover:scale-105'
                        }`}
                        aria-label={`Select ${color.name} color`}
                      >
                        <span 
                          className="w-full h-full rounded-full shadow-inner border border-black/10" 
                          style={{ backgroundColor: color.hex }}
                        ></span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mb-12 pb-12 border-b border-white/10">
                <Button href="/contact" variant="primary" className="w-full mb-6">
                  Request Wholesale Quote
                </Button>
                <div className="flex justify-center gap-8 text-brand-grey-light text-sm font-sans tracking-wide">
                  <span className="flex items-center gap-2"><Sparkles className="text-brand-gold" size={16} /> ISO 9001:2015</span>
                  <span className="flex items-center gap-2"><Droplets className="text-brand-gold" size={16} /> Organic Cotton</span>
                </div>
              </div>

              {/* Accordion / Details */}
              <div className="space-y-12">
                
                {/* Description Text */}
                <p className="text-lg leading-relaxed text-brand-grey-light font-light">
                  {product.description}
                </p>
                
                {/* Features List */}
                <div>
                  <h4 className="font-sans text-sm tracking-widest uppercase text-white mb-6 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-brand-gold"></span> Features
                  </h4>
                  <ul className="space-y-3">
                    {features.map((feature, idx) => (
                      <li key={idx} className="relative pl-6 text-brand-grey-medium leading-relaxed">
                        <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Size Guide Table */}
                <div>
                  <h4 className="font-sans text-sm tracking-widest uppercase text-white mb-4 flex items-center gap-3">
                    <Ruler className="text-brand-gold" size={18} /> Size Guide (Australian Market)
                  </h4>
                  <p className="text-xs text-brand-grey-dark font-serif italic mb-6">* Sizes can be customized upon request.</p>
                  
                  <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 border-b border-white/10 font-sans tracking-widest text-brand-gold uppercase text-xs">
                        <tr>
                          <th className="p-5 font-semibold">Size</th>
                          <th className="p-5 font-semibold">Dimensions {product.slug === 'bed-linen-set' ? '(Included)' : '(cm)'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-brand-grey-light">
                        {product.sizes.map((size) => (
                          <tr key={size.name} className="hover:bg-white/5 transition-colors">
                            <td className="p-5">{size.name}</td>
                            <td className="p-5">{size.dimensions}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Care Instructions Accordion */}
                <div className="border-t border-b border-white/10">
                  <button 
                    className="w-full flex justify-between items-center py-6 font-sans text-sm uppercase tracking-widest font-semibold text-white group"
                    onClick={() => setIsCareOpen(!isCareOpen)}
                    aria-expanded={isCareOpen}
                  >
                    <span className="group-hover:text-brand-gold transition-colors">Care Instructions</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-brand-gold transition-transform duration-300 ${isCareOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isCareOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="pb-8 space-y-3">
                          {careInstructions.map((instruction, idx) => (
                            <li key={idx} className="text-brand-grey-medium border-b border-white/5 pb-3 last:border-0 last:pb-0 text-sm">
                              {instruction}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </AnimatedSection>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
