"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight, Globe, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
    lang: "es" | "en";
    setLang: (lang: "es" | "en") => void;
    t: any;
    onBook?: () => void;
}

export default function Navbar({ lang, setLang, t, onBook }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.home, href: "/#inicio" },
        { name: t.accommodations, href: "/alojamientos" },
        { name: t.experiences, href: "/#experiencias" },
        { name: t.packages, href: "/packs-vacaciones" },
        { name: t.services, href: "#servicios" },
        { name: lang === "es" ? "Servicios Locales" : "Local Services", href: "/#servicios-locales" },
        { name: t.maintenance, href: "/mantenimiento" },
        { name: t.investors, href: "/investors" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "py-3 bg-white/90 backdrop-blur-md shadow-lg border-b border-primary/5"
                    : "py-6 bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className={cn("flex items-center gap-2 group")}>
                    <div className="relative w-12 h-12 transition-transform group-hover:scale-110">
                        <Image
                            src="/logo-costavisor.png"
                            alt="CostaVisor Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={cn(
                        "font-outfit font-bold text-2xl transition-colors duration-300",
                        scrolled ? "text-primary" : "text-white drop-shadow-md"
                    )}>
                        <span className="text-secondary">Costa</span>Visor
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-secondary relative group",
                                    scrolled ? "text-primary/80" : "text-white drop-shadow-md"
                                )}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 pl-8 border-l border-primary/10">
                        <button
                            onClick={() => setLang(lang === "es" ? "en" : "es")}
                            className={cn(
                                "flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all hover:text-secondary",
                                scrolled ? "text-primary/60" : "text-white/80"
                            )}
                        >
                            <Languages className="w-4 h-4" />
                            {lang === "es" ? "EN" : "ES"}
                        </button>
                        <button
                            onClick={() => { onBook?.(); }}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all transform active:scale-95 shadow-md",
                                scrolled
                                    ? "bg-primary text-white hover:bg-primary-dark"
                                    : "bg-white text-primary hover:bg-secondary hover:text-white"
                            )}
                        >
                            {t.book}
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center gap-4">
                    <button
                        onClick={() => setLang(lang === "es" ? "en" : "es")}
                        className={cn(
                            "px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all",
                            scrolled
                                ? "border-primary/20 text-primary"
                                : "border-white/30 text-white"
                        )}
                    >
                        {lang === "es" ? "EN" : "ES"}
                    </button>
                    <button
                        className={cn("p-2 rounded-xl transition-colors", scrolled ? "text-primary" : "text-white")}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "lg:hidden absolute top-full left-0 right-0 bg-white border-b border-primary/10 transition-all duration-500 overflow-hidden shadow-2xl",
                    isOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0 py-0"
                )}
            >
                <div className="flex flex-col gap-6 px-10">
                    <div className="flex flex-col gap-6 w-full">
                        <Link onClick={() => setIsOpen(false)} href="/" className="text-3xl font-black text-primary hover:text-secondary transition-colors">{t.home}</Link>
                        <Link onClick={() => setIsOpen(false)} href="/alojamientos" className="text-3xl font-black text-primary hover:text-secondary transition-colors">{t.accommodations}</Link>
                        <Link onClick={() => setIsOpen(false)} href="/#experiencias" className="text-3xl font-black text-primary hover:text-secondary transition-colors">{t.experiences}</Link>
                        <Link onClick={() => setIsOpen(false)} href="/packs-vacaciones" className="text-3xl font-black text-primary hover:text-secondary transition-colors">{t.packages}</Link>
                        <Link onClick={() => setIsOpen(false)} href="/#servicios" className="text-3xl font-black text-primary hover:text-secondary transition-colors">{t.services}</Link>
                        <Link onClick={() => setIsOpen(false)} href="/mantenimiento" className="text-3xl font-black text-primary hover:text-secondary transition-colors">{t.maintenance}</Link>
                        <Link onClick={() => setIsOpen(false)} href="/investors" className="text-3xl font-black text-primary hover:text-secondary transition-colors">{t.investors}</Link>
                    </div>
                    <button
                        onClick={() => { setIsOpen(false); onBook && onBook(); }}
                        className="mt-4 px-8 py-4 bg-primary text-white text-center rounded-2xl font-bold uppercase tracking-widest shadow-xl shadow-primary/10 active:scale-95 transition-all"
                    >
                        {t.book}
                    </button>
                </div>
            </div>
        </nav>
    );
}
