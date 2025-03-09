'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ArrowBigUp, MessageCircle, UserRound } from 'lucide-react';

interface postData {
  id: string;
  title: string;
  body: string;
  likes?: number;
  comments?: number;
  userName?: string;
}

const PreviewPost = (postData: postData) => {
  const router = useRouter();
  const currentPath = usePathname();
  const [postTitle, setPostTitle] = React.useState('');

  console.log(currentPath);

  React.useEffect(() => {
    router.push(currentPath + '/' + postTitle);
  }, [postTitle]);
  return (
    <div
      onClick={() => {
        setPostTitle(postData.title);
      }}
      className="flex flex-col gap-4 justify-center items-center min-w-96 min-h-48 border-2 rounded-md my-4 hover:cursor-pointer"
    >
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
      <div className="flex gap-2">
        <div className="flex p-2 bg-transparent border-2 rounded-md">
          <div className="flex gap-1">
            <ArrowBigUp color="white" />
            {postData.likes}
          </div>
        </div>
        <div className="flex gap-1 p-2 bg-transparent border-2 rounded-md">
          <div className="flex gap-1">
            <MessageCircle color="white" />
            {postData.comments}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPost;
