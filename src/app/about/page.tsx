export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center text-center">
      <h1 className="text-2xl">About this page</h1>
      <section className="mt-4 flex justify-center">
        <p className="text-wrap md:w-1/3 p-4">
          Hi! I’m Robin, the creator of this site. <br /> I built this page as a
          way to practice working with user management, relational databases,
          and to deepen my understanding of Next.js. While the site is
          (hopefully) functional, it wasn’t really designed for public use — so
          don’t expect frequent updates or user support. That said, you’re more
          than welcome to explore and use it if you’d like!
        </p>
      </section>
      <section className="mt-4 flex flex-col items-center p-4">
        <h2 className="text-xl mb-4">teknologies</h2>
        <ul>
          <li>
            <a
              className="underline hover:text-blue-500"
              href="https://nextjs.org/"
            >
              Nextjs
            </a>{' '}
            Web framework
          </li>
          <li>
            <a
              className="underline hover:text-blue-500"
              href="https://supabase.com/"
            >
              Supabase
            </a>{' '}
            relational database
          </li>
          <li>
            <a
              className="underline hover:text-blue-500"
              href="https://lucide.dev/"
            >
              Lucide
            </a>{' '}
            Icon package for react
          </li>
          <li>
            <a
              className="underline hover:text-blue-500"
              href="https://react-hot-toast.com/"
            >
              React hot toast
            </a>{' '}
            Notification library
          </li>
        </ul>
      </section>
    </div>
  );
}
