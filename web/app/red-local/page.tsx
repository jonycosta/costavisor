import { translations } from "@/app/lib/translations";
import Image from "next/image";

export default function RedLocalPage() {
    const t = translations.es.localNetworkPage;

    return (
        <div className="bg-gray-50 min-h-screen p-8 pt-32">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">{t.title}</h1>
                <p className="text-lg text-gray-600 mt-2">{t.subtitle}</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.partners.map((partner, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row items-center p-6">
                            <div className="flex-grow pr-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{partner.name}</h2>
                                <p className="text-gray-600 mb-4">{partner.description}</p>
                                <a href={partner.contact} className={`inline-block text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${partner.color} hover:opacity-90`}>
                                    {partner.ctaText}
                                </a>
                            </div>
                            <div className="w-full md:w-1/3 mt-4 md:mt-0">
                                <Image src={partner.image} alt={partner.name} width={200} height={200} className="rounded-lg object-cover w-full h-full" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="/experience" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                        {t.viewAllExps}
                    </a>
                </div>
            </div>
        </div>
    );
}
