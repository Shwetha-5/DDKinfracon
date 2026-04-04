"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TAJ, sanityUrl } from "@/lib/images";

const TAJ_STRIP = [
  { src: sanityUrl(TAJ.interiors, { w: 700 }), alt: "Taj Puri interiors" },
  { src: sanityUrl(TAJ.gardens, { w: 700 }), alt: "Taj Puri gardens" },
  { src: sanityUrl(TAJ.bayView, { w: 700 }), alt: "Taj Puri bay view" },
] as const;

const STATS = [
  { val: "DEC 2024", lbl: "Completion Date" },
  { val: "4.2L", lbl: "Sq.Ft Built-up Area" },
  { val: "90+", lbl: "Rooms & Suites" },
  { val: "IGBC", lbl: "Gold Certified" },
] as const;

const BADGES = ["IGBC Gold Certified", "4.2 Lakh Sq.Ft", "Dec 2024"] as const;

export function SignatureProject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="signature"
      className="bg-ddk-black overflow-hidden pt-14 md:pt-24 relative"
      ref={containerRef}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.18em] text-ddk-blue uppercase mb-3">
            Signature Project · Flagship
          </p>
          <h2
            className="font-bebas tracking-wide uppercase"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
          >
            Featured <span className="text-ddk-blue">Landmark</span>
          </h2>
        </motion.div>
      </div>

      {/* Parallax Photo */}
      <div
        className="relative overflow-hidden border-y border-white/5"
        style={{ height: "clamp(280px, 68vh, 680px)" }}
      >
        <motion.div className="absolute inset-0 w-full h-[130%]" style={{ y }}>
          <Image
            src={sanityUrl(TAJ.bayView, { w: 1920, q: 85 })}
            alt="Taj Hotel Puri — DDK Infracon Flagship Project"
            fill
            className="object-cover"
            loading="lazy"
            sizes="100vw"
          />
        </motion.div>

        <div
          className="absolute inset-0 flex items-end pb-14 px-6 md:px-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.80) 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="inline-flex items-center gap-1.5 border text-ddk-blue text-[0.65rem] font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4 w-fit bg-ddk-blue/20 border-ddk-blue/30"
            >
              LUXURY · IGBC GOLD CERTIFIED
            </span>
            <h2
              className="font-bebas text-white drop-shadow-2xl leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
            >
              TAJ HOTEL
            </h2>
            <p className="text-ddk-blue font-bold tracking-widest uppercase mt-3 text-base drop-shadow-md">
              Swargadwar, Puri, Odisha
            </p>
          </motion.div>
        </div>
      </div>

      {/* Details Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none bg-ddk-blue/5" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bebas text-4xl tracking-wide mb-6">
              Our Most Iconic Project
            </h3>
            <p className="leading-relaxed text-sm md:text-base mb-8 text-white/75">
              A 5-star luxury hospitality landmark on the shores of Puri, this
              project showcases DDK Infracon&apos;s capability in handling complex,
              high-end commercial construction. Featuring world-class amenities,
              Kalinga architecture, and sustainable design principles — Taj Hotel
              stands as a testament to our commitment to excellence.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="text-xs tracking-widest uppercase text-ddk-blue font-bold bg-ddk-blue/10 border border-ddk-blue/20 px-4 py-2 rounded-md"
                >
                  {b}
                </span>
              ))}
            </div>
            <Link
              href="#gallery"
              className="inline-flex items-center gap-2 border-[1.5px] border-white/20 hover:border-ddk-blue hover:text-ddk-blue text-white font-bold uppercase tracking-widest py-3.5 px-8 rounded transition-all hover:-translate-y-0.5 text-xs"
            >
              View All Projects →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-6">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="bg-ddk-charcoal border border-white/5 rounded-xl p-6 flex flex-col justify-center"
                >
                  <div className="font-bebas text-4xl text-ddk-blue mb-1">
                    {s.val}
                  </div>
                  <div className="text-[0.65rem] text-ddk-gray font-bold tracking-widest uppercase">
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Three-Photo Strip */}
      <div className="grid grid-cols-3 gap-0.5 md:gap-1">
        {TAJ_STRIP.map((img) => (
          <div key={img.src} className="relative" style={{ height: "clamp(100px, 18vw, 240px)" }}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              loading="lazy"
              sizes="33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
