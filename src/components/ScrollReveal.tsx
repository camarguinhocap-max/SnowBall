"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    style?: CSSProperties;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    className = "",
    delay = 0,
    style,
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setIsVisible(true);

                        if (once) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!once) {
                        setIsVisible(false);
                    }
                }
            },
            {
                threshold: 0.14,
                rootMargin: "0px 0px -8% 0px",
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [once]);

    return (
        <div
            ref={ref}
            className={`scroll-reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
            style={{
                transitionDelay: `${delay}ms`,
                ...style,
            }}
        >
            {children}
        </div>
    );
}
