import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { WhatsAppIcon } from "@/lib/icons";

const QUICK_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Projects Gallery", href: "#gallery" },
  { label: "Our Process", href: "#process" },
  { label: "Contact Us", href: "#contact" },
] as const;

// Current year computed once at build time (server component)
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-white/5 pt-20 pb-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.2fr] gap-12 lg:gap-20 mb-16">
          {/* Brand */}
          <div>
            <Link href="#" className="flex items-center gap-2.5 font-bebas text-2xl mb-6" aria-label="DDK Infracon — Home">
              <div className="relative w-10 h-10 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="DDK Infracon Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="text-white">
                DDK <span className="text-ddk-blue">INFRACON</span>
              </span>
            </Link>
            <p className="text-sm text-ddk-gray leading-relaxed mb-4 max-w-sm">
              Building dreams into reality across India since 2014. 120+ residential buildings
              delivered across Bhubaneswar with quality, precision, and care.
            </p>
            <div className="inline-block font-mono text-[0.65rem] text-ddk-blue/80 bg-ddk-blue/10 border border-ddk-blue/20 px-4 py-2 rounded-md uppercase tracking-wider font-bold">
              RERA No: {SITE_CONFIG.rera}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-[0.7rem]">Quick Links</h4>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-ddk-gray hover:text-ddk-blue transition-colors relative group py-1 inline-block"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-ddk-blue transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-[0.7rem]">Contact Us</h4>
            <ul className="space-y-5">
              <li>
                <p className="text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-1.5">Phone / WhatsApp</p>
                <div className="space-y-1">
                  {SITE_CONFIG.contact.phone.slice(0, 2).map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-sm text-white hover:text-ddk-blue transition-colors font-medium">
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <p className="text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-1.5">Email</p>
                <div className="space-y-1">
                  {SITE_CONFIG.contact.email.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block text-sm text-white hover:text-ddk-blue transition-colors font-medium break-all">
                      {e}
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <p className="text-[0.65rem] font-bold text-ddk-gray tracking-widest uppercase mb-1.5">Office</p>
                <p className="text-sm text-ddk-gray leading-relaxed max-w-[260px]">{SITE_CONFIG.contact.address}</p>
              </li>
              <li className="pt-1">
                <a
                  href={SITE_CONFIG.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.8rem] text-[#25D366] font-bold uppercase tracking-widest hover:text-white transition-colors group"
                >
                  <WhatsAppIcon width={18} height={18} fill="currentColor" />
                  WhatsApp Us
                  <span className="w-5 h-[1.5px] bg-[#25D366] ml-1 group-hover:bg-white group-hover:w-8 transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 border-t border-white/5 text-[0.65rem] text-ddk-gray font-mono tracking-widest uppercase">
          <p>© {CURRENT_YEAR} DDK Infracon Pvt. Ltd. All rights reserved.</p>
          <p>RERA REG. NO: {SITE_CONFIG.rera}</p>
        </div>
      </div>
    </footer>
  );
}
