import { shopItems } from "@/data/shop";
import { ShoppingBag } from "lucide-react";
import ShopCatalog from "@/components/ShopCatalog";

export const metadata = {
  title: 'Recomendações | Blog DividAI',
  description: 'Livros, equipamentos e ferramentas recomendados pelo Blog DividAI para acelerar sua educação financeira e produtividade. Curadoria testada e aprovada.',
  alternates: {
    canonical: 'https://dividai.com/shop',
  },
  openGraph: {
    title: 'Recomendações | Blog DividAI',
    description: 'Livros, equipamentos e ferramentas recomendados pelo Blog DividAI.',
    url: 'https://dividai.com/shop',
    siteName: 'Blog DividAI',
    type: 'website',
  },
};

export default function Shop() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": shopItems.map((item, index) => {
      // Converte "R$ 2.199,00" para "2199.00"
      const numericPrice = item.price
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".")
        .trim();

      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": item.title,
          "description": item.description,
          "image": item.imageUrl,
                      "url": item.affiliateUrl,
            "sku": item.id,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 5.0,
              "reviewCount": 1
            },
          "review": [{
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5.0,
              "bestRating": 5
            },
            "author": {
              "@type": "Organization",
              "name": "Equipe DividAI"
            }
          }],
          "offers": {
            "@type": "Offer",
            "price": numericPrice,
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "url": item.affiliateUrl,
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": numericPrice,
              "priceCurrency": "BRL"
            }
          }
        }
      };
    })
  };

  return (
    <div style={{ padding: "4rem 0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
