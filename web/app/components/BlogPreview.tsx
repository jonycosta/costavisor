import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { translations } from "../lib/translations";

export default function BlogPreview({ t, lang }: { t: any; lang: "es" | "en" }) {
    const tb = (translations as any)[lang].blog;
    const posts = tb.posts.map((p: any, i: number) => ({
        ...p,
        category: t.tag,
        image: i === 0 ? "/exp-nature.png" : "/exp-boat.png"
    }));

    return (
        <section id="guia" className="py-24 bg-surface relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <span className="text-secondary font-black uppercase tracking-widest text-xs uppercase">{t.tag}</span>
                        <h2 className="font-outfit text-4xl md:text-5xl font-black text-primary leading-tight">
                            {t.h2}
                        </h2>
                        <p className="text-lg text-muted font-medium max-w-xl">
                            {t.p}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {posts.map((post: any, i: number) => (
                        <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1.5 rounded-full bg-white text-primary text-[10px] font-black uppercase tracking-widest shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-10 space-y-4">
                                <h3 className="font-outfit text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-muted leading-relaxed font-medium">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/guia/${post.slug}`}
                                    className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group/btn pt-4"
                                >
                                    {tb.readMore} <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
