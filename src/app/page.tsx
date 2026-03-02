import Link from "next/link";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <>
      <section style={{ textAlign: "center", padding: "4rem 0", borderBottom: "1px solid var(--border)" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", background: "linear-gradient(90deg, #4ade80, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Sua Nova Relação com o Dinheiro
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "600px", margin: "0 auto" }}>
          Descomplique suas finanças com dicas práticas, diretas e feitas sob medida para a realidade do brasileiro.
        </p>
      </section>

      <section style={{ paddingTop: "3rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Últimos Artigos</h2>
        <div className="post-grid">
          {posts.map((post) => (
            <Link href={`/post/${post.slug}`} key={post.slug} className="post-card">
              <span className="post-category">{post.category}</span>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>

              <div className="post-meta" style={{ marginTop: "auto" }}>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
