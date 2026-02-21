"use client";

import { motion } from "framer-motion";
import { Users, Music, PartyPopper, Lock } from "lucide-react";

interface GroupsAndEventsProps {
    t: {
        tag: string;
        title: string;
        p: string;
        items: Array<{ title: string; desc: string }>;
        circleTitle: string;
        circleDesc: string;
        circleCta: string;
    };
}

const icons = [Users, Music, PartyPopper];

export default function GroupsAndEvents({ t }: GroupsAndEventsProps) {
    return (
        <section className="py-24 bg-white overflow-hidden" id="grupos">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
                            {t.tag}
                        </span>
                        <h2 className="font-outfit text-3xl md:text-5xl font-black text-primary leading-tight mb-8">
                            {t.title}
                        </h2>
                        <p className="text-muted text-lg font-medium leading-relaxed mb-12">
                            {t.p}
                        </p>

                        <div className="space-y-8">
                            {t.items.map((item, i) => {
                                const Icon = icons[i];
                                return (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-all">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-primary mb-1">{item.title}</h4>
                                            <p className="text-muted">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative p-8 md:p-12 bg-primary rounded-[2.5rem] md:rounded-[3.5rem] text-white overflow-hidden shadow-2xl"
                    >
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full -mr-32 -mt-32" />

                        <div className="relative z-10 text-center space-y-8">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Lock className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="font-outfit text-2xl md:text-4xl font-black">
                                {t.circleTitle}
                            </h3>
                            <p className="text-white/60 text-lg font-medium leading-relaxed">
                                {t.circleDesc}
                            </p>
                            <button className="w-full py-5 bg-secondary text-primary font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white transition-all shadow-xl shadow-secondary/20">
                                {t.circleCta}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
