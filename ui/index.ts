import { tv } from 'tailwind-variants';

export const button = tv({
  base: 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    variant: {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
      secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-400',
      ghost: 'text-slate-700 hover:bg-slate-100 focus:ring-slate-300',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
    isDisabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export const input = tv({
  base: 'w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-base text-slate-900 placeholder-slate-500 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200',
  variants: {
    isError: {
      true: 'border-red-500 focus:border-red-500 focus:ring-red-200',
    },
    isDisabled: {
      true: 'bg-slate-100 cursor-not-allowed opacity-50',
    },
  },
});

export const card = tv({
  base: 'rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md',
  variants: {
    variant: {
      default: 'border-slate-200',
      elevated: 'border-slate-300 shadow-md hover:shadow-lg',
      interactive: 'cursor-pointer hover:border-indigo-300 hover:bg-indigo-50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
