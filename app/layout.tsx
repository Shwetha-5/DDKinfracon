import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// ─── SELF-HOSTED FONTS (no Google Fonts render-blocking <link>) ──────────────
// next/font automatically: self-hosts, subsets, applies font-display: swap

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

// Bebas Neue is only available as a single weight on Google Fonts,
// but next/font/google handles it cleanly
import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "DDK Infracon pvt ltd | India's Premier Builder | Bhubaneswar, Odisha",
  description:
    "DDK Infracon Pvt. Ltd. — 120+ residential buildings delivered across India. 3+ years. ISO Certified. RERA Approved. IGBC Gold Certified.",
  metadataBase: new URL("https://ddkinfracon.com"),

  icons: {
    icon: "/icon.png",        // main favicon (for Google)
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "DDK Infracon | India's Premier Builder",
    description:
      "120+ residential buildings delivered across Bhubaneswar. Premium construction excellence since 2014.",
    type: "website",
    images: ["/logo.png"], // OK for social sharing
  },

  robots: {
    index: true,
    follow: true,
  },
};
// ─── STRUCTURED DATA (pre-stringified to avoid runtime JSON.stringify) ───────

const STRUCTURED_DATA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DDK Infracon Pvt. Ltd.",
  description:
    "Premium Residential & Commercial Construction Company in Bhubaneswar, Odisha",
  telephone: "+916370050334",
  email: "ddkinfraconpm@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "GA- 300, Ground Floor, Defense Colony, Shalaishree Vihar, C.S. Pur,",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    postalCode: "751021",
    addressCountry: "IN",
  },
});

// ─── ROOT LAYOUT ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${dmSans.variable} ${bebasNeue.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* DNS prefetch for external image CDNs — eliminates DNS lookup latency */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://dynamic-media-cdn.tripadvisor.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: STRUCTURED_DATA }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
