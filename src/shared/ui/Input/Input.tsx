'use client';

import { forwardRef, HTMLInputTypeAttribute, useId, useState } from 'react';
import type { InputHTMLAttributes, Ref } from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';
import { Button } from '../Button/Button';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    const { type } = props;
    const isPassword = type === 'password';
    const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(
      type ?? 'text'
    );

    const onToggle = () =>
      setInputType((prev) => (prev === 'password' ? 'text' : 'password'));

    return (
      <div className="relative">
        {label ? (
          <label htmlFor={id} className="mb-2 block text-sm font-medium">
            {label}
          </label>
        ) : null}

        {/* <input
          ref={ref}
          id={id}
          className="block w-full rounded-md border-2 border-secondary-700 bg-transparent p-2 text-sm shadow-sm outline-none focus:border-primary-500 dark:focus:border-primary-500"
          {...props}
          type={inputType}
        /> */}

        <input
          ref={ref}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type={inputType}
          {...props}
        />

        {isPassword ? (
          <Button
            type="button"
            onClick={onToggle}
            className="absolute bottom-[10px] right-2"
          >
            <EyeIcon className="h-5 w-5" aria-hidden="true" />
          </Button>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
