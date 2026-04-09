"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#gallery" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ticking = useRef(false);

  // Throttled scroll handler using requestAnimationFrame — fires at most once per frame
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking.current = false;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [mobileMenuOpen]);

  const closeMobile = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-colors duration-300",
        isScrolled
          ? "bg-ddk-black/90 backdrop-blur-xl border-b border-white/5"
          : "bg-ddk-black/60 backdrop-blur-xl border-b border-white/5"
      )}
      role="banner"
    >
      <Link href="#" className="flex items-center gap-2.5 font-bebas text-2xl z-50" aria-label="DDK Infracon — Home">
        <div className="relative w-10 h-10 flex-shrink-0 rounded-md overflow-hidden">
          <Image
            src="/logo.png"
            alt="DDK Infracon Logo"
            fill
            className="object-contain"
            priority
            sizes="40px"
          />
        </div>
        <span>
          DDK <span className="text-ddk-blue">INFRACON</span>
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-white/75 hover:text-white transition-colors tracking-wide relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-ddk-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <Link
          href="#contact"
          className="bg-ddk-blue hover:bg-ddk-blue-dark text-black text-sm font-bold tracking-widest uppercase py-2.5 px-6 rounded transition-all hover:-translate-y-0.5"
        >
          Get a Quote
        </Link>
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 focus:outline-none z-50 p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
      >
        <span className={cn("w-6 h-0.5 bg-white transition-transform", mobileMenuOpen && "translate-y-2 rotate-45")} />
        <span className={cn("w-6 h-0.5 bg-white transition-opacity", mobileMenuOpen && "opacity-0")} />
        <span className={cn("w-6 h-0.5 bg-white transition-transform", mobileMenuOpen && "-translate-y-2 -rotate-45")} />
      </button>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-ddk-black/95 backdrop-blur-2xl z-40 flex flex-col pt-24 px-6 md:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMobile}
              className="text-xl font-medium border-b border-white/5 pb-4"
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={closeMobile}
            className="bg-ddk-blue text-black text-center text-sm font-bold tracking-widest uppercase py-4 rounded mt-4 cursor-pointer hover:bg-ddk-blue-dark transition-colors"
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
