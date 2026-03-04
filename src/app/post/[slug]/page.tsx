import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import ImageWithModal from "@/components/ImageWithModal";
import ShareButtons from "@/components/ShareButtons";

export function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Post(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article style={{ maxWidth: "800px", margin: "4rem auto 0 auto" }}>
            <header className="article-header">
                <span className="post-category" style={{ fontSize: "1rem" }}>{post.category}</span>
                <h1 className="article-title">{post.title}</h1>

                <div className="article-meta">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>
            </header>

            <div className="article-content">
                <ReactMarkdown
                    components={{
                        img: (props) => (
                            <ImageWithModal src={props.src as string} alt={props.alt} />
                        ),
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </div>

            <ShareButtons title={post.title} slug={post.slug} />
        </article>
    );
}
