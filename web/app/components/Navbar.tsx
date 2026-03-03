"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
    lang: string;
    setLang: (lang: string) => void;
    t: {
        home: string;
        accommodations: string;
        experiences: string;
        packages: string;
        services: string;
        localNetworkNav: string;
        book: string;
    };
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.home, href: "/" },
        { name: t.experiences, href: "#experiencias" },
        { name: t.packages, href: "#disenador" },
        { name: t.accommodations, href: "#alojamientos" },
        { name: t.services, href: "#servicios" },
        { name: t.localNetworkNav, href: "#red-local" },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled
                        ? "py-4 bg-white/80 backdrop-blur-xl shadow-xl border-b border-primary/5"
                        : "py-8 bg-transparent"
                )}
            >
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className={cn(
                                "font-outfit font-black text-2xl md:text-3xl transition-colors duration-300",
                                scrolled ? "text-primary" : "text-white"
                            )}
                        >
                            Costa<span className="text-secondary">Visor</span>
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-12">
                        <div className="flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-secondary relative group",
                                        scrolled ? "text-primary/80" : "text-white/90"
                                    )}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-secondary transition-all duration-500 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 pl-10 border-l border-white/20">
                            <button
                                onClick={() => setLang(lang === "es" ? "en" : "es")}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-xl border transition-all text-[10px] font-bold uppercase tracking-widest",
                                    scrolled
                                        ? "bg-primary/5 border-primary/10 text-primary hover:bg-primary hover:text-white"
                                        : "bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
                                )}
                            >
                                <Globe className="w-3.5 h-3.5" />
                                {lang.toUpperCase()}
                            </button>

                            <Link
                                href="#disenador"
                                className={cn(
                                    "px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2",
                                    scrolled
                                        ? "bg-primary text-white hover:bg-secondary hover:shadow-lg shadow-secondary/20"
                                        : "bg-secondary text-primary hover:bg-white hover:shadow-lg shadow-white/20"
                                )}
                            >
                                {t.book}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            onClick={() => setLang(lang === "es" ? "en" : "es")}
                            className={cn(
                                "p-3 rounded-xl transition-all",
                                scrolled ? "text-primary bg-primary/5" : "text-white bg-white/10"
                            )}
                        >
                            {lang.toUpperCase()}
                        </button>
                        <button
                            className={cn(
                                "p-3 rounded-xl transition-all",
                                scrolled ? "text-primary bg-primary/5" : "text-white bg-white/10"
                            )}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-b border-primary/5 shadow-2xl overflow-hidden"
                        >
                            <div className="p-8 space-y-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-lg font-black text-primary uppercase tracking-widest hover:text-secondary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-6 border-t border-primary/5">
                                    <Link
                                        href="#disenador"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full py-5 bg-primary text-white rounded-2xl flex items-center justify-center font-black uppercase tracking-widest text-sm"
                                    >
                                        {t.book}
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            {/* Overlay to close menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-primary/20 backdrop-blur-sm lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
