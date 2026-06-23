import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import PostCardImage from "@/components/PostCardImage";
import ScrollReveal from "@/components/ScrollReveal";
import AdSlot from "@/components/AdSlot";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { getVisiblePosts, sortByDate, sortByViews } from "@/lib/posts";
import Pagination from "@/components/Pagination";

interface HomeProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ searchParams }: HomeProps): Promise<Metadata> {
    const params = await searchParams;
    const page = params.page ? Math.max(1, Number(params.page)) : 1;
    const category = params.category as string | undefined;

    let title = "Blog DividAI | Educação Financeira e Finanças Pessoais";
    if (category) {
        title = `${category} | Blog DividAI`;
    }
    if (page > 1) {
        title += ` - Página ${page}`;
    }

    const canonicalUrl = category
        ? `https://dividai.com/?category=${encodeURIComponent(category)}${page > 1 ? `&page=${page}` : ""}`
        : `https://dividai.com${page > 1 ? `/?page=${page}` : ""}`;

    return {
        title,
        description: "Descubra como melhorar suas finanças pessoais, sair das dívidas e fazer os melhores investimentos. Educação financeira prática.",
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description: "Descubra como melhorar suas finanças pessoais, sair das dívidas e fazer os melhores investimentos. Educação financeira prática.",
            url: canonicalUrl,
            siteName: "Blog DividAI",
            type: "website",
            images: [
                {
                    url: "/opengraph-image",
                    width: 1200,
                    height: 630,
                    alt: "Blog DividAI | Educação Financeira e Finanças Pessoais",
                },
            ],
        },
    };
}


export const dynamic = "force-dynamic"; // Sempre renderiza com a data atual — garante posts agendados

