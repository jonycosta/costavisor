import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, MapPin, MessageCircle } from 'lucide-react';

const BottomNav = () => {
    const navItems = [
        { icon: Home, label: 'Inicio', path: '/' },
        { icon: Calendar, label: 'Reservas', path: '/reservas' },
        { icon: MapPin, label: 'Directorio', path: '/directorio' },
        { icon: MessageCircle, label: 'Chat', path: '/chat' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 safe-area-bottom z-50">
            <div className="flex justify-around items-center h-16">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-700'
                            }`
                        }
                    >
                        <item.icon size={24} />
                        <span className="text-xs font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default BottomNav;
