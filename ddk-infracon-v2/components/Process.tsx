"use client";

import { motion } from "framer-motion";

// ONLY browser-verified thumbnail images used here.
// photo-1503387762... = architect drawing blueprint ✅
// photo-1504307651... = construction workers with rebars ✅
// photo-1719993919... = Indian active construction site ✅
// photo-1663985139... = Indian apartment building ✅
// TAJ_LOBBY = real Taj Hotel Puri lobby ✅

const STEPS = [
  {
    num: "01",
    title: "Consultation & Planning",
    desc: "Understanding your vision, budget, and project requirements thoroughly.",
    thumb: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=160&q=80", // architect drawing blueprint ✅
  },
  {
    num: "02",
    title: "Architectural Design",
    desc: "Creating detailed blueprints and 3D visualizations of your project.",
    thumb: "https://images.unsplash.com/photo-1663985139222-6af2f8646104?auto=format&fit=crop&w=160&q=80", // Indian apartment building ✅
  },
  {
    num: "03",
    title: "Construction Execution",
    desc: "Building with precision using premium quality materials and methods.",
    thumb: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=160&q=80", // construction workers with rebars ✅
  },
  {
    num: "04",
    title: "Quality Control",
    desc: "Rigorous testing and inspection at every stage of construction.",
    thumb: "https://images.unsplash.com/photo-1719993919800-630021837af9?auto=format&fit=crop&w=160&q=80", // Indian active construction site ✅
  },
  {
    num: "05",
    title: "Delivery & Handover",
    desc: "Final walkthrough, documentation, and seamless possession process.",
    thumb: "https://cdn.sanity.io/images/ocl5w36p/prod5/6ca9892a37d63ea368fbfa6506286e37164edcf7-3840x1860.jpg?w=160&auto=format&q=80", // Real Taj Puri lobby/handover ✅
  },
];

export function Process() {
  return (
    <section id="process" className="py-16 md:py-24 lg:py-32 bg-ddk-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.18em] text-ddk-blue uppercase mb-3">How We Work</p>
          <h2 className="font-bebas tracking-wide uppercase" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
            Our <span className="text-ddk-blue">5-Step</span> Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1.5px] bg-white/10">
            <motion.div
              className="h-full bg-ddk-blue"
              style={{ boxShadow: "0 0 10px rgba(0,174,239,0.5)" }}
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-5 lg:gap-0 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Mobile vertical connector */}
                {i !== STEPS.length - 1 && (
                  <div className="sm:hidden absolute top-[88px] bottom-[-28px] left-[43px] w-[1.5px] bg-white/10" />
                )}

                <div className="flex flex-col items-center flex-shrink-0 z-10 lg:mb-8">
                  <div className="w-[80px] h-[80px] md:w-[88px] md:h-[88px] rounded-full overflow-hidden border-4 border-ddk-charcoal shadow-xl group-hover:border-ddk-blue transition-colors duration-300 flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.thumb} alt={step.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-ddk-blue text-black font-bold font-mono text-[0.65rem] md:text-xs flex items-center justify-center -mt-4 border-[3px] border-ddk-black relative z-20"
                    style={{ boxShadow: "0 0 15px rgba(0,174,239,0.3)" }}
                  >
                    {step.num}
                  </div>
                </div>

                <div className="pt-1 lg:pt-0">
                  <h4 className="font-bebas text-xl md:text-2xl tracking-wide mb-1.5 text-white group-hover:text-ddk-blue transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[0.78rem] text-ddk-gray leading-relaxed max-w-[260px] lg:mx-auto">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
