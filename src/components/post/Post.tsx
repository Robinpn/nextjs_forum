'use client';
import React from 'react';
import {
  insertLike,
  insertComment,
} from '../../../utils/supabase/like-comment';
import { ArrowBigUp, MessageCircle, CircleUserRound } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { fetchComments } from './utils';

interface postData {
  id: string;
  title: string;
  body: string;
  likes?: number;
  comments?: number;
  user_name?: string | null;
}

const Post = (postData: postData) => {
  const [comments, setComments] = React.useState<
    { body: string; created_at: string; id: number; userId: string | null }[]
  >([]);
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

  React.useEffect(() => {
    const loadComments = async () => {
      const fetchedComments = await fetchComments(postData.id);
      setComments(fetchedComments);
    };
    loadComments();
  }, [postData.id]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center min-w-96 min-h-48 border-2 rounded-md my-4">
      <p className="flex gap-1">
        {' '}
        <CircleUserRound /> {postData.user_name}
      </p>
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
      <div>
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div
            key={index}
            className="border-b-2 rounded-md py-2 px-4 border-gray-300 min-w-48 my-4"
          >
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
