// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordData {
  email: string;
}

// Flashcard related types
export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  deckId: string;
}

export interface Deck {
  id: string;
  title: string;
  description: string;
  cards: Flashcard[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Level {
  id: string;
  name: 'easy' | 'medium' | 'hard';
  label: string;
  description: string;
  color: string;
  cardsCount?: number;
}

export interface StudySession {
  deckId: string;
  currentCardIndex: number;
  level: 'easy' | 'medium' | 'hard';
  correctCount: number;
  totalCount: number;
}
