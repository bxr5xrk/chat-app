'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../Button/Button';

interface LinkProps {
  path: string;
}

export const Link = ({ path }: LinkProps) => {
  const router = useRouter();
  return <Button onClick={() => router.push(path)}>Log In</Button>;
};
