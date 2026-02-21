"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import {
    ArrowRight, ArrowLeft, Plane, Sparkles, MapPin,
    Smile, Zap, BookOpen, Music,
    Users, User, Heart, Home,
    Wallet, Gem, TrendingUp,
    X, CheckCircle, Info
} from "lucide-react";
import { cn } from "@/lib/utils";

interface VacationDesignerProps {
    t: {
        title: string;
        subtitle: string;
        step1: any;
        step2: any;
        step3: any;
        step4: any;
        result: any;
        cta: string;
    };
}

export default function VacationDesigner({ t }: VacationDesignerProps) {
    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState({
        style: "relax",
        company: "couple",
        days: 7,
        budget: "premium"
    });

    const calculation = useMemo(() => {
        // Base prices per day per person
        const baseRates: any = {
            smart: 80,
            premium: 180,
            luxury: 450
        };

        // Multipliers
        const multipliers: any = {
            style: {
                relax: 1,
                adventure: 1.2,
                culture: 1.1,
                party: 1.25
            },
            company: {
                solo: 1.3,
                couple: 1,
                family: 0.85, // Savings per person
                friends: 0.9
            }
        };

        const base = baseRates[selection.budget];
        const styleMult = multipliers.style[selection.style];
        const companyMult = multipliers.company[selection.company];

        const pricePerDay = base * styleMult * companyMult;
        const total = pricePerDay * selection.days;

        return {
            pricePerDay: Math.round(pricePerDay),
            total: Math.round(total)
        };
    }, [selection]);

    const nextStep = () => setStep(s => Math.min(s + 1, 5));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const updateSelection = (key: string, value: any) => {
        setSelection(prev => ({ ...prev, [key]: value }));
    };

    const steps = [
        {
            id: 1,
            title: t.step1.title,
            subtitle: t.step1.subtitle,
            options: [
                { id: "relax", label: t.step1.options.relax, icon: Smile },
                { id: "adventure", label: t.step1.options.adventure, icon: Zap },
                { id: "culture", label: t.step1.options.culture, icon: BookOpen },
                { id: "party", label: t.step1.options.party, icon: Music },
            ],
            key: "style"
        },
        {
            id: 2,
            title: t.step2.title,
            subtitle: t.step2.subtitle,
            options: [
                { id: "couple", label: t.step2.options.couple, icon: Heart },
                { id: "family", label: t.step2.options.family, icon: Home },
                { id: "friends", label: t.step2.options.friends, icon: Users },
                { id: "solo", label: t.step2.options.solo, icon: User },
            ],
            key: "company"
        },
        {
            id: 3,
            title: t.step3.title,
            subtitle: t.step3.subtitle,
            component: (
                <div className="flex flex-col items-center gap-8 py-10">
                    <div className="text-8xl font-black text-primary">{selection.days}</div>
                    <input
                        type="range"
                        min="1"
                        max="30"
                        value={selection.days}
                        onChange={(e) => updateSelection("days", parseInt(e.target.value))}
                        className="w-full h-3 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-secondary"
                    />
                    <div className="flex justify-between w-full text-xs font-bold text-muted uppercase tracking-widest">
                        <span>1 día</span>
                        <span>30 días</span>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: t.step4.title,
            subtitle: t.step4.subtitle,
            options: [
                { id: "smart", label: t.step4.options.smart.label, desc: t.step4.options.smart.desc, icon: Wallet },
                { id: "premium", label: t.step4.options.premium.label, desc: t.step4.options.premium.desc, icon: TrendingUp },
                { id: "luxury", label: t.step4.options.luxury.label, desc: t.step4.options.luxury.desc, icon: Gem },
            ],
            key: "budget"
        }
    ];

    return (
        <section className="py-24 bg-white" id="disenador">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[4rem] bg-surface p-6 md:p-20 shadow-2xl relative overflow-hidden border border-primary/5">
                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mt-48 blur-3xl" />

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Simulador VIP</span>
                            <h2 className="font-outfit text-4xl md:text-6xl font-black text-primary leading-tight mb-4">
                                {t.title}
                            </h2>
                            <p className="text-muted text-xl font-medium">
                                {t.subtitle}
                            </p>
                        </div>

                        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-border shadow-xl">
                            {/* Progress Bar */}
                            <div className="flex justify-between items-center mb-16 relative">
                                <div className="absolute top-1/2 left-0 right-0 h-1 bg-surface -translate-y-1/2 -z-0" />
                                <motion.div
                                    className="absolute top-1/2 left-0 h-1 bg-secondary -translate-y-1/2 -z-0"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${(step - 1) * 25}%` }}
                                />
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <div
                                        key={s}
                                        className={cn(
                                            "w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all relative z-10 border-2 md:border-4",
                                            step === s ? "bg-primary text-white border-secondary scale-110 md:scale-125" :
                                                step > s ? "bg-secondary text-primary border-secondary" : "bg-white text-muted border-surface"
                                        )}
                                    >
                                        {step > s ? <CheckCircle className="w-4 h-4 md:w-6 md:h-6" /> : s}
                                    </div>
                                ))}
                            </div>

                            <AnimatePresence mode="wait">
                                {step <= 4 ? (
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="min-h-[400px]"
                                    >
                                        <div className="text-center mb-8 md:mb-12">
                                            <h3 className="text-2xl md:text-3xl font-black text-primary mb-2">{steps[step - 1].title}</h3>
                                            <p className="text-muted text-sm md:text-lg font-medium">{steps[step - 1].subtitle}</p>
                                        </div>

                                        {steps[step - 1].options ? (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                                {steps[step - 1].options?.map((opt: any) => {
                                                    const Icon = opt.icon;
                                                    const isSelected = (selection as any)[steps[step - 1].key] === opt.id;
                                                    return (
                                                        <button
                                                            key={opt.id}
                                                            onClick={() => {
                                                                updateSelection(steps[step - 1].key, opt.id);
                                                                setTimeout(nextStep, 300);
                                                            }}
                                                            className={cn(
                                                                "p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border-2 transition-all group flex flex-col items-center text-center gap-3 md:gap-4",
                                                                isSelected
                                                                    ? "bg-primary border-primary text-white shadow-2xl scale-105"
                                                                    : "bg-surface border-transparent hover:border-secondary/30 text-primary"
                                                            )}
                                                        >
                                                            <div className={cn(
                                                                "w-16 h-16 rounded-2xl flex items-center justify-center mb-2 transition-colors",
                                                                isSelected ? "bg-white/10" : "bg-primary/5 group-hover:bg-secondary/10"
                                                            )}>
                                                                <Icon className={cn("w-8 h-8", isSelected ? "text-secondary" : "text-primary")} strokeWidth={1.5} />
                                                            </div>
                                                            <span className="font-bold uppercase tracking-widest text-xs">{opt.label}</span>
                                                            {opt.desc && <p className={cn("text-[10px] uppercase font-bold leading-tight", isSelected ? "text-white/60" : "text-muted")}>{opt.desc}</p>}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        ) : (
                                            steps[step - 1].component
                                        )}

                                        <div className="flex justify-between mt-16">
                                            <button
                                                onClick={prevStep}
                                                className={cn("flex items-center gap-2 p-4 text-primary font-bold uppercase tracking-widest text-xs", step === 1 && "opacity-0 invisible")}
                                            >
                                                <ArrowLeft className="w-5 h-5" />
                                                Volver
                                            </button>
                                            <button
                                                onClick={nextStep}
                                                className="flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-secondary transition-all"
                                            >
                                                {step === 4 ? "Calcular Presupuesto" : "Siguiente"}
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="space-y-12"
                                    >
                                        <div className="text-center">
                                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-8">
                                                <Sparkles className="w-5 h-5" />
                                                <span className="text-xs font-black uppercase tracking-widest">{t.result.title}</span>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="text-muted font-bold uppercase tracking-widest text-xs md:text-sm">{t.result.priceRange}</div>
                                                <div className="text-6xl md:text-[10rem] font-black text-primary leading-none">
                                                    {calculation.pricePerDay}€
                                                </div>
                                                <div className="text-sm md:text-lg font-bold text-muted">{t.result.perPerson}</div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-surface rounded-[2.5rem] border border-border">
                                                <h4 className="font-black text-primary uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                                    <Info className="w-4 h-4 text-secondary" />
                                                    {t.result.transparency.title}
                                                </h4>
                                                <ul className="space-y-4 text-sm font-medium text-muted">
                                                    <li className="flex justify-between">
                                                        <span>{t.result.transparency.baseRates} ({selection.budget})</span>
                                                        <span className="text-primary font-bold">Base</span>
                                                    </li>
                                                    <li className="flex justify-between">
                                                        <span>Ajuste Estilo ({selection.style})</span>
                                                        <span className="text-secondary font-bold">x{selection.style === 'relax' ? '1.0' : selection.style === 'adventure' ? '1.2' : '1.1'}</span>
                                                    </li>
                                                    <li className="flex justify-between">
                                                        <span>Compañía ({selection.company})</span>
                                                        <span className="text-secondary font-bold">x{selection.company === 'solo' ? '1.3' : selection.company === 'couple' ? '1.0' : '0.9'}</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-8 bg-primary text-white rounded-[2.5rem] flex flex-col justify-between">
                                                <div>
                                                    <h4 className="font-black uppercase tracking-widest text-xs mb-2 text-secondary">{t.result.disclaimer.title}</h4>
                                                    <p className="text-white/60 text-sm leading-relaxed">{t.result.disclaimer.text}</p>
                                                </div>
                                                <button
                                                    onClick={() => window.open(`https://wa.me/34683459342?text=${encodeURIComponent(t.result.whatsappMessage.replace('{style}', selection.style).replace('{company}', selection.company).replace('{days}', selection.days.toString()).replace('{budget}', selection.budget).replace('{price}', calculation.pricePerDay.toString()))}`, '_blank')}
                                                    className="mt-8 py-5 bg-secondary text-primary rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-secondary/20"
                                                >
                                                    {t.result.cta}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button onClick={() => setStep(1)} className="text-xs font-bold uppercase tracking-[0.3em] text-muted hover:text-primary transition-colors">
                                                Reiniciar Simulador
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
