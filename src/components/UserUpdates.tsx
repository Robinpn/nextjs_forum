'use client';

import React from 'react';
import Button from './Button';
import { deleteUser } from '../app/private/utils';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';
import { createClient } from '../../utils/supabase/client';
import { CircleUser } from 'lucide-react';
import LinkComponent from './LinkComponent';

interface userType {
  email: string | null;
  has_liked_post: string[] | null;
  id: string;
  user_id: string | null;
  user_name: string | null;
}

const UserUpdates = () => {
  const [popup, setPopup] = React.useState(false);
  const [user, setUser] = React.useState<userType>();

  const handleClick = React.useCallback(() => {
    setPopup((prev) => !prev);
  }, [popup]);

  const handleDelete = async () => {
    const result = await deleteUser();

    if (result.error) {
      toast.error(result.error.message);
    } else if (result.success) {
      toast.success(result.success);
      redirect('/');
    }
  };

  const logoutUserClient = async () => {
    console.log('logoutUser Ran');

    // First, sign out from Supabase
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log('error signing user out: ', error);
      return;
    }

    // Now safely clear the cookie
    document.cookie =
      'sb-access-token=; Path=/; Domain=' +
      window.location.hostname +
      '; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    console.log('user signed out');
    redirect('/');
  };

  const fetchUser = async () => {
    console.log('fetchUser');
    const supabase = createClient();
    const { data } = await supabase.auth.getUser();

    if (!data || !data.user) {
      console.log('no user was found');
      return;
    }

    console.log(data.user.user_metadata?.user_name);

    setUser({
      // @ts-ignore
      email: data.user.email,
      has_liked_post: null, // Adjust this field as per your actual data structure
      id: data.user.id,
      user_id: null, // Adjust this field as per your actual data structure
      user_name: data.user.user_metadata?.user_name || null, // Adjust based on your metadata
    });
  };

  React.useEffect(() => {
    console.log('useEffect');

    fetchUser();
  }, []);

  const ConfirmModal = () => {
    return (
      <div className="flex flex-col h-48 w-80 border-2 rounded-md bg-black z-10 absolute">
        <div className="hover:cursor-pointer" onClick={handleClick}>
          X
        </div>
        Are you Sure you want to delete this account? This action is not
        reversable
        <Button title="Confirm" onClick={handleDelete} />
        <Button title="Cancel" onClick={handleClick} />
      </div>
    );
  };

  return (
    <div className=" min-h-52 min-w-52 flex flex-col gap-4 z-0 relative text-lg">
      <div className="flex gap-2">
        <CircleUser /> {user?.user_name}
      </div>
      <div className="flex gap-1"></div>
      {popup && <ConfirmModal />}
      <Button title="Logout" onClick={logoutUserClient} />
      <LinkComponent href={'/reset'} title="Reset password" />
      <Button title="Delete account" onClick={handleClick} />
    </div>
  );
};

export default UserUpdates;
