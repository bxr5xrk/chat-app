import { authConfig } from '@/shared/lib';
import NextAuth from 'next-auth/next';

export default NextAuth(authConfig);
