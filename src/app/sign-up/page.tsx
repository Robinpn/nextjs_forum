import { signup } from '../../../utils/supabase/login-actions';

export default function Page() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <form className="flex flex-col gap-4 w-64">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="abc123gmail.com"
          required
          className="text-black"
        />
        <label htmlFor="UserName">User name</label>
        <input type="text" name="userName" className="text-black" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="text-black"
          required
        />
        <button formAction={signup}>Create profile</button>
      </form>
    </div>
  );
}
