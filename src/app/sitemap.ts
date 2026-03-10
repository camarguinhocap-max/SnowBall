import { MetadataRoute } from 'next';
import { posts } from '@/data/posts';
import { shopItems } from '@/data/shop';
import { getVisiblePosts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://blog.dividai.com';

    // Static routes
    const staticRoutes = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/shop`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/politica-de-privacidade`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
    ];

    // Dynamic routes for blog posts
    const visible = getVisiblePosts();
    const postRoutes = visible.map((post) => ({
        url: `${baseUrl}/post/${post.slug}`,
        lastModified: new Date(), // Idealmente viria de post.updatedAt, usaremos a data atual na renderização
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...staticRoutes, ...postRoutes];
}
