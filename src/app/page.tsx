import Link from "next/link";
import { posts } from "@/data/posts";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  // Ordenar os posts mais lidos (top views) para o destaque
  const sortedByViews = [...posts].sort((a, b) => (b.views || 0) - (a.views || 0));
  const featuredPost = sortedByViews[0];

  // Os outros posts organizados por ordem cronológica (mais recentes primeiro)
  // Mas precisamos excluir o post que já está no destaque para não repetir
  const otherPosts = [...posts]
    .filter(p => p.slug !== featuredPost.slug)
    .reverse();

  // Derive categories and counts dynamically
  const categoryCounts = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

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
            <h3 className="widget-title">Sobre a DividAI</h3>
            <div className="widget-text" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ marginBottom: 0 }}>
                Este blog é a central de educação da <strong>DividAI</strong>, o ecossistema inteligente de gestão de investimentos e controle patrimonial mais inovador do Brasil.
              </p>
              <p style={{ marginBottom: 0 }}>
                Nossa missão não para na leitura. Leve a gestão do seu dinheiro para o próximo nível com a nossa inteligência artificial:
              </p>
              <Link href="https://dividai.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textAlign: "center", width: "100%", padding: "0.75rem", fontSize: "0.95rem", marginTop: "0.5rem" }}>
                Conhecer a Plataforma
              </Link>
            </div>
          </div>

          <div className="widget">
            <h3 className="widget-title">Categorias</h3>
            <ul className="category-list">
              {Object.entries(categoryCounts).map(([cat, count]) => (
                <li key={cat}>
                  <Link href="/" className="category-item">
                    <span>{cat}</span> <span>({count})</span>
                  </Link>
                </li>
              ))}
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
