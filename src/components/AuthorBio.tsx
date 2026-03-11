export default function AuthorBio() {
    return (
        <div style={{
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "1.5rem",
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem"
        }}>
            <div style={{
                width: "80px",
                height: "80px",
                minWidth: "80px",
                backgroundColor: "var(--primary)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "2rem",
                fontWeight: "bold"
            }}>
                💰
            </div>
            
            <div style={{ flex: 1 }}>
                <h3 style={{
                    margin: "0 0 0.5rem 0",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "var(--text)"
                }}>
                    Sobre a DividAI
                </h3>
                <p style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5
                }}>
                    Somos uma comunidade dedicada a levar educação financeira de qualidade para brasileiros
                    que querem sair das dívidas e começar a construir riqueza. Acreditamos que finanças não 
                    precisa ser complicado.
                </p>
                <div style={{
                    marginTop: "0.75rem",
                    display: "flex",
                    gap: "1rem",
                    fontSize: "0.9rem"
                }}>
                    <a href="https://twitter.com/dividai" target="_blank" rel="noopener noreferrer" 
                        style={{ color: "var(--primary)", textDecoration: "none" }}>
                        X →
                    </a>
                    <a href="https://t.me/DividAI_News" target="_blank" rel="noopener noreferrer" 
                        style={{ color: "var(--primary)", textDecoration: "none" }}>
                        Telegram →
                    </a>
                </div>
            </div>
        </div>
    );
}
