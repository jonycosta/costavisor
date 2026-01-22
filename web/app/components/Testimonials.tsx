import { Quote, Star } from "lucide-react";

export default function Testimonials({ t }: { t: any }) {
    return (
        <section id="testimonios" className="py-24 bg-primary/5 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 blur-[100px] rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -ml-48 -mb-48" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-secondary font-black uppercase tracking-widest text-xs">{t.tag}</span>
                    <h2 className="font-outfit text-4xl md:text-5xl font-black text-primary leading-tight">
                        {t.h2}
                    </h2>
                    <p className="text-lg text-muted font-medium max-w-xl mx-auto">
                        {t.p}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.items.map((testi: any, index: number) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-[2.5rem] border border-border shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group relative"
                        >
                            <div className="flex gap-1 mb-8">
                                {[...Array(testi.stars)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                ))}
                            </div>

                            <p className="text-xl font-medium mb-10 leading-relaxed text-primary/80 italic">
                                "{testi.content}"
                            </p>

                            <div className="flex items-center gap-5 pt-8 border-t border-border">
                                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-outfit font-black text-xl border border-primary/10">
                                    {testi.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-outfit font-bold text-lg text-primary">{testi.name}</h4>
                                    <p className="text-sm text-secondary font-bold uppercase tracking-wider">{testi.role}</p>
                                </div>
                            </div>

                            <Quote className="absolute top-10 right-10 w-12 h-12 text-primary/5 group-hover:text-secondary/10 transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
