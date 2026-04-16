"use client";

import { useEffect } from "react";

interface AdSlotProps {
    slot: string;
    format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
    style?: React.CSSProperties;
    className?: string;
}

/**
 * Componente para inserção de anúncios do Google AdSense.
 * Inclui o label obrigatório "Publicidade".
 */
export default function AdSlot({ slot, format = "auto", style, className }: AdSlotProps) {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error("AdSense error:", err);
        }
    }, [slot]);

    return (
        <div 
            className={`ad-wrapper ${className || ""}`}
            style={{ 
                margin: "2rem 0", 
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                ...style 
            }}
        >
            <span style={{ 
                fontSize: "10px", 
                textTransform: "uppercase", 
                letterSpacing: "1px", 
                color: "var(--muted)",
                fontWeight: "500"
            }}>
                Publicidade
            </span>
            <div style={{ 
                width: "100%", 
                minHeight: "100px", 
                backgroundColor: "rgba(0,0,0,0.02)", 
                borderRadius: "var(--radius-md)",
                overflow: "hidden"
            }}>
                <ins
                    className="adsbygoogle"
                    style={{ display: "block", textAlign: "center" }}
                    data-ad-client="ca-pub-1543510171277537"
                    data-ad-slot={slot}
                    data-ad-format={format}
                    data-full-width-responsive="true"
                ></ins>
            </div>
        </div>
    );
}
