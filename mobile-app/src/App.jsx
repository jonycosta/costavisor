import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/layout/BottomNav';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import PropertyManagement from './pages/PropertyManagement';
import Directory from './pages/Directory';
import Chat from './pages/Chat';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <div className="flex-1 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservas" element={<Reservations />} />
            <Route path="/mantenimiento" element={<PropertyManagement />} />
            <Route path="/directorio" element={<Directory />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
