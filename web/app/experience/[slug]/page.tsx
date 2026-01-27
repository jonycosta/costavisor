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
            images: [{ url: `https://www.costavisor.com${exp.image}` }],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: exp.title,
            description: exp.description.substring(0, 160),
            images: [`https://www.costavisor.com${exp.image}`],
        }
    };
}

export default async function ExperienceDetailPage({ params }: Props) {
    const { slug } = await params;

    const expEs = translations.es.portfolio.items.find((item: any) => item.slug === slug);
    const expEn = translations.en.portfolio.items.find((item: any) => item.slug === slug);
    const exp = expEs || expEn;

    return (
        <>
            {exp && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Inicio",
                                    "item": "https://www.costavisor.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Experiencias",
                                    "item": "https://www.costavisor.com/#experiencias"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": exp.title,
                                    "item": `https://www.costavisor.com/experience/${slug}`
                                }
                            ]
                        })
                    }}
                />
            )}
            <ExperienceClient slug={slug} />
        </>
    );
}
