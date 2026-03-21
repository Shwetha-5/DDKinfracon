"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { SITE_CONFIG } from "@/lib/constants";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", phone: "", email: "", projectType: "", budget: "", city: "", message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.phone) {
      alert("Please fill in at least your First Name and Phone Number.");
      return;
    }
    
    setStatus("loading");
    try {
      // NOTE: User must provide these environment variables in their Vercel dashboard.
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        {
          to_name: "DDK Infracon",
          from_name: `${formData.firstName} ${formData.lastName}`,
          phone: formData.phone,
          email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          city: formData.city,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      setFormData({ firstName: "", lastName: "", phone: "", email: "", projectType: "", budget: "", city: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-ddk-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-[#075E54] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/20 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="flex items-center gap-5 text-white font-bold text-lg leading-tight relative z-10">
            <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <span>Chat with us instantly on WhatsApp — we respond within minutes</span>
          </div>
          <a href={SITE_CONFIG.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="relative z-10 shrink-0 bg-[#25D366] text-[#075E54] hover:bg-white hover:text-[#075E54] font-bold uppercase tracking-widest text-[0.7rem] sm:text-xs px-6 py-4 rounded-lg shadow-lg hover:-translate-y-1 transition-all">
            Open WhatsApp Chat →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
          <motion.div
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-[0.18em] text-ddk-blue uppercase mb-3">Let's Build Together</p>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase mb-5 md:mb-6">
              Start Your<br/><span className="text-ddk-blue">Project Today</span>
            </h2>
            <p className="text-ddk-gray text-sm md:text-base leading-relaxed mb-12 max-w-sm">
              Get in touch for a free consultation. We'll discuss your vision, budget, and timeline to create a tailored construction plan.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 border-b border-white/5 pb-6">
                <div className="w-12 h-12 rounded-xl bg-ddk-blue/10 border border-ddk-blue/20 flex items-center justify-center shrink-0 text-ddk-blue [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-current [&>svg]:fill-none [&>svg]:stroke-[1.5]">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                </div>
                <div>
                  <h4 className="text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-1">Phone / WhatsApp</h4>
                  <div className="font-medium text-[0.95rem]">{SITE_CONFIG.contact.phone[0]}<br/>{SITE_CONFIG.contact.phone[1]}</div>
                </div>
              </div>
              <div className="flex gap-4 border-b border-white/5 pb-6">
                <div className="w-12 h-12 rounded-xl bg-ddk-blue/10 border border-ddk-blue/20 flex items-center justify-center shrink-0 text-ddk-blue [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-current [&>svg]:fill-none [&>svg]:stroke-[1.5]">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4 className="text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-1">Email</h4>
                  <div className="font-medium text-[0.95rem]">{SITE_CONFIG.contact.email[0]}<br/>{SITE_CONFIG.contact.email[1]}</div>
                </div>
              </div>
              <div className="flex gap-4 border-b border-white/5 pb-6">
                <div className="w-12 h-12 rounded-xl bg-ddk-blue/10 border border-ddk-blue/20 flex items-center justify-center shrink-0 text-ddk-blue [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-current [&>svg]:fill-none [&>svg]:stroke-[1.5]">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-1">Office Address</h4>
                  <div className="font-medium text-[0.95rem] text-balance max-w-[280px] leading-relaxed">{SITE_CONFIG.contact.address}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-ddk-black border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-ddk-blue/5 rounded-full blur-[80px] pointer-events-none"></div>

            <h3 className="font-bebas text-3xl md:text-4xl tracking-wide mb-8">Request a Free Consultation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 relative z-10">
              <div>
                <label className="block text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-2">First Name</label>
                <input type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-ddk-blue focus:ring-1 focus:ring-ddk-blue disabled:opacity-50 transition-all font-medium" placeholder="Rahul" disabled={status === "loading" || status === "success"} />
              </div>
              <div>
                <label className="block text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-2">Last Name</label>
                <input type="text" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-ddk-blue focus:ring-1 focus:ring-ddk-blue disabled:opacity-50 transition-all font-medium" placeholder="Sharma" disabled={status === "loading" || status === "success"} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 relative z-10">
              <div>
                <label className="block text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-2">Phone Number</label>
                <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-ddk-blue focus:ring-1 focus:ring-ddk-blue disabled:opacity-50 transition-all font-medium" placeholder="+91 98765 43210" disabled={status === "loading" || status === "success"} />
              </div>
              <div>
                <label className="block text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-2">Email Address</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-ddk-blue focus:ring-1 focus:ring-ddk-blue disabled:opacity-50 transition-all font-medium" placeholder="rahul@email.com" disabled={status === "loading" || status === "success"} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 relative z-10">
              <div>
                <label className="block text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-2">Project Type</label>
                <div className="relative">
                  <select value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-ddk-blue focus:ring-1 focus:ring-ddk-blue disabled:opacity-50 transition-all font-medium appearance-none cursor-pointer" disabled={status === "loading" || status === "success"}>
                    <option value="">Select type...</option>
                    <option>High-Rise Apartment</option>
                    <option>Luxury Villa</option>
                    <option>Smart Home</option>
                    <option>Renovation</option>
                    <option>Commercial</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ddk-gray">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-2">Budget Range</label>
                <div className="relative">
                  <select value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-ddk-blue focus:ring-1 focus:ring-ddk-blue disabled:opacity-50 transition-all font-medium appearance-none cursor-pointer" disabled={status === "loading" || status === "success"}>
                    <option value="">Select budget...</option>
                    <option>₹25L – ₹50L</option>
                    <option>₹50L – ₹1Cr</option>
                    <option>₹1Cr – ₹3Cr</option>
                    <option>₹3Cr – ₹10Cr</option>
                    <option>₹10Cr+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ddk-gray">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5 relative z-10">
              <label className="block text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-2">City / Location</label>
              <input type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-ddk-blue focus:ring-1 focus:ring-ddk-blue disabled:opacity-50 transition-all font-medium" placeholder="Bhubaneswar" disabled={status === "loading" || status === "success"} />
            </div>

            <div className="mb-8 relative z-10">
              <label className="block text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-2">Tell us about your project</label>
              <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-ddk-blue focus:ring-1 focus:ring-ddk-blue disabled:opacity-50 transition-all font-medium min-h-[120px] resize-y" placeholder="Describe your vision, plot size, requirements..." disabled={status === "loading" || status === "success"}></textarea>
            </div>

            <button 
              onClick={handleSubmit} 
              disabled={status === "loading" || status === "success"}
              className={`relative z-10 w-full font-bold uppercase tracking-widest py-4.5 rounded-lg transition-all text-sm shadow-xl flex items-center justify-center gap-2 ${
                status === "success" ? "bg-green-600 text-white" : 
                status === "error" ? "bg-red-600 text-white" : 
                "bg-ddk-blue text-black hover:bg-ddk-blue-dark hover:-translate-y-1 disabled:-translate-y-0 disabled:opacity-50"
              }`}
            >
              {status === "idle" && "Send My Enquiry →"}
              {status === "loading" && (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Sending...
                </>
              )}
              {status === "success" && "✓ Enquiry Sent Successfully"}
              {status === "error" && "Error. Try WhatsApp instead."}
            </button>
            <p className="text-[0.65rem] text-ddk-gray text-center mt-5 tracking-wide uppercase font-medium relative z-10">🔒 Your information is safe. We respond within 24 hours.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
