import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col  items-center">
      <h1>Hello World</h1>
      <div className="w-full h-12 bg-pink-700 flex justify-around">
        <p>Top rated</p>
        <p>New</p>
        <p>Tags</p>
        <Link href={'/create-post'}>Create post</Link>
      </div>
      <div className="w-full h-12 bg-red-500 flex flex-col items-center">
        <h2>posts</h2>
      </div>
    </div>
  );
}
