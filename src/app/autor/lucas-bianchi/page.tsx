import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getVisiblePosts, sortByDate } from "@/lib/posts";
import PostCardImage from "@/components/PostCardImage";
import ScrollReveal from "@/components/ScrollReveal";

const AUTHOR_URL = "https://dividai.com/autor/lucas-bianchi";

export const metadata: Metadata = {
    title: "Lucas Bianchi | Editor-chefe do Blog DividAI",
    description:
        "Conheça Lucas Bianchi, analista financeiro e editor-chefe do Blog DividAI. Especialista em renda passiva, dividendos e Value Investing para o mercado brasileiro.",
    alternates: {
        canonical: AUTHOR_URL,
    },
    openGraph: {
        title: "Lucas Bianchi | Editor-chefe do Blog DividAI",
        description:
            "Analista financeiro especialista em renda passiva e dividendos. Dedicado a democratizar a educação financeira no Brasil.",
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
    jobTitle: "Editor-chefe",
    description:
        "Analista financeiro e especialista em renda passiva, dividendos e Value Investing para o mercado brasileiro. Editor-chefe do Blog DividAI desde 2026.",
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
        "Value Investing",
        "Mercado Financeiro Brasileiro",
    ],
    sameAs: [
        "https://twitter.com/dividai",
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
                            Analista financeiro e entusiasta de dividendos. Fundou o Blog DividAI em 2026
                            com a missão de democratizar a educação financeira no Brasil — tornando
                            conteúdo de qualidade acessível para qualquer pessoa, independente do nível
                            de conhecimento.
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
                            <a
                                href="https://twitter.com/dividai"
                                target="_blank"
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
                                    transition: "border-color 0.2s",
                                }}
                            >
                                𝕏 Twitter
                            </a>
                            <a
                                href="https://t.me/DividAI_News"
                                target="_blank"
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
                                ✈️ Telegram
                            </a>
                            <a
                                href="mailto:contato@dividai.com"
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
                                ✉️ E-mail
                            </a>
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
                        Lucas é analista financeiro com foco em <strong>renda passiva, dividendos e Value Investing</strong>.
                        Ao longo da carreira, percebeu que a maioria dos brasileiros tem dificuldade de acessar
                        informação financeira de qualidade — conteúdo que realmente faça sentido para a realidade
                        local, com CDI, Tesouro Direto, FIIs e B3, e não apenas traduções de mercados internacionais.
                    </p>
                    <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
                        Em fevereiro de 2026, fundou o <strong>Blog DividAI</strong> para resolver esse problema.
                        O blog cobre desde os primeiros passos de quem nunca investiu até estratégias mais avançadas
                        de alocação de ativos, planejamento sucessório e proteção patrimonial.
                    </p>
                    <p style={{ lineHeight: 1.8, margin: 0 }}>
                        Suas áreas de especialização incluem: <strong>Fundos Imobiliários (FIIs), ações de dividendos,
                        Tesouro Direto, planejamento financeiro para autônomos e MEIs, e educação financeira para
                        iniciantes</strong>. Todo conteúdo do blog passa pela curadoria e revisão de Lucas antes da publicação.
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
