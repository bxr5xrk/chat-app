import { cl } from '@/shared/lib';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Spinner } from '../Spinner';
import {
  DEFAULT_SIZE,
  DEFAULT_THEME,
  SIZE_OPTIONS,
  THEME_OPTIONS,
} from './config';
import { Size, Theme } from './types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: Size;
  theme?: Theme;
  isLoading?: boolean;
  className?: string;
}

export const Button = ({
  children,
  size = DEFAULT_SIZE,
  theme = DEFAULT_THEME,
  isLoading,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cl(
        SIZE_OPTIONS[size],
        THEME_OPTIONS[theme],
        'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        className
      )}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
