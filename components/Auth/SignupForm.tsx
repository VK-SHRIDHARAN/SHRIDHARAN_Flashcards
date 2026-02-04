'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { button, input } from '@/ui/index';
import { SignupData } from '@/lib/types';

interface SignupFormProps {
  onSubmit?: (data: SignupData) => void;
}

export default function SignupForm({ onSubmit }: SignupFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<SignupData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Partial<SignupData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<SignupData> = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof SignupData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      onSubmit?.(formData);
      // Here you would typically send signup request to backend
      console.log('Signup attempt:', formData);
      setIsSubmitted(true);
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex w-full max-w-md flex-col gap-6 items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 animate-bounce">
          <svg className="h-8 w-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 text-center">Account Created!</h2>
        <p className="text-center text-sm text-slate-600">
          Welcome! Your account has been created successfully.
        </p>
        <p className="text-center text-xs text-slate-500">
          Redirecting to login in 2 seconds...
        </p>
        <div className="h-1 w-32 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 animate-pulse" style={{ animation: 'pulse 2s ease-in-out' }}></div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          className={input({ isError: !!errors.name })}
          disabled={isLoading}
        />
        {errors.name && (
          <p className="text-xs text-red-600">{errors.name}</p>
        )}
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
          value={formData.email}
          onChange={handleChange}
          className={input({ isError: !!errors.email })}
          disabled={isLoading}
        />
        {errors.email && (
          <p className="text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-slate-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          className={input({ isError: !!errors.password })}
          disabled={isLoading}
        />
        {errors.password && (
          <p className="text-xs text-red-600">{errors.password}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={input({ isError: !!errors.confirmPassword })}
          disabled={isLoading}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-red-600">{errors.confirmPassword}</p>
        )}
      </div>

      <button
        type="submit"
        className={button({ variant: 'primary', size: 'lg', isDisabled: isLoading })}
        disabled={isLoading}
      >
        {isLoading ? 'Creating account...' : 'Sign Up'}
      </button>

      <div className="flex items-center gap-2 text-sm text-slate-600">
        <span>Already have an account?</span>
        <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-700">
          Login
        </a>
      </div>
    </form>
  );
}
