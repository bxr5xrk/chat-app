import { authConfig } from '@/features/Auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'FriendZone | Dashboard',
  description: 'Your dashboard',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authConfig);
  if (!session) notFound();

  return (
    <div className="flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <Link href="/dashboard" className="flex h-16 shrink-0 items-center">
        <ArrowRightIcon className="w-8 h-8 text-indigo-600" aria-hidden />
      </Link>

      {children}
    </div>
  );
}
