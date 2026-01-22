import { Metadata } from "next";
import { translations } from "../../lib/translations";
import GuideClient from "./GuideClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const postEs = (translations.es as any).guide_posts?.[slug];
    const postEn = (translations.en as any).guide_posts?.[slug];

    const post = postEs || postEn;

    if (!post) {
        return {
            title: "Guía | CostaVisor",
            description: "Descubre los secretos mejor guardados de Nerja y Frigiliana."
        };
    }

    return {
        title: `${post.title} | CostaVisor Guide`,
        description: post.content.substring(0, 160).replace(/[#*]/g, '') + "...",
        openGraph: {
            title: post.title,
            description: post.content.substring(0, 160).replace(/[#*]/g, ''),
            images: [{ url: post.image }],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.content.substring(0, 160).replace(/[#*]/g, ''),
            images: [post.image],
        }
    };
}

export default async function GuideDetailPage({ params }: Props) {
    const { slug } = await params;
    return <GuideClient slug={slug} />;
}
