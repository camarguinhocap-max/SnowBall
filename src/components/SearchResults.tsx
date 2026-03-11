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
              className="border-l-4 border-blue-500 pl-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-r transition"
            >
              <Link href={`/post/${post.slug}`}>
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:underline mb-2">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-500">
                <span className="inline-block px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
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
