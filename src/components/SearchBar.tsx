'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { trackSearch } from '@/lib/analytics';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      trackSearch(query, 0); // 0 = not yet counted, will be tracked on results page
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: '400px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '0.5rem 1rem'
      }}>
        <input
          type="text"
          placeholder="Buscar posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--foreground)',
            fontSize: '0.95rem',
          }}
        />
        <button
          type="submit"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem'
          }}
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
}
