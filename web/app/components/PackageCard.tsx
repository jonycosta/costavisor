"use client";

import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageCardProps {
    name: string;
    tagline: string;
    badge: string;
    description: string;
    includes: string[];
    idealFor: string;
    youReceive: string[];
    onRequestInfo: () => void;
    buttonText: string;
    tier: "essential" | "comfort" | "premium";
}

export default function PackageCard({
    name,
    tagline,
    badge,
    description,
    includes,
    idealFor,
    youReceive,
    onRequestInfo,
    buttonText,
    tier
}: PackageCardProps) {
    const tierStyles = {
        essential: {
            badge: "bg-blue-100 text-blue-700",
            border: "border-blue-200 hover:border-blue-400",
            button: "bg-blue-600 hover:bg-blue-700",
            gradient: "from-blue-50 to-white"
        },
        comfort: {
            badge: "bg-emerald-100 text-emerald-700",
            border: "border-emerald-200 hover:border-emerald-400 ring-2 ring-emerald-100",
            button: "bg-emerald-600 hover:bg-emerald-700",
            gradient: "from-emerald-50 to-white"
        },
        premium: {
            badge: "bg-amber-100 text-amber-700",
            border: "border-amber-200 hover:border-amber-400",
            button: "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700",
            gradient: "from-amber-50 to-white"
        }
    };

    const style = tierStyles[tier];

    return (
        <div
            className={cn(
                "relative group rounded-3xl border-2 p-8 transition-all duration-300 hover:shadow-2xl bg-gradient-to-b",
                style.border,
                style.gradient,
                tier === "comfort" && "scale-105"
            )}
        >
            {tier === "comfort" && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                    ⭐ Mejor Opción
                </div>
            )}

            <div className="mb-6">
                <div className={cn("inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4", style.badge)}>
                    {badge}
                </div>
                <h3 className="text-3xl font-black text-primary mb-2">{name}</h3>
                <p className="text-lg text-primary/60 italic">{tagline}</p>
            </div>

            <p className="text-base text-primary/80 mb-6 leading-relaxed">{description}</p>

            <div className="space-y-6 mb-8">
                <div>
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                        ¿Qué incluye?
                    </h4>
                    <ul className="space-y-2">
                        {includes.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-primary/70">
                                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-4 border-t border-primary/10">
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                        Ideal para:
                    </h4>
                    <p className="text-sm text-primary/70 italic">{idealFor}</p>
                </div>
            </div>

            <button
                onClick={onRequestInfo}
                className={cn(
                    "w-full py-4 rounded-xl text-white font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2",
                    style.button
                )}
            >
                <Sparkles className="w-5 h-5" />
                {buttonText}
            </button>
        </div>
    );
}
