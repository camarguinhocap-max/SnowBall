import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Blog DividAI | Educação Financeira e Finanças Pessoais";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "linear-gradient(135deg, #080c14 0%, #0d1220 50%, #0a1628 100%)",
                    padding: "60px 72px",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Glow background */}
                <div
                    style={{
                        position: "absolute",
                        top: "-120px",
                        right: "-120px",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(2,132,199,0.25) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        left: "-80px",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />

                {/* Header — Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div
                        style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "14px",
                            background: "linear-gradient(135deg, #6366f1, #0284c7)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "28px",
                        }}
                    >
                        💰
                    </div>
                    <span
                        style={{
                            fontSize: "32px",
                            fontWeight: 800,
                            color: "#ffffff",
                            letterSpacing: "-0.5px",
                        }}
                    >
                        DividAI
                    </span>
                    <div
                        style={{
                            marginLeft: "8px",
                            padding: "4px 14px",
                            borderRadius: "20px",
                            background: "rgba(2,132,199,0.15)",
                            border: "1px solid rgba(2,132,199,0.3)",
                            fontSize: "14px",
                            color: "#38bdf8",
                            fontWeight: 600,
                            display: "flex",
                        }}
                    >
                        Blog
                    </div>
                </div>

                {/* Main content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div
                        style={{
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#38bdf8",
                            textTransform: "uppercase",
                            letterSpacing: "3px",
                            display: "flex",
                        }}
                    >
                        Educação Financeira Brasileira
                    </div>
                    <div
                        style={{
                            fontSize: "62px",
                            fontWeight: 900,
                            color: "#ffffff",
                            lineHeight: 1.1,
                            letterSpacing: "-2px",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <span>Finanças Pessoais</span>
                        <span
                            style={{
                                background: "linear-gradient(90deg, #6366f1, #0284c7, #38bdf8)",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            e Investimentos
                        </span>
                    </div>
                    <div
                        style={{
                            fontSize: "22px",
                            color: "#94a3b8",
                            lineHeight: 1.5,
                            maxWidth: "700px",
                            display: "flex",
                        }}
                    >
                        Aprenda a organizar suas finanças, sair das dívidas e investir com segurança. Conteúdo prático para o brasileiro.
                    </div>
                </div>

                {/* Footer — Pills */}
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    {["Investimentos", "Renda Extra", "Aposentadoria", "Finanças Pessoais"].map((tag) => (
                        <div
                            key={tag}
                            style={{
                                padding: "8px 18px",
                                borderRadius: "20px",
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                fontSize: "15px",
                                color: "#cbd5e1",
                                fontWeight: 600,
                                display: "flex",
                            }}
                        >
                            {tag}
                        </div>
                    ))}
                    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
                        <div
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#22c55e",
                                display: "flex",
                            }}
                        />
                        <span style={{ fontSize: "15px", color: "#64748b", display: "flex" }}>
                            dividai.com
                        </span>
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
