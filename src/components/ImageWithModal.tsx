"use client";

import { useState } from "react";

export default function ImageWithModal({ src, alt }: { src?: string; alt?: string }) {
    const [isOpen, setIsOpen] = useState(false);

    if (!src) return null;

    return (
        <>
            <img
                src={src}
                alt={alt || ""}
                onClick={() => setIsOpen(true)}
                className="post-image"
            />
            {isOpen && (
                <div
                    className="modal-overlay"
                    onClick={() => setIsOpen(false)}
                >
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
