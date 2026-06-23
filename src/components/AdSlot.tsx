"use client";

import { useEffect } from "react";

/**
 * Configuração real de cada Ad Unit criado no painel do AdSense.
 * - in-article: usa data-ad-layout="in-article" + data-ad-format="fluid"
 * - display:    usa data-ad-format="auto" + data-full-width-responsive="true"
 */
const AD_CONFIG: Record<
    string,
    {
        id: string;
        layout?: "in-article";
        format: "fluid" | "auto" | "rectangle" | "horizontal" | "vertical";
        fullWidthResponsive?: boolean;
    }
> = {
    post_top: {
        id: "6010533245",
        layout: "in-article",
        format: "fluid",
    },
    post_bottom: {
        id: "8598423745",
        layout: "in-article",
        format: "fluid",
    },
    sidebar_home: {
        id: "5352057696",
        format: "auto",
        fullWidthResponsive: true,
    },
};

interface AdSlotProps {
    slot: keyof typeof AD_CONFIG;
    style?: React.CSSProperties;
    className?: string;
}

/**
 * Componente para inserção de anúncios do Google AdSense.
 * Inclui o label obrigatório "Publicidade" e mapeia cada slot
 * para seu Ad Unit real gerado no painel do AdSense.
 */
export default function AdSlot({ slot, style, className }: AdSlotProps) {
    const config = AD_CONFIG[slot];

    useEffect(() => {
        if (!config) return;
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error("AdSense error:", err);
        }
    }, [slot, config]);

    // Slot não mapeado — não renderiza nada
    if (!config) return null;

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
                ...style,
            }}
        >
            <span
                style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "var(--muted)",
                    fontWeight: "500",
                }}
            >
                Publicidade
            </span>
            <div
                style={{
                    width: "100%",
                    minHeight: config.format === "fluid" ? "120px" : "100px",
                    backgroundColor: "rgba(0,0,0,0.02)",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                }}
            >
                <ins
                    className="adsbygoogle"
                    style={{ display: "block", textAlign: "center" }}
                    data-ad-client="ca-pub-1543510171277537"
                    data-ad-slot={config.id}
                    {...(config.layout ? { "data-ad-layout": config.layout } : {})}
                    data-ad-format={config.format}
                    {...(config.fullWidthResponsive
                        ? { "data-full-width-responsive": "true" }
                        : {})}
                />
            </div>
        </div>
    );
}
