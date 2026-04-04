"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "@/lib/images";

const BADGES = ["ISO Certified", "RERA Approved", "IGBC Gold", "Award Winning"] as const;

const VALUES = [
  { title: "Our Mission", desc: "Exceed industry standards with integrity, safety & sustainability in every project." },
  { title: "Our Vision", desc: "India's most trusted & innovative construction company, setting new benchmarks." },
  { title: "Our Values", desc: "Quality · Timely Delivery · Transparency · Innovation · Customer Centricity" },
] as const;

const TEAM = [
  { name: "Dhiren Kumar Mohanty", role: "Owner" },
  { name: "Amar Kumar Mohanty", role: "Director" }, // Assuming Director or similar if role was blank but listed with owners
  { name: "Teju S", role: "Project Manager" },
] as const;

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-ddk-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs tracking-[0.18em] text-ddk-blue uppercase mb-3">About DDK Infracon</p>
            <h2
              className="font-bebas leading-[1.05] tracking-wide mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Building The <span className="text-ddk-blue">Future,</span>
              <br />One Project At A Time
            </h2>
            <p className="leading-relaxed max-w-xl mb-8 text-[0.95rem] text-white/[0.78]">
              Founded in 2014 with a vision to redefine construction standards in Eastern India, DDK Infracon has delivered{" "}
              <strong className="text-white font-semibold">120+ premium residential buildings</strong> across Bhubaneswar —
              making us one of the most prolific builders in Odisha.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 bg-ddk-blue/10 border border-ddk-blue/20 text-ddk-blue text-[0.68rem] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full"
                >
                  ✓ {b}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {VALUES.map((v, i) => (
                <div key={i} className="bg-ddk-charcoal border border-ddk-blue/15 border-l-[3px] border-l-ddk-blue rounded-lg p-4 md:p-5">
                  <h4 className="text-sm font-bold mb-2">{v.title}</h4>
                  <p className="text-[0.78rem] text-ddk-gray leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden border border-ddk-blue/15 shadow-2xl">
              <Image
                src={`${IMG.aboutTeam}?auto=compress&cs=tinysrgb&w=900`}
                alt="DDK Infracon construction team at work in Bhubaneswar"
                width={900}
                height={600}
                className="w-full object-cover"
                style={{ height: "clamp(300px, 40vw, 520px)" }}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-5 left-5 bg-black/85 backdrop-blur-md border border-white/10 rounded-lg py-3 px-5">
                <div className="font-bebas text-3xl md:text-4xl text-ddk-blue leading-none mb-1">120+</div>
                <div className="text-[0.68rem] text-ddk-gray uppercase tracking-wider leading-tight font-medium">
                  Residential Buildings<br />in Bhubaneswar
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="border-t border-white/5 pt-16 md:pt-24">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-[0.18em] text-ddk-blue uppercase mb-3">Our Leadership</p>
            <h2 className="font-bebas text-3xl md:text-5xl tracking-wide uppercase">The Minds <span className="text-ddk-blue">Behind DDK</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-ddk-charcoal border border-white/5 rounded-2xl p-8 hover:border-ddk-blue/30 transition-all duration-300 group text-center"
              >
                <div className="w-20 h-20 bg-ddk-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 text-ddk-blue group-hover:scale-110 transition-transform">
                  <span className="font-bebas text-3xl">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm font-mono text-ddk-blue uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

