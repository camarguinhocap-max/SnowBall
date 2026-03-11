"use client";

import { useState } from "react";
import { subscribeNewsletter } from "@/actions/newsletter";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    async function handleSubscribe(e: React.FormEvent) {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        setMessage(null);

        const result = await subscribeNewsletter(email);

        if (result.success) {
            setMessage({ type: "success", text: "✓ E-mail confirmado! Bem-vindo à comunidade DividAI" });
            setEmail("");
        } else {
            setMessage({ type: "error", text: result.error || "Ocorreu um erro. Tente novamente." });
        }

        setLoading(false);
    }

    return (
        <div className="newsletter-container" style={{
            backgroundColor: "var(--bg-secondary)",
            borderRadius: "12px",
            padding: "2rem",
            border: "1px solid var(--border)",
            maxWidth: "500px",
            margin: "2rem auto"
        }}>
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                <div style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "var(--primary-light)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem"
                }}>
                    <Mail size={24} color="var(--primary)" />
                </div>
                <h2 style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                    color: "var(--text)"
                }}>
                    Quer aprender sobre Finanças?
                </h2>
                <p style={{
                    fontSize: "0.95rem",
                    color: "var(--text-secondary)",
                    margin: "0"
                }}>
                    Receba dicas semanais sobre investimentos, economia pessoal e liberdade financeira.
                </p>
            </div>

            <ul style={{
                listStyle: "none",
                padding: 0,
                margin: "1.5rem 0",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem"
            }}>
                <li style={{ fontSize: "0.9rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "var(--primary)" }}>✓</span> Conteúdo exclusivo toda semana
                </li>
                <li style={{ fontSize: "0.9rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "var(--primary)" }}>✓</span> Planilhas e ferramentas gratuitas
                </li>
                <li style={{ fontSize: "0.9rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "var(--primary)" }}>✓</span> Sem spam, apenas valor
                </li>
            </ul>

            <form className="newsletter-form" onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    className="newsletter-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    required
                    style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        border: "1px solid var(--border)",
                        backgroundColor: "var(--bg-primary)",
                        color: "var(--text)",
                        fontSize: "0.95rem",
                        transition: "border-color 0.2s"
                    }}
                />
                <button 
                    className="newsletter-btn" 
                    type="submit" 
                    disabled={loading}
                    style={{
                        padding: "0.875rem 1.5rem",
                        borderRadius: "6px",
                        border: "none",
                        backgroundColor: "var(--primary)",
                        color: "#fff",
                        fontSize: "1rem",
                        fontWeight: "600",
                        cursor: loading ? "not-allowed" : "pointer",
                        opacity: loading ? 0.7 : 1,
                        transition: "opacity 0.2s",
                        width: "100%"
                    }}
                    onMouseEnter={(e) => !loading && (e.currentTarget.style.opacity = "0.9")}
                    onMouseLeave={(e) => !loading && (e.currentTarget.style.opacity = "1")}
                >
                    {loading ? "Cadastrando..." : "Inscrever-se gratuitamente"}
                </button>

                {message && (
                    <div style={{
                        fontSize: "0.9rem",
                        marginTop: "0.5rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        backgroundColor: message.type === "success" ? "var(--success-light)" : "var(--error-light)",
                        color: message.type === "success" ? "var(--success)" : "var(--error)",
                        border: `1px solid ${message.type === "success" ? "var(--success)" : "var(--error)"}20`
                    }}>
                        {message.type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                        <span>{message.text}</span>
                    </div>
                )}
            </form>

            <p style={{
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                textAlign: "center",
                marginTop: "1rem",
                margin: "1rem 0 0 0"
            }}>
                Respeitamos sua privacidade. Desinscreva-se a qualquer momento.
            </p>
        </div>
    );
}
