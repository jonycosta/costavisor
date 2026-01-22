import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Home as HomeIcon, MapPin, User, Star } from 'lucide-react';
import Container from '../components/ui/Container';

const QuickAction = ({ icon: Icon, label, onClick, color }) => (
    <button
        onClick={onClick}
        className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 active:scale-95 transition-transform"
    >
        <div className={`p-3 rounded-full ${color} bg-opacity-10 mb-2`}>
            <Icon size={24} className={color.replace('bg-', 'text-')} />
        </div>
        <span className="text-sm font-medium text-slate-700">{label}</span>
    </button>
);

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 min-h-screen">
            <header className="bg-white p-4 pb-6 rounded-b-3xl shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-slate-500 text-sm">Hola, Bienvenido a</p>
                        <h1 className="text-2xl font-bold text-slate-900">Costavisor</h1>
                    </div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                        <User size={20} className="text-slate-500" />
                    </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-2xl flex items-center space-x-4">
                    <div className="bg-primary p-2 rounded-lg">
                        <Star className="text-white" size={20} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900">Servicios Premium</h3>
                        <p className="text-xs text-slate-600">Descubre lo mejor de la costa</p>
                    </div>
                </div>
            </header>

            <Container className="pt-6">
                <h2 className="text-lg font-semibold text-slate-800 mb-4">¿Qué necesitas hoy?</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <QuickAction
                        icon={Calendar}
                        label="Reservar Actividad"
                        onClick={() => navigate('/reservas')}
                        color="bg-blue-500"
                    />
                    <QuickAction
                        icon={HomeIcon}
                        label="Mantenimiento"
                        onClick={() => navigate('/mantenimiento')} // Will map to PropertyManagement
                        color="bg-green-500"
                    />
                    <QuickAction
                        icon={MapPin}
                        label="Restaurantes"
                        onClick={() => navigate('/directorio')}
                        color="bg-orange-500"
                    />
                    <QuickAction
                        icon={User}
                        label="Mi Perfil"
                        onClick={() => { }}
                        color="bg-purple-500"
                    />
                </div>

                <h2 className="text-lg font-semibold text-slate-800 mb-4">Destacados</h2>
                <div className="space-y-4">
                    {[1, 2].map((i) => (
                        <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex space-x-4">
                            <div className="w-20 h-20 bg-slate-200 rounded-lg flex-shrink-0"></div>
                            <div>
                                <h3 className="font-medium text-slate-900">Excursión en Barco</h3>
                                <p className="text-xs text-slate-500 mb-2">Disfruta del atardecer en el mar.</p>
                                <span className="text-primary text-sm font-bold">Desde 50€</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Home;
