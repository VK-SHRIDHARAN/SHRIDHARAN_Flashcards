'use client';

import { useState } from 'react';
import { Deck, Flashcard } from '@/lib/types';
import { button, input, card } from '@/ui/index';
import Link from 'next/link';

interface DeckManagementProps {
  onSaveDeck?: (deck: Deck) => void;
}

export default function DeckManagement({ onSaveDeck }: DeckManagementProps) {
  const [deckTitle, setDeckTitle] = useState('');
  const [deckDescription, setDeckDescription] = useState('');
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [newCard, setNewCard] = useState({ question: '', answer: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!deckTitle.trim()) {
      newErrors.title = 'Deck title is required';
    }

    if (cards.length === 0) {
      newErrors.cards = 'Add at least one card to the deck';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddCard = () => {
    if (!newCard.question.trim() || !newCard.answer.trim()) {
      alert('Please fill in both question and answer');
      return;
    }

    const card: Flashcard = {
      id: `card-${Date.now()}`,
      question: newCard.question,
      answer: newCard.answer,
      difficulty: 'medium',
      deckId: 'new-deck',
    };

    setCards([...cards, card]);
    setNewCard({ question: '', answer: '' });
  };

  const handleRemoveCard = (id: string) => {
    setCards(cards.filter(c => c.id !== id));
  };

  const handleSaveDeck = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSaving(true);
    try {
      const newDeck: Deck = {
        id: `deck-${Date.now()}`,
        title: deckTitle,
        description: deckDescription,
        cards: cards,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      onSaveDeck?.(newDeck);
      console.log('Deck saved:', newDeck);
      // Here you would typically send the deck to the backend
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-8 md:px-8">
      <div>
        <Link href="/flashcard/deck-menu" className="mb-4 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
          <span>←</span>
          <span>Back to Decks</span>
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Create New Deck</h1>
        <p className="text-sm text-slate-600 md:text-base">Build your custom flashcard deck</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Deck Details */}
        <div className={card({ variant: 'elevated' }) + ' flex flex-col gap-6'}>
          <h2 className="text-xl font-semibold text-slate-900">Deck Details</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-medium text-slate-700">
              Deck Title *
            </label>
            <input
              type="text"
              id="title"
              placeholder="e.g., Japanese Hiragana"
              value={deckTitle}
              onChange={(e) => {
                setDeckTitle(e.target.value);
                if (errors.title) setErrors({ ...errors, title: '' });
              }}
              className={input({ isError: !!errors.title })}
              disabled={isSaving}
            />
            {errors.title && (
              <p className="text-xs text-red-600">{errors.title}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm font-medium text-slate-700">
              Description (Optional)
            </label>
            <textarea
              id="description"
              placeholder="Add a description for your deck..."
              value={deckDescription}
              onChange={(e) => setDeckDescription(e.target.value)}
              rows={4}
              className={input() + ' resize-none'}
              disabled={isSaving}
            />
          </div>

          <div className="rounded-lg bg-blue-50 p-3 text-sm text-blue-700">
            <p className="font-medium">Total Cards: {cards.length}</p>
          </div>
        </div>

        {/* Add Card Form */}
        <div className={card({ variant: 'elevated' }) + ' flex flex-col gap-6'}>
          <h2 className="text-xl font-semibold text-slate-900">Add Cards</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="question" className="text-sm font-medium text-slate-700">
              Question
            </label>
            <input
              type="text"
              id="question"
              placeholder="Enter question..."
              value={newCard.question}
              onChange={(e) => setNewCard({ ...newCard, question: e.target.value })}
              className={input()}
              disabled={isSaving}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="answer" className="text-sm font-medium text-slate-700">
              Answer
            </label>
            <textarea
              id="answer"
              placeholder="Enter answer..."
              value={newCard.answer}
              onChange={(e) => setNewCard({ ...newCard, answer: e.target.value })}
              rows={4}
              className={input() + ' resize-none'}
              disabled={isSaving}
            />
          </div>

          <button
            onClick={handleAddCard}
            className={button({ variant: 'secondary', size: 'md' })}
            disabled={isSaving}
          >
            + Add Card
          </button>
        </div>
      </div>

      {/* Cards List */}
      {cards.length > 0 && (
        <div className={card({ variant: 'elevated' }) + ' flex flex-col gap-6'}>
          <h2 className="text-xl font-semibold text-slate-900">Cards ({cards.length})</h2>
          <div className="flex flex-col gap-3 max-h-96 overflow-y-auto">
            {cards.map((card, index) => (
              <div key={card.id} className="border border-slate-200 rounded-lg p-4 flex justify-between items-start gap-4 hover:bg-slate-50">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-500 mb-1">Card {index + 1}</p>
                  <p className="font-medium text-slate-900 mb-1 truncate">{card.question}</p>
                  <p className="text-sm text-slate-600 truncate">{card.answer}</p>
                </div>
                <button
                  onClick={() => handleRemoveCard(card.id)}
                  className={button({ variant: 'danger', size: 'sm' })}
                  disabled={isSaving}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {errors.cards && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          {errors.cards}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 md:flex-row">
        <button
          onClick={handleSaveDeck}
          className={button({ variant: 'primary', size: 'lg', isDisabled: isSaving })}
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : 'Save Deck'}
        </button>
        <Link href="/flashcard/deck-menu" className={button({ variant: 'secondary', size: 'lg' })}>
          Cancel
        </Link>
      </div>
    </div>
  );
}
