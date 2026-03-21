import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DDK Infracon | India's Premier Builder | Bhubaneswar, Odisha",
  description: "DDK Infracon Pvt. Ltd. — 120+ residential buildings delivered across Bhubaneswar. 10+ years. ISO Certified. RERA Approved. IGBC Gold Certified.",
  openGraph: {
    title: "DDK Infracon | India's Premier Builder",
    description: "120+ residential buildings delivered across Bhubaneswar. Premium construction excellence since 2014.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "DDK Infracon Pvt. Ltd.",
              "description": "Premium Residential & Commercial Construction Company in Bhubaneswar, Odisha",
              "telephone": "+919337754555",
              "email": "ddkinfraconpm@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Duplex-50, Shalaishree Vihar, C.S.pur",
                "addressLocality": "Bhubaneswar",
                "addressRegion": "Odisha",
                "postalCode": "751021",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
