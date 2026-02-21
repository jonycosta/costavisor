"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialsProps {
    t: {
        tag: string;
        h2: string;
        p: string;
        items: Array<{ name: string; role: string; content: string; stars: number }>;
    };
}

export default function Testimonials({ t }: TestimonialsProps) {
    return (
        <section className="py-24 bg-primary overflow-hidden relative" id="testimonios">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -ml-48 -mt-48" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full -mr-48 -mb-48" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
                        {t.tag}
                    </span>
                    <h2 className="font-outfit text-4xl md:text-5xl font-black text-white">
                        {t.h2}
                    </h2>
                    <p className="text-white/60 text-lg mt-6 font-medium">
                        {t.p}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.items.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group relative p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all duration-500"
                        >
                            <div className="absolute top-10 right-10 text-white/10 group-hover:text-secondary group-hover:scale-110 transition-all duration-700">
                                <Quote className="w-12 h-12" strokeWidth={1} />
                            </div>

                            <div className="flex gap-1 mb-8">
                                {[...Array(testimonial.stars)].map((_, starI) => (
                                    <Star key={starI} className="w-5 h-5 fill-secondary text-secondary" />
                                ))}
                            </div>

                            <p className="text-white/80 text-lg leading-relaxed mb-10 font-medium italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                                <div className="w-14 h-14 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary font-black text-xl">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-outfit text-xl font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-secondary/60 text-xs font-bold uppercase tracking-widest">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
