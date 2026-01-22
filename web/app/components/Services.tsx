import { Home, Compass, Wrench, Languages, Palmtree, CalendarCheck } from "lucide-react";

export default function Services({ t }: { t: any }) {
    const icons = [Home, Compass, Wrench, Languages, Palmtree, CalendarCheck];

    return (
        <section id="servicios" className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16 space-y-4">
                    <span className="text-secondary font-black uppercase tracking-widest text-xs">{t.tag}</span>
                    <h2 className="font-outfit text-4xl md:text-5xl font-black text-primary leading-tight">
                        {t.h2}
                    </h2>
                    <p className="text-lg text-muted font-medium max-w-xl">
                        {t.p}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.items.map((service: any, i: number) => {
                        const Icon = icons[i] || Home;
                        return (
                            <div
                                key={i}
                                className="group p-10 bg-white rounded-[2.5rem] border border-border hover:border-secondary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-secondary/10 transition-all duration-500">
                                    <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                                </div>
                                <h3 className="font-outfit text-2xl font-bold text-primary mb-4">{service.title}</h3>
                                <p className="text-muted leading-relaxed mb-8 font-medium">
                                    {service.desc}
                                </p>
                                <div className="space-y-3">
                                    {service.features.map((feature: string, idx: number) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                            <span className="text-sm font-bold text-primary/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                {service.link && (
                                    <a href={service.link} className="mt-8 px-6 py-3 rounded-xl border-2 border-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all w-full text-center block">
                                        {service.btnText || "Ver Detalles"}
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
