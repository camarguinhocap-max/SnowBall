'use client';

import { Suspense } from 'react';
import SearchResults from '@/components/SearchResults';

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Carregando...</div>}>
      <SearchResults />
    </Suspense>
  );
}
