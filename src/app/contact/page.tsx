"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  MessageCircle,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    inquiryType: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type";
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        inquiryType: "",
        message: ""
      });
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      
      <main className="w-full bg-white min-h-screen relative overflow-hidden">
        {/* Background Gradients */}
        <div className="hidden md:block absolute top-0 right-0 w-[800px] h-[800px] bg-brand-grey-medium/5 rounded-none blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-grey-medium/5 rounded-none blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        {/* --- PAGE HERO --- */}
        <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center mb-16">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image 
              src="https://i.pinimg.com/1200x/ca/f2/84/caf284f7402f5328e3c21ddacab64f75.jpg" 
              alt="Get In Touch"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dark Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/20 z-10"></div>
            <div className="absolute inset-0 bg-brand-black/20 z-10"></div>
          </div>
          
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5rem] font-serif text-white tracking-tight leading-[1.05] mb-3 md:mb-6 font-medium max-w-[95%] md:max-w-none mx-auto drop-shadow-md">Get In Touch</h1>
              <div className="h-[2px] w-16 bg-brand-grey-medium mx-auto mb-8 opacity-80"></div>
              <p className="text-brand-grey-light text-sm sm:text-base md:text-lg max-w-2xl font-light px-2 mx-auto drop-shadow-sm">
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
                  <div className="w-14 h-14 bg-brand-accent-sage/10 border border-brand-accent-sage/20 rounded-none flex items-center justify-center text-brand-grey-medium shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-brand-grey-medium group-hover:text-white transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm tracking-widest uppercase text-brand-black mb-2">Headquarters</h4>
                    <p className="text-brand-charcoal/80 leading-relaxed">Yarns Lanka Private Limited<br/>189/G, Kondagammulla<br/>Demanhandiya, Negombo<br/>Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-brand-accent-sage/10 border border-brand-accent-sage/20 rounded-none flex items-center justify-center text-brand-grey-medium shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-brand-grey-medium group-hover:text-white transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm tracking-widest uppercase text-brand-black mb-2">Email Us</h4>
                    <p className="flex flex-col gap-1">
                      <a href="mailto:Info@yarnslanka.com" className="text-brand-charcoal/80 hover:text-brand-grey-medium transition-colors duration-300">Info@yarnslanka.com</a>
                      
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-grey-medium mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-brand-grey-medium"></span> Follow Our Journey
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
                      className="w-12 h-12 rounded-none border border-black/10 flex items-center justify-center text-brand-charcoal hover:bg-brand-grey-medium hover:text-white hover:border-brand-grey-medium transition-all duration-300 hover:-translate-y-1 shadow-sm"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Form Column */}
            <AnimatedSection direction="left" delay={0.2} className="lg:col-span-7">
              <div className="bg-black/[0.02] border border-black/5 p-8 md:p-12 rounded-none relative overflow-hidden shadow-xl group">
                 {/* Internal hover glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-grey-medium/5 rounded-none blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4"
                  >
                    <div className="w-20 h-20 bg-brand-accent-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-brand-charcoal" />
                    </div>
                    <h3 className="font-serif text-3xl text-brand-black mb-4">Message Sent!</h3>
                    <p className="text-brand-charcoal/80 max-w-md mx-auto mb-8">
                      Thank you for reaching out to Yarns Lanka. We've received your inquiry and our team will get back to you within 24 hours.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="px-8"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-10 text-center lg:text-left">
                      <h3 className="font-serif text-3xl text-brand-black mb-3">Send an Inquiry</h3>
                      <p className="text-brand-charcoal/80">Fill out the form below and our team will be in touch within 24 hours.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-charcoal">First Name</label>
                          <input 
                            type="text" 
                            id="firstName" 
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full bg-white border ${errors.firstName ? 'border-red-500' : 'border-black/10'} rounded-none px-4 py-4 text-brand-black placeholder-black/20 focus:outline-none focus:border-brand-grey-medium/50 focus:ring-1 focus:ring-brand-grey-medium/50 transition-all duration-300`} 
                            placeholder="John"
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1">
                              <AlertCircle size={10} /> {errors.firstName}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-charcoal">Last Name</label>
                          <input 
                            type="text" 
                            id="lastName" 
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full bg-white border ${errors.lastName ? 'border-red-500' : 'border-black/10'} rounded-none px-4 py-4 text-brand-black placeholder-black/20 focus:outline-none focus:border-brand-grey-medium/50 focus:ring-1 focus:ring-brand-grey-medium/50 transition-all duration-300`}
                            placeholder="Doe"
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1">
                              <AlertCircle size={10} /> {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="email" className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-charcoal">Email Address</label>
                          <input 
                            type="email" 
                            id="email" 
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-black/10'} rounded-none px-4 py-4 text-brand-black placeholder-black/20 focus:outline-none focus:border-brand-grey-medium/50 focus:ring-1 focus:ring-brand-grey-medium/50 transition-all duration-300`}
                            placeholder="john@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1">
                              <AlertCircle size={10} /> {errors.email}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-charcoal">Company (Optional)</label>
                          <input 
                            type="text" 
                            id="company" 
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-white border border-black/10 rounded-none px-4 py-4 text-brand-black placeholder-black/20 focus:outline-none focus:border-brand-grey-medium/50 focus:ring-1 focus:ring-brand-grey-medium/50 transition-all duration-300"
                            placeholder="Company Name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="inquiryType" className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-charcoal">Inquiry Type</label>
                        <select 
                          id="inquiryType" 
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className={`w-full bg-white border ${errors.inquiryType ? 'border-red-500' : 'border-black/10'} rounded-none px-4 py-4 text-brand-black focus:outline-none focus:border-brand-grey-medium/50 focus:ring-1 focus:ring-brand-grey-medium/50 transition-all duration-300 appearance-none`}
                          style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23333333' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right .5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                        >
                          <option value="" disabled className="bg-white text-brand-charcoal">Select an option</option>
                          <option value="wholesale" className="bg-white">Wholesale / B2B</option>
                          <option value="retail" className="bg-white">Customer Support</option>
                          <option value="press" className="bg-white">Press & Media</option>
                          <option value="other" className="bg-white">Other</option>
                        </select>
                        {errors.inquiryType && (
                          <p className="text-red-500 text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1">
                            <AlertCircle size={10} /> {errors.inquiryType}
                          </p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-charcoal">Message</label>
                        <textarea 
                          id="message" 
                          rows={5} 
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-black/10'} rounded-none px-4 py-4 text-brand-black placeholder-black/20 focus:outline-none focus:border-brand-grey-medium/50 focus:ring-1 focus:ring-brand-grey-medium/50 transition-all duration-300 resize-y`}
                          placeholder="How can we help you?"
                        ></textarea>
                        {errors.message && (
                          <p className="text-red-500 text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1">
                            <AlertCircle size={10} /> {errors.message}
                          </p>
                        )}
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="primary" 
                        className="w-full pt-4 mt-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* --- MAP SECTION --- */}
        <section className="h-[500px] w-full relative border-t border-black/10">
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
