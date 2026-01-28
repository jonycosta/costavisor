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
    const [filter, setFilter] = useState("all");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState<string | undefined>(undefined);
    const [isLuxuryQuote, setIsLuxuryQuote] = useState(false);

    const t = (translations as any)[lang];
    const ta = t.accommodations;

    // Type to Lucide Icon mapping
    const icons: any = {
        villa: Palmtree,
        apartment: Building2,
        countryside: Warehouse,
        hotel: Hotel,
        hostel: Tent
    };

    const filteredItems = filter === "all"
        ? ta.items
        : ta.items.filter((item: any) => item.type === filter);

    const openModal = (property?: string, luxury: boolean = false) => {
        setSelectedProperty(property);
        setIsLuxuryQuote(luxury);
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar lang={lang} setLang={setLang} t={t.nav} onBook={() => openModal(undefined, true)} />

            {/* Header Section */}
            <section className="relative pt-48 pb-32 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <Image src="/exp-nature.png" alt="Background" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                        <Star className="w-4 h-4 text-secondary fill-secondary" />
                        <span className="text-white text-xs font-black uppercase tracking-widest">{ta.tag}</span>
                    </div>
                    <h1 className="font-outfit text-5xl md:text-8xl font-black text-white mb-8 tracking-tight">
                        {ta.h2}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
                        {ta.p}
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 bg-white/80 backdrop-blur-md border-b border-border sticky top-[72px] z-30 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <button
                            onClick={() => setFilter("all")}
                            className={`px-8 py-3 rounded-full font-bold transition-all text-sm uppercase tracking-widest ${filter === "all" ? "bg-primary text-white shadow-xl" : "bg-primary/5 text-primary hover:bg-primary/10"}`}
                        >
                            {ta.filters.all}
                        </button>
                        {Object.entries(ta.filters).map(([key, label]) => {
                            if (key === "all") return null;
                            const Icon = icons[key] || Sparkles;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setFilter(key)}
                                    className={`flex items-center gap-3 px-8 py-3 rounded-full font-bold transition-all text-sm uppercase tracking-widest ${filter === key ? "bg-secondary text-white shadow-xl shadow-secondary/20" : "bg-primary/5 text-primary hover:bg-primary/10"}`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {label as string}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* List Section */}
            <section className="py-24 bg-surface/30">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
                        {filteredItems.map((item: any) => {
                            const Icon = icons[item.type] || Building2;
                            return (
                                <div key={item.id} className="group flex flex-col bg-white rounded-[3rem] overflow-hidden border border-border/50 hover:shadow-2xl transition-all duration-700">
                                    {/* Image Section */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                        {/* Category Badge */}
                                        <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                                            <Icon className="w-3 h-3" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">
                                                {(ta.filters as any)[item.type]}
                                            </span>
                                        </div>

                                        {/* Location Badge */}
                                        <div className="absolute top-6 right-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-xl border border-white/10 text-white">
                                            <MapPin className="w-3 h-3" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">{item.loc}</span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-10 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <h3 className="font-outfit text-3xl font-black text-primary group-hover:text-secondary transition-colors duration-500 mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-muted text-sm font-medium">
                                                    {item.loc} — Nerja & Frigiliana Experts
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-secondary font-black text-xl mb-1">{item.price}</p>
                                                <p className="text-[10px] text-muted font-bold uppercase tracking-widest">PVP Directo Local</p>
                                            </div>
                                        </div>

                                        <p className="text-muted/80 text-sm leading-relaxed mb-8 flex-1">
                                            {lang === 'es'
                                                ? 'Una propiedad exclusiva seleccionada por CostaVisor por su excelencia en diseño y ubicación privilegiada en la Costa del Sol.'
                                                : 'An exclusive property selected by CostaVisor for its excellence in design and privileged location on the Costa del Sol.'}
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => openModal(item.title, false)}
                                                className="flex-1 px-8 py-4 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/10"
                                            >
                                                {lang === 'es' ? 'Consultar Info' : 'Request Info'}
                                            </button>
                                            <button
                                                onClick={() => openModal(item.title, true)}
                                                className="px-8 py-4 rounded-2xl border-2 border-primary/10 text-primary font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all active:scale-95 flex items-center gap-2"
                                            >
                                                {lang === 'es' ? 'Pre-Reserva' : 'Pre-Book'}
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Premium CTA Section */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full -ml-32 -mb-32" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Sparkles className="w-12 h-12 text-secondary mx-auto" />
                        <h2 className="font-outfit text-4xl md:text-6xl font-black text-white leading-tight">
                            {ta.cta.exceptionalTitle}
                        </h2>
                        <p className="text-xl text-white/70 font-medium">
                            {ta.cta.exceptionalDesc}
                        </p>
                        <button
                            onClick={() => openModal(undefined, true)}
                            className="inline-flex items-center gap-4 px-12 py-6 bg-secondary text-white font-black uppercase tracking-widest text-lg rounded-2xl hover:bg-secondary/90 transition-all shadow-2xl shadow-secondary/20 active:scale-95"
                        >
                            {ta.cta.exceptionalBtn}
                            <Star className="w-5 h-5 fill-white" />
                        </button>
                    </div>
                </div>
            </section>

            <Footer t={t.footer} />

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                lang={lang}
                selectedProperty={selectedProperty}
                isLuxuryQuote={isLuxuryQuote}
            />
        </main>
    );
}
