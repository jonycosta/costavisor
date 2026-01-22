import React, { useState } from 'react';
import Container from '../components/ui/Container';
import { useStore } from '../context/StoreContext';
import { Calendar, Trash2, CheckCircle, Package, Plus } from 'lucide-react';

const Admin = () => {
    const { bookings, services, updateBookingStatus, deleteBooking, addService } = useStore();
    const [activeTab, setActiveTab] = useState('bookings'); // bookings | services
    const [showAddService, setShowAddService] = useState(false);

    // Simple state for new service form
    const [newService, setNewService] = useState({
        title: '',
        category: 'Tours',
        price: '',
        duration: '',
        description: '',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 5.0
    });

    const handleAddService = (e) => {
        e.preventDefault();
        addService({
            ...newService,
            price: Number(newService.price)
        });
        setShowAddService(false);
        setNewService({ title: '', category: 'Tours', price: '', duration: '', description: '', image: '', rating: 5.0 });
    };

    return (
        <Container className="pt-6 pb-20">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Panel de Administración</h1>

            <div className="flex space-x-2 mb-6 bg-slate-100 p-1 rounded-xl">
                <button
                    onClick={() => setActiveTab('bookings')}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'bookings' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Reservas ({bookings.length})
                </button>
                <button
                    onClick={() => setActiveTab('services')}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'services' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Servicios ({services.length})
                </button>
            </div>

            {activeTab === 'bookings' && (
                <div className="space-y-4">
                    {bookings.length === 0 ? (
                        <div className="text-center py-10 text-slate-400">No hay reservas aún.</div>
                    ) : (
                        bookings.map((booking) => (
                            <div key={booking.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="font-bold text-slate-900">{booking.serviceTitle}</h3>
                                        <p className="text-sm text-slate-500">{new Date(booking.date).toLocaleDateString()} - {booking.time}</p>
                                    </div>
                                    <span className={`px-2 py-1 rounded-md text-xs font-semibold ${booking.status === 'Confirmada' ? 'bg-green-100 text-green-700' :
                                            booking.status === 'Cancelada' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {booking.status}
                                    </span>
                                </div>
                                <div className="text-sm text-slate-600 mb-4 space-y-1">
                                    <p><span className="font-medium">Cliente:</span> {booking.name}</p>
                                    <p><span className="font-medium">Contacto:</span> {booking.phone} / {booking.email}</p>
                                    <p><span className="font-medium">Pax:</span> {booking.guests} personas ({booking.price * booking.guests}€)</p>
                                </div>
                                <div className="flex space-x-2 border-t border-slate-50 pt-3">
                                    {booking.status === 'Pendiente' && (
                                        <button
                                            onClick={() => updateBookingStatus(booking.id, 'Confirmada')}
                                            className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-600"
                                        >
                                            Confirmar
                                        </button>
                                    )}
                                    <button
                                        onClick={() => updateBookingStatus(booking.id, 'Cancelada')}
                                        className="flex-1 bg-slate-100 text-slate-600 py-2 rounded-lg text-sm font-medium hover:bg-slate-200"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={() => deleteBooking(booking.id)}
                                        className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {activeTab === 'services' && (
                <div className="space-y-4">
                    <button
                        onClick={() => setShowAddService(!showAddService)}
                        className="w-full bg-primary text-white py-3 rounded-xl font-medium shadow-sm hover:bg-sky-600 flex items-center justify-center gap-2 mb-4"
                    >
                        <Plus size={20} /> Nuevo Servicio
                    </button>

                    {showAddService && (
                        <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6 animate-in slide-in-from-top-5">
                            <h3 className="font-bold text-slate-900 mb-4">Añadir Servicio</h3>
                            <form onSubmit={handleAddService} className="space-y-4">
                                <input className="w-full p-2 border rounded-lg" placeholder="Título" value={newService.title} onChange={e => setNewService({ ...newService, title: e.target.value })} required />
                                <div className="grid grid-cols-2 gap-2">
                                    <input className="p-2 border rounded-lg" type="number" placeholder="Precio €" value={newService.price} onChange={e => setNewService({ ...newService, price: e.target.value })} required />
                                    <input className="p-2 border rounded-lg" placeholder="Duración (ej: 2h)" value={newService.duration} onChange={e => setNewService({ ...newService, duration: e.target.value })} required />
                                </div>
                                <select className="w-full p-2 border rounded-lg" value={newService.category} onChange={e => setNewService({ ...newService, category: e.target.value })}>
                                    <option>Tours</option>
                                    <option>Deportes</option>
                                    <option>Cultura</option>
                                    <option>Gastronomía</option>
                                </select>
                                <textarea className="w-full p-2 border rounded-lg" placeholder="Descripción" value={newService.description} onChange={e => setNewService({ ...newService, description: e.target.value })} />
                                <button type="submit" className="w-full bg-slate-900 text-white py-2 rounded-lg font-medium">Guardar</button>
                            </form>
                        </div>
                    )}

                    {services.map((service) => (
                        <div key={service.id} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3">
                            <img src={service.image} alt="" className="w-20 h-20 rounded-lg object-cover" />
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900">{service.title}</h3>
                                <p className="text-sm text-slate-500">{service.category} • {service.price}€</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Container>
    );
};

export default Admin;
