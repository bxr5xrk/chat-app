'use client';

import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface ToastProps {
  children: ReactNode;
}

export const Toast = ({ children }: ToastProps) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  );
};
