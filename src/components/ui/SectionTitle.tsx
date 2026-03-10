"use client";

import { motion, Variants } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  centered = false,
  light = false
}: SectionTitleProps) {
  
  // Staggered reveal variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const dividerVariants: Variants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: 48, opacity: 0.8, transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 } }
  };

  return (
    <motion.div 
      className={`mb-6 md:mb-12 ${centered ? 'text-center flex flex-col items-center w-full' : 'w-full md:w-auto'}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {subtitle && (
        <motion.h4 
          variants={itemVariants} 
          className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-brand-grey-medium mb-3"
        >
          {subtitle}
        </motion.h4>
      )}
      
      <motion.h2 
        variants={itemVariants} 
        className={`font-serif text-3xl md:text-5xl leading-tight ${light ? 'text-white' : 'text-brand-black'}`}
      >
        {title}
      </motion.h2>

      <motion.div 
        variants={dividerVariants} 
        className="h-[2px] bg-brand-grey-medium mt-6 origin-left"
        style={{ originX: centered ? 0.5 : 0 }}
      />
    </motion.div>
  );
}
