'use client';
import Link from 'next/link';
import React from 'react';
import { Menu } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="w-full min-h-10 border-b-2 border-slate-800 fixed top-0 flex items-center justify-end">
      <Menu
        className=" z-20 md:hidden absolute top-2"
        onClick={handleClick}
        size={25}
      />
      <div className="hidden md:flex items-center justify-between flex-wrap w-full">
        <ul className="flex justify-between mx-2 w-full">
          <Link href={'/'}>Home</Link>
          <Link href={'/create-post'}>Create</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/private'} replace>
            {/* replace is necessary for middleware to run */}
            Account
          </Link>
        </ul>
      </div>
      {isOpen && (
        <div className="flex flex-col basis-full  h-auto">
          <ul className="flex flex-col justify-between items-center mx-2 gap-4">
            <Link href={'/'}>Home</Link>
            <Link href={'/create-post'}>Create</Link>
            <Link href={'/posts'}>Posts</Link>
            <Link href={'/private'} replace>
              {/* replace is necessary for middleware to run */}
              Account
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
