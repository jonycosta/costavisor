"use client";

import { useState } from "react";
import { useLanguage } from "./lib/LanguageContext";
import { translations } from "./lib/translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import SpecialRequestNote from "./components/SpecialRequestNote";
import CustomTravelBanner from "./components/CustomTravelBanner";
import Testimonials from "./components/Testimonials";
import BlogPreview from "./components/BlogPreview";
import LocalServices from "./components/LocalServices";
import TrackingSection from "./components/TrackingSection";
import Footer from "./components/Footer";
import InquiryModal from "./components/InquiryModal";

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
        onBook={() => openModal(true)}
      />
      <Hero t={t.hero} />
      <TrackingSection t={t.tracking} />
      <Services t={t.services} />
      <Portfolio t={t.portfolio} />
      <SpecialRequestNote t={t.specialRequest} onInquiry={() => openModal(true)} />
      <CustomTravelBanner t={t.customTravel} onInquiry={() => openModal(true)} />
      <LocalServices t={t.localServices} />
      <Testimonials t={t.testimonials} />
      <BlogPreview t={t.guide} lang={lang} />
      <Footer t={t.footer} />

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        isLuxuryQuote={isLuxuryQuote}
      />
    </main>
  );
}
