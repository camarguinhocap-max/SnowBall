import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchResults from '@/components/SearchResults';

export const metadata: Metadata = {
  title: 'Busca | Blog DividAI',
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Carregando...</div>}>
      <SearchResults />
    </Suspense>
  );
}
