import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inversores & Propietarios | CostaVisor",
    description: "Rentabiliza tu propiedad en Nerja y Frigiliana sin complicaciones. Gestión integral, reformas con JD Builders y estrategia de alquiler vacacional.",
    openGraph: {
        title: "Inversores & Propietarios | CostaVisor",
        description: "Tu socio local en Nerja. Compra, reforma y gestiona tu propiedad con expertos.",
        url: "https://www.costavisor.com/investors",
    }
};

export default function InvestorsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
