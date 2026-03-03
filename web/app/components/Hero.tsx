"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

interface HeroProps {
    t: {
        tag: string;
        h1: string;
        p: string;
        cta: string;
        cta2: string;
        localPrideShort: string;
        jdBuilders: {
            title: string;
            description: string;
            services: Array<{ name: string; desc: string }>;
            cta: string;
        };
        localNetwork: {
            title: string;
            description: string;
            cta: string;
        };
    };
}

export default function Hero({ t }: HeroProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-primary pt-24"
        >
            {/* Background with Parallax Effect */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/exp-nature.png"
                    alt="CostaVisor Experience"
                    fill
                    className="object-cover opacity-50 scale-110"
                    priority
                />
                {/* Layered Overlays for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/60" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-10">

                    {/* Tagline Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                    >
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-white uppercase">
                            {t.tag}
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="space-y-4 md:space-y-6"
                    >
                        <h1 className="font-outfit text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.95] tracking-tighter drop-shadow-2xl">
                            {t.h1.split(' ').map((word, i) => (
                                <span key={i} className="inline-block mr-2 sm:mr-4">
                                    {word}
                                </span>
                            ))}
                        </h1>
                    </motion.div>

                    {/* Description Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white/80 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md"
                    >
                        {t.p}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
                    >
                        <button className="btn-premium-primary w-full sm:w-auto">
                            {t.cta}
                        </button>
                        <button className="btn-premium-secondary w-full sm:w-auto">
                            {t.cta2}
                        </button>
                    </motion.div>

                    {/* Social Proof + Local Pride */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="pt-12 flex flex-col items-center gap-4"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden ring-4 ring-white/10">
                                    <Image src={`/exp-villa.png`} alt="User" width={40} height={40} className="object-cover" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary text-xs font-bold ring-4 ring-white/10">
                                +2k
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                            <span className="flex text-secondary gap-0.5">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                            </span>
                            <span>{t.localPrideShort}</span>
                        </div>

                        {/* JD Builders Section */}
                        <div className="mt-12 text-left">
                            <h3 className="font-outfit text-2xl md:text-3xl font-black text-white mb-4">{t.jdBuilders.title}</h3>
                            <p className="text-white/70 text-lg mb-6">{t.jdBuilders.description}</p>
                            <ul className="list-disc list-inside text-white/70 text-lg mb-6">
                                {t.jdBuilders.services.map((service: any, i: number) => (
                                    <li key={i}><strong>{service.name}:</strong> {service.desc}</li>
                                ))}
                            </ul>
                            <button className="btn-premium-secondary w-full sm:w-auto mt-4">
                                {t.jdBuilders.cta}
                            </button>
                        </div>

                        {/* Local Network Section */}
                        <div className="mt-12 text-left">
                            <h3 className="font-outfit text-2xl md:text-3xl font-black text-white mb-4">{t.localNetwork.title}</h3>
                            <p className="text-white/70 text-lg mb-6">{t.localNetwork.description}</p>
                            <button className="btn-premium-secondary w-full sm:w-auto mt-4">
                                {t.localNetwork.cta}
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Hero Accent: Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-secondary/10 blur-[120px] rounded-[100%] -mb-32 z-0" />
        </section>
    );
}
