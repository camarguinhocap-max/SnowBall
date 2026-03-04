"use client";

import { Twitter, AtSign } from "lucide-react";
import { useState, useEffect } from "react";

interface ShareButtonsProps {
    title: string;
    slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
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

            </div>
        </div>
    );
}
