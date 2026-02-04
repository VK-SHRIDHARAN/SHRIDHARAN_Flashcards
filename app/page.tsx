import Link from 'next/link';
import { button } from '@/ui/index';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4 py-8">
      <div className="flex max-w-2xl flex-col items-center gap-6 text-center">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold text-slate-900 md:text-6xl">
            Welcome to Flashcards
          </h1>
          <p className="text-lg text-slate-600 md:text-xl">
            Master your learning with interactive flashcard decks. Study smarter, retain longer.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/login"
            className={button({ variant: 'primary', size: 'lg' })}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className={button({ variant: 'secondary', size: 'lg' })}
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid w-full max-w-4xl gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-3 text-3xl">📚</div>
          <h3 className="mb-2 text-lg font-semibold text-slate-900">Multiple Decks</h3>
          <p className="text-sm text-slate-600">Create and manage multiple flashcard decks for different subjects</p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-3 text-3xl">🎯</div>
          <h3 className="mb-2 text-lg font-semibold text-slate-900">Difficulty Levels</h3>
          <p className="text-sm text-slate-600">Study at your own pace with Easy, Medium, and Hard difficulty levels</p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-3 text-3xl">📊</div>
          <h3 className="mb-2 text-lg font-semibold text-slate-900">Track Progress</h3>
          <p className="text-sm text-slate-600">Monitor your learning progress and improve your retention</p>
        </div>
      </div>

      {/* Demo Link */}
      <div className="text-center">
        <p className="mb-2 text-sm text-slate-600">Want to explore without signing up?</p>
        <Link
          href="/flashcard/deck-menu"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Try Demo →
        </Link>
      </div>
    </div>
  );
}
