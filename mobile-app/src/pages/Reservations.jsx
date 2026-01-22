import React, { useState } from 'react';
import Container from '../components/ui/Container';
import { useStore } from '../context/StoreContext';
import ServiceCard from '../components/booking/ServiceCard';
import BookingModal from '../components/booking/BookingModal';
import { Search, Filter } from 'lucide-react';

const Reservations = () => {
    const { services, categories, addBooking } = useStore();
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedService, setSelectedService] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const filteredServices = services.filter(service => {
        const matchesCategory = selectedCategory === 'Todos' || service.category === selectedCategory;
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleBook = (service) => {
        setSelectedService(service);
    };

    const handleConfirmBooking = (bookingData) => {
        addBooking(bookingData);
        setSelectedService(null);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <Container className="pt-6 pb-20">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Explora y Reserva</h1>
                <p className="text-slate-500">Descubre las mejores experiencias en Costavisor.</p>
            </div>

            {/* Search and Filter */}
            <div className="mb-8 space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Buscar actividades..."
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-100 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex overflow-x-auto pb-2 gap-2 hide-scrollbar">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                                    : 'bg-white text-slate-600 border border-slate-100 hover:bg-slate-50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredServices.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        onBook={handleBook}
                    />
                ))}
            </div>

            {filteredServices.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-slate-400">No se encontraron actividades.</p>
                </div>
            )}

            {/* Booking Modal */}
            {selectedService && (
                <BookingModal
                    service={selectedService}
                    onClose={() => setSelectedService(null)}
                    onConfirm={handleConfirmBooking}
                />
            )}

            {/* Success Toast */}
            {showSuccess && (
                <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-in slide-in-from-bottom-5 fade-in duration-300 z-50 flex items-center">
                    <span className="font-medium">¡Reserva confirmada con éxito!</span>
                </div>
            )}
        </Container>
    );
};

export default Reservations;
