"use client";

import { useState } from "react";
import {
    Wrench,
    CheckCircle2,
    ArrowRight,
    MessageSquare,
    ShieldCheck,
    Clock,
    Star,
    Paintbrush,
    Droplets,
    Zap,
    Users,
    Trees,
    Languages,
    MapPin
} from "lucide-react";
import { translations } from "../lib/translations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InquiryModal from "../components/InquiryModal";
import Image from "next/image";

import { useLanguage } from "../lib/LanguageContext";

export default function MaintenancePage() {
    const { lang, setLang } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const t = translations[lang];
    const tm = t.maintenance;

    const openWhatsApp = () => {
        const phone = "34643216427";
        const message = lang === "es"
            ? "Hola, me gustaría solicitar un presupuesto para mantenimiento/reforma. He visto que hablas español e inglés nativo."
            : "Hello, I would like to request a quote for maintenance/renovation. I saw that you are native in both Spanish and English.";
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar lang={lang} setLang={setLang} t={t.nav} onBook={() => setIsModalOpen(true)} />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/exp-nature.png" alt="Background" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                            <Wrench className="w-4 h-4 text-secondary" />
                            <span className="text-white text-xs font-black uppercase tracking-widest">{tm.tag}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30">
                            <Languages className="w-4 h-4 text-secondary" />
                            <span className="text-white text-xs font-black uppercase tracking-widest">{lang === "es" ? "Español e Inglés Nativo" : "Native Spanish & English"}</span>
                        </div>
                    </div>
                    <h1 className="font-outfit text-5xl md:text-8xl font-black text-white mb-8 tracking-tight max-w-5xl mx-auto leading-tight">
                        {tm.h2}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                        {tm.p}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-12 py-6 bg-secondary text-white font-black uppercase tracking-widest text-lg rounded-2xl hover:bg-secondary/90 transition-all shadow-2xl shadow-secondary/20 active:scale-95 flex items-center justify-center gap-3"
                        >
                            {tm.ctaMain}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={openWhatsApp}
                            className="px-12 py-6 bg-white/10 text-white font-black uppercase tracking-widest text-lg rounded-2xl hover:bg-white/20 transition-all border border-white/20 backdrop-blur-md active:scale-95 flex items-center justify-center gap-3"
                        >
                            <MessageSquare className="w-5 h-5" />
                            {tm.ctaWhatsapp}
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Bar */}
            <section className="py-12 bg-surface border-b border-border">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {tm.features.map((f: any, i: number) => {
                            const Icons = [Languages, MapPin, ShieldCheck];
                            const Icon = Icons[i];
                            return (
                                <div key={i} className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-xl mb-1">{f.title}</h4>
                                        <p className="text-muted font-medium">{f.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Main Sections */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Individuals */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="inline-block px-4 py-2 bg-primary/5 rounded-xl border border-primary/10 text-primary font-black text-xs uppercase tracking-widest">
                                    {tm.sections.individuals.title}
                                </div>
                                <h2 className="font-outfit text-4xl md:text-5xl font-black text-primary leading-tight">
                                    {tm.sections.individuals.desc}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {tm.sections.individuals.items.map((item: any, i: number) => {
                                    const Icons = [Droplets, Wrench, Trees, Paintbrush];
                                    const Icon = Icons[i];
                                    return (
                                        <div key={i} className="group p-8 bg-white rounded-3xl border border-border hover:shadow-xl transition-all duration-500 flex gap-6">
                                            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary/10 transition-colors">
                                                <Icon className="w-6 h-6 text-primary group-hover:text-secondary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-primary text-xl mb-2">{item.title}</h3>
                                                <p className="text-muted font-medium leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Real Estate */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="inline-block px-4 py-2 bg-secondary/5 rounded-xl border border-secondary/10 text-secondary font-black text-xs uppercase tracking-widest">
                                    {tm.sections.realEstate.title}
                                </div>
                                <h2 className="font-outfit text-4xl md:text-5xl font-black text-primary leading-tight">
                                    {tm.sections.realEstate.desc}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {tm.sections.realEstate.items.map((item: any, i: number) => {
                                    const Icons = [Zap, ShieldCheck, CheckCircle2, Clock];
                                    const Icon = Icons[i];
                                    return (
                                        <div key={i} className="group p-8 bg-white rounded-3xl border border-border hover:shadow-xl transition-all duration-500 flex gap-6">
                                            <div className="w-14 h-14 bg-secondary/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                                <Icon className="w-6 h-6 text-secondary group-hover:text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-primary text-xl mb-2">{item.title}</h3>
                                                <p className="text-muted font-medium leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bureaucracy Note */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto p-10 rounded-[3rem] bg-secondary/5 border border-secondary/10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                        <div className="w-20 h-20 bg-secondary/10 rounded-[1.5rem] flex items-center justify-center shrink-0">
                            <Clock className="w-10 h-10 text-secondary" />
                        </div>
                        <div>
                            <h4 className="font-outfit text-2xl font-black text-primary mb-3">
                                {tm.note.title}
                            </h4>
                            <p className="text-muted text-lg font-medium leading-relaxed italic">
                                "{tm.note.text}"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer t={t.footer} />

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                lang={lang}
            />
        </main>
    );
}
