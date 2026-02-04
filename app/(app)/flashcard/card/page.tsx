import { Suspense } from 'react';
import CardView from '@/components/Flashcard/CardView';

type Props = {
  searchParams: Promise<{ deckId?: string; level?: string }>;
};

async function CardContent({ searchParams }: { searchParams: Promise<{ deckId?: string; level?: string }> }) {
  const params = await searchParams;
  return (
    <CardView
      deckId={params.deckId}
      level={params.level}
    />
  );
}

export default function CardPage({ searchParams }: Props) {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-lg font-semibold">Loading flashcards...</div>}>
      <CardContent searchParams={searchParams} />
    </Suspense>
  );
}
