import { request } from '@/shared/lib';
import { useMutation } from '@tanstack/react-query';

const addFriend = ({ email }: { email: string }) =>
  request({
    url: 'friends/add',
    method: 'POST',
    data: {
      email,
    },
  });

export const useAddFriend = () =>
  useMutation({
    mutationFn: addFriend,
  });
