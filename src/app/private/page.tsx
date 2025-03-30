import { CircleUserRound } from 'lucide-react';
import { fetchUser } from './utils';
import Button from '@/components/Button';
import UserUpdates from '../../components/UserUpdates';

interface user {
  email: string | null;
  has_liked_post: string[] | null;
  id: string;
  user_id: string | null;
  user_name: string | null;
}
export default async function Page() {
  // const users = await fetchUser();

  // if (!users || users.length === 0) {
  //   console.error('No users found');
  //   return null;
  // }
  // const user: user = users[0];

  // console.log('user', user);
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="flex gap-1">
        {/* <CircleUserRound />  {user.user_name} */}
      </h1>
      <UserUpdates />
    </div>
  );
}
