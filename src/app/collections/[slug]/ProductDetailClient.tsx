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
import { ChevronDown, ArrowLeft, Ruler, Sparkles, Droplets, X } from "lucide-react";

export default function ProductDetailClient({ product }: { product: Product }) {
  const availableColors = product.colorImages ? colors.filter(c => product.colorImages?.[c.name]) : colors.slice(0, 1);
  if (availableColors.length === 0) availableColors.push(colors[0]);

  const [selectedTc, setSelectedTc] = useState("300");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].name);
  const [selectedColor, setSelectedColor] = useState(availableColors[0].name);
  const [isCareOpen, setIsCareOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const currentImage = product.colorImages?.[selectedColor] || product.image;

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
                  src={currentImage} 
                  alt={product.name} 
                  fill 
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(5,5,5,0.4)] pointer-events-none"></div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {availableColors.map((color) => {
                  const isSelected = selectedColor === color.name;
                  const thumbSrc = product.colorImages?.[color.name] || product.image;
                  
                  return (
                    <div 
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer border-2 transition-colors duration-300 ${
                        isSelected 
                          ? 'border-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                          : 'border-transparent hover:border-brand-gold/50'
                      }`}
                    >
                      <Image 
                        src={thumbSrc} 
                        alt={`${product.name} - ${color.name}`} 
                        fill 
                        className={`object-cover transition-opacity duration-300 ${
                          isSelected ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                        }`} 
                      />
                    </div>
                  );
                })}
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

                {/* Size Selector and Guide Link */}
                <div className="mb-8 border-t border-white/5 pt-6">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-white">Size</span>
                    <button 
                      onClick={() => setIsSizeGuideOpen(true)} 
                      className="text-xs font-serif italic text-brand-grey-medium underline hover:text-brand-gold transition-colors"
                    >
                      View Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button 
                        key={size.name}
                        onClick={() => setSelectedSize(size.name)}
                        className={`px-4 py-2 border rounded-lg transition-all duration-300 font-sans text-sm ${
                          selectedSize === size.name 
                            ? 'border-brand-gold text-brand-gold bg-brand-gold/10 shadow-[0_0_10px_rgba(212,175,55,0.1)]' 
                            : 'border-white/10 text-brand-grey-medium hover:border-white/40 hover:text-white'
                        }`}
                      >
                        {size.name}
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
                    {availableColors.map((color) => (
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

        {/* Modal: Size Guide */}
        <AnimatePresence>
          {isSizeGuideOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSizeGuideOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-brand-charcoal border border-brand-gold/30 rounded-3xl p-8 z-10 shadow-2xl"
              >
                <button 
                  onClick={() => setIsSizeGuideOpen(false)}
                  className="absolute top-6 right-6 text-brand-grey-dark hover:text-white transition-colors"
                  aria-label="Close size guide"
                >
                  <X size={24} />
                </button>
                
                <div className="text-center mb-8">
                  <Ruler className="text-brand-gold mx-auto mb-4" size={32} />
                  <h3 className="font-serif text-3xl text-white mb-2">Size Guide</h3>
                  <p className="text-brand-grey-medium font-serif italic">Australian Market Standards</p>
                </div>

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
                
                <p className="text-xs text-brand-grey-dark font-serif italic mt-6 text-center">* Sizes can be customized upon request.</p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
    </>
  );
}
