import { login } from '../../../utils/supabase/login-actions';
import { redirect } from 'next/navigation';

export default function Page() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form className="flex flex-col gap-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="abc123@gmail.com"
          required
          className="text-black"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          required
          className="text-black"
        />
        <button formAction={login}>Login</button>
        <p>Don't have an account?</p>
        <a href="/sign-up">Sign up</a>
      </form>
    </div>
  );
}
