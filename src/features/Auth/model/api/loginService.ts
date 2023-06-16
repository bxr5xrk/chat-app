import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export const useGoogleLogin = () =>
  useMutation({
    mutationFn: () => signIn('google'),
    onError: () => {
      toast.error('Something went wrong with your login.');
    },
  });
