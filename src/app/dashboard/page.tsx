import { LogOut } from '@/features/Auth';
import { authConfig } from '@/features/Auth/lib/authConfig';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export default async function Dashboard() {
  const session = await getServerSession(authConfig);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogOut />

      <div>
        <p>{session?.user.name}</p>
        <p>{session?.user.email}</p>
        <p>{session?.user.id}</p>
        {session?.user.image ? (
          <Image
            width={100}
            height={100}
            priority
            src={session.user.image}
            alt="cover image"
          />
        ) : null}
      </div>
    </main>
  );
}
