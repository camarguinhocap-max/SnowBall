import { MetadataRoute } from 'next';
import { getVisiblePosts, parsePostDate, sortByDate } from '@/lib/posts';

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dividai.com';
    const visible = sortByDate(getVisiblePosts());
    const latestVisibleDate = visible[0] ? parsePostDate(visible[0].date) : undefined;

    // Static routes
    const staticRoutes = [
        {
            url: `${baseUrl}`,
            lastModified: latestVisibleDate,
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/contato`,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/politica-de-privacidade`,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/termos-de-uso`,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/sobre`,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ];

    return [...staticRoutes];
}
