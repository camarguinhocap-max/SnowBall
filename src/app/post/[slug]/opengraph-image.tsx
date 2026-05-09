import { ImageResponse } from "next/og";
import { getAllPosts } from "@/lib/posts";

export const runtime = "edge";
export const alt = "Capa do artigo";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const revalidate = 3600; // 1h

function hashSlug(slug: string): number {
    let hash = 0;
    for (let i = 0; i < slug.length; i += 1) {
        hash = (hash << 5) - hash + slug.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

const palette = [
    ["#0ea5e9", "#6366f1"],
    ["#22c55e", "#16a34a"],
    ["#f97316", "#ea580c"],
    ["#ec4899", "#8b5cf6"],
    ["#14b8a6", "#0ea5e9"],
    ["#f59e0b", "#ef4444"],
];

export default async function OgImage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = getAllPosts().find((p) => p.slug === params.slug);
    const title = post?.title ?? "DividAI";
    const category = post?.category ?? "Financas";

    const hash = hashSlug(params.slug);
    const colors = palette[hash % palette.length];

    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    color: "#0b1021",
                    padding: "60px 70px",
                    background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
                    fontFamily: "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif",
                }}
            >
                <div
                    style={{
                        fontSize: 24,
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.9)",
                        letterSpacing: "0.5px",
                        padding: "8px 16px",
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.14)",
                        alignSelf: "flex-start",
                    }}
                >
                    {category}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <h1
                        style={{
                            fontSize: 64,
                            lineHeight: 1.05,
                            fontWeight: 800,
                            color: "white",
                            margin: 0,
                            textShadow: "0 10px 35px rgba(0,0,0,0.28)",
                        }}
                    >
                        {title}
                    </h1>
                    <p
                        style={{
                            fontSize: 28,
                            color: "rgba(255,255,255,0.9)",
                            margin: 0,
                            maxWidth: "950px",
                            lineHeight: 1.35,
                            textShadow: "0 6px 18px rgba(0,0,0,0.2)",
                        }}
                    >
                        {post?.excerpt ?? "Educacao financeira clara, pratica e feita para a realidade brasileira."}
                    </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.9)" }}>
                    <div
                        style={{
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.9)",
                        }}
                    />
                    <span style={{ fontSize: 22, fontWeight: 600 }}>dividai.com/post/{params.slug}</span>
                </div>
            </div>
        ),
        size
    );
}



