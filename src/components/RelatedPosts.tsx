import Link from 'next/link';
import { posts } from '@/data/posts';

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
}

export default function RelatedPosts({ currentSlug, category }: RelatedPostsProps) {
  // Buscar posts da mesma categoria, excluindo o atual
  const relatedPosts = posts
    .filter((post) => post.category === category && post.slug !== currentSlug)
    .slice(0, 3); // Apenas os 3 primeiros

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
        Leia também
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/post/${post.slug}`}
            className="group block p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all duration-300 bg-white dark:bg-gray-900/50"
          >
            <div className="mb-3">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                {post.category}
              </span>
            </div>
            
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <time dateTime={post.date}>
                {post.date}
              </time>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
