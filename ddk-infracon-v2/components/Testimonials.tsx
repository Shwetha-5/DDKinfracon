"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  { name: "[CLIENT NAME]", quote: "An absolute pleasure working with the DDK team. The quality exceeds all expectations.", project: "[PROJECT NAME]", year: "2023" },
  { name: "[CLIENT NAME]", quote: "We were amazed by the precision and timelines they adhered to. Truly the best in Bhubaneswar.", project: "[PROJECT NAME]", year: "2024" },
  { name: "[CLIENT NAME]", quote: "From blueprint to handover, the transparency was remarkable. We love our new home.", project: "[PROJECT NAME]", year: "2022" },
  { name: "[CLIENT NAME]", quote: "Highly professional and skilled team. The architecture and materials used are top notch.", project: "[PROJECT NAME]", year: "2023" },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-ddk-black overflow-hidden relative">
      <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-ddk-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.18em] text-ddk-blue uppercase mb-3">Testimonials</p>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-7xl tracking-wide uppercase">
            What Our <span className="text-ddk-blue">Clients Say</span>
          </h2>
          <p className="text-ddk-gray mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            120+ families across Bhubaneswar have trusted DDK Infracon with their dream homes.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[100vw] overflow-x-hidden relative z-10">
        {/* Left/Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-ddk-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-ddk-black to-transparent z-20 pointer-events-none"></div>

        <motion.div 
          className="flex flex-nowrap gap-6 px-6 md:px-32 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {/* Double map for infinite scroll effect */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <div key={idx} className="w-[320px] md:w-[450px] bg-zinc-900 border-t-4 border-t-ddk-blue border-x border-b border-x-zinc-800 border-b-zinc-800 p-8 rounded-b-xl flex-shrink-0 cursor-grab active:cursor-grabbing hover:bg-zinc-800/80 transition-colors shadow-xl">
              <div className="flex items-start justify-between mb-8">
                 <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center flex-shrink-0 p-1">
                   <p className="text-[10px] text-zinc-500 font-mono text-center leading-tight">PHOTO<br/>PROJ</p>
                 </div>
                 <div className="flex gap-1 text-ddk-blue">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                   ))}
                 </div>
              </div>
              <p className="italic text-white/90 text-sm md:text-base leading-relaxed mb-6 font-medium">"{t.quote}"</p>
              <div>
                <h4 className="font-bold text-white text-lg tracking-wide">{t.name}</h4>
                <p className="text-xs font-mono text-ddk-blue uppercase mt-1 tracking-widest">Project: {t.project} · {t.year}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
