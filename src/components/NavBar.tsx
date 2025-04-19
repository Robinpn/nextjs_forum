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
    <header className="w-full min-h-10 fixed top-0 flex items-center justify-end">
      <Menu
        className="z-20 absolute top-2 mr-4 hover:cursor-pointer"
        onClick={handleClick}
        size={25}
      />
      {isOpen && (
        <div className="flex flex-col basis-full h-auto border-b-2 border-slate-800 backdrop-blur-sm">
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
