"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      
      <main className="w-full bg-brand-black min-h-screen relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        {/* --- PAGE HERO --- */}
        <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image 
              src="https://i.pinimg.com/736x/a9/d6/1c/a9d61c68946dcb54ef0521f6b47174b2.jpg" 
              alt="Privacy Policy"
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
              <h1 className="heading-xl mb-6">Privacy Policy</h1>
              <div className="h-[2px] w-16 bg-brand-gold mx-auto mb-8 opacity-80"></div>
              <p className="font-serif italic text-xl text-brand-gold-light max-w-2xl mx-auto px-4">
                Committed to honesty, integrity, and protecting your data.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-32 container mx-auto px-6 relative z-10 -mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-10 md:p-16 rounded-3xl max-w-4xl mx-auto shadow-2xl"
          >
            <div className="border-b border-white/10 pb-10 mb-10">
              <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-6">
                Effective Date: February 2026
              </p>
              <p className="text-lg leading-relaxed text-brand-cream font-light mb-6">
                At Yarns Lanka (Pvt) Ltd, we act with honesty and integrity, because it is the highest form of intimacy. We are committed to protecting your data when you interact with us via our website, <strong>Info@yarnslanka.com</strong>, or our social media channels.
              </p>
              <p className="text-brand-grey-medium leading-relaxed">
                Your information is used securely to provide premium bedding solutions and serve our wholesale buyers, designers, and international partners with precision.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="font-sans text-lg tracking-widest uppercase text-white border-l-2 border-brand-gold pl-4 mb-6">1. Information We Collect</h2>
                <p className="text-brand-grey-light mb-4 leading-relaxed">We collect information that you provide directly to us, such as when you:</p>
                <ul className="space-y-3 pl-4">
                  <li className="relative pl-6 text-brand-grey-medium before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-gold">
                    Submit inquiries through our contact forms
                  </li>
                  <li className="relative pl-6 text-brand-grey-medium before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-gold">
                    Request wholesale pricing or partnership details
                  </li>
                  <li className="relative pl-6 text-brand-grey-medium before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-gold">
                    Communicate with us via email or social media
                  </li>
                </ul>
                <p className="text-brand-grey-medium mt-4 leading-relaxed">This information may include your name, email address, phone number, company name, and details about your inquiry.</p>
              </div>

              <div>
                <h2 className="font-sans text-lg tracking-widest uppercase text-white border-l-2 border-brand-gold pl-4 mb-6">2. How We Use Your Information</h2>
                <p className="text-brand-grey-light mb-4 leading-relaxed">We use the information we collect to:</p>
                <ul className="space-y-3 pl-4">
                  <li className="relative pl-6 text-brand-grey-medium before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-gold">
                    Respond to your wholesale or direct inquiries
                  </li>
                  <li className="relative pl-6 text-brand-grey-medium before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-gold">
                    Process bespoke orders and custom sizing requests
                  </li>
                  <li className="relative pl-6 text-brand-grey-medium before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-gold">
                    Provide customer support
                  </li>
                  <li className="relative pl-6 text-brand-grey-medium before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-gold">
                    Improve our website and product offerings
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-sans text-lg tracking-widest uppercase text-white border-l-2 border-brand-gold pl-4 mb-6">3. Information Sharing</h2>
                <p className="text-brand-grey-medium leading-relaxed">
                  As an ethical manufacturer, we respect your privacy. We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential and secure.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-lg tracking-widest uppercase text-white border-l-2 border-brand-gold pl-4 mb-6">4. Data Security</h2>
                <p className="text-brand-grey-medium leading-relaxed">
                  We implement a variety of security measures to maintain the safety of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>
              </div>

              <div className="bg-black/40 border border-white/5 rounded-2xl p-8 mt-12">
                <h2 className="font-sans text-sm tracking-widest uppercase text-brand-gold mb-6">Contacting Us</h2>
                <p className="text-brand-grey-light mb-6 leading-relaxed">If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
                <div className="text-brand-grey-medium leading-relaxed space-y-1">
                  <strong className="text-white block font-normal tracking-wide">Yarns Lanka Private Limited</strong>
                  <p>189/G, Kondagammulla, Demanhandiya</p>
                  <p>Negombo, Sri Lanka</p>
                  <p className="pt-4">
                    Email: <a href="mailto:Info@yarnslanka.com" className="text-brand-gold hover:underline transition-all">Info@yarnslanka.com</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
