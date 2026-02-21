"use client";

import { motion } from "framer-motion";
import { Send, Map, Heart } from "lucide-react";

interface HowItWorksProps {
    t: {
        tag: string;
        title: string;
        steps: Array<{ title: string; desc: string }>;
    };
}

const icons = [Send, Map, Heart];

export default function HowItWorks({ t }: HowItWorksProps) {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -ml-48 -mb-48" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        {t.tag}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-outfit text-4xl md:text-5xl font-black"
                    >
                        {t.title}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0" />

                    {t.steps.map((step, i) => {
                        const Icon = icons[i];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div className="w-24 h-24 mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-secondary/20 group-hover:border-secondary/30 transition-all duration-500 relative z-10">
                                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-black text-xl shadow-xl">
                                        {i + 1}
                                    </div>
                                    <Icon className="w-10 h-10 text-secondary" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-outfit text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-white/60 leading-relaxed font-medium">{step.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
