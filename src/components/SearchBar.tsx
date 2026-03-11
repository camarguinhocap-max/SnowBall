'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-sm">
      <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600">
        <input
          type="text"
          placeholder="Buscar posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
        />
        <button
          type="submit"
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
}
