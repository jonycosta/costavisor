"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, MapPin, Quote } from "lucide-react";

interface AboutSectionProps {
    t: {
        tag: string;
        title: string;
        networkCallout: {
            title: string;
            text: string;
        };
        founder: {
            name: string;
            role: string;
            message: string;
        };
        p1: string;
        p2: string;
        stats: Array<{ label: string; value: string }>;
    };
}

export default function AboutSection({ t }: AboutSectionProps) {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/10 border border-secondary/20 shadow-sm text-secondary">
                                <MapPin className="w-4 h-4" />
                                <span className="font-outfit font-black uppercase tracking-[0.2em] text-xs">
                                    {t.tag}
                                </span>
                            </div>
                            <h2 className="font-outfit text-4xl md:text-6xl font-black text-primary leading-[1.1]">
                                {t.title}
                            </h2>
                        </div>

                        {/* HIGH PROMINENCE CALLOUT - Created Local Network */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="p-8 bg-primary/5 border-l-4 border-secondary rounded-2xl md:rounded-3xl relative overflow-hidden group hover:bg-primary/10 transition-colors shadow-sm"
                        >
                            <div className="absolute top-4 right-4 text-secondary/20">
                                <ShieldCheck className="w-12 h-12 group-hover:scale-110 transition-transform" />
                            </div>
                            <h4 className="font-outfit text-xl font-bold text-primary mb-3 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-secondary" />
                                {t.networkCallout.title}
                            </h4>
                            <p className="text-primary/70 font-medium leading-relaxed">
                                {t.networkCallout.text}
                            </p>
                        </motion.div>

                        <div className="space-y-6 text-muted font-medium text-lg leading-relaxed">
                            <p>{t.p1}</p>
                            <p>{t.p2}</p>
                        </div>

                        {/* FOUNDER MESSAGE SECTION WITH IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="pt-8 relative"
                        >
                            <div className="absolute -top-2 -left-2 text-secondary/10">
                                <Quote className="w-16 h-16 fill-current" />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start bg-secondary/5 p-6 md:p-8 rounded-[2rem] border border-secondary/10">
                                {/* Jony's Portrait */}
                                <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden shadow-xl border-2 border-white rotate-2 group-hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src="/founder-jony.jpg"
                                        alt="Jony - CostaVisor Founder"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <p className="font-outfit text-lg md:text-xl italic text-primary/80 leading-relaxed font-medium">
                                        "{t.founder.message}"
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1 h-8 bg-secondary rounded-full" />
                                        <div>
                                            <div className="font-outfit font-bold text-primary">{t.founder.name}</div>
                                            <div className="text-xs uppercase tracking-widest font-bold text-muted">{t.founder.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                            {t.stats.map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="text-3xl font-black text-primary">{stat.value}</div>
                                    <div className="text-[10px] uppercase tracking-widest font-bold text-muted">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square lg:aspect-auto lg:h-[800px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/exp-nature.png"
                            alt="CostaVisor Local Experience"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

                        {/* Floating Badge on Image */}
                        <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/20">
                            <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-1">Visión Local</p>
                            <p className="text-primary/70 text-sm font-bold">Un proyecto creado por y para Nerja, con la excelencia como único camino.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
