'use client';
import React from 'react';
import { LoaderCircle } from 'lucide-react';
import { resetPassword } from '../action';
import { toast, Toaster } from 'react-hot-toast';

const page = () => {
  const [state, formAction, isPending] = React.useActionState(resetPassword, {
    error: '',
    success: '',
  });

  const { error, success } = state;

  if (error) {
    console.log(error);
    // toast.error(error);
  }

  if (success) {
    console.log(success);
    // toast.success(success);
  }
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      {/* {error ? <Toaster position="top-center" toastOptions={{error: }}/> : toast.success(success)} */}
      <form action={formAction} className="flex flex-col gap-4 bg-pink-300">
        <label htmlFor="">New Password</label>
        <input type="password" name="password" required />
        <button type="submit" disabled={isPending}>
          {isPending ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <span>update password</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default page;
