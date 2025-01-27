import Posts from '@/components/Posts';

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <h1>Posts</h1>
      <div className="w-full h-auto flex flex-col items-center">
        <Posts />
      </div>
    </div>
  );
}
