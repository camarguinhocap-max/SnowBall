'use client';
import Image from "next/image";
import { useState } from "react";

interface PostCardImageProps {
    slug: string;
    title: string;
    image?: string;
}

const blurDataURL =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop stop-color="#0f172a" offset="0%"/>
                    <stop stop-color="#1d4ed8" offset="50%"/>
                    <stop stop-color="#0ea5e9" offset="100%"/>
                </linearGradient>
            </defs>
            <rect width="1200" height="630" fill="url(#g)"/>
        </svg>
    `);

export default function PostCardImage({ slug, title, image }: PostCardImageProps) {
    const ogSrc = `/post/${slug}/opengraph-image`;
    const [src, setSrc] = useState(image ?? ogSrc);

    return (
        <div className="post-card-image-wrap">
            <Image
                src={src}
                alt={`Capa do artigo ${title}`}
                width={1200}
                height={630}
                className="post-card-image"
                placeholder="blur"
                blurDataURL={blurDataURL}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                onError={() => setSrc(ogSrc)}
            />
        </div>
    );
}
