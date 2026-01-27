import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ClientOnly from "./ClientOnly";

export default function Hero({ t }: { t: any }) {
    return (
        <section id="inicio" className="relative h-screen flex items-center pt-20 overflow-hidden bg-primary">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/exp-nature.png"
                    alt="Costa del Sol Landscape"
                    fill
                    className="object-cover opacity-60"
                    priority
                    quality={75}
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl space-y-8">
                    {/* Local Pride Top Banner */}
                    <div className="inline-flex animate-in fade-in slide-in-from-top-4 duration-1000">
                        <div className="bg-secondary/30 backdrop-blur-xl border border-secondary/40 px-6 py-2 rounded-full flex items-center gap-3">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white">
                                {t.localPrideShort}
                            </span>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-xs font-bold tracking-widest text-white uppercase">{t.tag}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-outfit text-5xl md:text-8xl font-black text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000">
                        {t.h1}
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        {t.p}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                        <a href="#experiencias" className="w-full sm:w-auto px-10 py-5 bg-secondary hover:bg-secondary/90 text-white font-outfit font-bold text-lg rounded-2xl transition-all shadow-2xl shadow-secondary/20 active:scale-95 flex items-center justify-center gap-3">
                            {t.cta}
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="#servicios-locales" className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-outfit font-bold text-lg rounded-2xl transition-all flex items-center justify-center gap-3">
                            {t.cta2}
                        </a>
                    </div>

                    {/* Social Proof / Stats */}
                    <ClientOnly>
                        <div className="flex items-center gap-8 pt-8 animate-in fade-in duration-1000 delay-500">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-primary bg-slate-200 overflow-hidden relative">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <span className="text-white font-black text-xl">+2k</span>
                                    <span className="text-secondary font-bold text-sm">★★★★★</span>
                                </div>
                                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Experiencias inolvidables</p>
                            </div>
                        </div>
                    </ClientOnly>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
}
