'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { trackSearch } from '@/lib/analytics';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      trackSearch(query, 0); // 0 = not yet counted, will be tracked on results page
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
      setIsExpanded(false);
    } else if (!isExpanded && window.innerWidth <= 900) {
      setIsExpanded(true);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`search-bar-form ${isExpanded ? 'is-expanded' : ''}`}>
      <div className="search-bar-container">
        <input
          ref={inputRef}
          type="text"
          className="search-bar-input"
          placeholder="Buscar posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {isExpanded && window.innerWidth <= 900 ? (
          <button
            type="button"
            className="search-bar-btn"
            onClick={() => {
              setIsExpanded(false);
              setQuery('');
            }}
          >
            <X size={20} />
          </button>
        ) : (
          <button type="submit" className="search-bar-btn">
            <Search size={20} />
          </button>
        )}
      </div>
    </form>
  );
}
