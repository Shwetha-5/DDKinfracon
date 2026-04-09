"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMG, TAJ, unsplashUrl, tripAdvisorUrl } from "@/lib/images";

const BEFORE_IMG = unsplashUrl(IMG.steelRebars, { w: 1200 });
const AFTER_IMG = tripAdvisorUrl(TAJ.exteriorAerial, { w: 1200 });

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPosition(Math.max(0, Math.min((x / rect.width) * 100, 100)));
    },
    []
  );

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };
    const stop = () => setIsDragging(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", stop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stop);
    };
  }, [isDragging, handleMove]);

  const startDrag = useCallback(() => setIsDragging(true), []);

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
            see how DDK Infracon built Taj Hotel Puri.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          ref={containerRef}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          className="relative max-w-5xl mx-auto rounded-xl md:rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl select-none cursor-ew-resize"
          style={{ aspectRatio: "16/7" }}
          role="slider"
          aria-label="Before and after comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(sliderPosition)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setSliderPosition((p) => Math.max(0, p - 2));
            if (e.key === "ArrowRight") setSliderPosition((p) => Math.min(100, p + 2));
          }}
        >
          {/* AFTER — completed Taj Hotel exterior */}
          <Image
            src={AFTER_IMG}
            alt="Taj Hotel Puri — Completed"
            fill
            className="object-cover"
            draggable={false}
            sizes="(max-width: 1280px) 100vw, 1280px"
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
            <Image
              src={BEFORE_IMG}
              alt="Taj Hotel Puri — Construction Phase"
              fill
              className="object-cover"
              draggable={false}
              sizes="(max-width: 1280px) 100vw, 1280px"
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
