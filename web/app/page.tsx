"use client";

import { useState } from "react";
import { useLanguage } from "./lib/LanguageContext";
import { translations } from "./lib/translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import AboutSection from "./components/AboutSection";
import HowItWorks from "./components/HowItWorks";
import FeaturedExperiences from "./components/FeaturedExperiences";
import VacationDesigner from "./components/VacationDesigner";
import AccommodationsPreview from "./components/AccommodationsPreview";
import GroupsAndEvents from "./components/GroupsAndEvents";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import BlogPreview from "./components/BlogPreview";
import Footer from "./components/Footer";
import InquiryModal from "./components/InquiryModal";
import CustomTravelBanner from "./components/CustomTravelBanner";

export default function Home() {
  const { lang, setLang } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLuxuryQuote, setIsLuxuryQuote] = useState(false);

  const t = translations[lang];

  const openModal = (luxury: boolean = false) => {
    setIsLuxuryQuote(luxury);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t.nav}
      />

      {/* 1. HERO - Impacto Emocional */}
      <Hero t={t.hero} />

      {/* 2. TRUST BAR - Credibilidad Instantánea */}
      <TrustBar t={t.trustBar} />

      {/* 3. ABOUT - Historia & Conexión Local */}
      <AboutSection t={t.about} />

      {/* 4. HOW IT WORKS - Claritud en el Proceso */}
      <HowItWorks t={t.howItWorks} />

      {/* 5. FEATURED EXPERIENCES - Catálogo Curado (12 items) */}
      <FeaturedExperiences t={t.portfolio} />

      {/* 6. VACATION DESIGNER - Simulador interactivo */}
      <VacationDesigner t={t.vacationDesigner} />

      {/* 7. ACCOMMODATIONS PREVIEW - Villas & Suites */}
      <AccommodationsPreview t={t.accommodations} />

      {/* 8. TESTIMONIALS - La voz del cliente */}
      <Testimonials t={t.testimonials} />

      {/* 9. CUSTOM TRAVEL & SECONDARY SERVICES - El Banner de diseño a medida */}
      <CustomTravelBanner t={t.customTravel} onInquiry={() => openModal(true)} />

      {/* 10. GROUPS & EVENTS - Ecosistema CostaVisor & Círculo Secreto */}
      <GroupsAndEvents t={t.groups} />

      {/* 11. FAQ - SEO & Dudas rápidas */}
      <FAQ t={t.faq} />

      {/* 12. BLOG PREVIEW - Autoridad & Guía */}
      <BlogPreview t={t.guide} lang={lang} />

      {/* 13. FOOTER - Cierre & Partner */}
      <Footer t={t.footer} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            t.portfolio.items.map((item: any) => ({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": item.title,
              "description": item.description,
              "image": `https://www.costavisor.com${item.image}`,
              "brand": {
                "@type": "Brand",
                "name": "CostaVisor"
              },
              "offers": {
                "@type": "Offer",
                "price": item.price === "Consultar" || item.price === "Inquire" ? "0" : item.price.replace("desde ", "").replace("from ", ""),
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              }
            }))
          )
        }}
      />
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        isLuxuryQuote={isLuxuryQuote}
      />
    </main>
  );
}
