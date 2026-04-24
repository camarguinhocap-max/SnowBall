'use client';

import { useEffect } from 'react';
import { trackScrollMilestone, trackTimeOnPage, trackInternalLink } from '@/lib/analytics';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-M6027Q5HVV';
  const adsId = 'AW-18107418379';

  useEffect(() => {
    if (!gaId) return;

    // Criar data layer
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());

    // Configuração do Google Analytics
    gtag('config', gaId, {
      'page_path': window.location.pathname,
      'send_page_view': true,
    });

    // Configuração do Google Ads
    gtag('config', adsId);

    // Carregar script do Google Tag Manager (usando o GA ID como principal)
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Track scroll depth milestones
    const trackedMilestones = new Set<number>();
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = Math.round(((scrollTop + windowHeight) / docHeight) * 100);

      [25, 50, 75, 100].forEach((milestone) => {
        if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
          trackedMilestones.add(milestone);
          trackScrollMilestone(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track time on page
    let pageStartTime = Date.now();
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - pageStartTime) / 1000);
      if (timeOnPage > 3) {
        trackTimeOnPage(timeOnPage);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Track internal link clicks
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target instanceof HTMLAnchorElement && target.href) {
        const href = target.href;
        if (href.includes(window.location.origin) && !href.includes('/api/')) {
          trackInternalLink(href, target.textContent || undefined, 'link_click');
        }
      }
    };

    document.addEventListener('click', handleLinkClick, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [gaId]);

  return null;
}
