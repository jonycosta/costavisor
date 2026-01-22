"use client";

import Image from "next/image";
import { Car, Bike, PlaneTakeoff, Map, CheckCircle2 } from "lucide-react";

export default function LocalServices({ t }: { t: any }) {
    const icons = [PlaneTakeoff, Car, Bike, Map];

    return (
        <section id="servicios-locales" className="py-24 bg-surface/50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <span className="text-secondary font-black uppercase tracking-widest text-xs">{t.tag}</span>
                    <h2 className="font-outfit text-5xl md:text-6xl font-black text-primary leading-tight">
                        {t.h2}
                    </h2>
                    <p className="text-xl text-muted font-medium">
                        {t.p}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.items.map((service: any, i: number) => {
                        const Icon = icons[i] || Car;
                        return (
                            <div
                                key={i}
                                className="group bg-white rounded-[3rem] p-8 border border-border hover:border-secondary/20 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 bg-primary/5 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-secondary/10 group-hover:scale-110 transition-all duration-500">
                                    <Icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors" />
                                </div>
                                <h3 className="font-outfit text-2xl font-bold text-primary mb-4">{service.title}</h3>
                                <p className="text-muted font-medium mb-6 leading-relaxed">
                                    {service.desc}
                                </p>
                                <a
                                    href="mailto:presupuesto@costavisor.com"
                                    className="mt-auto pt-6 border-t border-border/50 w-full flex items-center justify-center gap-2 text-secondary font-bold text-sm hover:text-primary transition-colors hover:scale-105 active:scale-95 cursor-pointer"
                                >
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>{t.vipAssistance}</span>
                                </a>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-20 p-12 bg-primary rounded-[3.5rem] text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full -mr-32 -mt-32" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h3 className="font-outfit text-3xl font-black mb-4">¿Necesita una ruta personalizada?</h3>
                            <p className="text-white/70 text-lg font-medium">
                                Le ayudamos con la planificación de su viaje y recomendamos las mejores rutas por la zona de forma gratuita.
                            </p>
                        </div>
                        <a
                            href="mailto:presupuesto@costavisor.com"
                            className="px-10 py-5 bg-secondary hover:bg-white hover:text-primary text-white font-black rounded-2xl transition-all shadow-xl active:scale-95 whitespace-nowrap"
                        >
                            Informarse Gratis
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
