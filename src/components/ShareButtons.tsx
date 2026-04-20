"use client";

import { Twitter, AtSign, MessageCircle, Linkedin, Facebook, Instagram, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { trackShareClick } from "@/lib/analytics";

interface ShareButtonsProps {
    title: string;
    slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const url = `https://dividai.com/post/${slug}`;

    const encodedUrl = encodeURIComponent(url);

    // Hashtags padrão para impulsionar o SEO social
    const hashtags = "\n\n#RendaExtra #Investimentos #EducacaoFinanceira #DividAI #dividendos #LiberdadeFinanceira #acoes #stocks #etf #FII";
    const encodedTitle = encodeURIComponent(title + hashtags);
    const encodedTitleWA = encodeURIComponent(title + "\n\n" + url);

    // Links de compartilhamento
    const shareTwitter = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    const shareThreads = `https://www.threads.net/intent/post?text=${encodedTitle}%20${encodedUrl}`;
    const shareWhatsApp = `https://api.whatsapp.com/send?text=${encodedTitleWA}`;
    const shareLinkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

    const handleInstagramShare = async () => {
        trackShareClick('instagram', title);
        
        // Verifica se o navegador suporta a Web Share API (Mobile)
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: `${title} - Confira no Blog DividAI`,
                    url: url
                });
            } catch (err) {
                console.log('Erro ao compartilhar:', err);
            }
        } else {
            // Fallback para Desktop: Copia o link e abre o Instagram
            navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            window.open("https://www.instagram.com/", "_blank");
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="share-buttons" style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", margin: 0 }}>Gostou? Compartilhe com seus amigos:</h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem" }}>
                <a 
                    href={shareTwitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="share-btn"
                    onClick={() => trackShareClick('twitter', title)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        textDecoration: "none",
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                    <Twitter size={16} /> X (Twitter)
                </a>

                <a 
                    href={shareThreads} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="share-btn"
                    onClick={() => trackShareClick('threads', title)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        textDecoration: "none",
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                    <AtSign size={16} /> Threads
                </a>

                <button 
                    onClick={handleInstagramShare}
                    className="share-btn"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        border: "none",
                        cursor: "pointer",
                        background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                        color: "#fff",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                    <Instagram size={16} /> {copied ? "Link Copiado!" : "Instagram"}
                </button>

                <a 
                    href={shareWhatsApp} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="share-btn"
                    onClick={() => trackShareClick('whatsapp', title)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        textDecoration: "none",
                        backgroundColor: "#25D366",
                        color: "#fff",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                    <MessageCircle size={16} /> WhatsApp
                </a>

                <a 
                    href={shareLinkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="share-btn"
                    onClick={() => trackShareClick('linkedin', title)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        textDecoration: "none",
                        backgroundColor: "#0077B5",
                        color: "#fff",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                    <Linkedin size={16} /> LinkedIn
                </a>

                <a 
                    href={shareFacebook} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="share-btn"
                    onClick={() => trackShareClick('facebook', title)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        textDecoration: "none",
                        backgroundColor: "#1877F2",
                        color: "#fff",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                    <Facebook size={16} /> Facebook
                </a>

                <button
                    onClick={copyToClipboard}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        border: "2px solid var(--border)",
                        backgroundColor: "transparent",
                        color: "var(--text)",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--primary)";
                        e.currentTarget.style.color = "var(--primary)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text)";
                    }}
                >
                    <LinkIcon size={16} /> {copied ? "Copiado! ✓" : "Copiar link"}
                </button>
            </div>
        </div>
    );
}
