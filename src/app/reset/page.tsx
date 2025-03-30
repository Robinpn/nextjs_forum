'use client';
import React from 'react';
import { sendResetPassword } from './action';
import { LoaderCircle } from 'lucide-react';

const page = () => {
  const [state, formAction, isPending] = React.useActionState(
    sendResetPassword,
    {
      error: '',
      success: '',
    }
  );
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1>Reset password</h1>
      <form action={formAction} className="flex flex-col gap-4">
        <label>What is your name?</label>
        <input type="email" name="email" required />
        <button type="submit" disabled={isPending}>
          {isPending ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <span>Reset password</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default page;
