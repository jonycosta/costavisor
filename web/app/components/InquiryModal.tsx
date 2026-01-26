"use client";

import { X, Send, Phone, Mail, Calendar, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import { translations } from "../lib/translations";

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: "es" | "en";
    selectedProperty?: string;
    isLuxuryQuote?: boolean;
    isBooking?: boolean;
    totalPrice?: number;
}

export default function InquiryModal({ isOpen, onClose, lang, selectedProperty, isLuxuryQuote, isBooking, totalPrice }: InquiryModalProps) {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const t = translations[lang].modal;

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const endpoint = isBooking ? 'booking' : 'inquiry';
            const response = await fetch(`http://localhost:3001/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    selectedProperty: selectedProperty || 'General',
                    total: totalPrice,
                    experience: selectedProperty
                }),
            });

            if (response.ok) {
                const data = await response.json();

                if (isBooking && data.success) {
                    // If it's a booking, we proceed to payment
                    const paymentRes = await fetch('http://localhost:3001/payment/create-session', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            experience: selectedProperty,
                            deposit: data.depositToPay,
                            email: formData.email
                        }),
                    });

                    if (paymentRes.ok) {
                        const { url } = await paymentRes.json();
                        window.location.href = url; // Redirect to Stripe
                        return;
                    }
                }

                setStatus("sent");
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus("error");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-primary/40 backdrop-blur-md animate-in fade-in duration-500"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[80px] rounded-full -mr-32 -mt-32" />

                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 p-3 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors z-20"
                >
                    <X className="w-6 h-6 text-primary" />
                </button>

                <div className="p-10 lg:p-16 relative z-10">
                    {status === "sent" ? (
                        <div className="text-center py-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                                <Send className="w-10 h-10 text-secondary" />
                            </div>
                            <h3 className="font-outfit text-4xl font-black text-primary">{t.thanks}</h3>
                            <p className="text-lg text-muted font-medium">{t.success}</p>
                            <button
                                onClick={onClose}
                                className="px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all shadow-xl"
                            >
                                {lang === "es" ? "Cerrar" : "Close"}
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="space-y-4 mb-10">
                                <span className="text-secondary font-black uppercase tracking-widest text-xs">{isLuxuryQuote ? t.personalize : t.h3}</span>
                                <h3 className="font-outfit text-4xl font-black text-primary leading-tight">
                                    {selectedProperty ? `${t.property} ${selectedProperty}` : (isLuxuryQuote ? t.personalize : t.h3)}
                                </h3>
                                <p className="text-muted font-medium leading-relaxed">
                                    {t.p}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-black text-primary uppercase tracking-widest ml-1">{t.name}</label>
                                        <div className="relative">
                                            <User className="absolute left-5 top-5 w-5 h-5 text-primary/30" />
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full pl-14 pr-6 py-5 bg-primary/5 border border-transparent focus:border-secondary focus:bg-white rounded-2xl outline-none transition-all font-medium text-primary"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-black text-primary uppercase tracking-widest ml-1">{t.email}</label>
                                        <div className="relative">
                                            <Mail className="absolute left-5 top-5 w-5 h-5 text-primary/30" />
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full pl-14 pr-6 py-5 bg-primary/5 border border-transparent focus:border-secondary focus:bg-white rounded-2xl outline-none transition-all font-medium text-primary"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-black text-primary uppercase tracking-widest ml-1">{t.message}</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-5 top-5 w-5 h-5 text-primary/30" />
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder={selectedProperty ? `${lang === 'es' ? 'Hola, me gustaría más información sobre' : 'Hi, I would like more information about'} ${selectedProperty}` : ""}
                                            className="w-full pl-14 pr-6 py-5 bg-primary/5 border border-transparent focus:border-secondary focus:bg-white rounded-2xl outline-none transition-all font-medium resize-none text-primary"
                                        />
                                    </div>
                                </div>

                                {status === "error" && (
                                    <p className="text-red-500 font-bold text-center">
                                        {lang === 'es' ? 'Hubo un error al enviar. Por favor intente de nuevo.' : 'Error sending inquiry. Please try again.'}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full py-5 bg-secondary hover:bg-secondary/90 disabled:bg-slate-400 text-white font-outfit font-black text-xl rounded-2xl transition-all shadow-2xl shadow-secondary/30 active:scale-95 flex items-center justify-center gap-3"
                                >
                                    {status === "sending" ? (lang === "es" ? "Enviando..." : "Sending...") : (isBooking ? t.payDeposit : t.send)}
                                    <Send className="w-6 h-6" />
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
