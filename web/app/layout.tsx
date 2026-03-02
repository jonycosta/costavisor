import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./lib/LanguageContext";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.costavisor.com"),
  title: {
    default: "CostaVisor | Villas de Lujo, Experiencias Auténticas en Nerja y Frigiliana",
    template: "%s | CostaVisor"
  },
  description: "Descubre Nerja y Frigiliana con CostaVisor. Villas de lujo, experiencias auténticas, turismo slow y gestión de propiedades con JD Builders. Tu experto local en la Costa del Sol.",
  keywords: ["luxury villas Nerja", "holidays in Nerja", "tailor made holidays", "vacaciones con encanto", "turismo slow", "experiencias auténticas", "qué hacer en Nerja", "planes diferentes Costa del Sol", "alquiler vacacional Nerja", "villas en Frigiliana", "Nerja", "Frigiliana", "Costa del Sol", "Málaga", "Turismo", "Villas", "Alquiler Vacacional", "Experiencias", "Concierge", "JD Builders", "gestión de propiedades"],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "CostaVisor | Luxury Villas, Authentic Experiences in Nerja & Frigiliana",
    description: "Discover Nerja and Frigiliana with CostaVisor. Luxury villas, authentic experiences, slow tourism, and property management with JD Builders. Your local expert on the Costa del Sol.",
    url: "https://www.costavisor.com",
    siteName: "CostaVisor",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.costavisor.com/exp-nature.png",
        width: 1200,
        height: 630,
        alt: "CostaVisor Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CostaVisor | Tu Aliado en la Costa del Sol",
    description: "Villas, Yates y Planes Locales en Nerja & Frigiliana.",
    images: ["https://www.costavisor.com/exp-nature.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "CostaVisor",
                "url": "https://www.costavisor.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.costavisor.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "CostaVisor",
                "description": "Vacaciones personalizadas y servicios locales en Nerja y Frigiliana. Alojamientos, experiencias en barco y mantenimiento.",
                "url": "https://www.costavisor.com",
                "telephone": "+34683459342",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Nerja",
                  "addressRegion": "Málaga",
                  "addressCountry": "ES"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "36.7441",
                  "longitude": "-3.8767"
                },
                "openingHours": "Mo-Su 00:00-23:59",
                "image": "https://www.costavisor.com/exp-nature.png"
              }
            ])
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
