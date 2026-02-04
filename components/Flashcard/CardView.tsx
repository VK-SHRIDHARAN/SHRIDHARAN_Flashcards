'use client';

import { useState, useEffect } from 'react';
import { Flashcard } from '@/lib/types';
import { button, card } from '@/ui/index';
import Link from 'next/link';

interface CardViewProps {
  deckId?: string;
  level?: string;
}

// Mock cards data
const mockCards: Flashcard[] = [
  {
    id: '1',
    question: 'What is the capital of Japan?',
    answer: 'Tokyo',
    difficulty: 'easy',
    deckId: '1',
  },
  {
    id: '2',
    question: 'What is 2 + 2?',
    answer: '4',
    difficulty: 'easy',
    deckId: '1',
  },
  {
    id: '3',
    question: 'How many continents are there?',
    answer: '7',
    difficulty: 'medium',
    deckId: '1',
  },
  {
    id: '4',
    question: 'What is the chemical symbol for Gold?',
    answer: 'Au',
    difficulty: 'hard',
    deckId: '1',
  },
  {
    id: '5',
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter',
    difficulty: 'medium',
    deckId: '1',
  },
];

export default function CardView({ deckId = '1', level = 'all' }: CardViewProps) {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    let filteredCards = mockCards;
    if (level !== 'all') {
      filteredCards = mockCards.filter(c => c.difficulty === level);
    }
    setCards(filteredCards);
  }, [level]);

  if (cards.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-50 to-slate-100 px-4">
        <p className="text-slate-600">No cards found for this level.</p>
        <Link href="/flashcard/deck-menu" className={button({ variant: 'primary', size: 'md' })}>
          Back to Decks
        </Link>
      </div>
    );
  }

  const currentCard = cards[currentIndex];
  const progress = Math.round(((currentIndex + 1) / cards.length) * 100);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleCorrect = () => {
    setCorrectCount(correctCount + 1);
    handleNext();
  };

  const handleFinish = () => {
    // Here you could navigate to a results page
    console.log(`Finished! Correct: ${correctCount}/${cards.length}`);
  };

  const isLastCard = currentIndex === cards.length - 1;

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-8 md:px-8">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/flashcard/levels" className="mb-2 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
            <span>←</span>
            <span>Back</span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Study Cards</h1>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600">
            Card {currentIndex + 1} of {cards.length}
          </p>
          <p className="text-sm font-medium text-indigo-600">
            Correct: {correctCount}/{cards.length}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full bg-indigo-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Card display */}
      <div className="flex flex-col items-center justify-center gap-8">
        <div
          className={`w-full max-w-md cursor-pointer perspective transition-all duration-300 ${
            isFlipped ? 'scale-95' : 'scale-100'
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className={card({ variant: 'elevated' }) + ' min-h-64 flex flex-col items-center justify-center gap-4 p-8 text-center'}
          >
            <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {isFlipped ? 'Answer' : 'Question'}
            </span>
            <p className="text-xl font-semibold text-slate-900 md:text-2xl">
              {isFlipped ? currentCard.answer : currentCard.question}
            </p>
            <span className="text-xs text-slate-400">(Click to {isFlipped ? 'show' : 'hide'})</span>
          </div>
        </div>

        {/* Difficulty indicator */}
        <div>
          <span
            className="rounded-full px-4 py-2 text-xs font-medium"
            style={{
              backgroundColor: currentCard.difficulty === 'easy' ? '#d1fae5' : currentCard.difficulty === 'medium' ? '#fef3c7' : '#fee2e2',
              color: currentCard.difficulty === 'easy' ? '#047857' : currentCard.difficulty === 'medium' ? '#b45309' : '#991b1b',
            }}
          >
            {currentCard.difficulty.charAt(0).toUpperCase() + currentCard.difficulty.slice(1)}
          </span>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4 w-full max-w-md md:flex-row">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={button({
              variant: 'secondary',
              size: 'md',
              isDisabled: currentIndex === 0,
            })}
          >
            ← Previous
          </button>

          <button
            onClick={handleCorrect}
            className={button({ variant: 'primary', size: 'md' })}
          >
            ✓ Correct
          </button>

          <button
            onClick={handleNext}
            disabled={isLastCard}
            className={button({
              variant: 'secondary',
              size: 'md',
              isDisabled: isLastCard,
            })}
          >
            Next →
          </button>
        </div>

        {/* Finish button */}
        {isLastCard && (
          <button
            onClick={handleFinish}
            className={button({ variant: 'primary', size: 'lg' })}
          >
            Finish Study Session
          </button>
        )}
      </div>
    </div>
  );
}
