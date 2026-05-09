import { posts } from '@/data/posts';
import { isPublished, parsePostDate } from '@/lib/posts';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query || query.trim().length < 2) {
    return Response.json([]);
  }

  const lowerQuery = query.toLowerCase();
  const today = new Date();

  // Filtrar posts publicados e que correspondem à busca
  const results = posts
    .filter(post => isPublished(post, today))
    .filter(post => {
      const matchTitle = post.title.toLowerCase().includes(lowerQuery);
      const matchExcerpt = post.excerpt.toLowerCase().includes(lowerQuery);
      const matchContent = post.content.toLowerCase().includes(lowerQuery);
      const matchCategory = post.category.toLowerCase().includes(lowerQuery);
      const matchTags = post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowerQuery));

      return matchTitle || matchExcerpt || matchContent || matchCategory || matchTags;
    })
    .map(post => {
      // Calcular relevância simples
      let score = 0;
      if (post.title.toLowerCase().includes(lowerQuery)) score += 10;
      if (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) score += 8;
      if (post.category.toLowerCase().includes(lowerQuery)) score += 5;
      if (post.excerpt.toLowerCase().includes(lowerQuery)) score += 3;
      if (post.content.toLowerCase().includes(lowerQuery)) score += 1;

      return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        category: post.category,
        readTime: post.readTime,
        tags: post.tags || [],
        score
      };
    })
    .sort((a, b) => b.score - a.score || parsePostDate(b.date).getTime() - parsePostDate(a.date).getTime());

  return Response.json(results);
}
