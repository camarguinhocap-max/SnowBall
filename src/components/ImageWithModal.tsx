'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageWithModal({ src, alt }: { src?: string; alt?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    if (!src) {
        return null;
    }

    return (
        <>
            <div className={`post-image-frame${isLoaded ? ' is-loaded' : ''}`}>
                <Image
                    src={src}
                    alt={alt || ''}
                    onClick={() => setIsOpen(true)}
                    onLoad={() => setIsLoaded(true)}
                    className="post-image"
                    width={800}
                    height={600}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </div>

            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsOpen(false)}>
                            &times;
                        </button>
                        <Image 
                            src={src} 
                            alt={alt || ''} 
                            className="modal-img"
                            width={1200}
                            height={900}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '90vh',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
