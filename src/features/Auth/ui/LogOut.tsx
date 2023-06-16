'use client';

import { Button } from '@/shared/ui';
import { signOut } from 'next-auth/react';

export const LogOut = () => {
  return (
    <Button theme="ghost" onClick={() => signOut()}>
      Sign Out
    </Button>
  );
};
