import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ProjectGallery } from "@/components/ProjectGallery";
import { SignatureProject } from "@/components/SignatureProject";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Process } from "@/components/Process";
import { Advantages } from "@/components/Advantages";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ddk-black text-white">
      <Header />
      <Hero />
      <StatsBar />
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
