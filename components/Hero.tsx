"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { unsplashUrl, IMG } from "@/lib/images";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full flex items-center overflow-hidden"
      style={{ height: "100svh", minHeight: "560px" }}
      aria-label="Hero section"
    >
      {/* Background — Next.js Image for LCP optimization, WebP/AVIF, blur placeholder */}
      <Image
        src={unsplashUrl(IMG.heroBackground, { w: 1920, q: 85 })}
        alt="Bhubaneswar city skyline"
        fill
        priority
        quality={85}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark directional overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.70) 55%, rgba(0,0,0,0.20) 100%)",
        }}
      />

      {/* Blueprint grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,174,239,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-20">
        <div className="max-w-[680px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-mono uppercase mb-4 text-[0.65rem] tracking-[0.2em] text-ddk-blue"
          >
            India&apos;s Premier Builder · Bhubaneswar, Odisha
          </motion.p>

          <motion.h1
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="font-bebas text-white mb-4 md:mb-5 leading-[0.95] tracking-[0.03em]"
            style={{ fontSize: "clamp(3.5rem, 11vw, 9.5rem)" }}
          >
            BUILD <span className="text-ddk-blue">BOLD.</span>
            <br />
            BUILD <span className="text-ddk-blue">RIGHT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-10 text-white/[0.78] max-w-[520px]"
          >
            Delivering world-class construction excellence.{" "}
            <strong className="text-ddk-blue font-bold">
              120+ residential buildings
            </strong>{" "}
            delivered across Bhubaneswar — from luxury highrises to iconic
            commercial landmarks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 font-bold uppercase py-3.5 px-6 md:py-4 md:px-8 rounded text-xs md:text-sm tracking-[0.08em] bg-ddk-blue text-black transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Start Your Project →
            </Link>
            <Link
              href="#gallery"
              className="inline-flex items-center gap-2 font-semibold uppercase py-3.5 px-6 md:py-4 md:px-8 rounded text-xs md:text-sm tracking-[0.08em] border-[1.5px] border-white/35 text-white transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
