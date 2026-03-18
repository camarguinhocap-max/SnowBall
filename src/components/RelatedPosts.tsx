import { getVisiblePosts, parsePostDate } from "@/lib/posts";
import PostCardImage from "@/components/PostCardImage";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

interface RelatedPostsProps {
    currentSlug: string;
    category: string;
    tags: string[];
}

function normalizeTerm(value: string) {
    return value.trim().toLowerCase();
}

export default function RelatedPosts({ currentSlug, category, tags }: RelatedPostsProps) {
    const currentTags = new Set(tags.map(normalizeTerm));

    const relatedPosts = getVisiblePosts()
        .filter((post) => post.slug !== currentSlug)
        .map((post) => {
            const sharedTags = post.tags.filter((tag) => currentTags.has(normalizeTerm(tag))).length;
            const sameCategory = post.category === category;

            let score = 0;

            if (sameCategory) {
                score += 4;
            }

            score += sharedTags * 6;
            score += Math.min(post.views || 0, 1200) / 400;

            return { post, score, sharedTags };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }

            return parsePostDate(b.post.date).getTime() - parsePostDate(a.post.date).getTime();
        })
        .slice(0, 4);

    if (relatedPosts.length === 0) {
        return null;
    }

    return (
        <section className="related-posts">
            <div className="related-posts__header">
                <h2 className="related-posts__title">Voce tambem pode gostar</h2>
                <p className="related-posts__subtitle">
                    Sugestoes baseadas em categoria e temas em comum com este artigo.
                </p>
            </div>

            <div className="related-posts__grid">
                {relatedPosts.map(({ post, sharedTags }, index) => (
                    <ScrollReveal key={post.slug} delay={index * 70} style={{ height: "100%" }}>
                        <Link href={`/post/${post.slug}`} className="post-card related-post-card">
                            <PostCardImage slug={post.slug} title={post.title} />

                            <div className="post-card-body">
                                <div className="related-post-card__meta">
                                    <span className="post-category">{post.category}</span>
                                    {sharedTags > 0 && (
                                        <span className="related-post-card__match">
                                            {sharedTags} tag{sharedTags > 1 ? "s" : ""} em comum
                                        </span>
                                    )}
                                </div>

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
    );
}
