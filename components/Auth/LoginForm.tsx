'use client';

import { useState } from 'react';
import { button, input } from '@/ui/index';
import { LoginCredentials } from '@/lib/types';

interface LoginFormProps {
  onSubmit?: (credentials: LoginCredentials) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginCredentials>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginCredentials> = {};

    if (!credentials.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!credentials.password) {
      newErrors.password = 'Password is required';
    } else if (credentials.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof LoginCredentials]) {
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
      onSubmit?.(credentials);
      // Here you would typically send login request to backend
      console.log('Login attempt:', credentials);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          value={credentials.email}
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
          value={credentials.password}
          onChange={handleChange}
          className={input({ isError: !!errors.password })}
          disabled={isLoading}
        />
        {errors.password && (
          <p className="text-xs text-red-600">{errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className={button({ variant: 'primary', size: 'md', isDisabled: isLoading })}
        disabled={isLoading}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      <div className="flex items-center gap-2 text-sm text-slate-600">
        <span>Don't have an account?</span>
        <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-700">
          Sign up
        </a>
      </div>

      <a
        href="/forgot-password"
        className="text-sm text-indigo-600 hover:text-indigo-700"
      >
        Forgot password?
      </a>
    </form>
  );
}
