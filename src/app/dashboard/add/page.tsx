import { AddFriend } from '@/features/AddFriend';

export default async function AddPage() {
  return (
    <main className="pt-8">
      <h1 className="font-bold text-5xl mb-8">Add a friend</h1>
      <AddFriend />
    </main>
  );
}
