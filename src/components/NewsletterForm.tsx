"use client";

import { useState } from "react";
import { subscribeNewsletter } from "@/actions/newsletter";

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
            setMessage({ type: "success", text: "Inscrito com sucesso! Cheque seu e-mail em breve." });
            setEmail("");
        } else {
            setMessage({ type: "error", text: result.error || "Ocorreu um erro." });
        }

        setLoading(false);
    }

    return (
        <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
            />
            <button className="newsletter-btn" type="submit" disabled={loading}>
                {loading ? "Cadastrando..." : "Quero Receber Dicas"}
            </button>
            {message && (
                <p style={{
                    fontSize: "0.85rem",
                    marginTop: "0.5rem",
                    textAlign: "center",
                    color: message.type === "success" ? "var(--primary)" : "var(--accent)"
                }}>
                    {message.text}
                </p>
            )}
        </form>
    );
}
