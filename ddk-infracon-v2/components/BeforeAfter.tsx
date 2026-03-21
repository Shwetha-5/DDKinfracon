"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// BEFORE: Construction workers on site with steel rebars — browser-verified ✅
const BEFORE_IMG =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80";
// AFTER: Taj Hotel Puri — verified aerial exterior drone shot from TripAdvisor CDN ✅
// Shows full hotel complex, pools, gardens, Puri beach — confirmed exterior
const AFTER_IMG =
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/96/46/fe/taj-puri-resort-spa-offers.jpg?w=1200&h=-1&s=1";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition(Math.max(0, Math.min((x / rect.width) * 100, 100)));
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };
    const stop = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", stop);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", stop);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  return (
    <section className="py-16 md:py-28 bg-ddk-charcoal border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.18em] text-ddk-blue uppercase mb-3">
            Renovation &amp; Redevelopment
          </p>
          <h2
            className="font-bebas tracking-wide uppercase"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            Transformations <span className="text-ddk-blue">That Speak</span>
          </h2>
          <p className="text-ddk-gray mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            From laying steel rebars to a completed 5‑star luxury landmark —
            see how DDK Infracon built the Taj Hotel Puri.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="relative max-w-5xl mx-auto rounded-xl md:rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl select-none cursor-ew-resize"
          style={{ aspectRatio: "16/7" }}
        >
          {/* AFTER — completed Taj Hotel exterior */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={AFTER_IMG}
            alt="Taj Hotel Puri — Completed"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/70 backdrop-blur-md text-white font-bold text-[0.6rem] md:text-xs tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded uppercase border border-white/10">
            After — Taj Hotel Puri
          </div>

          {/* BEFORE clipped — Taj under construction */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={BEFORE_IMG}
              alt="Taj Hotel Puri — Construction Phase"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-black/70 backdrop-blur-md text-white font-bold text-[0.6rem] md:text-xs tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded uppercase border border-white/10">
              Before — Construction Site
            </div>
          </div>

          {/* Drag Handle */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-ddk-blue cursor-ew-resize flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,174,239,0.6)]"
            style={{ left: `calc(${sliderPosition}% - 1px)` }}
          >
            <div className="w-9 h-9 md:w-10 md:h-10 bg-ddk-blue rounded-full shadow-xl flex items-center justify-center border-2 border-white text-black">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-[0.7rem] text-ddk-gray mt-5 uppercase tracking-widest font-mono">
          ← Drag to compare · Taj Hotel Puri, Odisha
        </p>
      </div>
    </section>
  );
}
