import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import PostCardImage from "@/components/PostCardImage";
import ScrollReveal from "@/components/ScrollReveal";
import { getVisiblePosts, sortByDate, sortByViews } from "@/lib/posts";

export const metadata: Metadata = {
    title: "Blog DividAI | Financas sem complicacoes",
    description:
        "Aprenda a organizar sua vida financeira, sair das dividas e comecar a investir com foco na realidade brasileira.",
    alternates: {
        canonical: "https://blog.dividai.com",
    },
    openGraph: {
        title: "Blog DividAI",
        description:
            "Aprenda a organizar sua vida financeira, sair das dividas e comecar a investir com foco na realidade brasileira.",
        url: "https://blog.dividai.com",
        siteName: "Blog DividAI",
        type: "website",
    },
};

export const revalidate = 3600;

interface HomeProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
    const params = await searchParams;
    const categoryFilter = params.category as string | undefined;
    const visible = getVisiblePosts();
    const filtered = categoryFilter
        ? visible.filter((post) => post.category === categoryFilter)
        : visible;

    const sortedByViews = sortByViews(filtered);
    const featuredPost = sortedByViews[0] || visible[0];

    if (!featuredPost) {
        return null;
    }

    const otherPosts = sortByDate(filtered).filter((post) => post.slug !== featuredPost.slug);
    const categoryCounts = visible.reduce((acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return (
        <>
            <section style={{ textAlign: "center", padding: "4rem 0", borderBottom: "1px solid var(--border)" }}>
                <h1
                    style={{
                        fontSize: "3rem",
                        marginBottom: "1rem",
                        background: "linear-gradient(90deg, #818cf8, #0ea5e9)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    Sua Nova Relacao com o Dinheiro
                </h1>
                <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "600px", margin: "0 auto" }}>
                    Descomplique suas financas com dicas praticas, diretas e feitas sob medida para a realidade do brasileiro.
                </p>
            </section>

            <div className="main-layout">
                <main className="content-area">
                    <section>
                        <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--muted)" }}>
                            Destaque
                        </h2>

                        <ScrollReveal delay={40}>
                            <Link href={`/post/${featuredPost.slug}`} className="featured-post">
                                <span
                                    className="post-category"
                                    style={{ fontSize: "0.85rem", marginBottom: "1rem", display: "inline-block" }}
                                >
                                    {featuredPost.category}
                                </span>
                                <h2 className="featured-title">{featuredPost.title}</h2>
                                <p className="featured-excerpt">{featuredPost.excerpt}</p>

                                <div className="post-meta" style={{ margin: 0, color: "#a1a1aa" }}>
                                    <span>{featuredPost.date}</span>
                                    <span>&bull;</span>
                                    <span>{featuredPost.readTime}</span>
                                </div>
                            </Link>
                        </ScrollReveal>
                    </section>

                    <section id="artigos" aria-labelledby="ultimos-artigos" style={{ paddingTop: "1rem" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "1rem",
                                gap: "1rem",
                                flexWrap: "wrap",
                            }}
                        >
                            <h2 id="ultimos-artigos" style={{ fontSize: "2rem" }}>
                                {categoryFilter ? `Artigos em ${categoryFilter}` : "Ultimos Artigos"}
                            </h2>
                            {categoryFilter && (
                                <Link
                                    href="/"
                                    className="btn btn-secondary"
                                    style={{ padding: "0.25rem 0.75rem", fontSize: "0.85rem" }}
                                >
                                    Remover filtro
                                </Link>
                            )}
                        </div>

                        <div className="post-grid" style={{ marginTop: "1.5rem" }}>
                            {otherPosts.map((post, index) => (
                                <ScrollReveal key={post.slug} delay={index * 50} style={{ height: "100%" }}>
                                    <Link href={`/post/${post.slug}`} className="post-card">
                                        <PostCardImage slug={post.slug} title={post.title} />

                                        <div className="post-card-body">
                                            <span className="post-category">{post.category}</span>
                                            <h3 className="post-title">{post.title}</h3>
                                            <p className="post-excerpt">{post.excerpt}</p>

                                            <div className="post-meta" style={{ marginTop: "auto", marginBottom: 0 }}>
                                                <span>{post.date}</span>
                                                <span>&bull;</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    </section>
                </main>

                <aside className="sidebar">
                    <ScrollReveal delay={80}>
                        <div className="widget">
                            <h3 className="widget-title">Sobre a DividAI</h3>
                            <div className="widget-text" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <p style={{ marginBottom: 0 }}>
                                    Este blog e a central de educacao da <strong>DividAI</strong>, o ecossistema inteligente
                                    de gestao de investimentos e controle patrimonial mais inovador do Brasil.
                                </p>
                                <p style={{ marginBottom: 0 }}>
                                    Nossa missao nao para na leitura. Leve a gestao do seu dinheiro para o proximo nivel com
                                    a nossa inteligencia artificial:
                                </p>
                                <Link
                                    href="https://dividai.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ textAlign: "center", width: "100%", padding: "0.75rem", fontSize: "0.95rem", marginTop: "0.5rem" }}
                                >
                                    Conhecer a plataforma
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={140}>
                        <div className="widget">
                            <h3 className="widget-title">Categorias</h3>
                            <ul className="category-list">
                                {Object.entries(categoryCounts).map(([cat, count]) => (
                                    <li key={cat}>
                                        <Link href={`/?category=${encodeURIComponent(cat)}`} className="category-item">
                                            <span>{cat}</span>
                                            <span>({count})</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="widget">
                            <h3 className="widget-title">Assine a newsletter</h3>
                            <p className="widget-text">
                                Receba alertas de novos artigos, guias rapidos e insights praticos direto no e-mail.
                            </p>
                            <NewsletterForm
                                source="sidebar_home"
                                title="Fique por dentro do blog"
                                description="Novos artigos, atalhos praticos e ideias para investir melhor sem perder tempo."
                                compact
                            />
                        </div>
                    </ScrollReveal>
                </aside>
            </div>
        </>
    );
}
