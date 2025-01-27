import Link from 'next/link';
import Posts from '../components/Posts';

export default async function Home() {
  return (
    <div className="h-screen w-full flex flex-col  items-center">
      <h1>Hello World</h1>
      <div className="w-full h-12 bg-pink-700 flex justify-around">
        <p>Top rated</p>
        <p>New</p>
        <p>Tags</p>
        <Link href={'/create-post'}>Create post</Link>
      </div>
    </div>
  );
}
