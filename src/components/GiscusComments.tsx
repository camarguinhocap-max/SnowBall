'use client';

import { useEffect, useRef } from 'react';

export default function GiscusComments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Determinar tema baseado no documento
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark' 
      || (!document.documentElement.hasAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'camarguinhocap-max/SnowBall');
    script.setAttribute('data-repo-id', 'R_kgDOMH1rPA');
    script.setAttribute('data-category', 'Discussões');
    script.setAttribute('data-category-id', 'DIC_kwDOMH1rPM4CflZf');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', isDark ? 'dark' : 'light');
    script.setAttribute('data-lang', 'pt_BR');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    containerRef.current.appendChild(script);

    // Observer para mudanças de tema
    const observer = new MutationObserver(() => {
      const newIsDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const newTheme = newIsDark ? 'dark' : 'light';
      const iframe = containerRef.current?.querySelector('iframe');
      if (iframe) {
        iframe.contentWindow?.postMessage({ giscus: { setConfig: { theme: newTheme } } }, 'https://giscus.app');
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        marginTop: '2rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border)'
      }}
      id="giscus"
    />
  );
}
