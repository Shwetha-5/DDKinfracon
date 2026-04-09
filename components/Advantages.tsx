"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ShieldIcon, ClockIcon, StarIcon, UsersIcon } from "@/lib/icons";

interface Advantage {
  title: string;
  desc: string;
  icon: ReactNode;
}

const ADVANTAGES: Advantage[] = [
  {
    title: "Quality Assurance",
    desc: "ISO-certified processes and premium materials ensure long-lasting structural durability.",
    icon: <ShieldIcon />,
  },
  {
    title: "On-Time Delivery",
    desc: "We respect your deadlines and complete 95% of projects ahead of schedule.",
    icon: <ClockIcon />,
  },
  {
    title: "Award-Winning Team",
    desc: "Industry-recognized architects and engineers with 100+ years combined experience.",
    icon: <StarIcon />,
  },
  {
    title: "Client-Centric",
    desc: "Dedicated project managers and 24/7 support throughout your construction journey.",
    icon: <UsersIcon />,
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="py-16 md:py-24 lg:py-32 bg-ddk-charcoal border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.18em] text-ddk-blue uppercase mb-3">Why Choose Us</p>
          <h2 className="font-bebas tracking-wide uppercase" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
            The DDK Infracon <span className="text-ddk-blue">Advantage</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {ADVANTAGES.map((adv, idx) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900 border border-white/5 rounded-2xl p-6 md:p-8 text-center hover:border-ddk-blue hover:shadow-[0_0_30px_rgba(0,174,239,0.1)] transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ddk-blue/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-ddk-blue/10 mb-5 md:mb-6 mx-auto flex items-center justify-center text-ddk-blue group-hover:scale-110 group-hover:bg-ddk-blue/20 transition-all duration-300 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7 [&>svg]:stroke-current [&>svg]:fill-none [&>svg]:stroke-[1.5]">
                {adv.icon}
              </div>
              <h3 className="font-bebas text-xl md:text-2xl tracking-wide text-white mb-2 md:mb-3">{adv.title}</h3>
              <p className="text-[0.78rem] md:text-sm text-ddk-gray leading-relaxed text-balance">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
