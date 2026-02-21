"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react";

interface FooterProps {
    t: {
        about: string;
        localPride: string;
        partner: string;
        rights: string;
    };
}

export default function Footer({ t }: FooterProps) {
    return (
        <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative" id="contacto">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full -mr-48 -mt-48" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-10">
                        <Link href="/" className="flex items-center gap-4 group">
                            <span className="font-outfit font-black text-4xl group-hover:text-secondary transition-colors">
                                Costa<span className="text-secondary">Visor</span>
                            </span>
                        </Link>
                        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-md font-medium">
                            {t.about}
                        </p>

                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-1">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-1">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-10">
                        <h4 className="font-outfit text-xl font-bold text-secondary uppercase tracking-widest text-sm">Contacto</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <p className="font-bold text-white/90">Nerja & Frigiliana</p>
                                    <p className="text-white/40 text-sm">Málaga, España</p>
                                </div>
                            </div>
                            <a href="mailto:hola@costavisor.com" className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary/20 transition-all">
                                    <Mail className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <p className="font-bold text-white/90">hola@costavisor.com</p>
                                    <p className="text-white/40 text-sm text-secondary group-hover:underline">Escríbenos ahora</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Local Pride Box */}
                    <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] space-y-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                            <span className="text-base md:text-lg font-black">100%</span>
                        </div>
                        <h5 className="font-bold text-white text-sm md:text-base">Local Pride</h5>
                        <p className="text-white/40 text-xs md:text-sm leading-relaxed">
                            {t.localPride}
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/40 text-sm font-medium">
                        {t.rights}
                    </p>

                    {/* Partner Link - Discreto & Premium */}
                    <a
                        href="https://jd-builders.com"
                        target="_blank"
                        className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group"
                    >
                        <span className="text-white/40 text-xs font-bold uppercase tracking-widest">{t.partner}</span>
                        <div className="w-px h-4 bg-white/20" />
                        <span className="text-white/80 font-outfit font-black tracking-tighter text-sm flex items-center gap-1">
                            JD<span className="text-secondary">BUILDERS</span>
                            <ExternalLink className="w-3 h-3 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
