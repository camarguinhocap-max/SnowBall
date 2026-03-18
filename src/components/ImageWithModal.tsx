"use client";

import { useState } from "react";

export default function ImageWithModal({ src, alt }: { src?: string; alt?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    if (!src) {
        return null;
    }

    return (
        <>
            <div className={`post-image-frame${isLoaded ? " is-loaded" : ""}`}>
                <img
                    src={src}
                    alt={alt || ""}
                    onClick={() => setIsOpen(true)}
                    onLoad={() => setIsLoaded(true)}
                    className="post-image"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsOpen(false)}>
                            &times;
                        </button>
                        <img src={src} alt={alt || ""} className="modal-img" />
                    </div>
                </div>
            )}
        </>
    );
}
