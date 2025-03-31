import Link from 'next/link';
import Posts from '../components/Posts';

export default async function Home() {
  return (
    <div className="h-screen w-full flex flex-col  items-center">
      <h1>Hello World</h1>
      <div>
        <h3>Latest posts</h3>
        <Posts limit={3} />
      </div>
      <div>
        <h2 className="text-center">About this page</h2>
        <p>
          This is a simple forum for people to share their thoughts, ideas and
          questions. <br />
          It was built mainly for me to work on my skills regarding user
          management, database management etc. <br />
          This site was built using{' '}
          <a className="text-blue-500 underline" href="https://nextjs.org/">
            Nextjs
          </a>{' '}
          and{' '}
          <a className="text-blue-500 underline" href="https://supabase.com/">
            Supabase
          </a>
          <br />
          Here's the project on{' '}
          <a
            className="text-blue-500 underline"
            href="https://github.com/Robinpn/nextjs_forum"
          >
            Github
          </a>{' '}
          incase you're interested on how I built it.
        </p>
      </div>
    </div>
  );
}
