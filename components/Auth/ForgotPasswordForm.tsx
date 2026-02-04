'use client';

import { useState } from 'react';
import { button, input } from '@/ui/index';
import { ForgotPasswordData } from '@/lib/types';

interface ForgotPasswordFormProps {
  onSubmit?: (data: ForgotPasswordData) => void;
}

export default function ForgotPasswordForm({ onSubmit }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    if (!email) {
      setErrors('Email is required');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors('Invalid email format');
      return false;
    }

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors) {
      setErrors('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      onSubmit?.({ email });
      // Here you would typically send password reset request to backend
      console.log('Password reset requested for:', email);
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex w-full max-w-md flex-col gap-6 items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-slate-900">Check your email</h2>
        <p className="text-center text-sm text-slate-600">
          We've sent password reset instructions to {email}
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setEmail('');
          }}
          className={button({ variant: 'secondary', size: 'lg' })}
        >
          Back to forgot password
        </button>
        <a href="/login" className="text-sm text-indigo-600 hover:text-indigo-700">
          Back to login
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-slate-900">Forgot Password?</h1>
        <p className="text-sm text-slate-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={handleChange}
          className={input({ isError: !!errors })}
          disabled={isLoading}
        />
        {errors && (
          <p className="text-xs text-red-600">{errors}</p>
        )}
      </div>

      <button
        type="submit"
        className={button({ variant: 'primary', size: 'lg', isDisabled: isLoading })}
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Reset Link'}
      </button>

      <a href="/login" className="text-center text-sm text-indigo-600 hover:text-indigo-700">
        Back to login
      </a>
    </form>
  );
}
