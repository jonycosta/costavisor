import React from 'react';

interface TrackingItem {
    icon: string;
    title: string;
    desc: string;
}

interface TrackingSectionProps {
    t: {
        title: string;
        items: TrackingItem[];
    };
}

const TrackingSection: React.FC<TrackingSectionProps> = ({ t }) => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-12 text-center">
                        {t.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.items.map((item, index) => (
                            <div key={index} className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-3xl">{item.icon}</span>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrackingSection;
