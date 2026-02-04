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
  const [answered, setAnswered] = useState<Set<string>>(new Set());

  useEffect(() => {
    let filteredCards = mockCards;
    if (level && level !== 'all') {
      filteredCards = mockCards.filter(c => c.difficulty === level);
    }
    setCards(filteredCards);
  }, [level]);

  if (cards.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-50 to-slate-100 px-4">
        <div className="text-center">
          <p className="text-lg text-slate-600 mb-2">No cards found for this level.</p>
          <p className="text-sm text-slate-500">Try a different difficulty level or deck.</p>
        </div>
        <Link href="/flashcard/deck-menu" className={button({ variant: 'primary', size: 'lg' })}>
          Back to Decks
        </Link>
      </div>
    );
  }

  const currentCard = cards[currentIndex];
  const progress = Math.round(((currentIndex + 1) / cards.length) * 100);
  const isAnswered = answered.has(currentCard.id);
  const isLastCard = currentIndex === cards.length - 1;

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
    setAnswered(new Set([...answered, currentCard.id]));
    handleNext();
  };

  const handleSkip = () => {
    setAnswered(new Set([...answered, currentCard.id]));
    handleNext();
  };

  const handleFinish = () => {
    console.log(`Finished! Correct: ${correctCount}/${cards.length}`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-emerald-100 text-emerald-700 border border-emerald-300';
      case 'medium':
        return 'bg-amber-100 text-amber-700 border border-amber-300';
      case 'hard':
        return 'bg-rose-100 text-rose-700 border border-rose-300';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-8 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link 
            href="/flashcard/levels" 
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-slate-100 transition-colors shadow-sm"
          >
            <span className="text-lg">←</span>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Study Mode</h1>
            <p className="text-sm text-slate-600">Master your learning</p>
          </div>
        </div>
        <div className="flex gap-4 text-center sm:text-right">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-xs text-slate-500 uppercase tracking-wider">Card</p>
            <p className="text-lg font-bold text-indigo-600">{currentIndex + 1}/{cards.length}</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-xs text-slate-500 uppercase tracking-wider">Correct</p>
            <p className="text-lg font-bold text-emerald-600">{correctCount}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 shadow-sm">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs font-medium text-slate-600 text-center">{progress}% Complete</p>
      </div>

      {/* Main Card Container */}
      <div className="flex flex-col items-center justify-center gap-8 flex-1">
        {/* Flashcard */}
        <div
          className="w-full max-w-2xl cursor-pointer perspective transition-transform duration-300 hover:scale-105"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className={`${card({ variant: 'elevated' })} min-h-72 md:min-h-80 flex flex-col items-center justify-center gap-6 p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-white to-slate-50`}
          >
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 right-10 w-40 h-40 bg-indigo-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="mb-4 inline-block">
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${getDifficultyColor(currentCard.difficulty)}`}>
                  {isFlipped ? '✓ Answer' : '? Question'}
                </span>
              </div>
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                {isFlipped ? currentCard.answer : currentCard.question}
              </p>

              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <span className="text-lg">👆</span>
                <span>Click to {isFlipped ? 'reveal question' : 'see answer'}</span>
              </div>
            </div>

            {/* Side indicator */}
            <div className="absolute top-4 right-4 text-3xl opacity-10">
              {isFlipped ? '✓' : '?'}
            </div>
          </div>
        </div>

        {/* Difficulty Badge */}
        <div className="flex gap-2 items-center">
          <span className="text-xs text-slate-500 font-medium">Difficulty:</span>
          <span className={`px-4 py-2 rounded-full font-semibold text-sm ${getDifficultyColor(currentCard.difficulty)}`}>
            {currentCard.difficulty.charAt(0).toUpperCase() + currentCard.difficulty.slice(1)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-2xl md:flex-row md:gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={button({
              variant: 'ghost',
              size: 'md',
              isDisabled: currentIndex === 0,
            })}
          >
            ← Previous
          </button>

          {!isAnswered ? (
            <>
              <button
                onClick={handleCorrect}
                className={button({ variant: 'primary', size: 'md' })}
              >
                ✓ Correct
              </button>

              <button
                onClick={handleSkip}
                className={button({ variant: 'secondary', size: 'md' })}
              >
                ⊘ Skip
              </button>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-100 text-emerald-700 font-medium">
                <span>✓</span>
                <span>Answered</span>
              </div>
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={isLastCard}
            className={button({
              variant: 'ghost',
              size: 'md',
              isDisabled: isLastCard,
            })}
          >
            Next →
          </button>
        </div>

        {/* Finish Button */}
        {isLastCard && (
          <button
            onClick={handleFinish}
            className={button({ variant: 'primary', size: 'lg' })}
          >
            🎉 Finish Study Session
          </button>
        )}

        {/* Stats Summary */}
        <div className={`${card({ variant: 'default' })} w-full max-w-2xl bg-gradient-to-r from-blue-50 to-indigo-50`}>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-slate-600 font-medium mb-1">Total</p>
              <p className="text-2xl font-bold text-slate-900">{cards.length}</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 font-medium mb-1">Correct</p>
              <p className="text-2xl font-bold text-emerald-600">{correctCount}</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 font-medium mb-1">Accuracy</p>
              <p className="text-2xl font-bold text-indigo-600">
                {cards.length > 0 ? Math.round((correctCount / answered.size) * 100) || 0 : 0}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
