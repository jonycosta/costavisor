import React from 'react';
import { Clock, Star, Euro } from 'lucide-react';

const ServiceCard = ({ service, onBook }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 flex flex-col h-full hover:shadow-lg transition-shadow">
            <div className="relative h-48">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center shadow-sm">
                    <Star size={12} className="text-yellow-400 mr-1 fill-yellow-400" />
                    {service.rating}
                </div>
            </div>

            <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-slate-900 mb-1">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-3 flex-1 line-clamp-2">{service.description}</p>

                <div className="flex items-center text-slate-500 text-sm mb-4 space-x-4">
                    <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {service.duration}
                    </div>
                    <div className="flex items-center font-semibold text-primary">
                        <Euro size={14} className="mr-1" />
                        {service.price}
                    </div>
                </div>

                <button
                    onClick={() => onBook(service)}
                    className="w-full bg-primary text-white py-2.5 rounded-xl font-medium hover:bg-sky-600 transition-colors active:scale-95 transform duration-100"
                >
                    Reservar Ahora
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
