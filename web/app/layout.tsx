import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./lib/LanguageContext";

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
    default: "CostaVisor | Expertos Locales en Nerja, Frigiliana y Costa del Sol",
    template: "%s | CostaVisor"
  },
  description: "Tu aliado local en la Costa del Sol. Encuentra los mejores precios en villas, experiencias y servicios en Nerja, Frigiliana y Málaga. Lujo accesible y gestión integral.",
  keywords: ["Nerja", "Frigiliana", "Costa del Sol", "Málaga", "Turismo", "Villas", "Alquiler Vacacional", "Experiencias", "Concierge", "Presupuestos"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CostaVisor | Expertos en Nerja, Frigiliana y Málaga",
    description: "Descubre la Costa del Sol como un local. Villas, barcos y planes exclusivos en Nerja y Frigiliana al mejor precio.",
    url: "https://www.costavisor.com",
    siteName: "CostaVisor",
    locale: "es_ES",
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
            __html: JSON.stringify({
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
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
