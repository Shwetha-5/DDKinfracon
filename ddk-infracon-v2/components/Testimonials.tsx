"use client";

import { motion } from "framer-motion";
import { StarFilledIcon } from "@/lib/icons";

const TESTIMONIALS = [
  { name: "[CLIENT NAME]", quote: "An absolute pleasure working with the DDK team. The quality exceeds all expectations.", project: "[PROJECT NAME]", year: "2023" },
  { name: "[CLIENT NAME]", quote: "We were amazed by the precision and timelines they adhered to. Truly the best in Bhubaneswar.", project: "[PROJECT NAME]", year: "2024" },
  { name: "[CLIENT NAME]", quote: "From blueprint to handover, the transparency was remarkable. We love our new home.", project: "[PROJECT NAME]", year: "2022" },
  { name: "[CLIENT NAME]", quote: "Highly professional and skilled team. The architecture and materials used are top notch.", project: "[PROJECT NAME]", year: "2023" },
] as const;

// Pre-rendered star array (avoids creating 5-element arrays on every render for every card)
const STARS = Array.from({ length: 5 });

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-ddk-black overflow-hidden relative">
      <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-ddk-blue/5 rounded-full blur-[150px] pointer-events-none" />

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
        {/* Fade gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-ddk-black to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-ddk-black to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex flex-nowrap gap-6 px-6 md:px-32 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {/* Double array for infinite scroll effect */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <article
              key={idx}
              className="w-[320px] md:w-[450px] bg-zinc-900 border-t-4 border-t-ddk-blue border-x border-b border-x-zinc-800 border-b-zinc-800 p-8 rounded-b-xl flex-shrink-0 cursor-grab active:cursor-grabbing hover:bg-zinc-800/80 transition-colors shadow-xl"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center flex-shrink-0 p-1">
                  <p className="text-[10px] text-zinc-500 font-mono text-center leading-tight">
                    PHOTO<br />PROJ
                  </p>
                </div>
                <div className="flex gap-1 text-ddk-blue" aria-label="5 star rating">
                  {STARS.map((_, i) => (
                    <StarFilledIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="italic text-white/90 text-sm md:text-base leading-relaxed mb-6 font-medium">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <h4 className="font-bold text-white text-lg tracking-wide">{t.name}</h4>
                <p className="text-xs font-mono text-ddk-blue uppercase mt-1 tracking-widest">
                  Project: {t.project} · {t.year}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
