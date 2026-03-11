'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CustomTravelBanner from './components/CustomTravelBanner';
import BlogPreview from './components/BlogPreview';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import { translations } from './lib/translations';

export default function Home() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. NAVBAR */}
      <Navbar 
        t={t.nav} 
        lang={lang} 
        setLang={setLang} 
        onOpenModal={() => setIsModalOpen(true)} 
      />

      {/* 2. HERO - Presentación & JD Builders & Red Local */}
      <Hero 
        t={t.hero} 
        onOpenModal={() => setIsModalOpen(true)} 
      />

      {/* 3. PORTFOLIO - Experiencias Destacadas */}
      <Portfolio t={t.portfolio} />

      {/* 4. TESTIMONIOS */}
      <Testimonials t={t.testimonials} />

      {/* 5. BANNER PERSONALIZADO */}
      <CustomTravelBanner t={t.customTravel} onOpenModal={() => setIsModalOpen(true)} />

      {/* 6. BLOG / GUÍA */}
      <BlogPreview t={t.blog} />

      {/* 7. FAQ */}
      <FAQ t={t.faq} />

      {/* 8. FOOTER - Cierre & Partner */}
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
      />
    </main>
  );
}
