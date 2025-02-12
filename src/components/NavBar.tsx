import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="w-full h-10 border-b-2 sticky top-0 bg-black">
      <ul className="flex justify-between mx-2">
        <Link href={'/'}>Home</Link>
        <Link href={'/create-post'}>Create</Link>
        <Link href={'/posts'}>Posts</Link>
        <Link href={'/login'}>Account</Link>
      </ul>
    </div>
  );
};

export default NavBar;
