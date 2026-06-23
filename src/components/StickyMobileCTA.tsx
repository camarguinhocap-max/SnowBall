"use client";

import { useState, useEffect } from "react";

export default function StickyMobileCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero (approx 500px)
            setVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <div className="sticky-mobile-cta" aria-label="Ação rápida">
            <a href="#newsletter-band" aria-label="Receber guia gratuito de investimentos">
                📩 Receba o Guia Grátis de Investimento
            </a>
        </div>
    );
}
