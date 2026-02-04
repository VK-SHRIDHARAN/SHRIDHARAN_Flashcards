import LoginForm from '@/components/Auth/LoginForm';

export const metadata = {
  title: 'Login - Flashcards',
  description: 'Login to your Flashcards account',
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-indigo-50 to-blue-50 px-4 py-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
        <p className="text-sm text-slate-600">Sign in to continue learning</p>
      </div>
      <LoginForm />
    </div>
  );
}
