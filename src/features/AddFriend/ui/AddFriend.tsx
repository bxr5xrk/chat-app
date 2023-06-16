'use client';

import { Button, Input } from '@/shared/ui';
import { FormEvent, useEffect, useRef } from 'react';
import { useAddFriend } from '../model/api/friendsService';

export const AddFriend = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const { mutate: onAdd, isSuccess, error } = useAddFriend();
  const errorRef = useRef<HTMLParagraphElement>(null);
  const successRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (errorRef.current && error) {
      errorRef.current.classList.remove('hidden');

      const timer = setTimeout(() => {
        if (errorRef.current) {
          errorRef.current.classList.add('hidden');
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    if (successRef.current && isSuccess) {
      successRef.current.classList.remove('hidden');

      const timer = setTimeout(() => {
        if (successRef.current) {
          successRef.current.classList.add('hidden');
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailRef.current) {
      const email = emailRef.current.value;

      onAdd({
        email,
      });

      emailRef.current.value = '';
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-sm">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Add friend by E-Mail
      </label>

      <div className="mt-2 flex gap-4 items-center">
        <Input
          required
          ref={emailRef}
          type="email"
          placeholder="you@example.com"
        />

        <Button type="submit">Add</Button>
      </div>

      <p ref={errorRef} className="hidden mt-1 text-sm text-red-600">
        {error ? (error as { data: string }).data : null}
      </p>
      <p ref={successRef} className="hidden mt-1 text-sm text-green-600">
        Friend request sent!
      </p>
    </form>
  );
};
