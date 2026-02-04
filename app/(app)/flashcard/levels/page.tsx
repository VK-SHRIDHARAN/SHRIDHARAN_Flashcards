import { Suspense } from 'react';
import LevelsList from '@/components/Flashcard/LevelsList';

type Props = {
  searchParams: Promise<{ deckId?: string }>;
};

async function LevelsContent({ searchParams }: { searchParams: Promise<{ deckId?: string }> }) {
  const params = await searchParams;
  return <LevelsList deckId={params.deckId} />;
}

export default function LevelsPage({ searchParams }: Props) {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-lg font-semibold text-slate-600">Loading difficulty levels...</div>}>
      <LevelsContent searchParams={searchParams} />
    </Suspense>
  );
}
