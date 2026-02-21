"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQProps {
    t: {
        tag: string;
        title: string;
        items: Array<{ q: string; a: string }>;
    };
}

export default function FAQ({ t }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-surface overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
                            {t.tag}
                        </span>
                        <h2 className="font-outfit text-3xl md:text-5xl font-black text-primary">
                            {t.title}
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {t.items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white rounded-3xl border border-border overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full p-6 md:p-8 flex justify-between items-center text-left hover:bg-primary/5 transition-colors"
                                >
                                    <span className="text-lg md:text-xl font-bold text-primary">{item.q}</span>
                                    <ChevronDown
                                        className={cn(
                                            "w-6 h-6 text-secondary transition-transform duration-500",
                                            openIndex === i ? "rotate-180" : ""
                                        )}
                                    />
                                </button>
                                <div
                                    className={cn(
                                        "overflow-hidden transition-all duration-500 bg-primary/5",
                                        openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <div className="p-6 md:p-8 pt-0 text-muted font-medium text-base md:text-lg leading-relaxed border-t border-primary/5">
                                        {item.a}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Direct Contact Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-16 p-6 md:p-10 bg-primary text-white rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                                <MessageCircle className="w-8 h-8 text-secondary" />
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="text-2xl font-bold">¿Sigues con dudas?</h4>
                                <p className="text-white/60">Estamos al otro lado del WhatsApp para lo que necesites.</p>
                            </div>
                        </div>
                        <button className="px-10 py-5 bg-secondary text-primary font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white transition-all">
                            Hablar ahora
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
