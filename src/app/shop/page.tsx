import { shopItems } from "@/data/shop";
import Link from "next/link";
import { ShoppingBag, ChevronRight, ExternalLink } from "lucide-react";

export const metadata = {
    title: 'Catálogo de Recomendações | Blog DividAI',
    description: 'Nossas sugestões de livros, equipamentos e ferramentas para alavancar sua educação financeira e produtividade.',
};

export default function Shop() {
    return (
    <div style={{ padding: "4rem 0" }}>
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          <ShoppingBag size={40} style={{ display: "inline-block", verticalAlign: "middle", marginRight: "0.5rem", color: "var(--primary)" }} />
          Nossas Recomendações
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: "800px", margin: "0 auto" }}>
          Ferramentas, livros e acessórios que a equipe <strong>DividAI</strong> testou e aprova para acelerar sua produtividade e inteligência financeira.
        </p>
      </header>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "2rem",
        marginTop: "2rem"
      }}>
        {shopItems.map((item) => (
          <div key={item.id} style={{
            background: "var(--card)",
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.2s, box-shadow 0.2s"
          }} 
          className="shop-card"
          >
            <div style={{ height: "250px", width: "100%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
              <img src={item.imageUrl} alt={item.title} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
            </div>
            
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <span style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: "bold", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Comprar na {item.store}
              </span>
              
              <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{item.title}</h2>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>
                {item.description}
              </p>
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.3rem", fontWeight: "bold", color: "var(--foreground)" }}>{item.price}</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a href={item.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
                  Ver Oferta <ExternalLink size={16} />
                </a>
                
                {item.articleSlug && (
                  <Link href={\`/post/\${item.articleSlug}\`} className="btn btn-secondary" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", padding: "0.6rem" }}>
                    Ler artigo relacionado <ChevronRight size={16} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: \`
        .shop-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
          border-color: var(--primary);
        }
      \`}} />
    </div>
  );
}
