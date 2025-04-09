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
      className="w-[23rem] min-h-[20rem] bg-red-600 flex flex-col gap-4 justify-center items-center border-b-2 border-b-gray-700 rounded-2xl my-4 hover:cursor-pointer hover:border-2 hover:border-gray-700 p-3 md:bg-blue-600 md:w-[37.5rem] md:h-[18.75rem]"
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
