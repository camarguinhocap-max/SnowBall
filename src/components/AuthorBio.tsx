import Image from "next/image";

export default function AuthorBio() {
    return (
        <div style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "2rem",
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            boxShadow: "var(--shadow-card)",
            position: "relative",
            overflow: "hidden"
        }}>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "4px",
                height: "100%",
                backgroundColor: "var(--primary)"
            }} />
            
            <Image 
                src="/lucas-bianchi.png" 
                alt="Lucas Bianchi - Editor Chefe DividAI"
                width={100}
                height={100}
                style={{
                    borderRadius: "20px",
                    objectFit: "cover",
                    border: "1px solid var(--border)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                }}
            />
            
            <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <h3 style={{
                        margin: 0,
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "var(--foreground)"
                    }}>
                        Lucas Bianchi
                    </h3>
                    <span style={{
                        fontSize: "0.75rem",
                        backgroundColor: "rgba(2, 132, 199, 0.1)",
                        color: "var(--primary)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "20px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px"
                    }}>
                        Editor-chefe
                    </span>
                </div>
                <p style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    color: "var(--foreground-2)",
                    lineHeight: 1.6
                }}>
                    Analista financeiro especialista em renda passiva e dividendos. Dedicado a ajudar investidores brasileiros a alcançarem a liberdade financeira com foco em estratégias sólidas de Value Investing e educação prática.
                </p>
                <div style={{
                    marginTop: "1rem",
                    display: "flex",
                    gap: "1.25rem",
                    fontSize: "0.9rem"
                }}>
                    <a href="https://twitter.com/dividai" target="_blank" rel="noopener noreferrer" 
                        style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        X (Twitter)
                    </a>
                    <a href="https://t.me/DividAI_News" target="_blank" rel="noopener noreferrer" 
                        style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        Telegram
                    </a>
                </div>
            </div>
        </div>
    );
}
