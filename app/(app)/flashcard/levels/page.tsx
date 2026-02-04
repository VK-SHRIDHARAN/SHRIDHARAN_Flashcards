'use client';

import { Suspense } from 'react';
import LevelsList from '@/components/Flashcard/LevelsList';

function LevelsContent({ searchParams }: { searchParams: { deckId?: string } }) {
  return <LevelsList deckId={searchParams.deckId} />;
}

export default function LevelsPage({
  searchParams,
}: {
  searchParams: { deckId?: string };
}) {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
      <LevelsContent searchParams={searchParams} />
    </Suspense>
  );
}
