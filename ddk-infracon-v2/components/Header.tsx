"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#gallery" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-colors duration-300",
        isScrolled ? "bg-ddk-black/90 backdrop-blur-xl border-b border-white/5" : "bg-ddk-black/60 backdrop-blur-xl border-b border-white/5"
      )}
    >
      <Link href="#" className="flex items-center gap-2.5 font-bebas text-2xl z-50">
        <div className="relative w-8 h-8 flex-shrink-0">
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <polygon points="18,2 34,18 18,34 2,18" fill="#00AEEF" fillOpacity=".15" stroke="#00AEEF" strokeWidth="1.5"/>
            <polygon points="18,6 30,18 18,30 6,18" fill="#00AEEF" fillOpacity=".3"/>
            <line x1="10" y1="18" x2="26" y2="18" stroke="#F4A020" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="10" x2="18" y2="26" stroke="#F4A020" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <span>
          DDK <span className="text-ddk-blue">INFRACON</span>
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-white/75 hover:text-white transition-colors tracking-wide relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-ddk-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
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
        aria-label="Toggle menu"
      >
        <span className={cn("w-6 h-0.5 bg-white transition-transform", mobileMenuOpen && "translate-y-2 rotate-45")}></span>
        <span className={cn("w-6 h-0.5 bg-white transition-opacity", mobileMenuOpen && "opacity-0")}></span>
        <span className={cn("w-6 h-0.5 bg-white transition-transform", mobileMenuOpen && "-translate-y-2 -rotate-45")}></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-ddk-black/95 backdrop-blur-2xl z-40 flex flex-col pt-24 px-6 md:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-medium border-b border-white/5 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-ddk-blue text-black text-center text-sm font-bold tracking-widest uppercase py-4 rounded mt-4 cursor-pointer hover:bg-ddk-blue-dark transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
