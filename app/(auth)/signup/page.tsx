import SignupForm from '@/components/Auth/SignupForm';

export const metadata = {
  title: 'Sign Up - Flashcards',
  description: 'Create a new Flashcards account',
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-indigo-50 to-blue-50 px-4 py-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-slate-900">Join Us</h1>
        <p className="text-sm text-slate-600">Create an account to start learning</p>
      </div>
      <SignupForm />
    </div>
  );
}
