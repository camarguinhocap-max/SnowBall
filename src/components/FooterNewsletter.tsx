"use client";

import { useState } from "react";
import { subscribeNewsletter } from "@/actions/newsletter";
import { trackNewsletterSubscribe } from "@/lib/analytics";

export default function FooterNewsletter() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email || loading) return;

        setLoading(true);
        const result = await subscribeNewsletter(email);

        if (result.success) {
            trackNewsletterSubscribe("footer");
            setDone(true);
            setEmail("");
        }
        setLoading(false);
    }

    if (done) {
        return (
            <div className="footer-newsletter">
                <p style={{ color: "var(--primary)", fontWeight: 600, margin: 0 }}>
                    🎉 Inscrito! Confira seu e-mail.
                </p>
            </div>
        );
    }

    return (
        <div className="footer-newsletter">
            <h3>📬 Não perca nenhuma dica</h3>
            <form className="footer-newsletter-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    required
                    aria-label="E-mail para newsletter"
                />
                <button type="submit" disabled={loading}>
                    {loading ? "..." : "Inscrever →"}
                </button>
            </form>
        </div>
    );
}
