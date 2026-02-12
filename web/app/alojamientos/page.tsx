"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2, Palmtree, Warehouse, Hotel, Tent, Star, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { translations } from "../lib/translations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InquiryModal from "../components/InquiryModal";

import { useLanguage } from "../lib/LanguageContext";

export default function Alojamientos() {
    const { lang, setLang } = useLanguage();
    const t = (translations as any)[lang];
    const ta = t.accommodations;

    return (
        <main className="min-h-screen bg-white">
            <Navbar lang={lang} setLang={setLang} t={t.nav} />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image src="/exp-nature.png" alt="Background" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                        <Sparkles className="w-4 h-4 text-secondary fill-secondary" />
                        <span className="text-white text-xs font-black uppercase tracking-widest">
                            {lang === 'es' ? 'Próximamente' : 'Coming Soon'}
                        </span>
                    </div>

                    <h1 className="font-outfit text-5xl md:text-8xl font-black text-white mb-6 tracking-tight">
                        {ta.h2}
                    </h1>

                    <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                        {lang === 'es'
                            ? "Estamos seleccionando las mejores villas y suites exclusivas para ti. Muy pronto podrás reservar estancias inolvidables."
                            : "We are curating the best exclusive villas and suites for you. Soon you will be able to book unforgettable stays."}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white text-center">
                            <Building2 className="w-8 h-8 mx-auto mb-2 text-secondary" />
                            <p className="font-bold uppercase tracking-widest text-sm">
                                {lang === 'es' ? 'Villas Privadas' : 'Private Villas'}
                            </p>
                        </div>
                        <div className="px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white text-center">
                            <Star className="w-8 h-8 mx-auto mb-2 text-secondary" />
                            <p className="font-bold uppercase tracking-widest text-sm">
                                {lang === 'es' ? 'Servicio Premium' : 'Premium Service'}
                            </p>
                        </div>
                        <div className="px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white text-center">
                            <MapPin className="w-8 h-8 mx-auto mb-2 text-secondary" />
                            <p className="font-bold uppercase tracking-widest text-sm">
                                {lang === 'es' ? 'Mejores Ubicaciones' : 'Best Locations'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer t={t.footer} />
        </main>
    );
}
