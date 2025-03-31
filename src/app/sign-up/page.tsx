import { signup } from '../../../utils/supabase/login-actions';
import InputField from '@/components/InputField';

export default function Page() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <form className="flex flex-col gap-4 w-64">
        <label htmlFor="email">Email</label>
        <InputField
          type="email"
          name="email"
          id="email"
          placeHolder="abc123gmail.com"
          required
        />
        <label htmlFor="UserName">User name</label>
        <InputField
          id="name"
          name="userName"
          type="text"
          required
          placeHolder="Bob"
        />
        <label htmlFor="password">Password</label>
        <InputField id="password" name="password" type="password" required />
        <button
          formAction={signup}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Create profile
        </button>
      </form>
    </div>
  );
}
