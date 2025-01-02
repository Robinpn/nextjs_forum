import { login, signup } from './actions';

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
        />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" required />
        <button formAction={login}>Login</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </div>
  );
}
