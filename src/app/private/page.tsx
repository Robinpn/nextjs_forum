import { CircleUserRound } from 'lucide-react';
import { fetchUser } from './utils';
import Button from '@/components/Button';
import UserUpdates from '../../components/UserUpdates';

export default async function Page() {
  return (
    <div className="flex flex-col h-screen items-center mt-8">
      <h1 className="flex gap-1 text-2xl"></h1>
      <UserUpdates />
    </div>
  );
}
