'use client';

import { useState } from 'react';
import { Level } from '@/lib/types';
import { card, button } from '@/ui/index';
import Link from 'next/link';

interface LevelsListProps {
  deckId?: string;
  level?: string;
  onSelectLevel?: (level: Level) => void;
}

const levels: Level[] = [
  {
    id: 'easy',
    name: 'easy',
    label: 'Easy',
    description: 'Perfect for beginners. Build your foundation with the basics.',
    color: 'from-emerald-400 to-teal-500',
    cardsCount: 5,
  },
  {
    id: 'medium',
    name: 'medium',
    label: 'Medium',
    description: 'Challenge yourself. Master intermediate concepts.',
    color: 'from-amber-400 to-orange-500',
    cardsCount: 8,
  },
  {
    id: 'hard',
    name: 'hard',
    label: 'Hard',
    description: 'Expert level. Push your limits and achieve mastery.',
    color: 'from-rose-400 to-red-500',
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
    <div className="flex min-h-screen flex-col gap-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-8 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link 
            href="/flashcard/deck-menu" 
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-slate-100 transition-colors shadow-sm"
          >
            <span className="text-lg">←</span>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Select Difficulty</h1>
            <p className="text-sm text-slate-600 md:text-base">Choose your learning challenge level</p>
          </div>
        </div>
      </div>

      {/* Level Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {levels.map((level, index) => (
          <Link
            key={level.id}
            href={`/flashcard/card?deckId=${deckId}&level=${level.name}`}
            className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            onClick={() => handleSelectLevel(level)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            <div className={`${card({ variant: 'elevated' })} relative bg-gradient-to-br ${level.color} text-white p-8 h-full flex flex-col gap-4`}>
              {/* Number Badge */}
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold opacity-20">{String(index + 1).padStart(2, '0')}</div>
                <div className="text-right">
                  {level.name === 'easy' && <span className="text-3xl">🌱</span>}
                  {level.name === 'medium' && <span className="text-3xl">🔥</span>}
                  {level.name === 'hard' && <span className="text-3xl">⚡</span>}
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl font-bold mb-1">{level.label}</h3>
                <p className="text-sm opacity-90">{level.description}</p>
              </div>

              {/* Card Count */}
              <div className="mt-auto pt-4 border-t border-white border-opacity-20 flex items-center justify-between">
                <span className="text-sm font-medium opacity-80">
                  {level.cardsCount} cards available
                </span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Study All Option */}
      <div className={`${card({ variant: 'default' })} bg-gradient-to-r from-indigo-50 to-blue-50 p-8 border-2 border-dashed border-indigo-300`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Ready for a Real Challenge?</h3>
            <p className="text-sm text-slate-600">Study all difficulty levels together to maximize your learning.</p>
          </div>
          <Link
            href={`/flashcard/card?deckId=${deckId}&level=all`}
            className={button({ variant: 'primary', size: 'lg' })}
          >
            Study All Levels
          </Link>
        </div>
      </div>

      {/* Tips Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className={`${card({ variant: 'default' })} bg-emerald-50 border-l-4 border-emerald-500`}>
          <div className="flex gap-3">
            <span className="text-2xl">🌱</span>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Easy Level</h4>
              <p className="text-xs text-slate-600">Start here if you're new. Build confidence with fundamental concepts.</p>
            </div>
          </div>
        </div>

        <div className={`${card({ variant: 'default' })} bg-amber-50 border-l-4 border-amber-500`}>
          <div className="flex gap-3">
            <span className="text-2xl">🔥</span>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Medium Level</h4>
              <p className="text-xs text-slate-600">Intermediate concepts. Strengthen your knowledge and skills.</p>
            </div>
          </div>
        </div>

        <div className={`${card({ variant: 'default' })} bg-rose-50 border-l-4 border-rose-500`}>
          <div className="flex gap-3">
            <span className="text-2xl">⚡</span>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Hard Level</h4>
              <p className="text-xs text-slate-600">Advanced material. Achieve mastery and deep understanding.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/flashcard/deck-menu" className={button({ variant: 'secondary', size: 'lg' })}>
          ← Back to Decks
        </Link>
      </div>
    </div>
  );
}
