import React from 'react';
import { MapPin, Phone, Star } from 'lucide-react';
import Container from '../components/ui/Container';

const Directory = () => {
    const restaurants = [
        {
            id: 1,
            name: "El Faro de la Bahía",
            description: "Mariscos frescos con vistas espectaculares.",
            rating: 4.8,
            address: "Paseo Marítimo, 12",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 2,
            name: "Trattoria Romana",
            description: "Auténtica pasta italiana y pizzas al horno de leña.",
            rating: 4.6,
            address: "Calle Mayor, 5",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 3,
            name: "Asador Los Buenos",
            description: "Las mejores carnes a la brasa de la región.",
            rating: 4.9,
            address: "Av. Constitución, 45",
            image: "https://images.unsplash.com/photo-1544025162-d76690b68f11?w=500&auto=format&fit=crop&q=60"
        }
    ];

    return (
        <Container className="pt-6 pb-24">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Guía Gastronómica</h1>

            <div className="space-y-6">
                {restaurants.map(place => (
                    <div key={place.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="h-40 w-full relative">
                            <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center shadow-sm">
                                <Star size={14} className="text-amber-400 mr-1 fill-amber-400" />
                                <span className="text-xs font-bold text-slate-800">{place.rating}</span>
                            </div>
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-bold text-slate-900">{place.name}</h3>
                            <p className="text-slate-500 text-sm mb-3">{place.description}</p>

                            <div className="flex items-center space-x-2 mb-4">
                                <MapPin size={16} className="text-slate-400" />
                                <span className="text-xs text-slate-600">{place.address}</span>
                            </div>

                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(place.address)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full text-center py-2 bg-slate-50 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-colors text-sm"
                            >
                                Cómo llegar
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Directory;
