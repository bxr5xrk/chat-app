import { authConfig } from '@/features/Auth/lib/authConfig';
import NextAuth from 'next-auth/next';

export default NextAuth(authConfig);
