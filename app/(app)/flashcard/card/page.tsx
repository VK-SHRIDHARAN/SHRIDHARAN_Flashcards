'use client';

import { Suspense } from 'react';
import CardView from '@/components/Flashcard/CardView';

function CardContent({ searchParams }: { searchParams: { deckId?: string; level?: string } }) {
  return (
    <CardView
      deckId={searchParams.deckId}
      level={searchParams.level}
    />
  );
}

export default function CardPage({
  searchParams,
}: {
  searchParams: { deckId?: string; level?: string };
}) {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
      <CardContent searchParams={searchParams} />
    </Suspense>
  );
}
