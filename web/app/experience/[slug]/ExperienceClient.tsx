"use client";

import Image from "next/image";
import { Star, Clock, Users, Globe, MapPin, Check, ChevronLeft, Calendar, Sparkles, ArrowRight, ShieldCheck, Wallet } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { translations } from "../../lib/translations";
import Navbar from "../../components/Navbar";
import InquiryModal from "../../components/InquiryModal";
import Footer from "../../components/Footer";
import { useLanguage } from "../../lib/LanguageContext";

export default function ExperienceClient({ slug }: { slug: string }) {
    const { lang, setLang } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = translations[lang];

    // Find the experience in the portfolio items
    const portfolioItems = translations[lang].portfolio.items;
    const exp = portfolioItems.find((item: any) => item.slug === slug) || portfolioItems[0];

    // Deposit calculation
    const priceNum = parseInt(exp.price) || 0;
    const deposit = Math.round(priceNum * 0.2); // 20% fianza
    const remaining = priceNum - deposit;

    return (
        <main className="min-h-screen bg-white">
            <Navbar lang={lang} setLang={setLang} t={t.nav} onBook={() => setIsModalOpen(true)} />

            {/* --- HEADER IMAGE --- */}
            <div className="relative w-full h-[60vh] md:h-[80vh]">
                <div className="absolute inset-0">
                    <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-primary/90" />
                </div>

                <div className="absolute bottom-0 left-0 p-8 md:p-20 w-full max-w-7xl mx-auto left-0 right-0 z-10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="px-5 py-2 rounded-2xl bg-secondary text-white text-xs font-black uppercase tracking-widest shadow-2xl flex items-center gap-2">
                            <Sparkles className="w-3 h-3 fill-white" />
                            {exp.category}
                        </span>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/20">
                            <Star className="w-4 h-4 text-secondary fill-secondary" />
                            <span className="text-white text-sm font-bold">4.9 (Exclusivo)</span>
                        </div>
                    </div>
                    <h1 className="font-outfit text-4xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                        {exp.title}
                    </h1>
                </div>
            </div>

            {/* --- CONTENT --- */}
            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-20">

                {/* LEFT COLUMN: INFO */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Key Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-12 border-b border-border/50">
                        {exp.duration && (
                            <div className="flex items-center gap-5">
                                <div className="p-4 rounded-3xl bg-primary/5 text-primary shadow-sm"><Clock className="w-6 h-6" /></div>
                                <div>
                                    <span className="block text-[10px] text-gray-600 font-black uppercase tracking-widest mb-1">{lang === 'es' ? 'Duración' : 'Duration'}</span>
                                    <span className="text-lg font-bold text-primary">{exp.duration}</span>
                                </div>
                            </div>
                        )}
                        <div className="flex items-center gap-5">
                            <div className="p-4 rounded-3xl bg-primary/5 text-primary shadow-sm"><Users className="w-6 h-6" /></div>
                            <div>
                                <span className="block text-[10px] text-gray-600 font-black uppercase tracking-widest mb-1">{lang === 'es' ? 'Privacidad' : 'Privacy'}</span>
                                <span className="text-lg font-bold text-primary">{lang === 'es' ? 'Hasta' : 'Up to'} {exp.maxPax} pers.</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="p-4 rounded-3xl bg-primary/5 text-primary shadow-sm"><Globe className="w-6 h-6" /></div>
                            <div>
                                <span className="block text-[10px] text-gray-600 font-black uppercase tracking-widest mb-1">{lang === 'es' ? 'Idiomas' : 'Languages'}</span>
                                <span className="text-lg font-bold text-primary">ES / EN</span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <section className="space-y-6">
                        <h3 className="font-outfit text-3xl font-black text-primary italic">
                            {lang === "es" ? "La Experiencia" : "The Experience"}
                        </h3>
                        <p className="text-black leading-relaxed text-xl font-medium whitespace-pre-line">
                            {exp.description}
                        </p>
                        {exp.partnerLogo && (
                            <div className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-surface/50 border border-border/50 max-w-lg">
                                <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-2xl border border-border/50">
                                    <Image src={exp.partnerLogo} alt="Partner Logo" fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted font-black uppercase tracking-widest mb-1">{lang === 'es' ? 'En colaboración con' : 'In partnership with'}</p>
                                    <p className="text-xl font-bold text-primary mb-3">New Town Restaurante</p>
                                    <a
                                        href={exp.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-secondary font-black uppercase tracking-widest text-xs hover:underline"
                                    >
                                        {lang === 'es' ? 'Ver Carta' : 'View Menu'}
                                        <ArrowRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Highlights */}
                    <section className="space-y-8">
                        <h3 className="font-outfit text-3xl font-black text-primary">
                            {lang === "es" ? "¿Qué incluimos?" : "What's included?"}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {exp.highlights.map((item: string, i: number) => (
                                <div key={i} className="flex items-center gap-6 p-6 rounded-[2rem] bg-surface/50 border border-border/50 group hover:border-secondary transition-colors">
                                    <div className="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                                        <Check className="w-5 h-5 text-secondary" strokeWidth={4} />
                                    </div>
                                    <span className="text-primary font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Trust Message Section */}
                    <section className="p-10 rounded-[3rem] bg-primary text-white space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-3xl -mr-32 -mt-32" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <ShieldCheck className="w-8 h-8 text-secondary" />
                                <h3 className="text-3xl font-outfit font-black">
                                    {lang === 'es' ? 'Reserva con Confianza' : 'Book with Confidence'}
                                </h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <p className="text-lg text-white/80 leading-relaxed">
                                        {lang === 'es'
                                            ? 'En CostaVisor prima la transparencia. Solo abona hoy la reserva como garantía y complete el pago al llegar.'
                                            : 'At CostaVisor, transparency is key. Only pay the deposit today as a guarantee and complete the payment on arrival.'}
                                    </p>
                                    <div className="flex items-center gap-3 text-secondary font-bold">
                                        <Wallet className="w-5 h-5" />
                                        <span>{lang === 'es' ? 'Pago Seguro y Transparente' : 'Secure & Transparent Payment'}</span>
                                    </div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20">
                                    <h4 className="font-bold text-xl mb-4 text-secondary italic">
                                        {lang === 'es' ? 'Su tranquilidad es lo primero' : 'Your peace of mind comes first'}
                                    </h4>
                                    <p className="text-sm text-white/70">
                                        {lang === 'es'
                                            ? 'Nuestro modelo de fianza del 20% asegura su plaza sin compromiso total inmediato, trasmitiendo la seriedad de nuestro servicio premium.'
                                            : 'Our 20% deposit model secures your spot without immediate full commitment, reflecting the professionalism of our premium service.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* RIGHT COLUMN: BOOKING CARD */}
                <div className="relative">
                    <div className="sticky top-40 rounded-[3rem] border border-border/50 shadow-[0_32px_80px_-15px_rgba(0,0,0,0.1)] p-10 bg-white space-y-10">
                        {exp.price !== "0" && exp.price !== "Consultar" ? (
                            <div className="space-y-6">
                                <div>
                                    <span className="text-gray-600 text-[10px] font-black uppercase tracking-widest block mb-2">{lang === 'es' ? 'Precio Total' : 'Total Price'}</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-outfit font-black text-black">{exp.price}€</span>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20 space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-bold text-primary">{lang === 'es' ? 'Fianza Online (20%)' : 'Online Deposit (20%)'}</span>
                                        <span className="text-secondary font-black text-lg">{deposit}€</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm border-t border-secondary/20 pt-4">
                                        <span className="font-medium text-gray-600">{lang === 'es' ? 'Resto a la llegada' : 'Remaining on arrival'}</span>
                                        <span className="font-bold text-black">{remaining}€</span>
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-500 font-bold leading-relaxed italic">
                                    {t.portfolio.depositNote}
                                </p>
                            </div>
                        ) : (
                            <div>
                                <span className="text-gray-600 text-[10px] font-black uppercase tracking-widest block mb-2">{lang === 'es' ? 'Presupuesto' : 'Quote'}</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xl font-outfit font-black text-black uppercase leading-tight">
                                        {lang === 'es' ? 'Consultar disponibilidad' : 'Check availability'}
                                    </span>
                                </div>
                            </div>
                        )}

                        <div className="space-y-6">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full py-6 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-outfit font-black text-xl shadow-2xl shadow-secondary/30 transition-all active:scale-95 flex items-center justify-center gap-3"
                            >
                                {lang === 'es' ? 'Reservar Ahora' : 'Book Now'}
                                <Sparkles className="w-5 h-5 fill-white" />
                            </button>
                            <p className="text-center text-xs text-muted font-bold tracking-wide">
                                {lang === 'es'
                                    ? "Disponibilidad limitada. Reserve con antelación."
                                    : "Limited availability. Book in advance."}
                            </p>
                        </div>

                        <div className="pt-8 border-t border-border/50 flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2 text-primary/40 text-[10px] font-black uppercase tracking-widest">
                                <ShieldCheck className="w-4 h-4" />
                                {lang === 'es' ? 'Plataforma Segura' : 'Secure Platform'}
                            </div>
                            <Image src="/logo-costavisor.png" alt="Trusted" width={100} height={40} className="grayscale opacity-50" />
                        </div>
                    </div>
                </div>

            </div>

            <Footer t={t.footer} />

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                lang={lang}
                selectedProperty={exp.title}
                isLuxuryQuote={true}
                isBooking={exp.price !== "0" && exp.price !== "Consultar"}
                totalPrice={priceNum}
            />
        </main>
    );
}
