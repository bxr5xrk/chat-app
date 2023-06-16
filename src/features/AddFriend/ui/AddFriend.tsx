'use client';

import { Button, Input, Paragraph } from '@/shared/ui';
import { FormEvent, useRef } from 'react';
import { useAddFriend } from '../model/api/friendsService';

export const AddFriend = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const { mutate: onAdd, isSuccess, error, isLoading } = useAddFriend();

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

        <Button type="submit" isLoading={isLoading}>Add</Button>
      </div>

      <Paragraph theme="error" className="mt-1" monitor={!!error}>
        {error ? (error as { data: string }).data : null}
      </Paragraph>

      <Paragraph theme="success" className="mt-1" monitor={isSuccess}>
        Friend request sent!
      </Paragraph>
    </form>
  );
};
