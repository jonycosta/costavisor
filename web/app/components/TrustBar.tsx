"use client";

import { motion } from "framer-motion";

interface TrustBarProps {
    t: {
        items: Array<{ count: string; label: string }>;
    };
}

export default function TrustBar({ t }: TrustBarProps) {
    return (
        <section className="py-12 bg-primary relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {t.items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center"
                        >
                            <span className="font-outfit text-2xl sm:text-3xl md:text-5xl font-black text-secondary mb-1 md:mb-2">
                                {item.count}
                            </span>
                            <span className="text-white/60 text-[8px] sm:text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
