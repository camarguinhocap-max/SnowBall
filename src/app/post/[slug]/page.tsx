import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVisiblePosts, parsePostDate, getAllPosts, isPublished, getFullPost } from "@/lib/posts";
import AuthorBio from "@/components/AuthorBio";
import ImageWithModal from "@/components/ImageWithModal";
import InvestmentDisclaimer from "@/components/InvestmentDisclaimer";
import NewsletterForm from "@/components/NewsletterForm";
import ReadingProgress from "@/components/ReadingProgress";
import ReadingTime from "@/components/ReadingTime";
import RelatedPosts from "@/components/RelatedPosts";
import ScrollReveal from "@/components/ScrollReveal";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";
import AdSlot from "@/components/AdSlot";
import RelatedProducts from "@/components/RelatedProducts";
import Image from "next/image";

function createHeadingId(children: unknown) {
    return String(children)
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

const markdownComponents: Components = {
    img: ({ src, alt }) => (
        <ImageWithModal src={typeof src === "string" ? src : undefined} alt={alt} />
    ),
    h1: ({ children }) => <h1 id={createHeadingId(children)}>{children}</h1>,
    h2: ({ children }) => <h2 id={createHeadingId(children)}>{children}</h2>,
    h3: ({ children }) => <h3 id={createHeadingId(children)}>{children}</h3>,
    h4: ({ children }) => <h4 id={createHeadingId(children)}>{children}</h4>,
    h5: ({ children }) => <h5 id={createHeadingId(children)}>{children}</h5>,
    h6: ({ children }) => <h6 id={createHeadingId(children)}>{children}</h6>,
};

function splitPostContent(content: string) {
    const trimmed = content.trim();
    const sections = trimmed.split(/(?=^#{1,6}\s)/gm).filter(Boolean);

    if (sections.length < 4) {
        return { primaryContent: trimmed, secondaryContent: "" };
    }

    const splitIndex = Math.ceil(sections.length / 2);
    return {
        primaryContent: sections.slice(0, splitIndex).join("\n\n"),
        secondaryContent: sections.slice(splitIndex).join("\n\n"),
    };
}

/**
 * Extrai pares pergunta/resposta do markdown para gerar FAQPage schema.
 * Critério: headings (## ou ###) que terminam com "?" seguidos de parágrafo.
 * Retorna null se menos de 2 pares forem encontrados.
 */
function extractFAQs(content: string): { question: string; answer: string }[] | null {
    // Prefixos que indicam seções estruturais, não FAQs reais
    const STRUCTURAL_PREFIXES = /^(conclus|introdução|introduc|sumário|resumo|sobre|contato)/i;

    const lines = content.split("\n");
    const faqs: { question: string; answer: string }[] = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        // Detecta headings ## ou ### que terminam com ?
        const headingMatch = line.match(/^#{2,3}\s+(.+\?)\s*$/);
        if (!headingMatch) continue;

        const question = headingMatch[1].trim();

        // Ignora headings estruturais (Conclusão, Introdução, etc.)
        if (STRUCTURAL_PREFIXES.test(question)) continue;

        // Coleta os parágrafos seguintes até encontrar outro heading ou linha vazia após conteúdo
        const answerLines: string[] = [];
        let j = i + 1;
        while (j < lines.length) {
            const next = lines[j].trim();
            if (next.startsWith("#")) break;
            if (next) answerLines.push(next);
            if (answerLines.length > 0 && next === "") break;
            j++;
        }

        const answer = answerLines
            .join(" ")
            .replace(/\*\*/g, "")
            .replace(/\*/g, "")
            .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links → só texto
            .replace(/`[^`]+`/g, "")
            .replace(/^[-*]\s/gm, "")
            .replace(/\s+/g, " ")
            .trim();

        if (question && answer.length > 40) {
            faqs.push({ question, answer });
        }
    }

    return faqs.length >= 2 ? faqs : null;
}

export const dynamicParams = true;

export function generateStaticParams() {
    return getVisiblePosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    // generateMetadata só precisa dos metadados — sem carregar content
    const post = getAllPosts().find((item) => item.slug === params.slug);

    if (!post) {
        return { title: "Artigo não encontrado | DividAI" };
    }

    const url = `https://dividai.com/post/${post.slug}`;
    const imageUrl = post.image
        ? `https://dividai.com${post.image}`
        : `${url}/opengraph-image`;
    const publishedTime = parsePostDate(post.date).toISOString();
    const modifiedTime = post.updatedAt
        ? parsePostDate(post.updatedAt).toISOString()
        : publishedTime;

    return {
        title: `${post.title} | Blog DividAI`,
        description: post.excerpt,
        keywords: [post.category, "DividAI", "blog", "finanças", ...post.tags].join(", "),
        authors: [{ name: "DividAI" }],
        alternates: { canonical: url },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url,
            siteName: "Blog DividAI",
            type: "article",
            publishedTime,
            modifiedTime,
            authors: ["DividAI"],
            images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title, type: "image/png" }],
            tags: [post.category, ...post.tags],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [imageUrl],
            creator: "@DividAI",
            site: "@DividAI",
        },
    };
}

export const revalidate = 60;

export default async function Post(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;

    // Verifica se o post existe e está publicado (usando apenas metadados — rápido)
    const meta = getAllPosts().find((item) => item.slug === params.slug);
    if (!meta || !isPublished(meta)) {
        notFound();
    }

    // Carrega metadados + content sob demanda (import dinâmico)
    const post = await getFullPost(params.slug);
    if (!post) {
        notFound();
    }

    const publishedTime = parsePostDate(post.date).toISOString();
    const modifiedTime = post.updatedAt
        ? parsePostDate(post.updatedAt).toISOString()
        : publishedTime;
    const articleUrl = `https://dividai.com/post/${post.slug}`;
    const imageUrl = `${articleUrl}/opengraph-image`;
    const { primaryContent, secondaryContent } = splitPostContent(post.content);
    const faqs = extractFAQs(post.content);

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "https://dividai.com" },
            { "@type": "ListItem", position: 2, name: post.category, item: `https://dividai.com/?category=${encodeURIComponent(post.category)}` },
            { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
        ],
    };

    return (
        <>
            <ReadingProgress />

            <article data-reading-root style={{ maxWidth: "800px", margin: "3rem auto 0 auto", padding: "0 1.5rem" }}>
                <nav className="breadcrumb" aria-label="Breadcrumb" style={{
                    marginBottom: "2rem",
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--muted)",
                    opacity: 0.8
                }}>
                    <Link href="/" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "600" }}>Início</Link>
                    <span className="breadcrumb__separator" style={{ opacity: 0.5 }}>/</span>
                    <Link href={`/?category=${encodeURIComponent(post.category)}`} style={{ color: "var(--primary)", textDecoration: "none" }}>{post.category}</Link>
                    <span className="breadcrumb__separator" style={{ opacity: 0.5 }}>/</span>
                    <span className="breadcrumb__current" style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "300px"
                    }}>{post.title}</span>
                </nav>

                <header className="article-header">
                    <span className="post-category" style={{ fontSize: "1rem" }}>
                        {post.category}
                    </span>
                    <h1 className="article-title">{post.title}</h1>

                    {post.tags.length > 0 && (
                        <div className="article-tags">
                            {post.tags.map((tag) => (
                                <span key={tag} className="article-tag">#{tag}</span>
                            ))}
                        </div>
                    )}

                    <div className="article-meta">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <ReadingTime readTime={post.readTime ?? '5 min de leitura'} />
                        {post.updatedAt && (
                            <>
                                <span>&bull;</span>
                                <span style={{ fontSize: '0.85em', color: 'var(--muted)' }}>Atualizado em {post.updatedAt}</span>
                            </>
                        )}
                    </div>
                </header>

                {post.image && (
                    <div style={{ margin: '1.5rem 0 2rem', borderRadius: '12px', overflow: 'hidden' }}>
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={1200}
                            height={630}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                            priority
                            unoptimized
                        />
                    </div>
                )}

                <div className="article-content">
                    <TableOfContents content={post.content} />

                    <AdSlot slot="post_top" />

                    <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>{primaryContent}</ReactMarkdown>

                    {secondaryContent && (
                        <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>{secondaryContent}</ReactMarkdown>
                    )}

                    <AdSlot slot="post_bottom" />

                    <ScrollReveal className="article-inline-newsletter" delay={60}>
                        <NewsletterForm
                            compact
                            source={`post_end:${post.slug}`}
                            title="Gostou do conteúdo?"
                            description="Assine para receber novos artigos e resumos práticos direto no seu e-mail."
                        />
                    </ScrollReveal>
                </div>

                {post.category === "Investimentos" && <InvestmentDisclaimer />}

                <ShareButtons title={post.title} slug={post.slug} />

                <RelatedProducts slug={post.slug} />

                <AuthorBio />

                <RelatedPosts currentSlug={post.slug} category={post.category} tags={post.tags} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Article",
                                headline: post.title,
                                description: post.excerpt,
                                mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
                                url: articleUrl,
                                image: [imageUrl],
                                articleSection: post.category,
                                keywords: post.tags.join(", "),
                                inLanguage: "pt-BR",
                                author: {
                                    "@type": "Person",
                                    name: "Lucas Bianchi",
                                    url: "https://dividai.com/autor/lucas-bianchi",
                                    jobTitle: "Editor-chefe",
                                    image: "https://dividai.com/lucas-bianchi.png",
                                },
                                publisher: {
                                    "@type": "Organization",
                                    name: "DividAI",
                                    logo: { "@type": "ImageObject", url: "https://dividai.com/dividai-logo.png" },
                                },
                                datePublished: publishedTime,
                                dateModified: modifiedTime,
                                wordCount: post.content.split(/\s+/).filter(Boolean).length,
                                articleBody: post.content.replace(/[#*\-`]/g, '').substring(0, 5000),
                            },
                            breadcrumbStructuredData,
                            // FAQPage schema — gerado automaticamente a partir de headings com "?"
                            ...(faqs ? [{
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                mainEntity: faqs.map(({ question, answer }) => ({
                                    "@type": "Question",
                                    name: question,
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: answer,
                                    },
                                })),
                            }] : []),
                        ]),
                    }}
                />
            </article>
        </>
    );
}
