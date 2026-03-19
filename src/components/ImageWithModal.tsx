'use client';

import { useState } from 'react';

export default function ImageWithModal({ src, alt }: { src?: string; alt?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    if (!src) {
        return null;
    }

    // Generate WebP version if not already an SVG or WebP
    const isWebP = src.endsWith('.webp');
    const isSvg = src.endsWith('.svg');
    const webpSrc = !isWebP && !isSvg ? src.replace(/\.(jpg|jpeg|png)$/i, '.webp') : src;

    return (
        <>
            <div className={`post-image-frame${isLoaded ? ' is-loaded' : ''}`}>
                <picture>
                    {!isSvg && (
                        <source srcSet={webpSrc} type="image/webp" />
                    )}
                    <img
                        src={src}
                        alt={alt || ''}
                        onClick={() => setIsOpen(true)}
                        onLoad={() => setIsLoaded(true)}
                        className="post-image"
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={600}
                    />
                </picture>
            </div>

            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsOpen(false)}>
                            &times;
                        </button>
                        <picture>
                            {!isSvg && (
                                <source srcSet={webpSrc} type="image/webp" />
                            )}
                            <img src={src} alt={alt || ''} className="modal-img" />
                        </picture>
                    </div>
                </div>
            )}
        </>
    );
}
