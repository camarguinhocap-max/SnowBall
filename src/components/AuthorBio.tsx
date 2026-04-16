export default function AuthorBio() {
    return (
        <div style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "1.5rem",
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem"
        }}>
            <img 
                src="/dividai-logo.png" 
                alt="DividAI Logo"
                style={{
                    width: "80px",
                    height: "80px",
                    minWidth: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid var(--primary)",
                    boxShadow: "0 4px 12px rgba(14, 165, 233, 0.3)"
                }}
            />
            
            <div style={{ flex: 1 }}>
                <h3 style={{
                    margin: "0 0 0.5rem 0",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "var(--foreground)"
                }}>
                    Sobre o DividAI
                </h3>
                <p style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    color: "var(--muted)",
                    lineHeight: 1.5
                }}>
                    Compartilhamos estratégias, análises de ações, educação financeira 
                    e dicas prontas para a realidade do brasileiro. Nosso foco é 
                    ajudar a construir independência e inteligência financeira.
                </p>
                <div style={{
                    marginTop: "0.75rem",
                    display: "flex",
                    gap: "1rem",
                    fontSize: "0.9rem"
                }}>
                    <a href="https://twitter.com/dividai" target="_blank" rel="noopener noreferrer" 
                        style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 500 }}>
                        X →
                    </a>
                    <a href="https://t.me/DividAI_News" target="_blank" rel="noopener noreferrer" 
                        style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 500 }}>
                        Telegram →
                    </a>
                </div>
            </div>
        </div>
    );
}
