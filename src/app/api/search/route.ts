import { posts } from '@/data/posts';
import { isPublished } from '@/lib/posts';

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
    .filter(post => 
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.category.toLowerCase().includes(lowerQuery)
    )
    .map(post => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      category: post.category,
      readTime: post.readTime,
    }))
    .sort((a, b) => {
      // Priorizar resultados onde o título contém a query
      const aHasInTitle = a.title.toLowerCase().includes(lowerQuery);
      const bHasInTitle = b.title.toLowerCase().includes(lowerQuery);
      if (aHasInTitle && !bHasInTitle) return -1;
      if (!aHasInTitle && bHasInTitle) return 1;
      return 0;
    });

  return Response.json(results);
}
