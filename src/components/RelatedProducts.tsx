import Link from "next/link";
import { ExternalLink, ShoppingBag } from "lucide-react";
import { shopItems } from "@/data/shop";

interface RelatedProductsProps {
    slug: string;
}

/**
 * Mostra produtos do shop que têm articleSlug igual ao slug do post atual.
 * Aparece no final do post, antes dos posts relacionados.
 * Retorna null se não houver produtos ligados a este post.
 */
export default function RelatedProducts({ slug }: RelatedProductsProps) {
    const products = shopItems.filter((item) => item.articleSlug === slug);

    if (products.length === 0) return null;

    return (
        <section style={{ marginTop: "3rem" }}>
            {/* Header */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
            }}>
                <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(14,165,233,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                }}>
                    <ShoppingBag size={18} color="var(--primary)" />
                </div>
                <div>
                    <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>
                        Recomendações para este tema
                    </h2>
                    <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--muted)" }}>
                        Selecionados pelo Blog DividAI · Links de afiliados
                    </p>
                </div>
            </div>

            {/* Grid de produtos */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "1rem",
            }}>
                {products.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            background: "var(--card-bg)",
                            border: "1px solid var(--border)",
                            borderRadius: "12px",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            transition: "transform 0.2s, border-color 0.2s",
                        }}
                        className="related-product-card"
                    >
                        {/* Imagem */}
                        <div style={{
                            height: "160px",
                            background: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0.75rem",
                        }}>
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>

                        {/* Conteúdo */}
                        <div style={{
                            padding: "0.875rem",
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            gap: "0.5rem",
                        }}>
                            <span style={{
                                fontSize: "0.7rem",
                                color: "var(--primary)",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                            }}>
                                {item.store} · {item.category}
                            </span>

                            <h3 style={{
                                margin: 0,
                                fontSize: "0.9rem",
                                fontWeight: 700,
                                lineHeight: 1.4,
                                color: "var(--foreground)",
                            }}>
                                {item.title}
                            </h3>

                            <p style={{
                                margin: 0,
                                fontSize: "0.8rem",
                                color: "var(--muted)",
                                lineHeight: 1.5,
                                flex: 1,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            } as React.CSSProperties}>
                                {item.description}
                            </p>

                            <a
                                href={item.affiliateUrl}
                                target="_blank"
                                rel="sponsored noopener noreferrer"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.4rem",
                                    padding: "0.55rem 0.75rem",
                                    borderRadius: "8px",
                                    background: "var(--primary)",
                                    color: "#fff",
                                    fontSize: "0.82rem",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    marginTop: "auto",
                                    transition: "opacity 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                                Ver oferta <ExternalLink size={13} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Link para o catálogo completo */}
            <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
                <Link
                    href="/shop"
                    style={{
                        fontSize: "0.85rem",
                        color: "var(--primary)",
                        fontWeight: 600,
                        textDecoration: "none",
                    }}
                >
                    Ver todas as recomendações →
                </Link>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                    .related-product-card:hover {
                        transform: translateY(-3px);
                        border-color: var(--primary);
                    }
                `
            }} />
        </section>
    );
}