export default async function Home({ searchParams }: HomeProps) {
    const params = await searchParams;
    const categoryFilter = params.category as string | undefined;
    const page = params.page ? Math.max(1, Number(params.page)) : 1;

    const visible = getVisiblePosts();
    const filtered = categoryFilter
        ? visible.filter((post) => post.category === categoryFilter)
        : visible;

    const sortedByDate = sortByDate(filtered);
    const featuredPost = sortedByDate[0] || visible[0];

    if (!featuredPost) {
        return null;
    }

    const otherPosts = sortByDate(filtered).filter((post) => post.slug !== featuredPost.slug);
    
    // Lógica da Paginação
    const POSTS_PER_PAGE = 9;
    const totalPosts = otherPosts.length;
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const paginatedPosts = otherPosts.slice(startIndex, endIndex);

    const categoryCounts = visible.reduce((acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    // Trending posts — top 5 por visualizações
    const trendingPosts = sortByViews(visible).slice(0, 5);

    // Métricas de prova social
    const totalArticles = visible.length;
    const totalCategories = Object.keys(categoryCounts).length;

    return (
        <>
            {/* Hero */}
            <section className="hero-section">
                <div className="hero-badge">
                    Educação Financeira Brasileira
                </div>
                <h1 className="hero-title">
                    Educação Financeira e Investimentos
                </h1>
                <p className="hero-subtitle">
                    Aprenda a organizar suas finanças pessoais, sair das dívidas e começar a investir. Dicas práticas feitas sob medida para a realidade do brasileiro.
                </p>

                {/* CTA Buttons */}
                <div className="hero-ctas">
                    <a href="#newsletter-band" className="hero-cta-primary">
                        📩 Receba o Guia Grátis
                    </a>
                    <Link href="/#artigos" className="hero-cta-secondary">
                        📚 Ver Artigos
                    </Link>
                </div>
            </section>

            {/* Social Proof Strip */}
            <section className="social-proof-strip" aria-label="Números do blog">
                <div className="social-proof-item">
                    <span className="social-proof-number">{totalArticles}+</span>
                    <span className="social-proof-label">Artigos</span>
                </div>
                <div className="social-proof-item">
                    <span className="social-proof-number">{totalCategories}</span>
                    <span className="social-proof-label">Categorias</span>
                </div>
                <div className="social-proof-item">
                    <span className="social-proof-number">100%</span>
                    <span className="social-proof-label">Gratuito</span>
                </div>
                <div className="social-proof-item">
                    <span className="social-proof-number">🇧🇷</span>
                    <span className="social-proof-label">Para Brasileiros</span>
                </div>
            </section>

            {/* Trending Posts — Horizontal Scroll */}
            {trendingPosts.length > 0 && (
                <section className="trending-section container" aria-label="Artigos em alta">
                    <div className="section-header" style={{ marginBottom: "1.25rem" }}>
                        <h2 className="section-title">🔥 Em Alta</h2>
                    </div>
                    <ScrollReveal delay={30}>
                        <div className="trending-scroll">
                            {trendingPosts.map((post, index) => (
                                <Link
                                    key={post.slug}
                                    href={`/post/${post.slug}`}
                                    className="trending-card"
                                    aria-label={`Artigo em alta #${index + 1}: ${post.title}`}
                                >
                                    <span className="trending-rank">{index + 1}</span>
                                    <div className="trending-info">
                                        <h3 className="trending-title">{post.title}</h3>
                                        <span className="trending-meta">
                                            {post.category} · {post.readTime}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>
                </section>
            )}

            <div className="main-layout">
                <main className="content-area">
                    {/* Featured Article */}
                    <section aria-label="Artigo em Destaque" style={{ marginBottom: "2.5rem" }}>
                        <div className="section-header" style={{ marginBottom: "1.25rem" }}>
                            <h2 className="section-title">Destaque</h2>
                        </div>

                        <ScrollReveal delay={40}>
                            <Link
                                href={`/post/${featuredPost.slug}`}
                                className="featured-post"
                                aria-label={`Ir para artigo: ${featuredPost.title}`}
                            >
                                {/* Image strip */}
                                <div className="featured-image-strip">
                                    <Image
                                        src={`/post/${featuredPost.slug}/opengraph-image`}
                                        alt={`Capa do artigo ${featuredPost.title}`}
                                        fill
                                        priority
                                        className="featured-image-next"
                                        unoptimized
                                    />
                                    <div className="featured-image-overlay" />
                                </div>

                                {/* Content */}
                                <div className="featured-body">
                                    <span className="featured-label">{featuredPost.category}</span>
                                    <h2 className="featured-title">{featuredPost.title}</h2>
                                    <p className="featured-excerpt">{featuredPost.excerpt}</p>

                                    <div className="featured-meta">
                                        <span className="featured-meta-item">
                                            📅 {featuredPost.date}
                                        </span>
                                        <span className="featured-meta-item">
                                            ⏱ {featuredPost.readTime}
                                        </span>
                                        <span className="featured-cta">
                                            Ler artigo completo →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    </section>

                    {/* Articles Grid */}
                    <section id="artigos" aria-labelledby="ultimos-artigos">
                        <div className="section-header">
                            <h2 id="ultimos-artigos" className="section-title">
                                {categoryFilter ? `Artigos em ${categoryFilter}` : "Últimos Artigos"}
                            </h2>
                            {categoryFilter && (
                                <Link
                                    href="/"
                                    className="btn btn-secondary"
                                    style={{ padding: "0.4rem 1rem", fontSize: "0.82rem" }}
                                >
                                    ✕ Remover filtro
                                </Link>
                            )}
                        </div>

                        <div className="post-grid">
                            {paginatedPosts.map((post, index) => (
                                <ScrollReveal key={post.slug} delay={index * 55} style={{ height: "100%" }}>
                                    <Link href={`/post/${post.slug}`} className="post-card">
                                        <PostCardImage slug={post.slug} title={post.title} />
                                        <div className="post-card-body">
                                            <span className="post-category">{post.category}</span>
                                            <h3 className="post-title">{post.title}</h3>
                                            <p className="post-excerpt">{post.excerpt}</p>
                                            <div className="post-meta" style={{ marginTop: "auto", marginBottom: 0 }}>
                                                <span>{post.date}</span>
                                                <span>·</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Paginação */}
                        {totalPages > 1 && (
                            <Pagination
                                currentPage={page}
                                totalPages={totalPages}
                                category={categoryFilter}
                            />
                        )}
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="sidebar" aria-label="Barra lateral">
                    <ScrollReveal delay={100}>
                        <div className="widget">
                            <h3 className="widget-title">Categorias</h3>
                            <ul className="category-list">
                                {Object.entries(categoryCounts)
                                    .sort(([, a], [, b]) => b - a)
                                    .map(([cat, count]) => (
                                        <li key={cat}>
                                            <Link
                                                href={`/?category=${encodeURIComponent(cat)}`}
                                                className="category-item"
                                            >
                                                <span>{cat}</span>
                                                <span>{count}</span>
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={130}>
                        <AdSlot slot="sidebar_home" />
                    </ScrollReveal>

                    <ScrollReveal delay={160}>
                        <div className="widget">
                            <h3 className="widget-title">🎯 Guia Grátis</h3>
                            <NewsletterForm
                                source="sidebar_home"
                                title="Comece a Investir do Zero"
                                description="Receba um roteiro prático para sair da poupança, montar sua reserva e investir com segurança — direto no seu e-mail, sem enrolação."
                                compact
                            />
                        </div>
                    </ScrollReveal>
                </aside>
            </div>

            {/* Newsletter Band — Full Width Conversion Section */}
            <section id="newsletter-band" className="newsletter-band" aria-label="Inscreva-se na newsletter">
                <div className="newsletter-band-inner">
                    <div className="newsletter-band-text">
                        <h2>Seu dinheiro pode render mais</h2>
                        <p>
                            Receba toda semana um roteiro prático com dicas de investimento, 
                            economia e planejamento financeiro — feito para a realidade brasileira.
                            Gratuito, sem spam, cancele quando quiser.
                        </p>
                    </div>
                    <NewsletterForm
                        source="homepage_band"
                        title="Comece a Investir do Zero"
                        description="Roteiro direto no seu e-mail."
                        compact
                    />
                </div>
            </section>

            {/* Sticky Mobile CTA */}
            <StickyMobileCTA />
        </>
    );
}
