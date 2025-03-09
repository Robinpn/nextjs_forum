'use client';
import React from 'react';
import { createNewPost } from '@/app/create-post/action';
import { toast } from 'react-hot-toast';

export const CreatePost = () => {
  const [formData, setFormData] = React.useState({ title: '', body: '' });

  const handleCreatePost = async () => {
    const result = await createNewPost(formData);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success('post created');
    }
  };
  return (
    <div>
      <form action="" className="flex flex-col gap-6 w-[720px]">
        <input
          type="text"
          placeholder="Title"
          name="title"
          id="title"
          required
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
          className="w-full border-2 border-slate-400 bg-transparent placeholder:text-slate-400 rounded-md px-3 py-2"
        />
        <textarea
          name="body"
          id="body"
          placeholder="body"
          rows={6}
          required
          onChange={(e) => {
            setFormData({ ...formData, body: e.target.value });
          }}
          className="w-full rounded-md border-2 border-slate-400 bg-transparent placeholder:text-slate-400 px-3 py-2"
        ></textarea>
        <button formAction={handleCreatePost}>Create Post</button>
      </form>
    </div>
  );
};
