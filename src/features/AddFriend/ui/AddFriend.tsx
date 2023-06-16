'use client';

import { Button, Input } from '@/shared/ui';
import { FormEvent, useRef } from 'react';

export const AddFriend = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="max-w-sm">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Add friend by E-Mail
      </label>

      <div className="mt-2 flex gap-4">
        <Input
          required
          ref={emailRef}
          type="email"
          placeholder="you@example.com"
        />

        <Button type="submit">Add</Button>
      </div>
      {/* <p className="mt-1 text-sm text-red-600">{errors.email?.message}</p> */}
      {/* {showSuccessState ? (
        <p className="mt-1 text-sm text-green-600">Friend request sent!</p>
      ) : null} */}
    </form>
  );
};
