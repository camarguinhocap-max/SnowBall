'use client';

import { useEffect } from 'react';
import { trackFormSubmission } from '@/lib/analytics';

/**
 * Component that tracks key conversions in GA4
 * Automatically monitors newsletter signups, form submissions, and engagement metrics
 */
export default function ConversionTracker() {
  useEffect(() => {
    // Track newsletter form submissions
    const trackNewsletterForm = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
          const isNewsletterForm = form.querySelector('input[type="email"]') !== null;
          if (isNewsletterForm) {
            trackFormSubmission('newsletter_signup', true);
          }
        });
      });
    };

    // Track CTA button clicks
    const trackCTAClicks = () => {
      const buttons = document.querySelectorAll('button[data-conversion]');
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          const conversionType = button.getAttribute('data-conversion');
          if (window.gtag) {
            window.gtag('event', 'cta_click', {
              cta_type: conversionType,
              cta_text: button.textContent,
            });
          }
        });
      });
    };

    // Track engagement time intervals
    let engagementTime = 0;
    const engagementInterval = setInterval(() => {
      engagementTime += 10;
      if (engagementTime === 30000) { // 30 seconds
        if (window.gtag) {
          window.gtag('event', 'engagement_30s');
        }
      }
      if (engagementTime === 120000) { // 2 minutes
        if (window.gtag) {
          window.gtag('event', 'engagement_2m');
        }
      }
    }, 10000);

    trackNewsletterForm();
    trackCTAClicks();

    return () => {
      clearInterval(engagementInterval);
    };
  }, []);

  return null;
}
