"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMG, unsplashUrl } from "@/lib/images";
import {
  BuildingIcon,
  HomeIcon,
  SunIcon,
  WrenchIcon,
  BriefcaseIcon,
  BlueprintIcon,
} from "@/lib/icons";

interface ServiceItem {
  title: string;
  desc: string;
  img: string;
  icon: ReactNode;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    title: "High-Rise Apartments",
    desc: "Premium multi-story residential complexes with modern amenities and smart infrastructure.",
    img: unsplashUrl(IMG.apartment),
    icon: <BuildingIcon />,
  },
  {
    title: "Luxury Villas",
    desc: "Bespoke independent homes designed for elegance, comfort, and privacy.",
    img: unsplashUrl(IMG.villa),
    icon: <HomeIcon />,
  },
  {
    title: "Smart Homes",
    desc: "Technologically integrated homes with automation, security, and energy efficiency.",
    img: unsplashUrl(IMG.residential),
    icon: <SunIcon />,
  },
  {
    title: "Renovation & Redevelopment",
    desc: "Transform existing structures into modern spaces with expert remodeling solutions.",
    img: unsplashUrl(IMG.constructionSite),
    icon: <WrenchIcon />,
  },
  {
    title: "Commercial Construction",
    desc: "Office complexes, retail spaces, and mixed-use developments built for business success.",
    img: unsplashUrl(IMG.heroBackground),
    icon: <BriefcaseIcon />,
  },
  {
    title: "Architectural Design",
    desc: "Innovative design services that blend aesthetics with functional engineering excellence.",
    img: unsplashUrl(IMG.architectBlueprint),
    icon: <BlueprintIcon />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-ddk-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.18em] text-ddk-blue uppercase mb-3">Our Areas of Expertise</p>
          <h2 className="font-bebas tracking-wide uppercase" style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            Comprehensive <span className="text-ddk-blue">Construction</span> Services
          </h2>
          <p className="text-ddk-gray mt-4 text-sm md:text-base leading-relaxed">
            From concept to completion, we handle every aspect of your project with precision and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-ddk-blue transition-all duration-500"
              style={{ height: "clamp(280px, 35vw, 360px)" }}
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.15) 100%)" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 flex flex-col">
                <div className="w-11 h-11 bg-ddk-blue/15 border border-ddk-blue/30 rounded-lg flex items-center justify-center mb-4 text-ddk-blue [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-current [&>svg]:fill-none [&>svg]:stroke-[1.5]">
                  {service.icon}
                </div>
                <h3 className="font-bold text-base md:text-lg mb-1.5 text-white">{service.title}</h3>
                <p className="text-[0.78rem] md:text-[0.82rem] leading-relaxed text-white/70">
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="text-ddk-blue text-xs font-bold uppercase tracking-wider flex items-center gap-2 mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:underline"
                >
                  Get a Quote →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
