import { posts } from '@/data/posts';
import RSS from 'rss';

export async function GET() {
    const feed = new RSS({
        title: 'Blog DividAI',
        description: 'Aprenda a organizar sua vida financeira, sair das dívidas e começar a investir. O melhor blog de finanças pessoais focado na realidade brasileira.',
        feed_url: 'https://blog.dividai.com/api/feed',
        site_url: 'https://blog.dividai.com',
        image_url: 'https://blog.dividai.com/favicon-transparent.svg',
        language: 'pt-BR',
        pubDate: new Date().toUTCString(),
    });

    // Sort posts to ensure chronological order (newest first, if not already sorted that way in data source - currently the page.tsx reverses it)
    const feedPosts = [...posts].reverse();

    feedPosts.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.excerpt,
            // If categories is available, using it
            categories: [post.category],
            url: `https://blog.dividai.com/post/${post.slug}`,
            // Approximate the custom string dates to real Date objects or just pass as-is
            date: post.date,
        });
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 's-maxage=86400, stale-while-revalidate',
        },
    });
}
