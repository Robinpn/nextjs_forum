import InputField from '@/components/InputField';
import { login } from '../../../utils/supabase/login-actions';
import { redirect } from 'next/navigation';
import LinkComponent from '@/components/LinkComponent';

export default function Page() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form className="flex flex-col gap-4">
        <label htmlFor="email">Email</label>
        <InputField
          id="email"
          type="email"
          name="email"
          placeHolder="abc123@gmail.com"
          required
        />
        <label htmlFor="password">Password</label>
        <InputField
          id="password"
          type="password"
          name="password"
          required
          placeHolder="password"
        />
        <button
          formAction={login}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Login
        </button>
        <p>Don't have an account?</p>
        <LinkComponent title="Sign up" href={'/sign-up'} />
      </form>
    </div>
  );
}
