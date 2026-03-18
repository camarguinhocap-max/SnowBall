'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search } from 'lucide-react';

interface SearchResult {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Erro ao buscar:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto 2rem' }}>
      <h1 className="text-4xl font-bold mb-2">Resultados da Busca</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {query ? `Buscando por: "${query}"` : 'Digite um termo para buscar'}
      </p>

      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin">
            <Search size={32} className="text-blue-500" />
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Buscando...</p>
        </div>
      )}

      {!loading && results.length === 0 && query && (
        <div className="text-center py-12 border border-gray-200 dark:border-gray-700 rounded-lg">
          <Search size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Nenhum resultado encontrado
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Tente usar diferentes palavras-chave
          </p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="space-y-6">
          {results.map((post) => (
            <article
              key={post.slug}
              className="border-l-4 border-l-indigo-500 pl-6 py-5 hover:bg-white dark:hover:bg-slate-900/50 rounded-r-xl transition-all duration-300 hover:shadow-lg dark:hover:shadow-indigo-500/10 hover:-translate-x-1"
            >
              <Link href={`/post/${post.slug}`}>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 text-lg">
                {post.excerpt}
              </p>
 
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="px-2.5 py-1 bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 rounded-full font-semibold text-xs uppercase tracking-wider">
                  {post.category}
                </span>
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-slate-400 dark:text-slate-500 text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="ml-auto flex items-center gap-2 opacity-60">
                   <span>{post.date}</span>
                   <span>•</span>
                   <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
          
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}
    </div>
  );
}
