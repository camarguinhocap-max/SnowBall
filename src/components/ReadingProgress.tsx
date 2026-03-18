"use client";

import { useEffect, useState } from "react";

interface ReadingProgressProps {
    targetSelector?: string;
}

export default function ReadingProgress({
    targetSelector = "[data-reading-root]",
}: ReadingProgressProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frame = 0;

        const updateProgress = () => {
            const target = document.querySelector<HTMLElement>(targetSelector);

            if (!target) {
                setProgress(0);
                return;
            }

            const rect = target.getBoundingClientRect();
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const articleTop = scrollTop + rect.top;
            const articleHeight = target.offsetHeight;
            const viewportHeight = window.innerHeight;
            const start = articleTop - 120;
            const maxScrollable = Math.max(articleHeight - viewportHeight * 0.55, 1);
            const current = scrollTop - start;
            const nextProgress = Math.max(0, Math.min(1, current / maxScrollable));

            setProgress(nextProgress);
        };

        const handleScroll = () => {
            cancelAnimationFrame(frame);
            frame = window.requestAnimationFrame(updateProgress);
        };

        updateProgress();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [targetSelector]);

    return (
        <div className="reading-progress" aria-hidden="true">
            <span
                className="reading-progress__bar"
                style={{ transform: `scaleX(${progress})` }}
            />
        </div>
    );
}
