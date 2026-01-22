"use client";

import { useState, useEffect } from "react";
import {
    LayoutDashboard,
    CalendarCheck,
    MessageSquare,
    Users,
    Settings,
    LogOut,
    ArrowUpRight,
    Clock,
    CheckCircle2,
    XCircle,
    TrendingUp,
    Mail,
    Phone,
    Search,
    ChevronRight,
    Filter,
    Download
} from "lucide-react";
import Image from "next/image";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<"overview" | "bookings" | "inquiries">("overview");
    const [bookings, setBookings] = useState<any[]>([]);
    const [inquiries, setInquiries] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const bRes = await fetch("http://localhost:3001/booking");
            const iRes = await fetch("http://localhost:3001/inquiry");

            if (bRes.ok) setBookings(await bRes.json());
            if (iRes.ok) setInquiries(await iRes.json());
        } catch (error) {
            console.error("Error fetching admin data:", error);
        } finally {
            setLoading(false);
        }
    };

    const stats = [
        { label: "Reservas Totales", value: bookings.length, icon: CalendarCheck, trend: "+12%", color: "bg-blue-500" },
        { label: "Consultas Nuevas", value: inquiries.length, icon: MessageSquare, trend: "+5%", color: "bg-purple-500" },
        { label: "Fianzas Recaudadas", value: `${bookings.reduce((acc, curr) => acc + curr.deposit, 0)}€`, icon: TrendingUp, trend: "+18%", color: "bg-emerald-500" },
        { label: "Ratio Conversión", value: "24%", icon: Users, trend: "+2%", color: "bg-orange-500" },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex">
            {/* Sidebar */}
            <aside className="w-72 bg-primary text-white p-8 flex flex-col fixed h-full z-20">
                <div className="flex items-center gap-4 mb-16">
                    <div className="relative w-10 h-10">
                        <Image src="/logo-costavisor.png" alt="Logo" fill className="object-contain brightness-0 invert" />
                    </div>
                    <span className="font-outfit font-black text-xl tracking-tighter">ADMIN</span>
                </div>

                <nav className="space-y-2 flex-1">
                    <NavItem
                        active={activeTab === "overview"}
                        onClick={() => setActiveTab("overview")}
                        icon={LayoutDashboard}
                        label="Panel Principal"
                    />
                    <NavItem
                        active={activeTab === "bookings"}
                        onClick={() => setActiveTab("bookings")}
                        icon={CalendarCheck}
                        label="Reservas"
                    />
                    <NavItem
                        active={activeTab === "inquiries"}
                        onClick={() => setActiveTab("inquiries")}
                        icon={MessageSquare}
                        label="Consultas"
                    />
                    <div className="pt-8 pb-4">
                        <span className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-4">Preferencias</span>
                    </div>
                    <NavItem active={false} icon={Settings} label="Ajustes" />
                </nav>

                <button className="flex items-center gap-4 text-white/60 hover:text-white transition-colors p-4 mt-auto font-bold">
                    <LogOut className="w-5 h-5" />
                    Cerrar Sesión
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-72 p-12">
                <header className="flex justify-between items-end mb-12">
                    <div>
                        <h1 className="text-4xl font-outfit font-black text-primary mb-2">Bienvenido, Manager</h1>
                        <p className="text-muted font-medium italic">Gestiona tus experiencias y clientes desde un solo lugar.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-white border border-border rounded-xl font-bold flex items-center gap-2 hover:bg-surface transition-all">
                            <Download className="w-4 h-4" /> Exportar
                        </button>
                        <button onClick={fetchData} className="px-6 py-3 bg-secondary text-primary font-black rounded-xl hover:bg-secondary/90 transition-all flex items-center gap-2">
                            <Clock className="w-4 h-4" /> Actualizar
                        </button>
                    </div>
                </header>

                {activeTab === "overview" && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-border group hover:shadow-xl hover:-translate-y-1 transition-all">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-4 rounded-2xl ${stat.color} text-white`}>
                                            <stat.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">{stat.trend}</span>
                                    </div>
                                    <p className="text-muted font-black uppercase tracking-widest text-[10px] mb-2">{stat.label}</p>
                                    <h3 className="text-3xl font-outfit font-black text-primary">{stat.value}</h3>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Recent Bookings */}
                            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-border">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-2xl font-outfit font-black text-primary italic">Reservas Recientes</h3>
                                    <button onClick={() => setActiveTab("bookings")} className="text-secondary font-black uppercase tracking-widest text-[10px] hover:underline">Ver todas</button>
                                </div>
                                <div className="space-y-6">
                                    {bookings.slice(0, 5).map((booking, i) => (
                                        <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-surface/50 border border-border/50">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                                    <Clock className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-primary">{booking.name}</p>
                                                    <p className="text-xs text-muted font-medium">{booking.experience}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-black text-primary">{booking.deposit}€</p>
                                                <p className="text-[10px] text-muted font-black uppercase tracking-widest">Fianza</p>
                                            </div>
                                        </div>
                                    ))}
                                    {bookings.length === 0 && <p className="text-center text-muted py-10 font-medium italic">No hay reservas registradas.</p>}
                                </div>
                            </div>

                            {/* Recent Inquiries */}
                            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-border">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-2xl font-outfit font-black text-primary italic">Últimas Consultas</h3>
                                    <button onClick={() => setActiveTab("inquiries")} className="text-secondary font-black uppercase tracking-widest text-[10px] hover:underline">Ver todas</button>
                                </div>
                                <div className="space-y-6">
                                    {inquiries.slice(0, 5).map((inquiry, i) => (
                                        <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-surface/50 border border-border/50">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                                                    <Mail className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-primary">{inquiry.name}</p>
                                                    <p className="text-xs text-muted font-medium truncate max-w-[150px]">{inquiry.message}</p>
                                                </div>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-muted" />
                                        </div>
                                    ))}
                                    {inquiries.length === 0 && <p className="text-center text-muted py-10 font-medium italic">No hay consultas registradas.</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {(activeTab === "bookings" || activeTab === "inquiries") && (
                    <div className="bg-white rounded-[3rem] shadow-sm border border-border overflow-hidden animate-in fade-in slide-in-from-right-4 duration-700">
                        <div className="p-8 border-b border-border flex justify-between items-center">
                            <div className="relative w-full max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                                <input
                                    type="text"
                                    placeholder="Buscar en registros..."
                                    className="w-full pl-12 pr-6 py-3 bg-surface rounded-xl outline-none border border-transparent focus:border-secondary transition-all font-medium"
                                />
                            </div>
                            <button className="p-3 bg-surface rounded-xl border border-border hover:bg-border transition-all">
                                <Filter className="w-5 h-5 text-primary" />
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-surface text-[10px] uppercase font-black tracking-widest text-muted">
                                    <tr>
                                        <th className="px-8 py-4">Cliente</th>
                                        <th className="px-8 py-4">Asunto</th>
                                        <th className="px-8 py-4">Fecha Reg.</th>
                                        <th className="px-8 py-4">Estado</th>
                                        <th className="px-8 py-4">Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {(activeTab === "bookings" ? bookings : inquiries).map((item, i) => (
                                        <tr key={i} className="hover:bg-surface/30 transition-colors">
                                            <td className="px-8 py-6">
                                                <p className="font-bold text-primary">{item.name}</p>
                                                <p className="text-xs text-muted font-medium">{item.email}</p>
                                            </td>
                                            <td className="px-8 py-6">
                                                <p className="font-medium text-primary">{activeTab === "bookings" ? item.experience : item.selectedProperty}</p>
                                                {activeTab === "bookings" && <p className="text-[10px] font-black italic text-secondary">Fianza: {item.deposit}€</p>}
                                            </td>
                                            <td className="px-8 py-6 text-sm text-muted font-medium">
                                                {new Date(item.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.status === 'confirmed' || item.status === 'read' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>
                                                    {item.status || 'pendiente'}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <button className="p-2 hover:bg-surface rounded-lg transition-all">
                                                    <ChevronRight className="w-5 h-5 text-primary" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {(activeTab === "bookings" ? bookings : inquiries).length === 0 && (
                                <div className="py-20 text-center text-muted font-medium italic">
                                    No hay datos para mostrar.
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

function NavItem({ active, icon: Icon, label, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all group ${active
                    ? "bg-secondary text-primary font-black shadow-lg"
                    : "text-white/60 hover:text-white hover:bg-white/5 font-bold"
                }`}
        >
            <Icon className={`w-5 h-5 ${active ? "text-primary" : "text-white/40 group-hover:text-white transition-colors"}`} />
            {label}
            {active && <ArrowUpRight className="w-4 h-4 ml-auto" />}
        </button>
    );
}
