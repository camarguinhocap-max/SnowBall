"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie, ShieldCheck } from "lucide-react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verificar se já aceitou
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Pequeno delay para não sobrecarregar o usuário imediatamente
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
            style={{
                position: "fixed",
                bottom: "1.5rem",
                left: "50%",
                transform: "translateX(-50%)",
                width: "min(90vw, 500px)",
                backgroundColor: "var(--glass-bg)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.25rem",
                boxShadow: "var(--shadow-hover)",
                zIndex: 1000,
                animation: "slideInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes slideInUp {
                    from { transform: translate(-50%, 100%); opacity: 0; }
                    to { transform: translate(-50%, 0); opacity: 1; }
                }
            `}} />
            
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ 
                    backgroundColor: "rgba(2, 132, 199, 0.1)", 
                    padding: "0.75rem", 
                    borderRadius: "12px",
                    color: "var(--primary)"
                }}>
                    <Cookie size={24} />
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem", fontWeight: "600" }}>
                        Sua privacidade e cookies
                    </h3>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--foreground-2)", lineHeight: "1.5" }}>
                        Utilizamos cookies para personalizar anúncios do AdSense e analisar nosso tráfego. 
                        Ao navegar, você concorda com nossa <Link href="/politica-de-privacidade" style={{ color: "var(--primary)", fontWeight: "500", textDecoration: "underline" }}>Política de Privacidade</Link>.
                    </p>
                </div>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
                <button
                    onClick={handleAccept}
                    style={{
                        flex: 1,
                        backgroundColor: "var(--primary)",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        padding: "0.75rem",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--primary-hover)"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--primary)"}
                >
                    Aceitar e prosseguir
                </button>
            </div>
        </div>
    );
}
