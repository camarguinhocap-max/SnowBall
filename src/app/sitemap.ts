import { MetadataRoute } from 'next';
import { getVisiblePosts, parsePostDate, sortByDate } from '@/lib/posts';

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://blog.dividai.com';
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
            url: `${baseUrl}/shop`,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
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
    ];

    // Dynamic routes for blog posts
    const postRoutes = visible.map((post) => ({
        url: `${baseUrl}/post/${post.slug}`,
        lastModified: parsePostDate(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...staticRoutes, ...postRoutes];
}
