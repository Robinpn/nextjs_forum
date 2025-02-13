import { CreatePost } from '@/components/CreatePost';
import { createNewPost } from './action';

export default function createPost() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1>Create Post</h1>
      <CreatePost />
    </div>
  );
}
