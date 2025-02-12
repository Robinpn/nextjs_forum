'use client';
import React from 'react';
import { insertLike } from '../../utils/supabase/like-comment';
interface postData {
  id: string;
  title: string;
  body: string;
  likes?: number;
  comments?: number;
}

const Post = (postData: postData) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-w-96 min-h-48 border-2 rounded-md my-4">
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
      <div className="flex gap-2">
        <div className="flex p-2 bg-transparent border-2 rounded-md">
          <button
            onClick={() => {
              // This is an ugly solution since insertData is a promise and onClick can't handle promises
              insertLike(postData);
            }}
          >
            Like
          </button>
        </div>
        <div className="flex p-2 bg-transparent border-2 rounded-md">
          comments: {postData.comments}
        </div>
      </div>
    </div>
  );
};

export default Post;
