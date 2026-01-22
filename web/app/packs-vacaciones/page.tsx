"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PackageCard from "@/app/components/PackageCard";
import { translations } from "@/app/lib/translations";
import { Mail, Phone, CheckCircle, Sparkles, MapPin, Clock, Shield } from "lucide-react";

export default function VacationPackagesPage() {
    const [lang, setLang] = useState<"es" | "en">("es");
    const [showModal, setShowModal] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<string>("");

    const t = translations[lang];
    const packagesT = t.vacationPackages;

    const handleRequestInfo = (packageName: string) => {
        setSelectedPackage(packageName);
        setShowModal(true);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        const subject = `Consulta Pack: ${selectedPackage}`;
        const body = `Nombre: ${name}%0D%0AEmail: ${email}%0D%0ATeléfono: ${phone}%0D%0A%0D%0AMensaje:%0D%0A${message}`;

        window.location.href = `mailto:grupocostavisor@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <Navbar lang={lang} setLang={setLang} t={t.nav} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                            {packagesT.tag}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 leading-tight">
                            {packagesT.h2}
                        </h1>
                        <p className="text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
                            {packagesT.p}
                        </p>
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black text-primary text-center mb-12">
                        {packagesT.whatIncludes.title}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packagesT.whatIncludes.items.map((item, idx) => (
                            <div key={idx} className="group p-6 rounded-2xl border-2 border-primary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-gray-50">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                                    <CheckCircle className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                <p className="text-primary/70 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {packagesT.packages.map((pkg) => (
                            <PackageCard
                                key={pkg.id}
                                name={pkg.name}
                                tagline={pkg.tagline}
                                badge={pkg.badge}
                                description={pkg.description}
                                includes={pkg.includes}
                                idealFor={pkg.idealFor}
                                youReceive={pkg.youReceive}
                                onRequestInfo={() => handleRequestInfo(pkg.name)}
                                buttonText={packagesT.cta.buttonText}
                                tier={pkg.id as "essential" | "comfort" | "premium"}
                            />
                        ))}
                    </div>

                    {/* Customize Your Pack Section */}
                    <div className="my-16 bg-gradient-to-br from-secondary/5 via-primary/5 to-secondary/5 rounded-3xl p-12 border-2 border-secondary/20 text-center">
                        <div className="max-w-3xl mx-auto">
                            <div className="inline-block p-3 bg-secondary/10 rounded-2xl mb-6">
                                <Sparkles className="w-10 h-10 text-secondary" />
                            </div>
                            <h2 className="text-4xl font-black text-primary mb-4">
                                {packagesT.customize.title}
                            </h2>
                            <p className="text-xl text-primary/70 mb-8 leading-relaxed">
                                {packagesT.customize.description}
                            </p>
                            <a
                                href="/#experiencias"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white rounded-xl font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-xl hover:shadow-2xl active:scale-95 text-lg"
                            >
                                <Sparkles className="w-6 h-6" />
                                {packagesT.customize.buttonText}
                            </a>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-12 text-white">
                        <Sparkles className="w-16 h-16 mx-auto mb-6 text-secondary" />
                        <h2 className="text-4xl font-black mb-4">{packagesT.cta.title}</h2>
                        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                            {packagesT.cta.description}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="mailto:grupocostavisor@gmail.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold uppercase tracking-wider hover:bg-secondary hover:text-white transition-all shadow-lg hover:shadow-xl active:scale-95"
                            >
                                <Mail className="w-5 h-5" />
                                Email
                            </a>
                            <a
                                href="https://wa.me/34643216427"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
                            >
                                <Phone className="w-5 h-5" />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-16 px-6 bg-white border-t border-primary/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <Shield className="w-12 h-12 text-secondary mb-4" />
                            <h3 className="font-bold text-primary mb-2">
                                {lang === "es" ? "Precio Cerrado" : "Fixed Price"}
                            </h3>
                            <p className="text-primary/70 text-sm">
                                {lang === "es" ? "Sin sorpresas ni costes ocultos" : "No surprises or hidden costs"}
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Clock className="w-12 h-12 text-secondary mb-4" />
                            <h3 className="font-bold text-primary mb-2">
                                {lang === "es" ? "Respuesta 24h" : "24h Response"}
                            </h3>
                            <p className="text-primary/70 text-sm">
                                {lang === "es" ? "Te contactamos en menos de 24 horas" : "We contact you within 24 hours"}
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <MapPin className="w-12 h-12 text-secondary mb-4" />
                            <h3 className="font-bold text-primary mb-2">
                                {lang === "es" ? "Expertos Locales" : "Local Experts"}
                            </h3>
                            <p className="text-primary/70 text-sm">
                                {lang === "es" ? "Conocemos cada rincón de la zona" : "We know every corner of the area"}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer t={t.footer} />

            {/* Contact Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-3xl font-black text-primary mb-2">
                                    {lang === "es" ? "Solicitar Información" : "Request Information"}
                                </h3>
                                {selectedPackage && (
                                    <p className="text-secondary font-bold">{selectedPackage}</p>
                                )}
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-primary/40 hover:text-primary text-3xl leading-none"
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-primary mb-2">
                                    {lang === "es" ? "Nombre completo" : "Full name"}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 border-2 border-primary/10 rounded-xl focus:border-secondary focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-primary mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 border-2 border-primary/10 rounded-xl focus:border-secondary focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-primary mb-2">
                                    {lang === "es" ? "Teléfono" : "Phone"}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="w-full px-4 py-3 border-2 border-primary/10 rounded-xl focus:border-secondary focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-primary mb-2">
                                    {lang === "es" ? "Cuéntanos sobre tu viaje ideal" : "Tell us about your ideal trip"}
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 border-primary/10 rounded-xl focus:border-secondary focus:outline-none resize-none"
                                    placeholder={lang === "es" ? "Fechas, número de personas, preferencias..." : "Dates, number of people, preferences..."}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-wider hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl active:scale-95"
                            >
                                {lang === "es" ? "Enviar Solicitud" : "Submit Request"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
