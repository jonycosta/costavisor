import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: "¡Hola! ¿En qué podemos ayudarte hoy?", sender: 'bot', time: '10:00' }
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        setMessages([...messages, { id: Date.now(), text: message, sender: 'user', time: new Date().toLocaleTimeString().slice(0, 5) }]);
        setMessage('');

        // Simulate response
        setTimeout(() => {
            setMessages(prev => [...prev, { id: Date.now() + 1, text: "Gracias por tu mensaje. Un agente te atenderá en breve.", sender: 'bot', time: new Date().toLocaleTimeString().slice(0, 5) }]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-screen bg-slate-50">
            <div className="bg-white p-4 shadow-sm z-10">
                <h1 className="text-lg font-bold text-slate-900">Soporte Costavisor</h1>
                <p className="text-xs text-slate-500">En línea</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[75%] p-3 rounded-2xl ${msg.sender === 'user'
                                ? 'bg-primary text-white rounded-tr-none'
                                : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                            }`}>
                            <p className="text-sm">{msg.text}</p>
                            <span className={`text-[10px] block text-right mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-slate-400'
                                }`}>{msg.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white p-4 border-t border-slate-200 fixed bottom-16 left-0 right-0">
                <form onSubmit={handleSend} className="flex space-x-2 max-w-md mx-auto">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Escribe un mensaje..."
                        className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-sm disabled:opacity-50"
                        disabled={!message.trim()}
                    >
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
