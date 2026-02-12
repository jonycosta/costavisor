"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

export default function WhatsAppButton() {
    const { lang } = useLanguage();

    // Default message based on language
    const message = lang === "es"
        ? "Hola CostaVisor, me gustaría más información."
        : "Hi CostaVisor, I would like more information.";

    const whatsappLink = `https://wa.me/34683459342?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 text-white fill-current" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-3 py-1 bg-white text-primary text-xs font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                {lang === "es" ? "Contactar" : "Chat with us"}
            </span>

            {/* Pulse Effect */}
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping pointer-events-none" />
        </a>
    );
}
