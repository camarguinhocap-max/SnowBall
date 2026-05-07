import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Portfólio de Criação de Sites | Blog DividAI",
    description: "Criamos sites rápidos, modernos e otimizados para atrair e converter clientes todos os dias. Confira nossos projetos.",
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
        imageDesktop: "/portfolio/proj1-d.png",
        imageMobile: "/portfolio/proj1-m.png",
        tags: ["Blog / Portal", "Educação Financeira", "SEO Otimizado"]
    },
    {
        name: "ClickDreams (Ofertas Prime)",
        url: "https://clickdreams.netlify.app",
        description: "Landing page de alta conversão para promoções e ofertas exclusivas.",
        domain: "clickdreams.netlify.app",
        imageDesktop: "/portfolio/proj2-d.png",
        imageMobile: "/portfolio/proj2-m.png",
        tags: ["Alta Conversão", "Landing Page", "Copywriting"]
    },
    {
        name: "PB Oficina de Beleza",
        url: "https://pboficinadebeleza.com.br/",
        description: "Site institucional para salão de beleza e estética.",
        domain: "pboficinadebeleza.com.br",
        imageDesktop: "/portfolio/proj3-d.png",
        imageMobile: "/portfolio/proj3-m.png",
        tags: ["Site Institucional", "Design Premium", "Agendamentos"]
    },
    {
        name: "Toque de Carinho",
        url: "https://toquedecarinhosenior.com.br/",
        description: "Casa de repouso e cuidados para idosos.",
        domain: "toquedecarinhosenior.com.br",
        imageDesktop: "/portfolio/proj4-d.png",
        imageMobile: "/portfolio/proj4-m.png",
        tags: ["Institucional", "Alta Confiança", "Acessibilidade"]
    },
    {
        name: "Morit Seguros",
        url: "https://moritseguros.netlify.app/",
        description: "Corretora de seguros focada em proteção familiar e patrimonial.",
        domain: "moritseguros.netlify.app",
        imageDesktop: "/portfolio/proj5-d.png",
        imageMobile: "/portfolio/proj5-m.png",
        tags: ["Corretora", "Geração de Leads", "SEO Otimizado"]
    },
];

export default function PortfolioPage() {
    return (
        <div className="portfolio-page" style={{ padding: "4rem 0" }}>
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeUpAnim {
                    0% {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .portfolio-card-animated {
                    opacity: 0;
                    animation: fadeUpAnim 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .tag-chip {
                    display: inline-block;
                    padding: 0.25rem 0.6rem;
                    background-color: var(--background-3);
                    color: var(--text-muted);
                    border-radius: 999px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    border: 1px solid var(--border);
                }
            `}} />

            <div className="section-header" style={{ textAlign: "center", marginBottom: "4rem" }}>
                <div style={{ display: "inline-block", padding: "0.4rem 1rem", backgroundColor: "var(--primary)", color: "white", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.5rem" }}>
                    Criação de Sites & Landing Pages
                </div>
                <h1 className="hero-title" style={{ marginBottom: "1.5rem", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
                    Tire o seu negócio da <br className="hidden sm:block" />
                    <span style={{ color: "var(--primary)" }}>invisibilidade digital.</span>
                </h1>
                <p className="hero-subtitle" style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.6 }}>
                    Criamos sites rápidos, modernos e otimizados para atrair e converter clientes todos os dias. 
                    Confira nosso trabalho abaixo:
                </p>
            </div>

            <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
                gap: "2.5rem",
                marginBottom: "5rem"
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
                            animationDelay: `${index * 0.15}s`
                        }}
                        className="portfolio-card portfolio-card-animated"
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
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1rem" }}>
                                {project.description}
                            </p>
                            
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem", flex: 1, alignContent: "flex-start" }}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag-chip">{tag}</span>
                                ))}
                            </div>

                            <div style={{
                                color: "var(--primary)",
                                fontSize: "0.9rem",
                                fontWeight: 600,
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                marginTop: "auto"
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
                borderRadius: "1.5rem",
                padding: "4rem 2rem",
                textAlign: "center",
                border: "1px solid var(--border)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                backgroundImage: "linear-gradient(to bottom right, var(--background-2), var(--card-bg))"
            }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
                    Gostou do que viu?
                </h2>
                <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem auto", fontSize: "1.1rem", lineHeight: 1.6 }}>
                    Transforme visitantes em clientes com um site profissional, moderno e de alta performance. 
                    Nós cuidamos de toda a parte técnica, design e otimização SEO para você.
                </p>
                
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <a 
                        href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento%20para%20um%20site" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn" 
                        style={{ 
                            fontSize: "1.05rem", 
                            padding: "0.8rem 2rem", 
                            backgroundColor: "#25D366", 
                            color: "white", 
                            border: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontWeight: 600,
                            borderRadius: "0.5rem",
                            boxShadow: "0 4px 6px rgba(37, 211, 102, 0.3)"
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        Orçamento pelo WhatsApp
                    </a>
                    
                    <Link href="/contato" className="btn btn-outline" style={{ fontSize: "1.05rem", padding: "0.8rem 2rem" }}>
                        Enviar um E-mail
                    </Link>
                </div>
                <div style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-muted)", opacity: 0.7 }}>
                    Sem compromisso. Resposta rápida garantida.
                </div>
            </div>
        </div>
    );
}
