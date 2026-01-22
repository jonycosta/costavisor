import React, { useState } from 'react';
import { Camera, Upload, CheckCircle } from 'lucide-react';
import Container from '../components/ui/Container';

const PropertyManagement = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <Container className="pt-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Mantenimiento</h1>

            {submitted ? (
                <div className="bg-green-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                    <CheckCircle size={48} className="text-green-500 mb-2" />
                    <h3 className="text-lg font-semibold text-green-700">¡Solicitud Enviada!</h3>
                    <p className="text-green-600">Nos pondremos en contacto contigo pronto.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Servicio</label>
                        <select className="w-full bg-white border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Limpieza General</option>
                            <option>Mantenimiento (Electricidad/Fontanería)</option>
                            <option>Jardinería</option>
                            <option>Piscinas</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Descripción</label>
                        <textarea
                            rows={4}
                            className="w-full bg-white border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Describe el problema o servicio detallado..."
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Fotos (Opcional)</label>
                        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center text-slate-400 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                            <Camera size={24} className="mb-2" />
                            <span className="text-xs">Toca para añadir fotos</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-4 rounded-xl font-semibold shadow-lg shadow-primary/30 active:scale-95 transition-transform"
                    >
                        Enviar Solicitud
                    </button>
                </form>
            )}
        </Container>
    );
};

export default PropertyManagement;
