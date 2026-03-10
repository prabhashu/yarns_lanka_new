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
      <Header theme="light" />
      
      <main className="w-full bg-white min-h-screen pt-[120px] pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Back Link */}
          <Link href="/collections" className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-brand-charcoal hover:text-brand-grey-medium transition-colors duration-300 mb-12">
            <ArrowLeft size={16} /> Back to Collections
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Gallery Section - Sticky left */}
            <AnimatedSection direction="right" className="lg:col-span-6 lg:sticky lg:top-[120px]">
              <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden mb-6 bg-white border border-black/5 group shadow-sm">
                <Image 
                  src={currentImage} 
                  alt={product.name} 
                  fill 
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 pointer-events-none"></div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-16">
                {availableColors.map((color) => {
                  const isSelected = selectedColor === color.name;
                  const thumbSrc = product.colorImages?.[color.name] || product.image;
                  
                  return (
                    <div 
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative w-20 h-20 rounded-none overflow-hidden cursor-pointer border-2 transition-colors duration-300 ${
                        isSelected 
                          ? 'border-brand-grey-medium shadow-[0_0_15px_rgba(138, 138, 138,0.3)]' 
                          : 'border-transparent hover:border-brand-grey-medium/50'
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

              {/* --- MINI REVIEWS (Desktop Only) --- */}
              <div className="hidden lg:block pt-12 border-t border-black/5">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-serif text-2xl text-brand-black">Client Feedback</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex text-brand-grey-medium">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Sparkles key={s} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm font-sans font-bold text-brand-black">4.9/5</span>
                  </div>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      name: "Alexander V.",
                      location: "Sydney, AU",
                      comment: "The feel of the Egyptian cotton is transformative. Knights has a specific weight and breathability that stands apart.",
                    },
                    {
                      name: "Elizabeth R.",
                      location: "London, UK",
                      comment: "Exceptional attention to detail in the stitching. It washes beautifully and actually feels better with each use.",
                    }
                  ].map((review, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/40 p-6 rounded-none border border-black/5"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-sans font-bold text-brand-black uppercase tracking-widest">{review.name}</span>
                        <span className="text-[9px] font-sans text-brand-charcoal/40 uppercase tracking-widest">{review.location}</span>
                      </div>
                      <p className="text-brand-charcoal/80 font-light text-sm leading-relaxed italic">
                        &quot;{review.comment}&quot;
                      </p>
                    </motion.div>
                  ))}
                  
                  <Link href="/contact" className="inline-flex items-center gap-2 px-1 py-1 text-[10px] font-bold tracking-[0.2em] text-brand-grey-medium hover:text-brand-black transition-colors uppercase mt-4">
                    Share Your Experience <ArrowLeft size={12} className="rotate-180" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Content Section - Right */}
            <AnimatedSection direction="left" className="lg:col-span-6">
              
              {/* Product Header */}
              <div className="mb-10">
                <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-grey-medium block mb-4">
                  KNIGHTS by Yarns Lanka
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl text-brand-black mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="font-serif italic text-xl text-brand-charcoal/80">Wholesale inquiry</p>
              </div>

              {/* Selectors Block */}
              <div className="bg-white border border-brand-accent-sage/20 shadow-lg rounded-none p-8 mb-10">
                
                {/* Thread Count Selector */}
                <div className="mb-8">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-black">Thread Count</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {["300", "400", "600"].map((tc) => (
                      <button 
                        key={tc}
                        onClick={() => setSelectedTc(tc)}
                        className={`flex flex-col items-center gap-1 border border-black/10 bg-black/[0.02] rounded-none py-3 px-2 transition-all duration-300 ${
                          selectedTc === tc 
                            ? 'border-brand-grey-medium bg-brand-grey-medium/10 shadow-[0_0_15px_rgba(138, 138, 138,0.15)]' 
                            : 'hover:border-brand-grey-medium/50 hover:bg-white'
                        }`}
                      >
                        <span className={`font-sans font-bold ${selectedTc === tc ? 'text-brand-grey-dark' : 'text-brand-black'}`}>
                          {tc} TC
                        </span>
                        <span className="text-xs text-brand-charcoal/80">
                          {tc === "300" ? "Standard" : tc === "400" ? "Classic" : "Signature"}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selector and Guide Link */}
                <div className="mb-8 border-t border-black/10 pt-6">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-black">Size</span>
                    <button 
                      onClick={() => setIsSizeGuideOpen(true)} 
                      className="text-xs font-serif italic text-brand-charcoal/80 underline hover:text-brand-grey-medium transition-colors"
                    >
                      View Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button 
                        key={size.name}
                        onClick={() => setSelectedSize(size.name)}
                        className={`px-4 py-2 border rounded-none transition-all duration-300 font-sans text-sm ${
                          selectedSize === size.name 
                            ? 'border-brand-grey-medium text-brand-grey-dark bg-brand-grey-medium/10 shadow-[0_0_10px_rgba(138, 138, 138,0.1)]' 
                            : 'border-black/10 text-brand-charcoal hover:border-black/30 bg-black/[0.02] hover:bg-white'
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
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-black">Color</span>
                    <span className="text-sm font-serif italic text-brand-charcoal/80">{selectedColor}</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {availableColors.map((color) => (
                      <button 
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-12 h-12 rounded-none border transition-all duration-300 flex items-center justify-center p-[2px] ${
                          selectedColor === color.name 
                            ? 'border-brand-grey-medium translate-y-[-2px] shadow-[0_4px_10px_rgba(138, 138, 138,0.3)]' 
                            : 'border-transparent hover:border-black/30 hover:scale-105'
                        }`}
                        aria-label={`Select ${color.name} color`}
                      >
                        <span 
                          className="w-full h-full rounded-none shadow-inner border border-black/10" 
                          style={{ backgroundColor: color.hex }}
                        ></span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mb-12 pb-12 border-b border-black/10">
                <Button href="/contact" variant="primary" className="w-full mb-6">
                  Request Wholesale Quote
                </Button>
                <div className="flex justify-center gap-8 text-brand-charcoal text-sm font-sans tracking-wide">
                  <span className="flex items-center gap-2"><Sparkles className="text-brand-grey-medium" size={16} /> ISO 9001:2015</span>
                  <span className="flex items-center gap-2"><Droplets className="text-brand-grey-medium" size={16} /> Organic Cotton</span>
                </div>
              </div>

              {/* Accordion / Details */}
              <div className="space-y-12">
                
                {/* Description Text */}
                <p className="text-lg leading-relaxed text-brand-charcoal/90 font-light">
                  {product.description}
                </p>
                
                {/* Features List */}
                <div>
                  <h4 className="font-sans text-sm tracking-widest uppercase text-brand-black mb-6 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-brand-grey-medium"></span> Features
                  </h4>
                  <ul className="space-y-3">
                    {features.map((feature, idx) => (
                      <li key={idx} className="relative pl-6 text-brand-charcoal/80 leading-relaxed">
                        <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-none bg-brand-grey-medium"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Care Instructions Accordion */}
                <div className="border-t border-b border-black/10">
                  <button 
                    className="w-full flex justify-between items-center py-6 font-sans text-sm uppercase tracking-widest font-semibold text-brand-black group"
                    onClick={() => setIsCareOpen(!isCareOpen)}
                    aria-expanded={isCareOpen}
                  >
                    <span className="group-hover:text-brand-grey-medium transition-colors">Care Instructions</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-brand-grey-medium transition-transform duration-300 ${isCareOpen ? 'rotate-180' : ''}`} 
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
                            <li key={idx} className="text-brand-charcoal/80 border-b border-black/5 pb-3 last:border-0 last:pb-0 text-sm">
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

          {/* --- REVIEWS (Moved to Bottom for Mobile) --- */}
          <AnimatedSection direction="up" className="lg:hidden mt-24 pt-16 border-t border-black/10">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6 text-center sm:text-left">
                  <h3 className="font-serif text-3xl md:text-4xl text-brand-black">Client Feedback</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex text-brand-grey-medium">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Sparkles key={s} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-lg font-sans font-bold text-brand-black">4.9/5</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      name: "Alexander V.",
                      location: "Sydney, AU",
                      comment: "The feel of the Egyptian cotton is transformative. Knights has a specific weight and breathability that stands apart.",
                    },
                    {
                      name: "Elizabeth R.",
                      location: "London, UK",
                      comment: "Exceptional attention to detail in the stitching. It washes beautifully and actually feels better with each use.",
                    }
                  ].map((review, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/60 p-8 rounded-none border border-black/5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-sans font-bold text-brand-black uppercase tracking-widest">{review.name}</span>
                        <span className="text-[10px] font-sans text-brand-charcoal/40 uppercase tracking-widest">{review.location}</span>
                      </div>
                      <p className="text-brand-charcoal/80 text-base leading-relaxed italic">
                        &quot;{review.comment}&quot;
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold tracking-[0.2em] text-brand-black hover:text-white border border-black/10 hover:border-brand-grey-medium hover:bg-brand-grey-medium transition-all duration-300 uppercase rounded-none bg-white shadow-sm">
                    Share Your Experience <ArrowLeft size={16} className="rotate-180" />
                  </Link>
                </div>
            </div>
          </AnimatedSection>
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
                className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-brand-accent-sage/30 rounded-none p-8 z-10 shadow-2xl"
              >
                <button 
                  onClick={() => setIsSizeGuideOpen(false)}
                  className="absolute top-6 right-6 text-brand-charcoal hover:text-black transition-colors"
                  aria-label="Close size guide"
                >
                  <X size={24} />
                </button>
                
                <div className="text-center mb-8">
                  <Ruler className="text-brand-grey-medium mx-auto mb-4" size={32} />
                  <h3 className="font-serif text-3xl text-brand-black mb-2">Size Guide</h3>
                  <p className="text-brand-charcoal/80 font-serif italic">Australian Market Standards</p>
                </div>

                <div className="overflow-x-auto rounded-none border border-black/10 bg-black/[0.02] backdrop-blur-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-black/[0.04] border-b border-black/10 font-sans tracking-widest text-brand-grey-medium uppercase text-xs">
                      <tr>
                        <th className="p-5 font-semibold">Size</th>
                        <th className="p-5 font-semibold">Dimensions {product.slug === 'bed-linen-set' ? '(Included)' : '(cm)'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5 text-brand-charcoal">
                      {product.sizes.map((size) => (
                        <tr key={size.name} className="hover:bg-white transition-colors">
                          <td className="p-5">{size.name}</td>
                          <td className="p-5">{size.dimensions}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <p className="text-xs text-brand-charcoal/60 font-serif italic mt-6 text-center">* Sizes can be customized upon request.</p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
    </>
  );
}
