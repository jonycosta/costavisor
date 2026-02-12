import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Diseña tu Viaje a Medida | CostaVisor",
    description: "Crea tu experiencia perfecta en Nerja y Costa del Sol. Dinos qué buscas y diseñamos un paquete de vacaciones personalizado con alojamiento y actividades.",
    openGraph: {
        title: "Diseña tu Viaje a Medida | CostaVisor",
        description: "Configura tus vacaciones ideales en minutos. Presupuesto estimado y plan personalizado.",
        url: "https://www.costavisor.com/design",
    }
};

export default function DesignLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
