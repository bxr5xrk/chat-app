import { NextAuthOptions } from 'next-auth';
import { UpstashRedisAdapter } from '@next-auth/upstash-redis-adapter';
import GoogleProvider from 'next-auth/providers/google';
import { db } from '../../../shared/lib/db/db';
import { User } from '@/types/types';

export const authConfig: NextAuthOptions = {
  adapter: UpstashRedisAdapter(db),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = (await db.get('user:' + token.id)) as User | null;

      if (!dbUser) {
        token.id = user?.id;
        return token;
      }

      const { id, email, image, name } = dbUser;

      return {
        id,
        email,
        image,
        name,
      };
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image as string;
      }

      return session;
    },
    redirect() {
      return '/dashboard';
    },
  },
};
