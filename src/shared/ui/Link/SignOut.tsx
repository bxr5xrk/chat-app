'use client';

import { signOut } from 'next-auth/react';
import { Button } from '../Button/Button';

export const SignOut = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};
