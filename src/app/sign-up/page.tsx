import LoginForm from '@/components/LoginForm';

export default function Page() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <LoginForm signUp />
    </div>
  );
}
