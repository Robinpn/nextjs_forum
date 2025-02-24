'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { insertLike, insertComment } from '../../utils/supabase/like-comment';
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
  const [comment, setComment] = React.useState('');

  const handleLike = async () => {
    const result = await insertLike(postData);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success('like added');
    }
  };

  const handleComment = async () => {
    const result = await insertComment(comment, postData);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success('comment added');
    }

    setComment('');
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
          <div className="flex gap-1">
            <MessageCircle color="white" />
            {postData.comments}
          </div>
        </div>
      </div>
      <textarea
        name="createComment"
        id="createComment"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        rows={2}
        className="w-80 rounded-md border-2 border-slate-400 bg-transparent placeholder:text-slate-400 px-3 py-2 mb-4"
      ></textarea>
      <button onClick={handleComment}>Comment</button>
    </div>
  );
};

export default Post;
