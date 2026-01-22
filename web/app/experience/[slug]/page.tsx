import { Metadata } from "next";
import { translations } from "../../lib/translations";
import ExperienceClient from "./ExperienceClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    // We check both ES and EN to find the content
    const expEs = translations.es.portfolio.items.find((item: any) => item.slug === slug);
    const expEn = translations.en.portfolio.items.find((item: any) => item.slug === slug);

    const exp = expEs || expEn;

    if (!exp) {
        return {
            title: "Experiencia | CostaVisor",
            description: "Descubre experiencias exclusivas en Nerja y Frigiliana."
        };
    }

    return {
        title: `${exp.title} | Nerja & Frigiliana`,
        description: exp.description.substring(0, 160) + "...",
        openGraph: {
            title: `${exp.title} | CostaVisor Exclusive`,
            description: exp.description.substring(0, 160),
            images: [{ url: exp.image }],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: exp.title,
            description: exp.description.substring(0, 160),
            images: [exp.image],
        }
    };
}

export default async function ExperienceDetailPage({ params }: Props) {
    const { slug } = await params;
    return <ExperienceClient slug={slug} />;
}
