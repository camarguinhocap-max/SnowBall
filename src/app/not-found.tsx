import Link from "next/link";
import { Home, Search, ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
    return (
        <div style={{ 
            minHeight: "70vh", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem"
        }}>
            <div style={{
                backgroundColor: "rgba(2, 132, 199, 0.05)",
                padding: "2rem",
                borderRadius: "50%",
                marginBottom: "2rem",
                color: "var(--primary)"
            }}>
                <AlertCircle size={64} />
            </div>

            <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1rem" }}>
                Oops! Onde foi parar?
            </h1>
            <p style={{ 
                fontSize: "1.2rem", 
                color: "var(--muted)", 
                maxWidth: "500px", 
                marginBottom: "3rem",
                lineHeight: "1.6" 
            }}>
                Parece que esta página não existe mais ou o endereço está incorreto. 
                Não se perca, temos muito conteúdo financeiro para você!
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                <Link href="/" style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "var(--primary)",
                    color: "white",
                    padding: "0.8rem 1.5rem",
                    borderRadius: "12px",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                    textDecoration: "none"
                }}>
                    <Home size={20} />
                    Voltar ao Início
                </Link>
                
                <Link href="/#artigos" style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    padding: "0.8rem 1.5rem",
                    borderRadius: "12px",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                    textDecoration: "none"
                }}>
                    <Search size={20} />
                    Ver Artigos
                </Link>
            </div>

            <div style={{ marginTop: "4rem", borderTop: "1px solid var(--border)", paddingTop: "2rem", width: "100%", maxWidth: "600px" }}>
                <h3 style={{ fontSize: "1rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
                    Tente buscar por um tema:
                </h3>
                {/* Aqui poderíamos ter um componente de busca se disponível no escopo global */}
                <div style={{ padding: "10px", backgroundColor: "var(--background-2)", borderRadius: "var(--radius-md)", fontStyle: "italic", fontSize: "0.9rem" }}>
                    Use a barra de busca no topo do site para encontrar o que precisa.
                </div>
            </div>
        </div>
    );
}
