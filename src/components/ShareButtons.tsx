"use client";

import { Twitter, Instagram, AtSign, Check } from "lucide-react";
import { useState, useEffect } from "react";

interface ShareButtonsProps {
    title: string;
    slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(`${window.location.origin}/post/${slug}`);
    }, [slug]);

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    // Link de compartilhamento do X (Twitter)
    const shareTwitter = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    // Link de compartilhamento do Threads
    const shareThreads = `https://www.threads.net/intent/post?text=${encodedTitle}%20${encodedUrl}`;

    // Instagram não possui link de compartilhamento web. A melhor estratégia é copiar o link para a área de transferência.
    const handleCopyForInstagram = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="share-buttons" style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Gostou do artigo? Compartilhe:</h3>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>

                <a href={shareTwitter} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem" }}>
                    <Twitter size={18} /> X (Twitter)
                </a>

                <a href={shareThreads} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem" }}>
                    <AtSign size={18} /> Threads
                </a>

                <button
                    onClick={handleCopyForInstagram}
                    className="btn btn-secondary"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem 1rem",
                        cursor: "pointer",
                        border: "1px solid var(--border)",
                        background: "transparent",
                        color: "var(--foreground)",
                        borderRadius: "var(--radius)"
                    }}
                    title="Copiar link para colar no story ou bio do Instagram"
                >
                    {copied ? <Check size={18} color="var(--primary)" /> : <Instagram size={18} />}
                    {copied ? "Link Copiado!" : "Copiar para o Instagram"}
                </button>

            </div>
        </div>
    );
}
