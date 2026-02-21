"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FeaturedExperiencesProps {
    t: {
        tag: string;
        h2: string;
        p: string;
        items: Array<any>;
        viewAll: string;
    };
}

export default function FeaturedExperiences({ t }: FeaturedExperiencesProps) {
    // Show only first 6 as planned
    const displayItems = t.items.slice(0, 6);

    return (
        <section className="py-24 bg-white" id="experiencias">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
                            {t.tag}
                        </span>
                        <h2 className="font-outfit text-4xl md:text-5xl font-black text-primary leading-tight">
                            {t.h2}
                        </h2>
                        <p className="text-muted text-lg mt-6 font-medium">
                            {t.p}
                        </p>
                    </div>
                    <Link
                        href="/experiences"
                        className="group flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-all"
                    >
                        {t.viewAll}
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {displayItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={`/experience/${item.slug}`}
                                className="group block relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="inline-block px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-4">
                                        {item.category}
                                    </span>
                                    <div className="flex justify-between items-end">
                                        <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl font-black text-white group-hover:text-secondary transition-colors leading-tight pr-4">
                                            {item.title}
                                        </h3>
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
