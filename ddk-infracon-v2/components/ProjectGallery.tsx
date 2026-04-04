"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, type ProjectType } from "@/lib/projects";

const FILTERS: { label: string; value: ProjectType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "High-Rise", value: "highrise" },
  { label: "Villas", value: "villa" },
  { label: "Commercial", value: "commercial" },
  { label: "Interiors", value: "interior" },
  { label: "Under Construction", value: "construction" },
];

// Aspect ratios for the masonry grid — deterministic by index
const ASPECT_RATIOS = ["1/1", "3/4", "4/3"] as const;

export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all");
  const [visibleCount, setVisibleCount] = useState(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Memoize filtered list — avoids re-filtering on every render
  const filteredProjects = useMemo(
    () => PROJECTS.filter((p) => activeFilter === "all" || p.type === activeFilter),
    [activeFilter]
  );
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Stabilized lightbox handlers
  const openLightbox = useCallback((idx: number) => {
    setLightboxIndex(idx);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const nextLightbox = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % filteredProjects.length : null
      );
    },
    [filteredProjects.length]
  );

  const prevLightbox = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setLightboxIndex((prev) =>
        prev !== null
          ? (prev - 1 + filteredProjects.length) % filteredProjects.length
          : null
      );
    },
    [filteredProjects.length]
  );

  // Keyboard navigation for lightbox (← → Esc)
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      // Cleanup body overflow on unmount
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  const handleFilterChange = useCallback((value: ProjectType | "all") => {
    setActiveFilter(value);
    setVisibleCount(12);
  }, []);

  return (
    <section id="gallery" className="py-16 md:py-24 lg:py-32 bg-ddk-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.18em] text-ddk-blue uppercase mb-3">Our Work</p>
          <h2 className="font-bebas tracking-wide uppercase" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
            120+ Buildings. <span className="text-ddk-blue block sm:inline">Every One A Story.</span>
          </h2>
          <p className="text-ddk-gray mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            From compact family homes to towering residential complexes — built across Bhubaneswar and Odisha.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12 px-2" role="tablist" aria-label="Project type filter">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              role="tab"
              aria-selected={activeFilter === filter.value}
              className={`text-[0.65rem] md:text-xs font-bold tracking-widest uppercase px-4 py-2 md:px-5 md:py-2.5 rounded-full border-[1.5px] transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-ddk-blue border-ddk-blue text-black"
                  : "bg-transparent border-white/20 text-white/65 hover:border-ddk-blue hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          <AnimatePresence>
            {visibleProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer border border-white/5 group"
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(idx);
                  }
                }}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  width={600}
                  height={600}
                  className="w-full block object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ aspectRatio: ASPECT_RATIOS[idx % 3] }}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)" }}
                >
                  <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bebas text-2xl text-white tracking-wide">{project.title}</h4>
                    <p className="text-[0.7rem] text-ddk-blue uppercase font-bold tracking-wider mt-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ddk-blue flex-shrink-0" />
                      {project.location} · {project.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisibleCount((c) => c + 12)}
              className="inline-flex items-center gap-2 border-[1.5px] border-ddk-blue/40 text-ddk-blue hover:bg-ddk-blue hover:text-black font-bold uppercase tracking-widest py-3.5 px-8 rounded transition-all hover:-translate-y-0.5 text-xs mb-3"
            >
              Load More Projects ↓
            </button>
            <p className="text-[0.75rem] text-ddk-gray font-medium uppercase tracking-wider">
              Showing {visibleProjects.length} of {filteredProjects.length} projects · 120+ Buildings
            </p>
          </div>
        )}
      </div>

      {/* Lightbox — keyboard navigable */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-16"
            style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(12px)" }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${filteredProjects[lightboxIndex].title} — full view`}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white text-4xl z-50 leading-none transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <button
              className="absolute left-2 lg:left-8 text-white/40 hover:text-ddk-blue p-4 text-6xl z-50 transition-colors leading-none"
              onClick={prevLightbox}
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={filteredProjects[lightboxIndex].src.replace("w=600", "w=1200")}
                alt={filteredProjects[lightboxIndex].title}
                width={1200}
                height={800}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                priority
                sizes="90vw"
              />
              <div className="text-center mt-6">
                <h4 className="font-bebas text-4xl text-white tracking-wide">
                  {filteredProjects[lightboxIndex].title}
                </h4>
                <p className="text-sm font-mono text-ddk-blue mt-1 tracking-widest uppercase">
                  {filteredProjects[lightboxIndex].location} · {filteredProjects[lightboxIndex].year}
                </p>
              </div>
            </div>

            <button
              className="absolute right-2 lg:right-8 text-white/40 hover:text-ddk-blue p-4 text-6xl z-50 transition-colors leading-none"
              onClick={nextLightbox}
              aria-label="Next image"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
