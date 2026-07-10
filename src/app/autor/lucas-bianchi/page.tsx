import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getVisiblePosts, sortByDate } from "@/lib/posts";
import PostCardImage from "@/components/PostCardImage";
import ScrollReveal from "@/components/ScrollReveal";

const AUTHOR_URL = "https://dividai.com/autor/lucas-bianchi";

export const metadata: Metadata = {
    title: "Lucas Bianchi | Fundador do Blog DividAI",
    description:
        "Conheça Lucas Bianchi, investidor e fundador do Blog DividAI. Curitibano, entusiasta de tecnologia e dividendos, criou o blog para ajudar brasileiros a construir independência financeira real — sem depender do INSS.",
    alternates: {
        canonical: AUTHOR_URL,
    },
    openGraph: {
        title: "Lucas Bianchi | Fundador do Blog DividAI",
        description:
            "Investidor e entusiasta de dividendos. Criou o DividAI para ajudar brasileiros a não dependerem do INSS na aposentadoria.",
        url: AUTHOR_URL,
        siteName: "Blog DividAI",
        type: "profile",
        images: [
            {
                url: "https://dividai.com/lucas-bianchi.png",
                width: 400,
                height: 400,
                alt: "Lucas Bianchi - Editor-chefe DividAI",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Lucas Bianchi | Editor-chefe do Blog DividAI",
        description: "Analista financeiro especialista em renda passiva e dividendos.",
        images: ["https://dividai.com/lucas-bianchi.png"],
        creator: "@DividAI",
    },
};

// Schema Person completo — sinal forte de E-E-A-T para o Google em nicho YMYL
const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": AUTHOR_URL,
    name: "Lucas Bianchi",
    url: AUTHOR_URL,
    image: "https://dividai.com/lucas-bianchi.png",
    jobTitle: "Investidor e Fundador",
    description:
        "Investidor e entusiasta de tecnologia e dividendos, nascido em Curitiba. Fundou o Blog DividAI em 2026 para ajudar brasileiros a construir independência financeira real, sem depender do INSS.",
    worksFor: {
        "@type": "Organization",
        name: "DividAI",
        url: "https://dividai.com",
    },
    knowsAbout: [
        "Finanças Pessoais",
        "Investimentos em Ações",
        "Fundos Imobiliários",
        "Renda Passiva",
        "Dividendos",
        "Tesouro Direto",
        "Educação Financeira",
        "Independência Financeira",
        "Mercado Financeiro Brasileiro",
    ],
    sameAs: [
        "https://x.com/DividAI_App",
        "https://www.instagram.com/dividai_app/",
        "https://www.threads.com/@dividai_app",
        "https://t.me/DividAI_News",
    ],
};

export const revalidate = 3600;

export default function AutorLucasBianchiPage() {
    const posts = sortByDate(getVisiblePosts()).slice(0, 12);
    const totalPosts = getVisiblePosts().length;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
            />

            <article style={{ maxWidth: "900px", margin: "4rem auto" }}>
                {/* Hero do autor */}
                <header style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "2.5rem",
                    marginBottom: "3rem",
                    flexWrap: "wrap",
                }}>
                    <Image
                        src="/lucas-bianchi.png"
                        alt="Lucas Bianchi - Editor-chefe DividAI"
                        width={140}
                        height={140}
                        priority
                        style={{
                            borderRadius: "20px",
                            objectFit: "cover",
                            border: "2px solid var(--primary)",
                            boxShadow: "0 8px 24px rgba(14,165,233,0.2)",
                            flexShrink: 0,
                        }}
                    />

                    <div style={{ flex: 1, minWidth: "260px" }}>
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" style={{
                            fontSize: "0.82rem",
                            color: "var(--muted)",
                            marginBottom: "0.75rem",
                            display: "flex",
                            gap: "0.4rem",
                            alignItems: "center",
                        }}>
                            <Link href="/" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>Início</Link>
                            <span style={{ opacity: 0.5 }}>/</span>
                            <span>Autor</span>
                            <span style={{ opacity: 0.5 }}>/</span>
                            <span>Lucas Bianchi</span>
                        </nav>

                        <div style={{
                            display: "inline-block",
                            fontSize: "0.75rem",
                            backgroundColor: "rgba(14,165,233,0.1)",
                            color: "var(--primary)",
                            padding: "0.2rem 0.7rem",
                            borderRadius: "20px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            marginBottom: "0.75rem",
                        }}>
                            Editor-chefe
                        </div>

                        <h1 style={{
                            margin: "0 0 0.75rem 0",
                            fontSize: "2rem",
                            fontWeight: 800,
                            lineHeight: 1.2,
                        }}>
                            Lucas Bianchi
                        </h1>

                        <p style={{
                            margin: "0 0 1.25rem 0",
                            fontSize: "1rem",
                            color: "var(--foreground-2)",
                            lineHeight: 1.7,
                        }}>
                            Investidor e entusiasta de tecnologia e dividendos, de Curitiba. Fundou o Blog DividAI em 2026
                            para ajudar brasileiros comuns a construir independência financeira real —
                            sem depender do INSS.
                        </p>

                        {/* Stats */}
                        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                            {[
                                { label: "Artigos publicados", value: totalPosts },
                                { label: "Desde", value: "Fev 2026" },
                                { label: "Especialidade", value: "Dividendos" },
                            ].map(({ label, value }) => (
                                <div key={label}>
                                    <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--primary)" }}>
                                        {value}
                                    </div>
                                    <div style={{ fontSize: "0.78rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                        {label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Redes sociais */}
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            {[
                                { href: "https://x.com/DividAI_App", label: "𝕏 Twitter" },
                                { href: "https://www.instagram.com/dividai_app/", label: "📷 Instagram" },
                                { href: "https://www.threads.com/@dividai_app", label: "@ Threads" },
                                { href: "https://t.me/DividAI_News", label: "✈️ Telegram" },
                                { href: "mailto:contato@dividai.com", label: "✉️ E-mail" },
                            ].map(({ href, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target={href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noopener noreferrer me"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.4rem",
                                        padding: "0.4rem 1rem",
                                        border: "1px solid var(--border)",
                                        borderRadius: "8px",
                                        fontSize: "0.88rem",
                                        fontWeight: 600,
                                        color: "var(--foreground)",
                                        textDecoration: "none",
                                    }}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </header>

                {/* Bio expandida */}
                <section style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    padding: "2rem",
                    marginBottom: "3rem",
                }}>
                    <h2 style={{ marginTop: 0, fontSize: "1.25rem" }}>Sobre Lucas Bianchi</h2>
                    <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
                        Lucas é investidor há 3 anos e entusiasta de tecnologia e dividendos, nascido e criado em Curitiba.
                        Não tem formação em economia nem é analista certificado — é um brasileiro comum que decidiu
                        tomar as rédeas da própria aposentadoria depois de perceber que <strong>o INSS não é sustentável</strong>.
                        Na prática, o sistema funciona como uma pirâmide financeira chancelada pelo governo: as gerações
                        mais jovens pagam os aposentados de hoje sem nenhuma garantia de receber o mesmo no futuro.
                    </p>
                    <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
                        A partir dessa constatação, começou a estudar finanças pessoais e investimentos por conta própria.
                        Em fevereiro de 2026, fundou o <strong>Blog DividAI</strong> com um objetivo claro: compartilhar
                        o que aprendeu e ajudar outros brasileiros a construir uma carteira de dividendos que torne
                        o INSS irrelevante na aposentadoria.
                    </p>
                    <p style={{ lineHeight: 1.8, margin: 0 }}>
                        O blog cobre os temas que Lucas estudou na prática: <strong>ações de dividendos, Fundos Imobiliários (FIIs),
                        Tesouro Direto, renda extra e planejamento financeiro para quem está começando do zero</strong>.
                        A linguagem é direta, sem jargões, porque Lucas escreve para quem estava no mesmo lugar que ele há 3 anos.
                    </p>
                </section>

                {/* Lista de áreas de conhecimento */}
                <section style={{ marginBottom: "3rem" }}>
                    <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Áreas de Especialização</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                        {authorSchema.knowsAbout.map((area) => (
                            <span
                                key={area}
                                style={{
                                    padding: "0.4rem 0.9rem",
                                    background: "rgba(14,165,233,0.08)",
                                    border: "1px solid rgba(14,165,233,0.2)",
                                    borderRadius: "20px",
                                    fontSize: "0.85rem",
                                    color: "var(--primary)",
                                    fontWeight: 600,
                                }}
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Artigos recentes */}
                <section>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                        <h2 style={{ margin: 0, fontSize: "1.25rem" }}>
                            Artigos Publicados
                            <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "var(--muted)", marginLeft: "0.75rem" }}>
                                ({totalPosts} no total)
                            </span>
                        </h2>
                        <Link
                            href="/#artigos"
                            style={{ fontSize: "0.88rem", color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}
                        >
                            Ver todos →
                        </Link>
                    </div>

                    <div className="post-grid">
                        {posts.map((post, index) => (
                            <ScrollReveal key={post.slug} delay={index * 40} style={{ height: "100%" }}>
                                <Link href={`/post/${post.slug}`} className="post-card">
                                    <PostCardImage slug={post.slug} title={post.title} image={post.image} />
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
                </section>
            </article>
        </>
    );
}
