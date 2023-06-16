import { authConfig } from '@/features/Auth';
import { db, fetchRedis } from '@/shared/lib';
import { getServerSession } from 'next-auth';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const idToAdd = (await fetchRedis('get', `user:email:${email}`)) as string;

    if (!idToAdd) {
      return new Response('This person does not exist.', { status: 400 });
    }

    const session = await getServerSession(authConfig);

    if (!session) {
      return new Response('Unauthorized', { status: 401 });
    }

    if (idToAdd === session.user.id) {
      return new Response('You cannot add yourself as a friend', {
        status: 400,
      });
    }

    // check if user is already added
    const isAlreadyAdded = (await fetchRedis(
      'sismember',
      `user:${idToAdd}:incoming_friend_requests`,
      session.user.id
    )) as 0 | 1;

    if (isAlreadyAdded) {
      return new Response('Already added this user', { status: 400 });
    }

    // check if user is already added
    const isAlreadyFriends = (await fetchRedis(
      'sismember',
      `user:${session.user.id}:friends`,
      idToAdd
    )) as 0 | 1;

    if (isAlreadyFriends) {
      return new Response('Already friends with this user', { status: 400 });
    }

    await db.sadd(`user:${idToAdd}:incoming_friend_requests`, session.user.id);

    return new Response('OK');
  } catch (error) {
    return new Response('Invalid request', { status: 400 });
  }
}
