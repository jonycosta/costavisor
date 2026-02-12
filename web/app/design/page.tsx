"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ArrowLeft, RefreshCcw, HandCoins, Info } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
            setTimeout(() => handleNext(), 300);
        }
    };

    // Calculation Logic (Mock)
    const calculateEstimate = () => {
        let basePricePerDay = 0;

        // Budget Tier Base
        if (formData.budget === 'smart') basePricePerDay = 100;
        if (formData.budget === 'premium') basePricePerDay = 250;
        if (formData.budget === 'luxury') basePricePerDay = 600;

        // Multipliers
        let multiplier = 1;
        if (formData.company === 'solo') multiplier = 1.4; // Single supplement
        if (formData.company === 'family') multiplier = 0.9; // Kids usually cheaper if per person avg

        const estimatedTotal = Math.round(basePricePerDay * formData.days * multiplier);

        // Create range (+- 15%)
        const min = Math.round(estimatedTotal * 0.85);
        const max = Math.round(estimatedTotal * 1.15);

        return `${min}€ - ${max}€`;
    };

    const formattedMessage = tv.result.whatsappMessage
        .replace("{style}", tv.step1.options[formData.style as keyof typeof tv.step1.options] || formData.style)
        .replace("{company}", tv.step2.options[formData.company as keyof typeof tv.step2.options] || formData.company)
        .replace("{days}", formData.days)
        .replace("{budget}", formData.budget ? (tv.step4.options[formData.budget as keyof typeof tv.step4.options]?.label || formData.budget) : "")
        .replace("{price}", calculateEstimate());

    const whatsappLink = `https://wa.me/34683459342?text=${encodeURIComponent(formattedMessage)}`;

    return (
        <main className="min-h-screen bg-surface">
            <Navbar lang={lang} setLang={setLang} t={t.nav} />

            <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">

                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted mb-2">
                        <span>Step {Math.min(step, totalSteps)} of {totalSteps}</span>
                        <span>{Math.round((Math.min(step, totalSteps) / totalSteps) * 100)}% Completed</span>
                    </div>
                    <div className="h-1 bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: `${(Math.min(step, totalSteps) / totalSteps) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">

                    {/* STEP 1: STYLE */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="text-center space-y-4">
                                <span className="text-secondary font-black text-sm uppercase tracking-widest">Step 01</span>
                                <h1 className="text-4xl md:text-5xl font-outfit font-black text-primary">{tv.step1.title}</h1>
                                <p className="text-xl text-muted">{tv.step1.subtitle}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(tv.step1.options).map(([key, label]) => (
                                    <button
                                        key={key}
                                        onClick={() => updateField("style", key)}
                                        className={`p-8 rounded-3xl border-2 text-left transition-all duration-300 hover:shadow-xl group relative overflow-hidden ${formData.style === key ? 'border-secondary bg-secondary/5' : 'border-transparent bg-white hover:border-secondary/30'}`}
                                    >
                                        <span className={`relative z-10 text-xl font-bold ${formData.style === key ? 'text-secondary' : 'text-primary'}`}>
                                            {label as string}
                                        </span>
                                    </button>
                                ))}
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
                            className="space-y-8"
                        >
                            <div className="text-center space-y-4">
                                <span className="text-secondary font-black text-sm uppercase tracking-widest">Step 02</span>
                                <h1 className="text-4xl md:text-5xl font-outfit font-black text-primary">{tv.step2.title}</h1>
                                <p className="text-xl text-muted">{tv.step2.subtitle}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(tv.step2.options).map(([key, label]) => (
                                    <button
                                        key={key}
                                        onClick={() => updateField("company", key)}
                                        className={`p-8 rounded-3xl border-2 text-left transition-all duration-300 hover:shadow-xl group ${formData.company === key ? 'border-secondary bg-secondary/5' : 'border-transparent bg-white hover:border-secondary/30'}`}
                                    >
                                        <span className={`text-xl font-bold ${formData.company === key ? 'text-secondary' : 'text-primary'}`}>
                                            {label as string}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: DAYS */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-12"
                        >
                            <div className="text-center space-y-4">
                                <span className="text-secondary font-black text-sm uppercase tracking-widest">Step 03</span>
                                <h1 className="text-4xl md:text-5xl font-outfit font-black text-primary">{tv.step3.title}</h1>
                                <p className="text-xl text-muted">{tv.step3.subtitle}</p>
                            </div>

                            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-primary/5 text-center space-y-8">
                                <div className="text-6xl font-black text-secondary">
                                    {formData.days} <span className="text-2xl text-muted uppercase tracking-widest">{tv.step3.days}</span>
                                </div>
                                <input
                                    type="range"
                                    min="3"
                                    max="14"
                                    value={formData.days}
                                    onChange={(e) => updateField("days", parseInt(e.target.value))}
                                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                                />
                                <div className="flex justify-between text-xs font-bold text-muted uppercase tracking-widest">
                                    <span>3 Days</span>
                                    <span>14 Days</span>
                                </div>

                                <button
                                    onClick={handleNext}
                                    className="w-full py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest hover:bg-primary/90 transition-all"
                                >
                                    Continue
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: BUDGET */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="text-center space-y-4">
                                <span className="text-secondary font-black text-sm uppercase tracking-widest">Step 04</span>
                                <h1 className="text-4xl md:text-5xl font-outfit font-black text-primary">{tv.step4.title}</h1>
                                <p className="text-xl text-muted">{tv.step4.subtitle}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {Object.entries(tv.step4.options).map(([key, value]: [string, any]) => (
                                    <button
                                        key={key}
                                        onClick={() => updateField("budget", key)}
                                        className={`p-8 rounded-3xl border-2 text-left transition-all duration-300 hover:shadow-xl flex flex-col gap-4 ${formData.budget === key ? 'border-secondary bg-secondary/5 scale-105' : 'border-transparent bg-white hover:border-secondary/30'}`}
                                    >
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${formData.budget === key ? 'bg-secondary text-white' : 'bg-primary/5 text-primary'}`}>
                                            <HandCoins className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold mb-2 ${formData.budget === key ? 'text-secondary' : 'text-primary'}`}>
                                                {value.label}
                                            </h3>
                                            <p className="text-sm text-muted leading-relaxed">
                                                {value.desc}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* RESULTS */}
                    {step === 5 && (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-primary/5">
                                <div className="p-10 md:p-14 text-center space-y-8">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check className="w-10 h-10" />
                                    </div>

                                    <div className="space-y-2">
                                        <h2 className="text-3xl md:text-4xl font-outfit font-black text-primary">{tv.result.title}</h2>
                                        <p className="text-muted text-lg">{tv.result.subtitle}</p>
                                    </div>

                                    <div className="bg-surface/50 p-8 rounded-3xl border border-border">
                                        <p className="text-sm font-bold uppercase tracking-widest text-muted mb-2">{tv.result.priceRange}</p>
                                        <div className="text-4xl md:text-5xl font-black text-secondary">
                                            {calculateEstimate()}
                                        </div>
                                        <p className="text-xs font-medium text-muted mt-2">{tv.result.perPerson}</p>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-2xl flex gap-4 text-left items-start">
                                        <Info className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-blue-900 text-sm mb-1">{tv.result.disclaimer.title}</h4>
                                            <p className="text-xs text-blue-700 leading-relaxed">
                                                {tv.result.disclaimer.text}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 space-y-4">
                                        <a
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full py-5 bg-green-500 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1"
                                        >
                                            {tv.result.cta}
                                        </a>
                                        <button
                                            onClick={() => setStep(1)}
                                            className="flex items-center justify-center gap-2 w-full py-4 text-muted hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
                                        >
                                            <RefreshCcw className="w-4 h-4" /> Start Over
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>

                {/* Back Button */}
                {step > 1 && step < 5 && (
                    <button
                        onClick={handleBack}
                        className="mt-12 flex items-center gap-2 text-muted hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs mx-auto"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                )}

            </div>

            <Footer t={t.footer} />
        </main>
    );
}
