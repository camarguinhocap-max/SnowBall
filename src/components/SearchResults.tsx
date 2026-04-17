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
    <div style={{ maxWidth: '900px', margin: '4rem auto 4rem', padding: '0 1.5rem' }}>
      <header style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--foreground)' }}>
            Resultados da Busca
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>
            {query ? (
                <>Mostrando resultados para: <strong style={{ color: 'var(--primary)' }}>&quot;{query}&quot;</strong></>
            ) : (
                'Digite um termo para buscar no blog'
            )}
        </p>
      </header>

      {loading && (
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>
            <Search size={40} style={{ color: 'var(--primary)' }} />
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: 'var(--muted)' }}>Buscando artigos...</p>
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          `}} />
        </div>
      )}

      {!loading && results.length === 0 && query && (
        <div style={{ 
            textAlign: 'center', 
            padding: '5rem 2rem', 
            backgroundColor: 'var(--card-bg)', 
            borderRadius: '24px',
            border: '1px solid var(--border)' 
        }}>
          <Search size={64} style={{ margin: '0 auto 1.5rem', color: 'var(--muted)', opacity: 0.3 }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            Nenhum artigo encontrado
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '400px', margin: '0 auto' }}>
            Tente buscar por termos mais genéricos como &quot;Investimentos&quot;, &quot;Dividendos&quot; ou &quot;Reserva&quot;.
          </p>
          <Link href="/" style={{ 
              display: 'inline-block', 
              marginTop: '2rem', 
              color: 'var(--primary)', 
              fontWeight: '600',
              textDecoration: 'underline' 
          }}>
            Voltar para a página inicial
          </Link>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {results.map((post) => (
            <article
              key={post.slug}
              style={{
                backgroundColor: 'var(--card-bg)',
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <Link href={`/post/${post.slug}`} style={{ textDecoration: 'none' }}>
                <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: '700', 
                    color: 'var(--primary)', 
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'block',
                    marginBottom: '0.75rem'
                }}>
                  {post.category}
                </span>
                <h2 style={{ 
                    fontSize: '1.75rem', 
                    fontWeight: '800', 
                    color: 'var(--foreground)', 
                    marginBottom: '1rem',
                    lineHeight: '1.2' 
                }}>
                  {post.title}
                </h2>
              </Link>
              
              <p style={{ 
                  color: 'var(--muted)', 
                  marginBottom: '1.5rem', 
                  fontSize: '1.05rem', 
                  lineHeight: '1.6',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
              }}>
                {post.excerpt}
              </p>
 
              <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1.25rem',
                  fontSize: '0.9rem',
                  color: 'var(--muted)'
              }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} style={{ opacity: 0.7 }}>#{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <span>{post.date}</span>
                   <span style={{ height: '4px', width: '4px', backgroundColor: 'var(--muted)', borderRadius: '50%', opacity: 0.3 }}></span>
                   <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
          
          <div style={{ 
              textAlign: 'center', 
              paddingTop: '3rem', 
              color: 'var(--muted)',
              borderTop: '1px solid var(--border)',
              marginTop: '2rem'
          }}>
            {results.length} artigo{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
          </div>
        </div>
      )}
    </div>
  );
}
