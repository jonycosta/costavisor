'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InquiryModal from '../components/InquiryModal';
import { translations } from '../lib/translations';
import Image from 'next/image';

export default function RedLocalPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = translations[lang];
  const pageData = t.hero.localNetworkPage;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar 
        t={t.nav} 
        lang={lang} 
        setLang={setLang} 
        onOpenModal={() => setIsModalOpen(true)} 
      />

      <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{pageData.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            {pageData.subtitle}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pageData.partners.map((partner: any, index: number) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${partner.name === 'GatyGo Rent' ? 'text-blue-600' : 'text-gray-800'}`}>
                    {partner.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-gray-200 mb-6"></div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {partner.description}
                  </p>
                </div>
                <a 
                  href={partner.contact}
                  className={`inline-block text-center py-3 px-6 rounded-lg text-white font-semibold transition-colors duration-200 ${partner.color || 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {partner.ctaText}
                </a>
              </div>
              <div className="sm:w-2/5 relative min-h-[250px]">
                <Image 
                  src={partner.image} 
                  alt={partner.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={() => window.location.href = '/#experiencias'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg transition-all transform hover:scale-105"
          >
            {pageData.viewAllExps}
          </button>
        </div>
      </div>

      <Footer t={t.footer} />

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
      />
    </main>
  );
}
