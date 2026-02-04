'use client';

import { useState } from 'react';
import { Level } from '@/lib/types';
import { card, button } from '@/ui/index';
import Link from 'next/link';

interface LevelsListProps {
  deckId?: string;
  onSelectLevel?: (level: Level) => void;
}

const levels: Level[] = [
  {
    id: 'easy',
    name: 'easy',
    label: 'Easy',
    description: 'Start with the basics',
    color: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
    cardsCount: 5,
  },
  {
    id: 'medium',
    name: 'medium',
    label: 'Medium',
    description: 'Challenge yourself',
    color: 'bg-amber-100 text-amber-700 hover:bg-amber-200',
    cardsCount: 8,
  },
  {
    id: 'hard',
    name: 'hard',
    label: 'Hard',
    description: 'Master the material',
    color: 'bg-rose-100 text-rose-700 hover:bg-rose-200',
    cardsCount: 7,
  },
];

export default function LevelsList({ deckId = '1', onSelectLevel }: LevelsListProps) {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const handleSelectLevel = (level: Level) => {
    setSelectedLevel(level.id);
    onSelectLevel?.(level);
  };

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-8 md:px-8">
      <div>
        <Link href="/flashcard/deck-menu" className="mb-4 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
          <span>←</span>
          <span>Back to Decks</span>
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Select Difficulty Level</h1>
        <p className="text-sm text-slate-600 md:text-base">Choose your learning level to get started</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {levels.map((level) => (
          <Link
            key={level.id}
            href={`/flashcard/card?deckId=${deckId}&level=${level.name}`}
            className={card({ variant: 'interactive' })}
            onClick={() => handleSelectLevel(level)}
          >
            <div className="flex flex-col gap-4">
              <div className={`rounded-lg p-4 text-center ${level.color}`}>
                <h3 className="text-2xl font-bold">{level.label}</h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-slate-600">{level.description}</p>
                <span className="text-xs font-medium text-slate-500">
                  {level.cardsCount} cards available
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-slate-900">All Levels</h2>
        <div className="flex flex-col gap-2 md:flex-row">
          <Link
            href={`/flashcard/card?deckId=${deckId}&level=all`}
            className={button({ variant: 'secondary', size: 'md' })}
          >
            Study All Levels
          </Link>
          <Link href="/flashcard/deck-menu" className={button({ variant: 'ghost', size: 'md' })}>
            Back to Decks
          </Link>
        </div>
      </div>
    </div>
  );
}
