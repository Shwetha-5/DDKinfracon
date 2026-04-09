"use client";

import { useState, useCallback, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SITE_CONFIG } from "@/lib/constants";
import { PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon, ChevronDownIcon } from "@/lib/icons";

type FormStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  projectType: "",
  budget: "",
  city: "",
  message: "",
} as const;

type FormData = typeof INITIAL_FORM;

const INPUT_CLASS =
  "w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-ddk-blue focus:ring-1 focus:ring-ddk-blue disabled:opacity-50 transition-all font-medium";

const LABEL_CLASS =
  "block text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-2";

const ICON_WRAPPER_CLASS =
  "w-12 h-12 rounded-xl bg-ddk-blue/10 border border-ddk-blue/20 flex items-center justify-center shrink-0 text-ddk-blue [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-current [&>svg]:fill-none [&>svg]:stroke-[1.5]";

export function Contact() {
  const [formData, setFormData] = useState<FormData>({ ...INITIAL_FORM });
  const [status, setStatus] = useState<FormStatus>("idle");

  const isDisabled = status === "loading" || status === "success";

  // Single handler for all input fields — avoids creating a new closure per field per render
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (!formData.firstName || !formData.phone) {
        alert("Please fill in at least your First Name and Phone Number.");
        return;
      }

      setStatus("loading");
      try {
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
        setFormData({ ...INITIAL_FORM });
      } catch (error) {
        console.error("EmailJS error:", error);
        setStatus("error");
      }
    },
    [formData]
  );

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-ddk-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#075E54] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/20 rounded-full blur-[60px] pointer-events-none" />

          <div className="flex items-center gap-5 text-white font-bold text-lg leading-tight relative z-10">
            <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center shrink-0">
              <WhatsAppIcon width={28} height={28} fill="#25D366" />
            </div>
            <span>Chat with us instantly on WhatsApp — we respond within minutes</span>
          </div>
          <a
            href={SITE_CONFIG.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 shrink-0 bg-[#25D366] text-[#075E54] hover:bg-white hover:text-[#075E54] font-bold uppercase tracking-widest text-[0.7rem] sm:text-xs px-6 py-4 rounded-lg shadow-lg hover:-translate-y-1 transition-all"
          >
            Open WhatsApp Chat →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-[0.18em] text-ddk-blue uppercase mb-3">Let&apos;s Build Together</p>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase mb-5 md:mb-6">
              Start Your<br /><span className="text-ddk-blue">Project Today</span>
            </h2>
            <p className="text-ddk-gray text-sm md:text-base leading-relaxed mb-12 max-w-sm">
              Get in touch for a free consultation. We&apos;ll discuss your vision, budget, and timeline to create a tailored construction plan.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 border-b border-white/5 pb-6">
                <div className={ICON_WRAPPER_CLASS}>
                  <PhoneIcon />
                </div>
                <div>
                  <h4 className="text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-1">Phone / WhatsApp</h4>
                  <div className="font-medium text-[0.95rem]">
                    {SITE_CONFIG.contact.phone[0]}<br />{SITE_CONFIG.contact.phone[1]}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 border-b border-white/5 pb-6">
                <div className={ICON_WRAPPER_CLASS}>
                  <MailIcon />
                </div>
                <div>
                  <h4 className="text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-1">Email</h4>
                  <div className="font-medium text-[0.95rem]">
                    {SITE_CONFIG.contact.email[0]}<br />{SITE_CONFIG.contact.email[1]}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 border-b border-white/5 pb-6">
                <div className={ICON_WRAPPER_CLASS}>
                  <MapPinIcon />
                </div>
                <div>
                  <h4 className="text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-1">Office Address</h4>
                  <div className="font-medium text-[0.95rem] text-balance max-w-[280px] leading-relaxed">
                    {SITE_CONFIG.contact.address}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form — uses proper <form> element for accessibility & native validation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-ddk-black border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-ddk-blue/5 rounded-full blur-[80px] pointer-events-none" />

            <h3 className="font-bebas text-3xl md:text-4xl tracking-wide mb-8">Request a Free Consultation</h3>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 relative z-10">
                <div>
                  <label htmlFor="firstName" className={LABEL_CLASS}>First Name</label>
                  <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} className={INPUT_CLASS} placeholder="Rahul" disabled={isDisabled} required />
                </div>
                <div>
                  <label htmlFor="lastName" className={LABEL_CLASS}>Last Name</label>
                  <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} className={INPUT_CLASS} placeholder="Sharma" disabled={isDisabled} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 relative z-10">
                <div>
                  <label htmlFor="phone" className={LABEL_CLASS}>Phone Number</label>
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={INPUT_CLASS} placeholder="+91 98765 43210" disabled={isDisabled} required />
                </div>
                <div>
                  <label htmlFor="email" className={LABEL_CLASS}>Email Address</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={INPUT_CLASS} placeholder="rahul@email.com" disabled={isDisabled} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 relative z-10">
                <div>
                  <label htmlFor="projectType" className={LABEL_CLASS}>Project Type</label>
                  <div className="relative">
                    <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className={`${INPUT_CLASS} appearance-none cursor-pointer`} disabled={isDisabled}>
                      <option value="">Select type...</option>
                      <option>High-Rise Apartment</option>
                      <option>Luxury Villa</option>
                      <option>Smart Home</option>
                      <option>Renovation</option>
                      <option>Commercial</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ddk-gray">
                      <ChevronDownIcon width={12} height={12} />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className={LABEL_CLASS}>Budget Range</label>
                  <div className="relative">
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={`${INPUT_CLASS} appearance-none cursor-pointer`} disabled={isDisabled}>
                      <option value="">Select budget...</option>
                      <option>₹25L – ₹50L</option>
                      <option>₹50L – ₹1Cr</option>
                      <option>₹1Cr – ₹3Cr</option>
                      <option>₹3Cr – ₹10Cr</option>
                      <option>₹10Cr+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ddk-gray">
                      <ChevronDownIcon width={12} height={12} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-5 relative z-10">
                <label htmlFor="city" className={LABEL_CLASS}>City / Location</label>
                <input id="city" name="city" type="text" value={formData.city} onChange={handleChange} className={INPUT_CLASS} placeholder="Bhubaneswar" disabled={isDisabled} />
              </div>

              <div className="mb-8 relative z-10">
                <label htmlFor="message" className={LABEL_CLASS}>Tell us about your project</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={`${INPUT_CLASS} min-h-[120px] resize-y`} placeholder="Describe your vision, plot size, requirements..." disabled={isDisabled} />
              </div>

              <button
                type="submit"
                disabled={isDisabled}
                className={`relative z-10 w-full font-bold uppercase tracking-widest py-4.5 rounded-lg transition-all text-sm shadow-xl flex items-center justify-center gap-2 ${
                  status === "success"
                    ? "bg-green-600 text-white"
                    : status === "error"
                    ? "bg-red-600 text-white"
                    : "bg-ddk-blue text-black hover:bg-ddk-blue-dark hover:-translate-y-1 disabled:-translate-y-0 disabled:opacity-50"
                }`}
              >
                {status === "idle" && "Send My Enquiry →"}
                {status === "loading" && (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                )}
                {status === "success" && "✓ Enquiry Sent Successfully"}
                {status === "error" && "Error. Try WhatsApp instead."}
              </button>
              <p className="text-[0.65rem] text-ddk-gray text-center mt-5 tracking-wide uppercase font-medium relative z-10">
                🔒 Your information is safe. We respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
