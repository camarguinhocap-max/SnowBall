import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Portfólio de Criação de Sites | Blog DividAI",
    description: "Conheça nossos serviços de criação de sites profissionais e landing pages de alta conversão.",
    alternates: {
        canonical: "https://dividai.com/portfolio",
    },
};

const projects = [
    {
        name: "DividAI",
        url: "https://dividai.com",
        description: "Blog focado em educação financeira e investimentos.",
        domain: "dividai.com",
        imageDesktop: "/portfolio/dividai-desktop.png",
        imageMobile: "/portfolio/dividai-mobile.png"
    },
    {
        name: "ClickDreams (Ofertas Prime)",
        url: "https://clickdreams.netlify.app",
        description: "Landing page de alta conversão para promoções e ofertas exclusivas.",
        domain: "clickdreams.netlify.app",
        imageDesktop: "/portfolio/clickdreams-desktop.png",
        imageMobile: "/portfolio/clickdreams-mobile.png"
    },
    {
        name: "PB Oficina de Beleza",
        url: "https://pboficinadebeleza.com.br/",
        description: "Site institucional para salão de beleza e estética.",
        domain: "pboficinadebeleza.com.br",
        imageDesktop: "/portfolio/pboficina-desktop.png",
        imageMobile: "/portfolio/pboficina-mobile.png"
    },
    {
        name: "Toque de Carinho",
        url: "https://toquedecarinhosenior.com.br/",
        description: "Casa de repouso e cuidados para idosos.",
        domain: "toquedecarinhosenior.com.br",
        imageDesktop: "/portfolio/toquedecarinho-desktop.png",
        imageMobile: "/portfolio/toquedecarinho-mobile.png"
    },
    {
        name: "Morit Seguros",
        url: "https://moritseguros.netlify.app/",
        description: "Corretora de seguros focada em proteção familiar e patrimonial.",
        domain: "moritseguros.netlify.app",
        imageDesktop: "/portfolio/moritseguros-desktop.png",
        imageMobile: "/portfolio/moritseguros-mobile.png"
    },
];

export default function PortfolioPage() {
    return (
        <div className="portfolio-page" style={{ padding: "4rem 0" }}>
            <div className="section-header" style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h1 className="hero-title" style={{ marginBottom: "1rem" }}>Nosso Portfólio</h1>
                <p className="hero-subtitle" style={{ maxWidth: "800px", margin: "0 auto" }}>
                    Criamos sites rápidos, modernos e otimizados para atrair mais clientes para o seu negócio. 
                    Confira alguns dos projetos que já desenvolvemos.
                </p>
            </div>

            <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
                gap: "2rem",
                marginBottom: "4rem"
            }}>
                {projects.map((project, index) => (
                    <a 
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "var(--card-bg)",
                            borderRadius: "1rem",
                            overflow: "hidden",
                            border: "1px solid var(--border)",
                            transition: "all 0.3s ease",
                            textDecoration: "none",
                            color: "inherit",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        }}
                        className="portfolio-card"
                    >
                        <div style={{
                            width: "100%",
                            height: "220px",
                            backgroundColor: "var(--background-3)",
                            borderBottom: "1px solid var(--border)",
                            position: "relative",
                            overflow: "hidden"
                        }}>
                            {project.imageDesktop ? (
                                <div className="portfolio-mockup-container">
                                    <div className="mockup-desktop">
                                        <img src={project.imageDesktop} alt={`Desktop view of ${project.name}`} />
                                    </div>
                                    {project.imageMobile && (
                                        <div className="mockup-mobile">
                                            <img src={project.imageMobile} alt={`Mobile view of ${project.name}`} />
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div style={{ textAlign: "center", padding: "1rem", color: "var(--text-muted)", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "0.5rem", opacity: 0.5 }}>
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                        <line x1="8" y1="21" x2="16" y2="21"></line>
                                        <line x1="12" y1="17" x2="12" y2="21"></line>
                                    </svg>
                                    <div style={{ fontSize: "0.9rem" }}>Preview do Site</div>
                                    <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>(Aguardando imagens...)</div>
                                </div>
                            )}
                        </div>
                        <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>{project.name}</h2>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1.5rem", flex: 1 }}>
                                {project.description}
                            </p>
                            <div style={{
                                color: "var(--primary)",
                                fontSize: "0.9rem",
                                fontWeight: 600,
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem"
                            }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                Acessar Site
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div style={{
                backgroundColor: "var(--card-bg)",
                borderRadius: "1rem",
                padding: "3rem 2rem",
                textAlign: "center",
                border: "1px solid var(--border)",
            }}>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>
                    Precisa de um site moderno e que traga resultados?
                </h2>
                <p style={{ color: "var(--text-muted)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem auto", fontSize: "1.05rem" }}>
                    Nós cuidamos de toda a parte técnica, design e otimização para que você possa focar no que importa: o seu negócio.
                </p>
                <Link href="/contato" className="btn btn-primary" style={{ fontSize: "1.1rem", padding: "0.8rem 2rem" }}>
                    Solicitar um Orçamento sem Compromisso
                </Link>
            </div>
        </div>
    );
}
