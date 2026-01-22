"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer({ t }: { t: any }) {
    return (
        <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative" id="contacto">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full -mr-48 -mt-48" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center gap-4">
                            <div className="relative w-16 h-16">
                                <Image src="/logo-costavisor.png" alt="CostaVisor Logo" fill className="object-contain brightness-110" />
                            </div>
                            <span className="font-outfit font-black text-4xl">Costa<span className="text-secondary">Visor</span></span>
                        </Link>
                        <p className="text-white/60 text-xl leading-relaxed max-w-md font-medium">
                            {t.about}
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/nerjaexperience"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-1"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/costavisor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-1"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info & Newsletter Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:col-span-2">
                        <div className="space-y-8">
                            <h4 className="font-outfit text-xl font-bold text-secondary uppercase tracking-widest text-sm">{t.contact}</h4>
                            <div className="space-y-6 pt-2">
                                <div className="flex items-start gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary/20 transition-all shadow-lg">
                                        <MapPin className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white/90">Nerja & Frigiliana</p>
                                        <p className="text-white/40 text-sm">Málaga, España</p>
                                    </div>
                                </div>
                                <a href="tel:+34643216427" className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary/20 transition-all shadow-lg">
                                        <Phone className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white/90">+34 643 216 427</p>
                                        <p className="text-white/40 text-sm">Lunes - Viernes, 9:00 - 18:00</p>
                                    </div>
                                </a>
                                <a href="mailto:presupuesto@costavisor.com" className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary/20 transition-all shadow-lg">
                                        <Mail className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white/90">presupuesto@costavisor.com</p>
                                        <p className="text-white/40 text-sm">Respuesta en menos de 24h</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Newsletter/CTA */}
                        <div className="space-y-8 bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                            <h4 className="font-outfit text-2xl font-bold text-white">{t.ctaH3}</h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {t.ctaP}
                            </p>
                            <a
                                href="mailto:presupuesto@costavisor.com"
                                className="w-full py-4 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl transition-all shadow-xl shadow-secondary/20 active:scale-95 flex items-center justify-center"
                            >
                                {t.ctaButton}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/40 text-sm font-medium">
                        © {new Date().getFullYear()} CostaVisor. {t.rights}
                    </p>
                    <div className="flex gap-8 text-white/40 text-sm font-bold uppercase tracking-widest">
                        <Link href="/privacy" className="hover:text-secondary transition-colors">Privacidad</Link>
                        <Link href="/terms" className="hover:text-secondary transition-colors">Términos</Link>
                        <Link href="/cookies" className="hover:text-secondary transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
