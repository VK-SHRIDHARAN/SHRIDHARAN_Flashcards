'use client';

import { useState, useEffect } from 'react';
import { Deck } from '@/lib/types';
import { card, button } from '@/ui/index';
import Link from 'next/link';

interface DeckMenuProps {
  onSelectDeck?: (deckId: string) => void;
}

// Mock data for decks
const mockDecks: Deck[] = [
  {
    id: '1',
    title: 'Japanese Hiragana',
    description: 'Learn basic Japanese hiragana characters',
    cards: Array(15).fill(null).map((_, i) => ({
      id: `card-${i}`,
      question: `Hiragana ${i + 1}`,
      answer: `Answer ${i + 1}`,
      difficulty: i % 3 === 0 ? 'easy' : i % 3 === 1 ? 'medium' : 'hard',
      deckId: '1',
    })),
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Japanese Katakana',
    description: 'Master katakana characters',
    cards: Array(12).fill(null).map((_, i) => ({
      id: `card-${i}`,
      question: `Katakana ${i + 1}`,
      answer: `Answer ${i + 1}`,
      difficulty: i % 3 === 0 ? 'easy' : i % 3 === 1 ? 'medium' : 'hard',
      deckId: '2',
    })),
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: '3',
    title: 'Basic Japanese Kanji',
    description: 'Introduction to kanji characters',
    cards: Array(20).fill(null).map((_, i) => ({
      id: `card-${i}`,
      question: `Kanji ${i + 1}`,
      answer: `Answer ${i + 1}`,
      difficulty: i % 3 === 0 ? 'easy' : i % 3 === 1 ? 'medium' : 'hard',
      deckId: '3',
    })),
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-25'),
  },
];

export default function DeckMenu({ onSelectDeck }: DeckMenuProps) {
  const [decks, setDecks] = useState<Deck[]>([]);

  useEffect(() => {
    // Simulate loading decks
    setDecks(mockDecks);
  }, []);

  const handleSelectDeck = (deckId: string) => {
    onSelectDeck?.(deckId);
  };

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-8 md:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">My Decks</h1>
          <p className="text-sm text-slate-600 md:text-base">Select a deck to start learning</p>
        </div>
        <Link href="/flashcard/deck" className={button({ variant: 'primary', size: 'lg' })}>
          Create Deck
        </Link>
      </div>

      {decks.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-slate-300 py-12">
          <p className="text-slate-600">No decks found. Create your first deck!</p>
          <Link href="/flashcard/deck" className={button({ variant: 'primary', size: 'lg' })}>
            Create New Deck
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {decks.map((deck) => (
            <Link
              key={deck.id}
              href={`/flashcard/levels?deckId=${deck.id}`}
              className={card({ variant: 'interactive' })}
              onClick={() => handleSelectDeck(deck.id)}
            >
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{deck.title}</h3>
                  <p className="text-sm text-slate-600">{deck.description}</p>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{deck.cards.length} cards</span>
                  <span>Updated {new Date(deck.updatedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex gap-2">
                  {['easy', 'medium', 'hard'].map((level) => {
                    const count = deck.cards.filter(c => c.difficulty === level).length;
                    return (
                      <span
                        key={level}
                        className="rounded px-2 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: level === 'easy' ? '#d1fae5' : level === 'medium' ? '#fef3c7' : '#fee2e2',
                          color: level === 'easy' ? '#047857' : level === 'medium' ? '#b45309' : '#991b1b',
                        }}
                      >
                        {level}: {count}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
