import ForgotPasswordForm from '@/components/Auth/ForgotPasswordForm';

export const metadata = {
  title: 'Forgot Password - Flashcards',
  description: 'Reset your Flashcards password',
};

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-indigo-50 to-blue-50 px-4 py-8">
      <ForgotPasswordForm />
    </div>
  );
}
