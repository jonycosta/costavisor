"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

interface AccommodationsPreviewProps {
    t: {
        tag: string;
        h2: string;
        p: string;
        items: Array<any>;
        viewAll: string;
    };
}

export default function AccommodationsPreview({ t }: AccommodationsPreviewProps) {
    return (
        <section className="py-24 bg-surface" id="alojamientos">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
                            {t.tag}
                        </span>
                        <h2 className="font-outfit text-3xl md:text-5xl font-black text-primary leading-tight">
                            {t.h2}
                        </h2>
                        <p className="text-muted text-base md:text-lg mt-4 md:mt-6 font-medium">
                            {t.p}
                        </p>
                    </div>
                    <Link
                        href="/alojamientos"
                        className="group flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all"
                    >
                        {t.viewAll}
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest shadow-lg">
                                    {item.price}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-2 text-secondary mb-3">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{item.loc}</span>
                                </div>
                                <h3 className="font-outfit text-2xl font-bold text-primary mb-6 group-hover:text-secondary transition-colors">
                                    {item.title}
                                </h3>
                                <Link
                                    href={`/alojamientos`}
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-4 transition-all"
                                >
                                    Ver disponibilidad
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
