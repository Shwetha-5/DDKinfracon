"use client";

import { motion } from "framer-motion";

// ─── ONLY BROWSER-VERIFIED IMAGES ────────────────────────────────────────────
const UN_APARTMENT   = "https://images.unsplash.com/photo-1663985139222-6af2f8646104?auto=format&fit=crop&w=800&q=80"; // Indian apartment high-rise ✅
const UN_VILLA       = "https://images.unsplash.com/photo-1744311971549-9c529b60b98a?auto=format&fit=crop&w=800&q=80"; // Indian traditional-modern villa ✅
const UN_RESIDENTIAL = "https://images.unsplash.com/photo-1674821770946-4f774b1907d7?auto=format&fit=crop&w=800&q=80"; // Indian residential society ✅
const UN_SITE        = "https://images.unsplash.com/photo-1719993919800-630021837af9?auto=format&fit=crop&w=800&q=80"; // Indian construction site ✅
const UN_HIGHRISE    = "https://images.unsplash.com/photo-1636810163038-5d8d8996c561?auto=format&fit=crop&w=800&q=80"; // Indian city skyline of high-rises ✅
const TAJ_GARDENS    = "https://cdn.sanity.io/images/ocl5w36p/prod5/05eb36b15cd8e08a210cf312bc56f971c4ed50e9-3840x1860.jpg?w=800&auto=format&q=80"; // Real Taj Hotel Puri ✅

const SERVICES_DATA = [
  {
    title: "High-Rise Apartments",
    desc: "Premium multi-story residential complexes with modern amenities and smart infrastructure.",
    img: UN_APARTMENT,
    icon: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /></svg>,
  },
  {
    title: "Luxury Villas",
    desc: "Bespoke independent homes designed for elegance, comfort, and privacy.",
    img: UN_VILLA,
    icon: <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  },
  {
    title: "Smart Homes",
    desc: "Technologically integrated homes with automation, security, and energy efficiency.",
    img: UN_RESIDENTIAL,
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>,
  },
  {
    title: "Renovation & Redevelopment",
    desc: "Transform existing structures into modern spaces with expert remodeling solutions.",
    img: UN_SITE,
    icon: <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
  },
  {
    title: "Commercial Construction",
    desc: "Office complexes, retail spaces, and mixed-use developments built for business success.",
    img: UN_HIGHRISE,
    icon: <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="15" rx="1" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" /></svg>,
  },
  {
    title: "Architectural Design",
    desc: "Innovative design services that blend aesthetics with functional engineering excellence.",
    img: TAJ_GARDENS,
    icon: <svg viewBox="0 0 24 24"><line x1="2" y1="20" x2="22" y2="20" /><path d="M5 20V8l7-5 7 5v12" /><path d="M9 20v-5h6v5" /></svg>,
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-ddk-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.18em] text-ddk-blue uppercase mb-3">Our Areas of Expertise</p>
          <h2 className="font-bebas tracking-wide uppercase" style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            Comprehensive <span className="text-ddk-blue">Construction</span> Services
          </h2>
          <p className="text-ddk-gray mt-4 text-sm md:text-base leading-relaxed">
            From concept to completion, we handle every aspect of your project with precision and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-ddk-blue transition-all duration-500"
              style={{ height: "clamp(280px, 35vw, 360px)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.15) 100%)" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 flex flex-col">
                <div className="w-11 h-11 bg-ddk-blue/15 border border-ddk-blue/30 rounded-lg flex items-center justify-center mb-4 text-ddk-blue [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-current [&>svg]:fill-none [&>svg]:stroke-[1.5]">
                  {service.icon}
                </div>
                <h3 className="font-bold text-base md:text-lg mb-1.5 text-white">{service.title}</h3>
                <p className="text-[0.78rem] md:text-[0.82rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="text-ddk-blue text-xs font-bold uppercase tracking-wider flex items-center gap-2 mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:underline"
                >
                  Get a Quote →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
