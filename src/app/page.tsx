import Link from "next/link";
import { posts } from "@/data/posts";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  // Sort posts showing the newest/last one first
  const reversedPosts = [...posts].reverse();
  const featuredPost = reversedPosts[0];
  const otherPosts = reversedPosts.slice(1);

  return (
    <>
      <section style={{ textAlign: "center", padding: "4rem 0", borderBottom: "1px solid var(--border)" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", background: "linear-gradient(90deg, #818cf8, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Sua Nova Relação com o Dinheiro
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "600px", margin: "0 auto" }}>
          Descomplique suas finanças com dicas práticas, diretas e feitas sob medida para a realidade do brasileiro.
        </p>
      </section>

      <div className="main-layout">
        <main className="content-area">
          <section>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--muted)" }}>Destaque</h2>
            <Link href={`/post/${featuredPost.slug}`} className="featured-post">
              <span className="post-category" style={{ fontSize: "0.85rem", marginBottom: "1rem", display: "inline-block" }}>
                {featuredPost.category}
              </span>
              <h2 className="featured-title">{featuredPost.title}</h2>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>

              <div className="post-meta" style={{ margin: 0, color: "#a1a1aa" }}>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
            </Link>
          </section>

          <section style={{ paddingTop: "1rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Últimos Artigos</h2>
            <div className="post-grid" style={{ marginTop: "1.5rem" }}>
              {otherPosts.map((post) => (
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
        </main>

        <aside className="sidebar">
          <div className="widget">
            <h3 className="widget-title">Sobre o Blog</h3>
            <p className="widget-text">
              Criado através do sistema inteligente da <strong>DividAI</strong>, nossa missão é democratizar a educação financeira no Brasil com transparência e inovação.
            </p>
          </div>

          <div className="widget">
            <h3 className="widget-title">Categorias</h3>
            <ul className="category-list">
              <li><Link href="/" className="category-item"><span>Finanças Pessoais</span> <span>(2)</span></Link></li>
              <li><Link href="/" className="category-item"><span>Renda Extra</span> <span>(1)</span></Link></li>
              <li><Link href="/" className="category-item"><span>Investimentos</span> <span>(1)</span></Link></li>
              <li><Link href="/" className="category-item"><span>Empreendedorismo</span> <span>(0)</span></Link></li>
            </ul>
          </div>

          <div className="widget">
            <h3 className="widget-title">Assine Nossa Newsletter</h3>
            <p className="widget-text">
              Receba dicas de ouro de graça diretamente no seu e-mail toda semana.
            </p>
            <NewsletterForm />
            <p style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.75rem", textAlign: "center", marginBottom: 0 }}>
              Nunca enviamos spam. Respeitamos a sua privacidade.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
