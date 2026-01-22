import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialServices, initialCategories } from '../data/initialData';

const StoreContext = createContext();

export const useStore = () => {
    return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
    // Load data from localStorage or use initial data
    const [services, setServices] = useState(() => {
        const saved = localStorage.getItem('costavisor_services');
        return saved ? JSON.parse(saved) : initialServices;
    });

    const [bookings, setBookings] = useState(() => {
        const saved = localStorage.getItem('costavisor_bookings');
        return saved ? JSON.parse(saved) : [];
    });

    // Save to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem('costavisor_services', JSON.stringify(services));
    }, [services]);

    useEffect(() => {
        localStorage.setItem('costavisor_bookings', JSON.stringify(bookings));
    }, [bookings]);

    const addBooking = (booking) => {
        const newBooking = {
            ...booking,
            id: Date.now(), // simple ID generation
            status: 'Pendiente', // Pendiente, Confirmada, Cancelada
            createdAt: new Date().toISOString(),
        };
        setBookings((prev) => [newBooking, ...prev]);
        return newBooking;
    };

    const updateBookingStatus = (id, status) => {
        setBookings((prev) =>
            prev.map((b) => (b.id === id ? { ...b, status } : b))
        );
    };

    const addService = (service) => {
        const newService = { ...service, id: Date.now() };
        setServices((prev) => [...prev, newService]);
    };

    const deleteBooking = (id) => {
        setBookings((prev) => prev.filter((b) => b.id !== id));
    };

    const value = {
        services,
        categories: initialCategories,
        bookings,
        addBooking,
        updateBookingStatus,
        addService,
        deleteBooking
    };

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
