import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-grey-light pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background radial gradient for subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left md:block">
            <Link href="/" className="inline-block relative w-[200px] h-[60px] md:w-[250px] md:h-[75px]">
              <Image 
                src="/logos/Yarns_Logo_White.svg" 
                alt="Yarns Lanka Logo"
                fill
                className="object-contain md:object-left"
              />
            </Link>
            <p className="text-sm leading-relaxed text-brand-grey-medium md:pe-4 max-w-sm mx-auto md:mx-0">
              Building a future where timeless textiles bring joy, comfort, and sustainability. Manufacturers of the premium KNIGHTS bedding collection.
            </p>
            <div className="flex gap-4 pt-2 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-brand-grey-medium hover:text-brand-gold hover:border-brand-gold hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-brand-grey-medium hover:text-brand-gold hover:border-brand-gold hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-brand-grey-medium hover:text-brand-gold hover:border-brand-gold hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:block mt-8 md:mt-0">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6 md:mb-8 border-b border-white/10 pb-4 inline-block">Company</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Collections', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-brand-grey-medium hover:text-brand-gold transition-colors duration-300 flex items-center justify-center md:justify-start group">
                    <span className="w-0 h-[1px] bg-brand-gold mr-0 transition-all duration-300 group-hover:block md:group-hover:w-3 md:group-hover:mr-2 hidden md:block"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:block mt-8 md:mt-0">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6 md:mb-8 border-b border-white/10 pb-4 inline-block">Our Range</h4>
            <ul className="space-y-4">
              {[
                { name: 'Flat Sheets', slug: 'flat-sheet' },
                { name: 'Fitted Sheets', slug: 'fitted-sheet' },
                { name: 'Duvet Covers', slug: 'duvet-cover' },
                { name: 'Pillow Cases', slug: 'pillow-cases' },
                { name: 'Complete Sets', slug: 'bed-linen-set' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={`/collections/${item.slug}`} className="text-sm text-brand-grey-medium hover:text-brand-gold transition-colors duration-300 flex items-center justify-center md:justify-start group">
                    <span className="w-0 h-[1px] bg-brand-gold mr-0 transition-all duration-300 group-hover:block md:group-hover:w-3 md:group-hover:mr-2 hidden md:block"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:block mt-8 md:mt-0">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6 md:mb-8 border-b border-white/10 pb-4 inline-block">Contact</h4>
            <ul className="space-y-6">
              <li className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2 md:gap-4 group">
                <MapPin size={20} className="text-brand-gold md:mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-brand-grey-medium leading-relaxed">
                  189/G, Kondagammulla,<br/>
                  Demanhandiya, Negombo,<br/>
                  Sri Lanka
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2 md:gap-4 group">
                <Mail size={20} className="text-brand-gold md:mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col">
                  <a href="mailto:Info@yarnslanka.com" className="text-sm text-brand-grey-medium hover:text-brand-gold transition-colors">Info@yarnslanka.com</a>
                  <a href="mailto:yarnslanka@gmail.com" className="text-sm text-brand-grey-medium hover:text-brand-gold transition-colors">yarnslanka@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-grey-dark font-sans tracking-wide text-center md:text-left">
            &copy; {currentYear} Yarns Lanka (Pvt) Ltd. All rights reserved. <span className="block md:inline mt-2 md:mt-0 md:ml-2">Designed & Developed by <a href="https://webcoreex.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors">Web Core EX</a></span>
          </p>
          <div className="flex gap-6 text-xs text-brand-grey-dark uppercase tracking-wider">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
