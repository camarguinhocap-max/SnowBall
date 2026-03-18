import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import { parsePostDate } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import ImageWithModal from "@/components/ImageWithModal";
import ShareButtons from "@/components/ShareButtons";
import RelatedPosts from "@/components/RelatedPosts";
import AuthorBio from "@/components/AuthorBio";
import InvestmentDisclaimer from "@/components/InvestmentDisclaimer";
import TableOfContents from "@/components/TableOfContents";
import ReadingTime from "@/components/ReadingTime";

// Não geramos params estáticos para que o servidor possa
// lidar com posts futuros dinamicamente. A própria lógica de
// `isPublished` no componente retornará 404 para datas que
// ainda não chegaram, mas assim que o dia mudar a página
// estará disponível sem necessidade de rebuild.

export const dynamic = 'force-dynamic';

// export function generateStaticParams() {
//     // só gerar rotas para os artigos já publicados
//     const visible = getVisiblePosts();
//     return visible.map((post) => ({
//         slug: post.slug,
//     }));
// }

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: 'Artigo não encontrado | DividAI'
        };
    }

    // Constrói o link absoluto
    const url = `https://blog.dividai.com/post/${post.slug}`;
    const imageUrl = `${url}/opengraph-image`;

    return {
        title: `${post.title} | Blog DividAI`,
        description: post.excerpt,
        keywords: `${post.category}, DividAI, blog, finanças`, 
        authors: [{ name: 'DividAI' }],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: url,
            siteName: 'Blog DividAI',
            type: 'article',
            publishedTime: post.date,
            authors: ['DividAI'],
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                    type: 'image/png',
                }
            ],
            tags: [post.category, ...post.tags],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [imageUrl],
            creator: '@DividAI',
            site: '@DividAI',
        },
    };
}

// Regenera cada 24h para que posts com data atingida possam ser disponibilizados sem redeploy.
export const revalidate = 86400;

export default async function Post(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    // se existe mas ainda não atingiu a data, 404 também
    const postDate = parsePostDate(post.date);
    const today = new Date();
    if (postDate.setHours(0,0,0,0) > today.setHours(0,0,0,0)) {
        notFound();
    }

    return (
        <article style={{ maxWidth: "800px", margin: "4rem auto 0 auto" }}>
            <header className="article-header">
                <span className="post-category" style={{ fontSize: "1rem" }}>{post.category}</span>
                <h1 className="article-title">{post.title}</h1>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                    {post.tags.map(tag => (
                        <span key={tag} style={{ fontSize: "0.75rem", background: "var(--accent-glow)", padding: "0.2rem 0.5rem", borderRadius: "4px", color: "var(--primary)" }}>#{tag}</span>
                    ))}
                </div>

                <div className="article-meta">
                    <span>{post.date}</span>
                    <span>•</span>
                    <ReadingTime readTime={post.readTime} />
                </div>
            </header>

            <div className="article-content">
                <TableOfContents content={post.content} />
                
                <ReactMarkdown
                    components={{
                        img: (props) => (
                            <ImageWithModal src={props.src as string} alt={props.alt} />
                        ),
                        h1: ({ children }) => {
                            const id = String(children)
                                .toLowerCase()
                                .replace(/[^\w\s-]/g, '')
                                .replace(/\s+/g, '-')
                                .replace(/-+/g, '-');
                            return <h1 id={id}>{children}</h1>;
                        },
                        h2: ({ children }) => {
                            const id = String(children)
                                .toLowerCase()
                                .replace(/[^\w\s-]/g, '')
                                .replace(/\s+/g, '-')
                                .replace(/-+/g, '-');
                            return <h2 id={id}>{children}</h2>;
                        },
                        h3: ({ children }) => {
                            const id = String(children)
                                .toLowerCase()
                                .replace(/[^\w\s-]/g, '')
                                .replace(/\s+/g, '-')
                                .replace(/-+/g, '-');
                            return <h3 id={id}>{children}</h3>;
                        },
                        h4: ({ children }) => {
                            const id = String(children)
                                .toLowerCase()
                                .replace(/[^\w\s-]/g, '')
                                .replace(/\s+/g, '-')
                                .replace(/-+/g, '-');
                            return <h4 id={id}>{children}</h4>;
                        },
                        h5: ({ children }) => {
                            const id = String(children)
                                .toLowerCase()
                                .replace(/[^\w\s-]/g, '')
                                .replace(/\s+/g, '-')
                                .replace(/-+/g, '-');
                            return <h5 id={id}>{children}</h5>;
                        },
                        h6: ({ children }) => {
                            const id = String(children)
                                .toLowerCase()
                                .replace(/[^\w\s-]/g, '')
                                .replace(/\s+/g, '-')
                                .replace(/-+/g, '-');
                            return <h6 id={id}>{children}</h6>;
                        },
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </div>

            {post.category === 'Investimentos' && <InvestmentDisclaimer />}

            <ShareButtons title={post.title} slug={post.slug} />

            <AuthorBio />

            <RelatedPosts currentSlug={post.slug} category={post.category} />

            {/* Schema.org estruturado para artigos (SEO e E-E-A-T) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: post.title,
                        description: post.excerpt,
                        author: {
                            "@type": "Organization",
                            name: "Equipe DividAI",
                            url: "https://blog.dividai.com"
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "DividAI",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://blog.dividai.com/logo.png"
                            }
                        },
                        datePublished: post.date, // Idealmente ISO format (ex: 2026-03-05T12:00:00Z)
                    })
                }}
            />
        </article>
    );
}
