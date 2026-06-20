import { getVisiblePosts, parsePostDate } from '@/lib/posts';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query || query.trim().length < 2) {
    return Response.json([]);
  }

  const lowerQuery = query.toLowerCase();

  // Busca apenas nos metadados (title, excerpt, category, tags)
  // content não é carregado — mantém a busca O(n) nos campos leves
  const results = getVisiblePosts()
    .map((post) => {
      const matchTitle    = post.title.toLowerCase().includes(lowerQuery);
      const matchExcerpt  = post.excerpt.toLowerCase().includes(lowerQuery);
      const matchCategory = post.category.toLowerCase().includes(lowerQuery);
      const matchTags     = post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));

      if (!matchTitle && !matchExcerpt && !matchCategory && !matchTags) return null;

      // Relevância simples por campo
      let score = 0;
      if (matchTitle)    score += 10;
      if (matchTags)     score += 8;
      if (matchCategory) score += 5;
      if (matchExcerpt)  score += 3;

      return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        category: post.category,
        readTime: post.readTime,
        tags: post.tags,
        score,
      };
    })
    .filter(Boolean)
    .sort((a, b) =>
      b!.score - a!.score ||
      parsePostDate(b!.date).getTime() - parsePostDate(a!.date).getTime()
    );

  return new Response(JSON.stringify(results), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 's-maxage=60, stale-while-revalidate',
    },
  });
}
