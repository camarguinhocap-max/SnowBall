"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ExternalLink, ShieldCheck, Filter } from "lucide-react";
import type { ShopItem } from "@/data/shop";

interface ShopCatalogProps {
    items: ShopItem[];
}

export default function ShopCatalog({ items }: ShopCatalogProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
    const [selectedStore, setSelectedStore] = useState<string>("Todas");

    // Derive unique categories and stores
    const categories = ["Todas", ...Array.from(new Set(items.map((i) => i.category)))];
    const stores = ["Todas", ...Array.from(new Set(items.map((i) => i.store)))];

    const filteredItems = items.filter((item) => {
        const matchCategory = selectedCategory === "Todas" || item.category === selectedCategory;
        const matchStore = selectedStore === "Todas" || item.store === selectedStore;
        return matchCategory && matchStore;
    });

    return (
        <>
            <div style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.4)", padding: "1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", color: "var(--foreground)" }}>
                <ShieldCheck size={24} color="#10b981" style={{ flexShrink: 0 }} />
                <p style={{ margin: 0, fontSize: "0.95rem" }}>
                    <strong>Segurança Garantida:</strong> Todos os links desta página são parcerias oficiais do <strong>Blog DividAI</strong>. Ao clicar em "Ver Oferta", você será redirecionado para os aplicativos e sites originais e absolutamente seguros das lojas (Amazon, Mercado Livre, Shopee). Nós recebemos uma comissão sem qualquer custo adicional para você!
                </p>
            </div>

            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginBottom: "2rem", padding: "1rem", background: "var(--card)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Filter size={18} color="var(--primary)" />
                    <strong style={{ marginRight: "0.5rem" }}>Filtrar por Etapa:</strong>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.9rem", color: "var(--muted)", fontWeight: "bold" }}>Categoria</label>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    padding: "0.4rem 1rem",
                                    borderRadius: "20px",
                                    fontSize: "0.85rem",
                                    cursor: "pointer",
                                    border: selectedCategory === cat ? "1px solid var(--primary)" : "1px solid var(--border)",
                                    background: selectedCategory === cat ? "var(--primary)" : "transparent",
                                    color: selectedCategory === cat ? "#fff" : "var(--foreground)",
                                    transition: "all 0.2s"
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.9rem", color: "var(--muted)", fontWeight: "bold" }}>Loja Oficial</label>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {stores.map((store) => (
                            <button
                                key={store}
                                onClick={() => setSelectedStore(store)}
                                style={{
                                    padding: "0.4rem 1rem",
                                    borderRadius: "20px",
                                    fontSize: "0.85rem",
                                    cursor: "pointer",
                                    border: selectedStore === store ? "1px solid #10b981" : "1px solid var(--border)",
                                    background: selectedStore === store ? "#10b981" : "transparent",
                                    color: selectedStore === store ? "#111" : "var(--foreground)",
                                    transition: "all 0.2s"
                                }}
                            >
                                {store}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "2rem"
            }}>
                {filteredItems.length === 0 ? (
                    <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "var(--muted)" }}>
                        Nenhum item encontrado com esses filtros.
                    </div>
                ) : (
                    filteredItems.map((item) => (
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
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                                    <span style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: "bold", textTransform: "uppercase" }}>
                                        Na {item.store}
                                    </span>
                                    <span style={{ fontSize: "0.75rem", background: "var(--border)", padding: "0.2rem 0.6rem", borderRadius: "10px", color: "var(--muted)" }}>
                                        {item.category}
                                    </span>
                                </div>

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
                                        <Link href={`/post/${item.articleSlug}`} className="btn btn-secondary" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", padding: "0.6rem" }}>
                                            Ler artigo relacionado <ChevronRight size={16} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .shop-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
          border-color: var(--primary);
        }
      `}} />
        </>
    );
}
