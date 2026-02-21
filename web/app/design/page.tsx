"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Check,
    ArrowLeft,
    RefreshCcw,
    Palmtree,
    Compass,
    Castle,
    Music,
    Users,
    Baby,
    Group,
    User,
    Calendar,
    Coins,
    Gem,
    Crown,
    Info,
    CheckCircle
} from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const icons = {
    styles: {
        relax: Palmtree,
        adventure: Compass,
        culture: Castle,
        party: Music
    },
    company: {
        couple: Users,
        family: Baby,
        friends: Group,
        solo: User
    },
    budget: {
        smart: Coins,
        premium: Gem,
        luxury: Crown
    }
};

export default function VacationDesigner() {
    const { lang, setLang } = useLanguage();
    const t = (translations as any)[lang];
    const tv = t.vacationDesigner;

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        style: "",
        company: "",
        days: 7,
        budget: "",
    });

    const totalSteps = 4;

    const handleNext = () => {
        if (step < totalSteps + 1) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const updateField = (field: string, value: any) => {
        setFormData({ ...formData, [field]: value });
        // Auto advance for selection steps
        if (field !== "days") {
            setTimeout(() => handleNext(), 400);
        }
    };

    const calculateEstimate = () => {
        let basePricePerDay = 0;
        if (formData.budget === 'smart') basePricePerDay = 75;
        if (formData.budget === 'premium') basePricePerDay = 180;
        if (formData.budget === 'luxury') basePricePerDay = 450;

        let multiplier = 1;
        if (formData.company === 'solo') multiplier = 1.3;
        if (formData.company === 'family') multiplier = 0.8; // Avg per person

        // Style variations
        if (formData.style === 'adventure') multiplier *= 1.1;
        if (formData.style === 'party') multiplier *= 1.2;

        const estimatedDaily = Math.round(basePricePerDay * multiplier);
        const min = Math.round(estimatedDaily * 0.9);
        const max = Math.round(estimatedDaily * 1.1);

        return `${min}€ - ${max}€`;
    };

    const formattedMessage = tv.result.whatsappMessage
        .replace("{style}", tv.step1.options[formData.style as keyof typeof tv.step1.options] || formData.style)
        .replace("{company}", tv.step2.options[formData.company as keyof typeof tv.step2.options] || formData.company)
        .replace("{days}", formData.days.toString())
        .replace("{budget}", formData.budget ? (tv.step4.options[formData.budget as keyof typeof tv.step4.options]?.label || formData.budget) : "")
        .replace("{price}", calculateEstimate());

    const whatsappLink = `https://wa.me/34683459342?text=${encodeURIComponent(formattedMessage)}`;

    return (
        <main className="min-h-screen bg-surface text-primary">
            <Navbar lang={lang} setLang={setLang} t={t.nav} />

            <div className="pt-32 pb-20 container mx-auto px-6 max-w-5xl">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-secondary font-black text-sm uppercase tracking-[0.3em]"
                    >
                        {lang === 'es' ? 'Simulador de Vacaciones' : 'Vacation Simulator'}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-primary font-outfit leading-tight"
                    >
                        {step <= totalSteps ? (lang === 'es' ? 'Diseña tu Experiencia' : 'Design Your Experience') : (lang === 'es' ? 'Tu Viaje Ideal' : 'Your Ideal Trip')}
                    </motion.h1>
                </div>

                {/* Progress Indicator */}
                <div className="max-w-xl mx-auto mb-16 px-4">
                    <div className="flex justify-between items-center mb-4">
                        {Array.from({ length: totalSteps }).map((_, i) => (
                            <div key={i} className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${step > i + 1 ? 'bg-secondary text-white' : step === i + 1 ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-gray-200 text-gray-400'}`}>
                                    {step > i + 1 ? <Check className="w-6 h-6" /> : i + 1}
                                </div>
                                {i < totalSteps - 1 && (
                                    <div className={`w-10 md:w-20 h-1 mx-2 rounded-full transition-colors duration-500 ${step > i + 1 ? 'bg-secondary' : 'bg-gray-200'}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">

                    {/* STEP 1: STYLE */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="space-y-10"
                        >
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-primary mb-2">{tv.step1.title}</h2>
                                <p className="text-muted">{tv.step1.subtitle}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {Object.entries(tv.step1.options).map(([key, label]) => {
                                    const Icon = icons.styles[key as keyof typeof icons.styles];
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => updateField("style", key)}
                                            className={`group p-8 rounded-3xl border-2 transition-all duration-500 text-center flex flex-col items-center gap-6 ${formData.style === key ? 'border-secondary bg-secondary/5' : 'border-white bg-white hover:border-secondary/20 shadow-xl shadow-primary/5 hover:-translate-y-2'}`}
                                        >
                                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${formData.style === key ? 'bg-secondary text-white scale-110' : 'bg-surface text-primary group-hover:bg-secondary/10 group-hover:text-secondary'}`}>
                                                <Icon className="w-10 h-10" />
                                            </div>
                                            <span className={`text-xl font-black uppercase tracking-tight leading-none ${formData.style === key ? 'text-secondary' : 'text-primary'}`}>
                                                {label as string}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: COMPANY */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-10"
                        >
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-primary mb-2">{tv.step2.title}</h2>
                                <p className="text-muted">{tv.step2.subtitle}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {Object.entries(tv.step2.options).map(([key, label]) => {
                                    const Icon = icons.company[key as keyof typeof icons.company];
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => updateField("company", key)}
                                            className={`group p-8 rounded-3xl border-2 transition-all duration-500 text-center flex flex-col items-center gap-6 ${formData.company === key ? 'border-secondary bg-secondary/5' : 'border-white bg-white hover:border-secondary/20 shadow-xl shadow-primary/5 hover:-translate-y-2'}`}
                                        >
                                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${formData.company === key ? 'bg-secondary text-white scale-110' : 'bg-surface text-primary group-hover:bg-secondary/10 group-hover:text-secondary'}`}>
                                                <Icon className="w-10 h-10" />
                                            </div>
                                            <span className={`text-xl font-black uppercase tracking-tight leading-none ${formData.company === key ? 'text-secondary' : 'text-primary'}`}>
                                                {label as string}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: DAYS */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-12 max-w-2xl mx-auto"
                        >
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-primary mb-2">{tv.step3.title}</h2>
                                <p className="text-muted">{tv.step3.subtitle}</p>
                            </div>

                            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-primary/5 text-center space-y-12">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                        <Calendar className="w-12 h-12" />
                                    </div>
                                    <div className="text-7xl font-black text-primary font-outfit">
                                        {formData.days} <span className="text-2xl text-muted uppercase tracking-[0.2em]">{tv.step3.days}</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <input
                                        type="range"
                                        min="3"
                                        max="21"
                                        value={formData.days}
                                        onChange={(e) => updateField("days", parseInt(e.target.value))}
                                        className="w-full h-4 bg-gray-100 rounded-full appearance-none cursor-pointer accent-secondary transition-all hover:bg-gray-200"
                                    />
                                    <div className="flex justify-between text-[10px] font-black text-muted uppercase tracking-widest px-1">
                                        <span>3 {lang === 'es' ? 'Días' : 'Days'}</span>
                                        <span>21 {lang === 'es' ? 'Días' : 'Days'}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleNext}
                                    className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest hover:bg-primary/90 transition-all transform active:scale-95 shadow-xl shadow-primary/20"
                                >
                                    {lang === 'es' ? 'Continuar' : 'Continue'}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: BUDGET */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="space-y-10"
                        >
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-primary mb-2">{tv.step4.title}</h2>
                                <p className="text-muted">{tv.step4.subtitle}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {Object.entries(tv.step4.options).map(([key, value]: [string, any]) => {
                                    const Icon = icons.budget[key as keyof typeof icons.budget];
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => updateField("budget", key)}
                                            className={`p-10 rounded-[3rem] border-2 text-left transition-all duration-500 flex flex-col gap-6 shadow-xl ${formData.budget === key ? 'border-secondary bg-secondary/5 scale-105' : 'border-white bg-white hover:border-secondary/30 shadow-primary/5'}`}
                                        >
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${formData.budget === key ? 'bg-secondary text-white' : 'bg-surface text-primary'}`}>
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <div className="space-y-3">
                                                <h3 className={`text-2xl font-black uppercase leading-tight ${formData.budget === key ? 'text-secondary' : 'text-primary'}`}>
                                                    {value.label}
                                                </h3>
                                                <p className="text-sm text-muted font-medium leading-relaxed">
                                                    {value.desc}
                                                </p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* RESULTS */}
                    {step === 5 && (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-xl mx-auto"
                        >
                            <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-primary/5 relative">
                                <div className="absolute top-0 inset-x-0 h-2 bg-secondary" />

                                <div className="p-12 md:p-16 text-center space-y-10">
                                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle className="w-10 h-10 text-secondary" />
                                    </div>

                                    <div className="space-y-4">
                                        <h2 className="text-4xl font-black text-primary font-outfit uppercase tracking-tight">{tv.result.title}</h2>
                                        <p className="text-muted font-medium italic">{tv.result.subtitle}</p>
                                    </div>

                                    <div className="bg-surface/60 p-10 rounded-[2.5rem] border border-border shadow-inner">
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted mb-4">{tv.result.priceRange}</p>
                                        <div className="text-5xl md:text-6xl font-black text-primary font-outfit">
                                            {calculateEstimate()}
                                        </div>
                                        <p className="text-sm font-bold text-secondary mt-4 uppercase tracking-widest">{tv.result.perPerson}</p>
                                    </div>

                                    <div className="bg-primary/5 p-8 rounded-[2.5rem] text-left border border-primary/10 space-y-4">
                                        <div className="flex gap-4 items-center mb-2">
                                            <Info className="w-5 h-5 text-secondary" />
                                            <h4 className="font-outfit font-black text-primary text-sm uppercase tracking-widest">{tv.result.transparency.title}</h4>
                                        </div>
                                        <p className="text-[11px] text-muted leading-relaxed font-medium">
                                            {tv.result.transparency.logic}
                                        </p>
                                        <div className="grid grid-cols-2 gap-4 pt-2">
                                            <div className="space-y-2">
                                                <p className="text-[10px] font-black text-primary uppercase opacity-40">{tv.result.transparency.baseRates}</p>
                                                <p className="text-[11px] font-bold text-primary">Smart: 75€ | Prem: 180€ | Lux: 450€</p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-[10px] font-black text-primary uppercase opacity-40">{tv.result.transparency.multipliers}</p>
                                                <div className="space-y-1">
                                                    <p className="text-[11px] font-bold text-secondary">{formData.company === 'solo' ? tv.result.transparency.companySolo : formData.company === 'family' ? tv.result.transparency.companyFamily : ''}</p>
                                                    {formData.company === 'family' && (
                                                        <p className="text-[10px] font-medium text-secondary/70 leading-tight">
                                                            {tv.result.transparency.familyChildren}
                                                        </p>
                                                    )}
                                                    <p className="text-[11px] font-bold text-secondary">{(formData.style === 'adventure' || formData.style === 'party') ? tv.result.transparency.stylePremium : ''}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-6 py-4 rounded-2xl bg-surface border border-border/50 text-left">
                                        <p className="text-[10px] text-muted leading-relaxed italic">
                                            <span className="font-bold text-primary opacity-60 uppercase mr-1">{tv.result.disclaimer.title}:</span>
                                            {tv.result.disclaimer.text}
                                        </p>
                                    </div>

                                    <div className="pt-4 space-y-6">
                                        <a
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full py-6 bg-green-500 text-white rounded-3xl font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-2xl shadow-green-500/30 transform hover:-translate-y-2 active:scale-95 text-lg"
                                        >
                                            {tv.result.cta}
                                        </a>
                                        <button
                                            onClick={() => setStep(1)}
                                            className="inline-flex items-center gap-2 text-muted hover:text-secondary transition-all text-xs font-black uppercase tracking-[0.2em]"
                                        >
                                            <RefreshCcw className="w-4 h-4" />
                                            {lang === 'es' ? 'Empezar de Nuevo' : 'Start Over'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>

                {/* Navigation Buttons (Back) */}
                {step > 1 && step < 5 && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={handleBack}
                        className="mt-16 flex items-center gap-3 text-muted/60 hover:text-primary transition-all font-black uppercase tracking-[0.2em] text-[10px] mx-auto group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        {lang === 'es' ? 'Atrás' : 'Back'}
                    </motion.button>
                )}

            </div>

            <Footer t={t.footer} />
        </main>
    );
}
