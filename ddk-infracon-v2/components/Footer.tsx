import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Projects Gallery", href: "#gallery" },
    { label: "Our Process", href: "#process" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-[#070707] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.2fr] gap-12 lg:gap-20 mb-16">

          {/* Brand */}
          <div>
            <Link href="#" className="flex items-center gap-2.5 font-bebas text-2xl mb-6">
              <div className="relative w-8 h-8 flex-shrink-0">
                <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                  <polygon points="18,2 34,18 18,34 2,18" fill="#00AEEF" fillOpacity=".15" stroke="#00AEEF" strokeWidth="1.5"/>
                  <polygon points="18,6 30,18 18,30 6,18" fill="#00AEEF" fillOpacity=".3"/>
                  <line x1="10" y1="18" x2="26" y2="18" stroke="#F4A020" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="18" y1="10" x2="18" y2="26" stroke="#F4A020" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
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

          {/* Quick Links — all real anchor links on this page */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-[0.7rem]">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
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
          </div>

          {/* Contact Info — real data, no dummy links */}
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                  <span className="w-5 h-[1.5px] bg-[#25D366] ml-1 group-hover:bg-white group-hover:w-8 transition-all" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 border-t border-white/5 text-[0.65rem] text-ddk-gray font-mono tracking-widest uppercase">
          <p>© {new Date().getFullYear()} DDK Infracon Pvt. Ltd. All rights reserved.</p>
          <p>RERA REG. NO: {SITE_CONFIG.rera}</p>
        </div>
      </div>
    </footer>
  );
}
