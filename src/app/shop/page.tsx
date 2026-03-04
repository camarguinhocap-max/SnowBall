import { shopItems } from "@/data/shop";
import { ShoppingBag } from "lucide-react";
import ShopCatalog from "@/components/ShopCatalog";

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

      <ShopCatalog items={shopItems} />
    </div>
  );
}
