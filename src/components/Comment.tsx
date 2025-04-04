'use client';

import React from 'react';
import { CircleUserRound } from 'lucide-react';

interface commentProps {
  createdAt?: string;
  body: string;
  userName: string;
}

const Comment = (props: commentProps) => {
  return (
    <div className="flex flex-col gap-4 w-full min-h-14 border-b-2 border-slate-800 mt-4">
      <div>
        <h2 className="flex gap-1">
          {' '}
          <CircleUserRound /> {props.userName}
        </h2>
      </div>
      <div className="text-center">
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Comment;
