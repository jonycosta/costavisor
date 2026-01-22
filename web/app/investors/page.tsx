"use client";

import { useState } from "react";
import Image from "next/image";
import { TrendingUp, ShieldCheck, Users, Mail, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { translations } from "../lib/translations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InquiryModal from "../components/InquiryModal";

import { useLanguage } from "../lib/LanguageContext";

export default function InvestorsPage() {
    const { lang, setLang } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const t = translations[lang];
    const ti = t.investors;

    return (
        <main className="min-h-screen bg-white text-primary font-inter">
            <Navbar lang={lang} setLang={setLang} t={t.nav} onBook={() => setIsModalOpen(true)} />

            {/* --- INVESTOR HERO SECTION --- */}
            <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-primary text-white">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/exp-nature.png"
                        alt="Investment in Costa del Sol"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl">
                        <TrendingUp className="w-5 h-5 text-secondary" />
                        <span className="text-xs font-black tracking-[0.2em] uppercase">{ti.hero.tag}</span>
                    </div>

                    <h1 className="font-outfit text-5xl md:text-8xl font-black mb-10 leading-tight tracking-tight drop-shadow-2xl">
                        {lang === "es" ? (
                            <>Invirtiendo en el <br /><span className="text-secondary italic">Futuro del Ocio</span></>
                        ) : (
                            <>Investing in the <br /><span className="text-secondary italic">Future of Leisure</span></>
                        )}
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                        {ti.hero.p}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="mailto:grupocostavisor@gmail.com"
                            className="px-12 py-6 bg-secondary hover:bg-secondary/90 text-white font-black text-xl rounded-2xl transition-all flex items-center gap-4 shadow-2xl shadow-secondary/20 w-full md:w-auto active:scale-95"
                        >
                            {ti.hero.cta} <ArrowRight className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
                    <div className="w-px h-24 bg-gradient-to-b from-white to-transparent" />
                </div>
            </section>

            {/* --- PILLARS --- */}
            <section className="py-32 px-6 bg-surface/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary border border-primary/10">
                            <ShieldCheck className="w-4 h-4 text-secondary" />
                            <span className="font-black uppercase tracking-widest text-[10px]">{ti.nav.investor}</span>
                        </div>
                        <h2 className="font-outfit text-5xl md:text-7xl font-black text-primary tracking-tight">{ti.pillars.title}</h2>
                        <div className="h-2 w-32 bg-secondary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {ti.pillars.items.map((pillar: any, i: number) => (
                            <div key={i} className="group p-12 rounded-[3.5rem] bg-white border border-border shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:-translate-y-4">
                                <div className="w-20 h-20 bg-primary text-white rounded-[2.5rem] flex items-center justify-center mb-10 group-hover:bg-secondary group-hover:scale-110 transition-all duration-500 shadow-xl">
                                    {i === 0 ? <TrendingUp className="w-8 h-8" /> : i === 1 ? <ShieldCheck className="w-8 h-8" /> : <Users className="w-8 h-8" />}
                                </div>
                                <h3 className="font-outfit text-3xl font-black mb-6 text-primary">{pillar.title}</h3>
                                <p className="text-muted text-lg font-medium leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- WHY US (NEW SECTION) --- */}
            <section className="py-32 px-6 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                                <Users className="w-4 h-4" />
                                <span className="font-black uppercase tracking-widest text-[10px]">Su Aliado Local</span>
                            </div>
                            <h2 className="font-outfit text-5xl md:text-7xl font-black text-primary leading-tight tracking-tight">
                                {ti.whyUs.title}
                            </h2>
                            <p className="text-2xl text-muted font-medium leading-relaxed">
                                {ti.whyUs.desc}
                            </p>
                            <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
                                <p className="text-xl font-bold text-primary italic">
                                    "{ti.whyUs.footer}"
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            {ti.whyUs.items.map((item: any, i: number) => (
                                <div key={i} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white border border-border rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-secondary group-hover:border-secondary transition-all">
                                        <CheckCircle2 className="w-8 h-8 text-secondary group-hover:text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-black text-primary">{item.title}</h4>
                                        <p className="text-muted text-lg font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MARKET OPPORTUNITY --- */}
            <section className="py-32 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-secondary/10 blur-[150px] rounded-full -mr-[20rem] -mt-[20rem]" />
                <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-accent/5 blur-[150px] rounded-full -ml-[20rem] -mb-[20rem]" />

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div className="space-y-12">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                            <Sparkles className="w-5 h-5 text-secondary" />
                            <span className="text-xs font-black tracking-widest uppercase">{ti.market.tag}</span>
                        </div>
                        <h2 className="font-outfit text-5xl md:text-8xl font-black tracking-tight leading-tight">{ti.market.h2}</h2>
                        <p className="text-2xl text-white/70 font-medium leading-relaxed">
                            {ti.market.p}
                        </p>
                        <ul className="space-y-6">
                            {ti.market.items.map((item: string, i: number) => (
                                <li key={i} className="flex items-center gap-5 group">
                                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-xl font-bold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative aspect-square bg-white shadow-2xl rounded-[4rem] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <Image src="/exp-nature.png" alt="Overlay" fill className="object-cover" />
                        </div>
                        <div className="relative z-10 text-center p-12">
                            <div className="text-[10rem] font-black text-primary leading-none mb-4">{ti.market.stat}</div>
                            <div className="text-2xl font-black text-secondary uppercase tracking-[0.3em]">{ti.market.statDesc}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- LEAD CAPTURE --- */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-24 space-y-6">
                        <h2 className="font-outfit text-6xl font-black text-primary italic leading-tight">
                            {ti.form.h2}
                        </h2>
                        <p className="text-2xl text-muted font-medium max-w-2xl mx-auto leading-relaxed">
                            {ti.form.p}
                        </p>
                    </div>

                    <form className="space-y-10 bg-white p-12 lg:p-20 rounded-[4rem] border border-border shadow-[0_48px_96px_-12px_rgba(0,0,0,0.1)]" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">{ti.form.name}</label>
                                <input type="text" className="w-full p-6 bg-surface border-transparent border focus:border-secondary rounded-3xl outline-none transition-all font-bold text-lg" placeholder="John Doe" />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">{ti.form.email}</label>
                                <input type="email" className="w-full p-6 bg-surface border-transparent border focus:border-secondary rounded-3xl outline-none transition-all font-bold text-lg" placeholder="john@investment-firm.com" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-2">{ti.form.profile}</label>
                            <input type="text" className="w-full p-6 bg-surface border-transparent border focus:border-secondary rounded-3xl outline-none transition-all font-bold text-lg" placeholder={ti.form.profilePlaceholder} />
                        </div>
                        <button className="w-full py-8 bg-primary hover:bg-secondary text-white font-black text-2xl rounded-3xl transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4">
                            {ti.form.cta}
                            <ArrowRight className="w-8 h-8" />
                        </button>
                    </form>
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
