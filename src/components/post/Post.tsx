'use client';
import React from 'react';
import {
  insertLike,
  insertComment,
} from '../../../utils/supabase/like-comment';
import { ArrowBigUp, MessageCircle, CircleUserRound } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { fetchComments } from './utils';
import Button from '../Button';
import Comment from '../Comment';

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
    {
      user_name: string;
      body: string;
      created_at: string;
      id: number;
      userId: string | null;
    }[]
  >([]);
  const [comment, setComment] = React.useState('');

  const handleLike = async () => {
    const result = await insertLike({
      ...postData,
      user_name: postData.user_name || '',
    });

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success('like added');
    }
  };

  const handleComment = async () => {
    const result = await insertComment(comment, {
      ...postData,
      user_name: postData.user_name || '',
    });

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
    <div className="flex flex-col gap-4 min-w-[37.5rem] min-h-[18.75rem] ">
      <div>
        <p className="flex gap-1">
          {' '}
          <CircleUserRound /> {postData.user_name}
        </p>
      </div>
      <div className="mt-4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl font-bold">{postData.title}</h1>
        <p>{postData.body}</p>
        <div className="flex gap-2 mt-8">
          <div className="flex items-center justify-center p-1 bg-transparent rounded-md">
            <button
              className="flex gap-1 hover:bg-green-800 rounded-2xl px-4 py-2"
              onClick={handleLike}
            >
              <ArrowBigUp color="white" size={20} />
              {postData.likes}
            </button>
          </div>
          <div className="flex gap-1 p-2 bg-transparent justify-center items-center">
            <div className="flex gap-1">
              <MessageCircle size={20} color="white" />
              {postData.comments}
            </div>
          </div>
        </div>
        <div className="w-full">
          <textarea
            name="createComment"
            id="createComment"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            rows={2}
            className="w-full rounded-xl border-2 border-slate-600 bg-transparent placeholder:text-slate-400 px-3 py-2 mb-4"
          ></textarea>
          <Button title="Comment" onClick={handleComment} />
        </div>
      </div>
      <div>
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            userName={comment.user_name}
            body={comment.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Post;
