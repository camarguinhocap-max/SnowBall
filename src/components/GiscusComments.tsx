'use client';

import { useEffect, useRef } from 'react';

export default function GiscusComments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Limpar comentários anteriores se houver
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'camarguinhocap-max/SnowBall');
    script.setAttribute('data-repo-id', 'R_kgDOMH1rPA');
    script.setAttribute('data-category', 'Comentários');
    script.setAttribute('data-category-id', 'DIC_kwDOMH1rPM4CflZf');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'pt_BR');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className="my-8 border-t border-gray-200 dark:border-gray-700 pt-8"
      id="giscus"
    />
  );
}
