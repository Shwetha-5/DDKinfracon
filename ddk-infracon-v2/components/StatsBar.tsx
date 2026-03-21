"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  
  const displayValue = useTransform(springValue, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function StatsBar() {
  return (
    <section id="stats" className="w-full bg-ddk-charcoal border-y border-white/10 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 md:border-x border-white/10 max-w-7xl mx-auto">
        {SITE_CONFIG.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center p-8 md:py-12 relative overflow-hidden group">
            <div className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-none font-bebas text-ddk-blue mb-2 flex items-center">
              <AnimatedCounter value={stat.value} />
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                {stat.suffix}
              </motion.span>
            </div>
            <div className="text-xs md:text-sm text-ddk-gray whitespace-pre-line text-center font-medium tracking-wide">
              {stat.label}
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-1 bg-ddk-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
