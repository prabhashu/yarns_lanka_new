"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { 
  MapPin, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  MessageCircle 
} from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will get back to you shortly.");
  };

  return (
    <>
      <Header />
      
      <main className="w-full bg-brand-black min-h-screen relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        {/* --- PAGE HERO --- */}
        <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center mb-16">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image 
              src="https://i.pinimg.com/1200x/ca/f2/84/caf284f7402f5328e3c21ddacab64f75.jpg" 
              alt="Get In Touch"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Dark Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-black/80 z-10"></div>
          </div>
          
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="heading-xl mb-6">Get In Touch</h1>
              <div className="h-[2px] w-16 bg-brand-gold mx-auto mb-8 opacity-80"></div>
              <p className="font-serif italic text-xl text-brand-gold-light max-w-2xl mx-auto px-4">
                For wholesale inquiries, partnerships, or customer support.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding pt-10 container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start max-w-7xl mx-auto">
            
            {/* Information Column */}
            <AnimatedSection direction="right" className="lg:col-span-5">
              <SectionTitle 
                subtitle="Contact Info"
                title="Connect With Us" 
              />
              
              <div className="space-y-12 mb-16">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-brand-charcoal border border-white/10 rounded-2xl flex items-center justify-center text-brand-gold shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-black transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm tracking-widest uppercase text-white mb-2">Headquarters</h4>
                    <p className="text-brand-grey-medium leading-relaxed">Yarns Lanka Private Limited<br/>189/G, Kondagammulla<br/>Demanhandiya, Negombo<br/>Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-brand-charcoal border border-white/10 rounded-2xl flex items-center justify-center text-brand-gold shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-black transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm tracking-widest uppercase text-white mb-2">Email Us</h4>
                    <p className="flex flex-col gap-1">
                      <a href="mailto:Info@yarnslanka.com" className="text-brand-grey-medium hover:text-brand-gold transition-colors duration-300">Info@yarnslanka.com</a>
                      <a href="mailto:yarnslanka@gmail.com" className="text-brand-grey-medium hover:text-brand-gold transition-colors duration-300">yarnslanka@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-brand-gold"></span> Follow Our Journey
                </h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook size={20} />, label: "Facebook" },
                    { icon: <Instagram size={20} />, label: "Instagram" },
                    { icon: <Twitter size={20} />, label: "Twitter" },
                    { icon: <MessageCircle size={20} />, label: "WhatsApp" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-grey-light hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all duration-300 hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Form Column */}
            <AnimatedSection direction="left" delay={0.2} className="lg:col-span-7">
              <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                 {/* Internal hover glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="mb-10 text-center lg:text-left">
                  <h3 className="font-serif text-3xl text-white mb-3">Send an Inquiry</h3>
                  <p className="text-brand-grey-medium">Fill out the form below and our team will be in touch within 24 hours.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-grey-light">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required 
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300" 
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-grey-light">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required 
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-grey-light">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-grey-light">Company (Optional)</label>
                      <input 
                        type="text" 
                        id="company" 
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-grey-light">Inquiry Type</label>
                    <select 
                      id="inquiryType" 
                      required 
                      defaultValue=""
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300 appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%238A8A8A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right .5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                    >
                      <option value="" disabled className="bg-brand-black text-brand-grey-medium">Select an option</option>
                      <option value="wholesale" className="bg-brand-black">Wholesale / B2B</option>
                      <option value="retail" className="bg-brand-black">Customer Support</option>
                      <option value="press" className="bg-brand-black">Press & Media</option>
                      <option value="other" className="bg-brand-black">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-grey-light">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      required 
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300 resize-y"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" variant="primary" className="w-full pt-4 mt-4">
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- MAP SECTION --- */}
        <section className="h-[500px] w-full relative grayscale contrast-125 sepia-[.2] hue-rotate-[-10deg] opacity-80 border-t border-white/10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.658254070732!2d79.8519163!3d7.2494192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee0811239c09%3A0xe1db39baadcc3905!2sNegombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location: Negombo, Sri Lanka"
            className="absolute inset-0 z-20 pointer-events-auto"
          ></iframe>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
