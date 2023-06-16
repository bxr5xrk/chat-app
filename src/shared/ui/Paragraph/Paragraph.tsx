'use client';

import { cl } from '@/shared/lib';
import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { DEFAULT_DURATION, DEFAULT_THEME, THEME_OPTIONS } from './config';
import { Theme } from './types';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  duration?: number;
  theme?: Theme;
  monitor?: boolean;
  className?: string;
}

export const Paragraph = ({
  children,
  duration = DEFAULT_DURATION,
  theme = DEFAULT_THEME,
  monitor,
  className,
  ...props
}: ParagraphProps) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (paragraphRef.current && monitor) {
      paragraphRef.current.classList.remove('hidden');

      const timer = setTimeout(() => {
        if (paragraphRef.current) {
          paragraphRef.current.classList.add('hidden');
        }
      }, duration);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monitor]);

  return (
    <p
      className={cl(
        monitor !== undefined ? 'hidden' : '',
        THEME_OPTIONS[theme],
        className
      )}
      ref={paragraphRef}
      {...props}
    >
      {children}
    </p>
  );
};
