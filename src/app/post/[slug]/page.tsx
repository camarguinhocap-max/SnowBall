import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVisiblePosts, parsePostDate, getAllPosts, isPublished } from "@/lib/posts";
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

function createHeadingId(children: unknown) {
    return String(children)
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

const markdownComponents = {
    img: ({ src, alt }: any) => (
        <ImageWithModal src={typeof src === "string" ? src : undefined} alt={alt} />
    ),
    h1: ({ children }: any) => <h1 id={createHeadingId(children)}>{children}</h1>,
    h2: ({ children }: any) => <h2 id={createHeadingId(children)}>{children}</h2>,
    h3: ({ children }: any) => <h3 id={createHeadingId(children)}>{children}</h3>,
    h4: ({ children }: any) => <h4 id={createHeadingId(children)}>{children}</h4>,
    h5: ({ children }: any) => <h5 id={createHeadingId(children)}>{children}</h5>,
    h6: ({ children }: any) => <h6 id={createHeadingId(children)}>{children}</h6>,
};

function splitPostContent(content: string) {
    const trimmed = content.trim();
    const sections = trimmed.split(/(?=^#{1,6}\s)/gm).filter(Boolean);

    if (sections.length < 4) {
        return {
            primaryContent: trimmed,
            secondaryContent: "",
        };
    }

    const splitIndex = Math.ceil(sections.length / 2);

    return {
        primaryContent: sections.slice(0, splitIndex).join("\n\n"),
        secondaryContent: sections.slice(splitIndex).join("\n\n"),
    };
}

export const dynamicParams = true;

export function generateStaticParams() {
    return getVisiblePosts().slice(0, 20).map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = getAllPosts().find((item) => item.slug === params.slug);

    if (!post) {
        return {
            title: "Artigo não encontrado | DividAI",
        };
    }

    const url = `https://dividai.com/post/${post.slug}`;
    const imageUrl = `${url}/opengraph-image`;
    const publishedTime = parsePostDate(post.date).toISOString();

    return {
        title: `${post.title} | Blog DividAI`,
        description: post.excerpt,
        keywords: [post.category, "DividAI", "blog", "finanças", ...post.tags].join(", "),
        authors: [{ name: "DividAI" }],
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url,
            siteName: "Blog DividAI",
            type: "article",
            publishedTime,
            modifiedTime: publishedTime,
            authors: ["DividAI"],
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                    type: "image/png",
                },
            ],
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

export const revalidate = 3600;

export default async function Post(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = getAllPosts().find((item) => item.slug === params.slug);

    if (!post || !isPublished(post)) {
        notFound();
    }

    const publishedTime = parsePostDate(post.date).toISOString();
    const articleUrl = `https://dividai.com/post/${post.slug}`;
    const imageUrl = `${articleUrl}/opengraph-image`;
    const { primaryContent, secondaryContent } = splitPostContent(post.content);
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Início",
                item: "https://dividai.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: post.title,
                item: articleUrl,
            },
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
                                <span key={tag} className="article-tag">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="article-meta">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <ReadingTime readTime={post.readTime} />
                    </div>
                </header>

                <div className="article-content">
                    <TableOfContents content={post.content} />

                    <AdSlot slot="post_top" format="horizontal" />

                    <ReactMarkdown components={markdownComponents}>{primaryContent}</ReactMarkdown>

                    {secondaryContent && (
                        <ReactMarkdown components={markdownComponents}>{secondaryContent}</ReactMarkdown>
                    )}

                    <AdSlot slot="post_bottom" format="auto" />

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
                                mainEntityOfPage: {
                                    "@type": "WebPage",
                                    "@id": articleUrl,
                                },
                                url: articleUrl,
                                image: [imageUrl],
                                articleSection: post.category,
                                keywords: post.tags.join(", "),
                                inLanguage: "pt-BR",
                                author: {
                                    "@type": "Person",
                                    name: "Lucas Bianchi",
                                    url: "https://dividai.com/sobre",
                                    jobTitle: "Editor-chefe",
                                    image: "https://dividai.com/lucas-bianchi.png"
                                },
                                publisher: {
                                    "@type": "Organization",
                                    name: "DividAI",
                                    logo: {
                                        "@type": "ImageObject",
                                        url: "https://dividai.com/logo.png",
                                    },
                                },
                                datePublished: publishedTime,
                                dateModified: publishedTime,
                                articleBody: post.content.replace(/[#*\-`]/g, '').substring(0, 5000),
                            },
                            breadcrumbStructuredData,
                        ]),
                    }}
                />
            </article>
        </>
    );
}
