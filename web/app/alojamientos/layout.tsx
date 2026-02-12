import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Villas & Suites Exclusivas | CostaVisor",
    description: "Alquiler de villas y apartamentos premium en Nerja y Frigiliana. Selección exclusiva de alojamientos con encanto y servicios de concierge.",
    openGraph: {
        title: "Villas & Suites Exclusivas | CostaVisor",
        description: "Descubre las mejores villas de Nerja y Frigiliana. Próximamente disponible.",
        url: "https://www.costavisor.com/alojamientos",
    }
};

export default function AccommodationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
