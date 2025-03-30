import React from 'react';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

interface linkProps {
  title: string;
  href: Url;
}

const LinkComponent = (props: linkProps) => {
  return (
    <Link
      className="text-white underline hover:text-blue-500"
      href={props.href}
    >
      {props.title}
    </Link>
  );
};

export default LinkComponent;
