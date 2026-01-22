"use client";

import { HelpCircle, ArrowRight } from "lucide-react";

interface SpecialRequestNoteProps {
    t: {
        title: string;
        message: string;
        cta: string;
    };
    onInquiry: () => void;
}

export default function SpecialRequestNote({ t, onInquiry }: SpecialRequestNoteProps) {
    if (!t) return null;

    return (
        <div className="max-w-4xl mx-auto px-6 mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-white border border-secondary/20 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all group">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <HelpCircle className="w-8 h-8 text-secondary" />
                    </div>

                    <div className="text-center md:text-left flex-grow">
                        <h3 className="text-2xl font-bold text-primary mb-3">
                            {t.title}
                        </h3>
                        <p className="text-primary/70 leading-relaxed max-w-2xl">
                            {t.message}
                        </p>
                    </div>

                    <button
                        onClick={onInquiry}
                        className="px-8 py-4 bg-primary text-white font-bold rounded-xl transition-all hover:bg-primary/90 flex items-center gap-3 whitespace-nowrap active:scale-95"
                    >
                        {t.cta}
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
