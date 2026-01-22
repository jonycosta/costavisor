"use client";

import { Sparkles, CheckCircle, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

interface CustomTravelBannerProps {
    t: any;
    onInquiry: () => void;
}

export default function CustomTravelBanner({ t, onInquiry }: CustomTravelBannerProps) {
    if (!t) return null;

    return (
        <section className="py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-primary rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full -mr-64 -mt-64 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full -ml-64 -mb-64" />

                    <div className="relative z-10 grid lg:grid-cols-2 items-center">
                        {/* Image Collage Side */}
                        <div className="relative h-[400px] lg:h-[600px] hidden lg:block overflow-hidden p-8">
                            <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="space-y-4">
                                    <div className="relative h-[65%] rounded-3xl overflow-hidden border-2 border-white/10 shadow-lg group">
                                        <Image
                                            src="/exp-granada.jpg"
                                            alt="Granada Alhambra"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white font-bold tracking-wider text-sm">GRANADA</div>
                                    </div>
                                    <div className="relative h-[35%] rounded-3xl overflow-hidden border-2 border-white/10 shadow-lg group">
                                        <Image
                                            src="/exp-malaga.jpg"
                                            alt="Malaga Port"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white font-bold tracking-wider text-sm">MÁLAGA</div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="relative h-[40%] rounded-3xl overflow-hidden border-2 border-white/10 shadow-lg group">
                                        <Image
                                            src="/exp-rum.jpg"
                                            alt="Culture"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white font-bold tracking-wider text-sm">HISTORIA</div>
                                    </div>
                                    <div className="relative h-[60%] rounded-3xl overflow-hidden border-2 border-white/10 shadow-lg group">
                                        <Image
                                            src="/exp-acebuchal.jpg"
                                            alt="Village"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white font-bold tracking-wider text-sm">PUEBLOS</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-10 lg:p-20 text-white">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-secondary/30">
                                <Sparkles className="w-4 h-4" />
                                {t.tag}
                            </div>

                            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-[1.1]">
                                {t.title}
                            </h2>
                            <p className="text-secondary font-bold text-xl mb-6 tracking-wide italic">
                                {t.subtitle}
                            </p>
                            <p className="text-white/70 text-lg mb-12 leading-relaxed max-w-xl">
                                {t.description}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 mb-12">
                                {t.features.map((feature: any, idx: number) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                                            <CheckCircle className="w-4 h-4 text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                                            <p className="text-white/50 text-sm leading-tight">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 border-t border-white/10 pt-10">
                                <button
                                    onClick={onInquiry}
                                    className="px-10 py-5 bg-secondary hover:bg-secondary/90 text-white font-black rounded-2xl transition-all shadow-2xl shadow-secondary/20 active:scale-95 flex items-center gap-3 group text-lg"
                                >
                                    {t.cta}
                                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                                </button>

                                <div className="flex items-center gap-4 text-white/40">
                                    <MapPin className="w-6 h-6 text-secondary" />
                                    <span className="text-sm font-medium tracking-wide">
                                        {t.destinations}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
