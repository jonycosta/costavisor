"use client";

import Link from "next/link";
import { XCircle, ArrowRight } from "lucide-react";

export default function CancelPage() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-600">
                    <XCircle className="w-12 h-12" />
                </div>

                <div className="space-y-4">
                    <h1 className="font-outfit text-4xl font-black text-primary">Pago Cancelado</h1>
                    <p className="text-muted text-lg font-medium leading-relaxed">
                        El proceso de pago ha sido cancelado. No se ha realizado ningún cargo en tu tarjeta.
                    </p>
                </div>

                <div className="pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all shadow-xl"
                    >
                        Volver al Inicio
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
