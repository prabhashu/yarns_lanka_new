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
      
      <main className="w-full bg-white min-h-screen relative">
        {/* --- PAGE HERO --- */}
        <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image 
              src="https://i.pinimg.com/1200x/b5/bc/1d/b5bc1d97b25c0ba47db696d9975ffb40.jpg" 
              alt="Knights Egyptian Cotton Bedding"
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
              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5rem] font-serif text-white tracking-tight leading-[1.05] mb-3 md:mb-6 font-medium max-w-[95%] md:max-w-none mx-auto drop-shadow-md">The Collection</h1>
              <div className="h-[2px] w-16 bg-brand-grey-medium mx-auto mb-8 opacity-80"></div>
              <p className="text-brand-grey-light text-sm sm:text-base md:text-lg max-w-2xl font-light px-2 mx-auto drop-shadow-sm">
                Tailored for the discerning taste, where innovation meets the timeless legacy of 100% organic fibers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- PRODUCTS GRID --- */}
        <section className="section-padding bg-white container mx-auto px-6 relative z-20">
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
            <div className="relative overflow-hidden rounded-none border border-brand-accent-sage/30 bg-white shadow-xl p-1">
              <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center">
                <Sparkles className="text-brand-grey-medium mb-6" size={32} />
                <h3 className="heading-md mb-6 text-brand-black">The Complete Experience</h3>
                <p className="text-lg text-brand-charcoal/80 mb-10 font-light max-w-2xl mx-auto">
                  The Yarns LK collection includes a comprehensive bedding range. The complete set features 1 fitted sheet, 1 flat sheet, 1 duvet cover, and 2 standard pillowcases for ultimate coordination.
                </p>
                <Link href="/collections/bed-linen-set" className="inline-flex items-center justify-center px-10 py-4 border border-brand-grey-medium text-brand-grey-medium font-sans text-sm uppercase tracking-[0.15em] font-medium hover:bg-brand-grey-medium hover:text-white transition-all duration-300 group shadow-[0_0_20px_rgba(138, 138, 138,0.1)] hover:shadow-[0_0_30px_rgba(138, 138, 138,0.4)]">
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
                  <div className="relative aspect-[4/5] rounded-none overflow-hidden shadow-2xl border border-black/5">
                    <Image 
                      src="https://i.pinimg.com/1200x/ca/f2/84/caf284f7402f5328e3c21ddacab64f75.jpg"
                      alt="Knights Bedding Quality"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-[3s] hover:scale-110"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* --- COLLECTION GRADES --- */}
        <section className="py-24 bg-white relative z-20 border-t border-black/5">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <SectionTitle 
                subtitle="The Hierarchy of Comfort"
                title="The Grades of Luxury"
              />
            </div>
            
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Standard Collection",
                  desc: "Lightweight and breathable, this collection offers a crisp, fresh feel that is ideal for everyday comfort. Its balanced weave ensures durability while maintaining a smooth and inviting texture.",
                  tc: "300 Thread Count",
                  image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop",
                  slug: "flat-sheet",
                  align: "left",
                },
                {
                  title: "Classic Collection",
                  desc: "Known for its enhanced softness, the Classic Collection provides a smoother and more refined finish, offering a perfect balance between everyday practicality and elevated comfort.",
                  tc: "400 Thread Count",
                  image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
                  slug: "fitted-sheet",
                  align: "right",
                },
                {
                  title: "Signature Collection",
                  desc: "Our most luxurious offering, the Signature Collection features a rich, silky texture and superior density, delivering exceptional smoothness and an indulgent sleeping experience.",
                  tc: "600 Thread Count",
                  image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop",
                  slug: "bed-linen-set",
                  align: "left",
                },
              ].map((item, idx) => (
                <AnimatedSection 
                  key={idx} 
                  delay={idx * 0.1} 
                  direction="up"
                  className="w-full"
                >
                  <Link href={`/collections/${item.slug}`} className="group block w-full relative overflow-hidden rounded-none h-[340px] md:h-[420px] shadow-xl">
                    {/* Background image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="100vw"
                      quality={85}
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />

                    {/* Base dark overlay for readability */}
                    <div className="absolute inset-0 bg-brand-black/50 z-[5]" />

                    {/* Directional gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-${item.align === "left" ? "r" : "l"} from-brand-black/90 via-brand-black/50 to-brand-black/10 z-10`} />

                    {/* Content */}
                    <div className={`absolute inset-0 z-20 flex flex-col justify-end p-10 md:p-16 ${item.align === "right" ? "items-end text-right" : "items-start text-left"}`}>
                      <span className="font-sans text-[10px] font-bold tracking-[0.35em] uppercase text-brand-grey-medium mb-4 block">
                        {item.tc}
                      </span>
                      <h3 className="font-serif text-3xl md:text-5xl text-white font-light mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <div className={`h-[1px] w-12 bg-brand-grey-medium mb-6 transition-all duration-500 group-hover:w-24 ${item.align === "right" ? "ml-auto" : ""}`} />
                      <p className="text-white/90 font-light text-sm md:text-base max-w-lg leading-relaxed mb-8">
                        {item.desc}
                      </p>
                      <span className="inline-flex items-center gap-3 px-7 py-3 border border-white/30 text-white text-xs uppercase tracking-[0.2em] font-sans backdrop-blur-sm bg-white/10 group-hover:bg-brand-grey-medium group-hover:border-brand-grey-medium transition-all duration-500 rounded-none">
                        Explore <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
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
      className="group flex flex-col h-full bg-white rounded-none overflow-hidden border border-black/5 hover:border-brand-grey-medium/40 transition-all duration-500 shadow-xl"
    >
      <div className="relative h-[320px] overflow-hidden w-full">
        <Link href={`/collections/${product.slug}`} className="block w-full h-full outline-none">
          <Image 
            src={currentImage} 
            alt={product.name} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
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
          <h3 className="font-serif text-2xl text-brand-black mb-3 group-hover:text-brand-grey-medium transition-colors duration-300">
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
              className={`w-7 h-7 rounded-none border transition-all duration-300 flex items-center justify-center p-[2px] ${
                selectedColor === color.name 
                  ? 'border-brand-grey-medium translate-y-[-2px] shadow-[0_2px_8px_rgba(138, 138, 138,0.4)] scale-110' 
                  : 'border-black/10 hover:border-black/30'
              }`}
              title={color.name}
            >
              <span 
                className="w-full h-full rounded-none shadow-inner border border-black/20" 
                style={{ backgroundColor: color.hex }}
              ></span>
            </button>
          ))}
        </div>
        
        {/* Fake Footer Action */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/10">
          <Link href={`/collections/${product.slug}`} className="font-sans text-xs uppercase tracking-widest text-brand-grey-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300 outline-none">
            Explore <ArrowRight size={14} />
          </Link>
          <span className="text-brand-accent-sage/60"><Sparkles size={14}/></span>
        </div>
      </div>
    </AnimatedSection>
  );
}
