/**
 * Funções para rastreamento de eventos no Google Analytics
 */

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Eventos específicos do blog
export const trackNewsletterSubscribe = (source: string) => {
  trackEvent('newsletter_subscribe', {
    source: source, // 'header', 'post_end', 'sidebar', etc
  });
};

export const trackSearch = (query: string, resultCount: number) => {
  trackEvent('search', {
    search_term: query,
    results_count: resultCount,
  });
};

export const trackPostRead = (postSlug: string, postTitle: string, category: string) => {
  trackEvent('post_view', {
    post_slug: postSlug,
    post_title: postTitle,
    category: category,
  });
};

export const trackExternalLink = (url: string, title?: string) => {
  trackEvent('external_link_click', {
    url: url,
    link_title: title,
  });
};

export const trackAffiliateClick = (productName: string, productType: string) => {
  trackEvent('affiliate_click', {
    product_name: productName,
    product_type: productType,
  });
};

export const trackShareClick = (platform: string, postTitle: string) => {
  trackEvent('share_click', {
    platform: platform, // 'twitter', 'whatsapp', 'linkedin', 'facebook', 'threads'
    post_title: postTitle,
  });
};

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    scroll_percent: depth,
  });
};

export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', {
    seconds: seconds,
  });
};

// Enhanced conversion tracking
export const trackInternalLink = (linkUrl: string, linkText?: string, context?: string) => {
  trackEvent('internal_link_click', {
    link_url: linkUrl,
    link_text: linkText,
    context: context, // 'post_content', 'related_posts', 'header', etc
  });
};

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success,
  });
};

export const trackAdClick = (adUnit: string, adType?: string) => {
  trackEvent('ad_click', {
    ad_unit: adUnit,
    ad_type: adType,
  });
};

export const trackScrollMilestone = (milestone: number) => {
  trackEvent('scroll_milestone', {
    scroll_percent: milestone, // 25, 50, 75, 100
  });
};
