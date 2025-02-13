'use client';
import React from 'react';
import { insertLike } from '../../utils/supabase/like-comment';
import { ArrowBigUp, MessageCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';
interface postData {
  id: string;
  title: string;
  body: string;
  likes?: number;
  comments?: number;
}

const Post = (postData: postData) => {
  const handleLike = async () => {
    const result = await insertLike(postData);

    if (result?.error) {
      toast.error(result.error);
    }
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-w-96 min-h-48 border-2 rounded-md my-4">
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
      <div className="flex gap-2">
        <div className="flex p-2 bg-transparent border-2 rounded-md">
          <button className="flex gap-1" onClick={handleLike}>
            <ArrowBigUp color="white" />
            {postData.likes}
          </button>
        </div>
        <div className="flex gap-1 p-2 bg-transparent border-2 rounded-md">
          <MessageCircle color="white" />
          <p>{postData.comments}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
