"use client";

import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Star, ShieldCheck } from "lucide-react";
import { useState } from "react";
import InquiryModal from "../../components/InquiryModal";

export default function GuideClient({ slug }: { slug: string }) {
    const { lang, setLang } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const t = translations[lang];
    const post = (t as any).guide_posts?.[slug];

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-black text-primary font-outfit">Artículo no encontrado</h1>
                    <Link href="/" className="inline-block px-8 py-4 bg-primary text-white font-black rounded-2xl hover:bg-secondary transition-all">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar
                lang={lang}
                setLang={setLang}
                t={t.nav}
                onBook={() => setIsModalOpen(true)}
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-10000 hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

                <div className="container mx-auto px-6 relative z-10 mt-20">
                    <Link
                        href="/#guia"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-secondary mb-6 font-bold transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
                        {lang === 'es' ? 'Volver a la Guía' : 'Back to Guide'}
                    </Link>
                    <h1 className="font-outfit text-4xl md:text-6xl font-black text-white max-w-4xl leading-tight">
                        {post.title}
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-surface rounded-[2.5rem] p-8 md:p-16 border border-border shadow-sm">
                            <div className="prose prose-lg max-w-none text-muted font-medium leading-relaxed whitespace-pre-line">
                                {post.content}
                            </div>

                            {/* Trust Message in Guide */}
                            <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-4">
                                <ShieldCheck className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                <p className="text-sm text-primary/70 font-medium italic">
                                    {lang === 'es'
                                        ? 'CostaVisor apuesta por la transparencia local. Nuestra guía refleja secretos reales validados por expertos de Nerja y Frigiliana.'
                                        : 'CostaVisor is committed to local transparency. Our guide reflects real secrets validated by experts from Nerja and Frigiliana.'}
                                </p>
                            </div>

                            {/* Call to Action Box */}
                            <div className="mt-16 p-8 md:p-12 bg-primary rounded-[2rem] text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110" />
                                <div className="relative z-10 space-y-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                        <Star className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black font-outfit">
                                        {lang === 'es' ? '¿Buscas una experiencia a medida?' : 'Looking for a bespoke experience?'}
                                    </h3>
                                    <p className="text-white/80 text-lg font-medium max-w-2xl">
                                        {lang === 'es'
                                            ? 'Si necesitas ayuda con alguna petición especial o algo que no ves en nuestra web, dínoslo. Estamos aquí para hacer lo imposible realidad.'
                                            : 'If you need help with a special request or something not on our website, let us know. We are here to make the impossible reality.'
                                        }
                                    </p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-primary font-black rounded-2xl hover:bg-white transition-all transform hover:-translate-y-1"
                                    >
                                        <MessageSquare className="w-5 h-5" />
                                        {lang === 'es' ? 'Contactar con Concierge' : 'Contact Concierge'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer t={t.footer} />

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                lang={lang}
                isLuxuryQuote={true}
            />
        </main>
    );
}
