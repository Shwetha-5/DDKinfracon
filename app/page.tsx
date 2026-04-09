import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";

// ─── BELOW-THE-FOLD: lazy-loaded to reduce initial JS bundle ─────────────────
// These components are not visible on first paint, so we defer their JS.
// This significantly improves LCP, TTI, and TBT metrics.
// Each uses .then(mod => ({ default: mod.ComponentName })) to bridge named → default export.

const About = dynamic(
  () => import("@/components/About").then((mod) => ({ default: mod.About })),
  { loading: () => <section className="py-32 bg-ddk-black" /> }
);
const Services = dynamic(
  () => import("@/components/Services").then((mod) => ({ default: mod.Services })),
  { loading: () => <section className="py-32 bg-ddk-charcoal" /> }
);
const ProjectGallery = dynamic(
  () => import("@/components/ProjectGallery").then((mod) => ({ default: mod.ProjectGallery })),
  { loading: () => <section className="py-32 bg-ddk-black" /> }
);
const SignatureProject = dynamic(
  () => import("@/components/SignatureProject").then((mod) => ({ default: mod.SignatureProject })),
  { loading: () => <section className="py-32 bg-ddk-black" /> }
);
const BeforeAfter = dynamic(
  () => import("@/components/BeforeAfter").then((mod) => ({ default: mod.BeforeAfter })),
  { loading: () => <section className="py-32 bg-ddk-charcoal" /> }
);
const Process = dynamic(
  () => import("@/components/Process").then((mod) => ({ default: mod.Process })),
  { loading: () => <section className="py-32 bg-ddk-black" /> }
);
const Advantages = dynamic(
  () => import("@/components/Advantages").then((mod) => ({ default: mod.Advantages })),
  { loading: () => <section className="py-32 bg-ddk-charcoal" /> }
);
const Contact = dynamic(
  () => import("@/components/Contact").then((mod) => ({ default: mod.Contact })),
  { loading: () => <section className="py-32 bg-ddk-charcoal" /> }
);
const Footer = dynamic(
  () => import("@/components/Footer").then((mod) => ({ default: mod.Footer })),
  { loading: () => <footer className="py-20 bg-[#070707]" /> }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ddk-black text-white">
      {/* Above-the-fold: statically imported for instant render */}
      <Header />
      <Hero />
      <StatsBar />

      {/* Below-the-fold: dynamically imported — JS loads on demand */}
      <About />
      <Services />
      <ProjectGallery />
      <SignatureProject />
      <BeforeAfter />
      <Process />
      <Advantages />
      <Contact />
      <Footer />
    </main>
  );
}
