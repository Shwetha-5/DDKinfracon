"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full flex items-center overflow-hidden"
      style={{ height: "100svh", minHeight: "560px" }}
    >
      {/* Background — Taj Hotel Puri, verified aerial exterior (TripAdvisor CDN) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/96/46/fe/taj-puri-resort-spa-offers.jpg?w=1920&h=-1&s=1')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
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
        <div style={{ maxWidth: "680px" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-mono uppercase mb-4"
            style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#00AEEF" }}
          >
            India&apos;s Premier Builder · Bhubaneswar, Odisha
          </motion.p>

          <motion.h1
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="font-bebas text-white mb-4 md:mb-5"
            style={{
              fontSize: "clamp(3.5rem, 11vw, 9.5rem)",
              lineHeight: 0.95,
              letterSpacing: "0.03em",
            }}
          >
            BUILD <span style={{ color: "#00AEEF" }}>BOLD.</span>
            <br />
            BUILD <span style={{ color: "#00AEEF" }}>RIGHT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-10"
            style={{ color: "rgba(255,255,255,0.78)", maxWidth: "520px" }}
          >
            Delivering world-class construction excellence.{" "}
            <strong style={{ color: "#00AEEF", fontWeight: 700 }}>
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
              className="inline-flex items-center gap-2 font-bold uppercase py-3.5 px-6 md:py-4 md:px-8 rounded text-xs md:text-sm transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              style={{
                background: "#00AEEF",
                color: "#000",
                letterSpacing: "0.08em",
              }}
            >
              Start Your Project →
            </Link>
            <Link
              href="#gallery"
              className="inline-flex items-center gap-2 font-semibold uppercase py-3.5 px-6 md:py-4 md:px-8 rounded text-xs md:text-sm transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              style={{
                border: "1.5px solid rgba(255,255,255,0.35)",
                color: "#fff",
                letterSpacing: "0.08em",
              }}
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
