"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const leftLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Collections", href: "/collections" },
];

const rightLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Prevent link click delays
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const NavItem = ({ link }: { link: { name: string, href: string } }) => {
    const isActive = pathname === link.href;
    const isHovered = hoveredLink === link.name;
    
    return (
      <li className="relative group/nav-item">
        <Link 
          href={link.href} 
          onMouseEnter={() => setHoveredLink(link.name)}
          onMouseLeave={() => setHoveredLink(null)}
          className={`px-5 py-2.5 text-[11px] font-sans font-medium uppercase tracking-[0.2em] transition-colors duration-300 relative z-10 block
            ${isActive ? "text-brand-gold" : "text-white/70 hover:text-white"}
          `}
        >
          {link.name}
        </Link>
        
        {/* Clean Underline Effect */}
        <motion.div
          initial={false}
          animate={{ 
            width: isActive ? "80%" : (isHovered ? "80%" : "0%"),
            opacity: isActive ? 1 : (isHovered ? 1 : 0)
          }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="absolute left-1/2 -translate-x-1/2 bottom-[4px] h-[1px] bg-brand-gold"
        />
      </li>
    );
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -120, opacity: 0 },
        }}
        animate={isHidden && !mobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-center items-start pointer-events-none"
      >
        <motion.div 
          layout
          className={`
            relative flex items-center justify-between transition-all duration-700 ease-[0.23, 1, 0.32, 1] pointer-events-auto
            ${isScrolled 
              ? "w-full max-w-[840px] bg-brand-black/85 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 md:px-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)]" 
              : "w-full max-w-[1400px] bg-transparent backdrop-blur-none border-transparent rounded-none px-4 py-4 md:px-12 md:py-6"
            }
          `}
        >
          
          {/* LEFT NAVIGATION */}
          <nav className="hidden md:flex flex-1 items-center justify-start xl:justify-center">
            <ul className="flex items-center gap-1 list-none p-0 m-0">
              {leftLinks.map((link) => (
                <NavItem key={link.name} link={link} />
              ))}
            </ul>
          </nav>

          {/* CENTER LOGO AREA */}
          <div className={`flex-shrink-0 flex justify-center items-center transition-all duration-700 ease-[0.23, 1, 0.32, 1] ${isScrolled ? 'w-[120px] md:w-[150px]' : 'w-[150px] md:w-[220px]'}`}>
            <Link href="/" className="block group transition-transform duration-500 hover:scale-[1.03] active:scale-95">
              <div className={`relative transition-all duration-700 ease-[0.23, 1, 0.32, 1] ${isScrolled ? 'w-[110px] h-[30px] md:w-[130px] md:h-[35px]' : 'w-[140px] h-[35px] md:w-[190px] md:h-[45px]'}`}>
                <Image 
                  src="/logos/Yarns_Logo_White.svg" 
                  alt="Yarns Lanka" 
                  fill
                  className="object-contain drop-shadow-2xl brightness-110 group-hover:brightness-125 transition-all duration-500"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* RIGHT NAVIGATION + CTA */}
          <nav className="hidden md:flex flex-1 items-center justify-end xl:justify-center">
            <ul className="flex items-center gap-1 list-none p-0 m-0 mr-4 lg:mr-8 xl:mr-10">
              {rightLinks.map((link) => (
                <NavItem key={link.name} link={link} />
              ))}
            </ul>
            
            <Link 
              href="/contact"
              className={`
                relative px-6 py-2.5 rounded-full overflow-hidden transition-all duration-500 group/btn whitespace-nowrap
                text-[11px] font-bold tracking-[0.2em] uppercase border flex items-center justify-center
                ${isScrolled 
                  ? "bg-brand-gold border-brand-gold text-brand-black" 
                  : "bg-white/10 border-white/20 text-white backdrop-blur-md hover:border-brand-gold/60"
                }
              `}
            >
              <span className={`relative z-10 transition-colors duration-500 ${isScrolled ? 'group-hover/btn:text-white' : 'group-hover/btn:text-brand-black'}`}>
                Wholesale
              </span>
              
              <div className={`
                absolute inset-0 transition-transform duration-500 ease-[0.23, 1, 0.32, 1]
                ${isScrolled 
                  ? "bg-brand-black translate-y-[101%] group-hover/btn:translate-y-0" 
                  : "bg-brand-gold translate-y-[101%] group-hover/btn:translate-y-0"
                }
              `} />
            </Link>
          </nav>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="md:hidden flex items-center">
            <button 
              className={`p-2.5 rounded-full transition-all duration-300 relative z-[60] overflow-hidden group
                ${mobileMenuOpen 
                  ? "bg-brand-gold text-brand-black hover:bg-white" 
                  : (isScrolled ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/10")
                }
              `}
              onClick={handleMobileMenuToggle}
              aria-label="Toggle Menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
              </motion.div>
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%", transition: { delay: 0.4, duration: 0.5, ease: [0.23, 1, 0.32, 1] } }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col pointer-events-auto shadow-2xl overflow-y-auto"
          >
            {/* Background Decorative Element */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
              <Image 
                src="/logos/Yarns_Logo_White.svg" 
                alt="Watermark" 
                width={800} 
                height={800} 
                className="object-contain scale-150 -rotate-12 blur-sm" 
              />
            </div>
            
            <div className="flex flex-col flex-1 px-8 pt-32 pb-10 relative z-10 w-full max-w-sm mx-auto">
              
              {/* Navigation Links */}
              <div className="flex flex-col gap-6 mt-8">
                {[...leftLinks, ...rightLinks].map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <div key={link.name} className="overflow-hidden">
                      <motion.div
                        initial={{ y: "110%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0, transition: { duration: 0.3 } }}
                        transition={{ delay: 0.2 + (i * 0.08), duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <Link 
                          href={link.href}
                          className="group flex items-center gap-4 py-2"
                        >
                          <span className={`text-sm font-sans tracking-[0.2em] uppercase transition-colors duration-300 w-8 ${isActive ? "text-brand-gold" : "text-white/20 group-hover:text-white/50"}`}>
                            0{i + 1}
                          </span>
                          <span className={`text-4xl sm:text-5xl font-serif tracking-tight transition-all duration-300 ${isActive ? "text-brand-gold italic translate-x-3" : "text-white hover:translate-x-3 group-hover:text-brand-cream"}`}>
                            {link.name}
                          </span>
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA & Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="mt-auto pt-16 flex flex-col gap-8"
              >
                <Link 
                  href="/contact" 
                  className="relative overflow-hidden w-full bg-brand-gold text-brand-black py-5 rounded-full text-center font-bold uppercase tracking-[0.2em] text-[12px] group/mob-btn"
                >
                  <span className="relative z-10 group-hover/mob-btn:text-white transition-colors duration-500">
                    Wholesale Access
                  </span>
                  <div className="absolute inset-0 bg-brand-black translate-y-[101%] group-hover/mob-btn:translate-y-0 transition-transform duration-500 ease-[0.23, 1, 0.32, 1]" />
                </Link>
                
                <div className="flex justify-between items-center border-t border-white/10 pt-6">
                  <div className="text-white/40 text-[10px] uppercase tracking-widest font-sans">
                    © {new Date().getFullYear()} Yarns Lanka
                  </div>
                  <div className="flex gap-4">
                    {/* Social placeholders if needed in future */}
                    <a href="#" className="text-white/40 hover:text-brand-gold transition-colors text-sm">IN</a>
                    <a href="#" className="text-white/40 hover:text-brand-gold transition-colors text-sm">FB</a>
                  </div>
                </div>
              </motion.div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
