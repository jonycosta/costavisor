"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Portfolio({ t }: { t: any }) {
    return (
        <section id="experiencias" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -ml-48 -mt-48" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                            <Sparkles className="w-3 h-3 fill-secondary" />
                            <span className="font-black uppercase tracking-widest text-[10px]">{t.tag}</span>
                        </div>
                        <h2 className="font-outfit text-5xl md:text-7xl font-black text-primary leading-tight tracking-tight">
                            {t.h2}
                        </h2>
                        <p className="text-xl text-muted font-medium max-w-xl leading-relaxed">
                            {t.p}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {t.items.map((project: any, i: number) => (
                        <Link
                            key={i}
                            href={`/experience/${project.slug}`}
                            className="group block relative rounded-[3.5rem] overflow-hidden aspect-[16/10] shadow-2xl hover:shadow-primary/20 transition-all duration-700"
                        >
                            <Image
                                src={project.image}
                                alt={`${project.title} - Experiencia en Nerja y Frigiliana`}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

                            <div className="absolute bottom-0 left-0 p-12 w-full transform transition-all duration-700 group-hover:-translate-y-4">
                                <span className="inline-block px-5 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                                    {project.category}
                                </span>
                                <div className="flex justify-between items-end">
                                    <div className="flex-1">
                                        <h3 className="font-outfit text-4xl md:text-5xl font-black text-white group-hover:text-secondary transition-colors duration-500 leading-tight mb-2">
                                            {project.title}
                                        </h3>
                                        {project.price !== "0" && project.price !== "Consultar" && (
                                            <p className="text-white/60 text-[10px] font-bold italic group-hover:text-white transition-colors">
                                                {project.price}€ — {t.depositNote}
                                            </p>
                                        )}
                                    </div>
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                                        <ArrowUpRight className="w-8 h-8" strokeWidth={3} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
