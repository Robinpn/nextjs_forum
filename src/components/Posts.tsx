'use server';
import { createClient } from '../../utils/supabase/server';
import Post from './Post';

export default async function Posts() {
  const supabase = await createClient();

  const { data, error } = await supabase.from('Post').select();

  if (error) {
    console.log('error: ', error);
  }

  return (
    <div>
      {data?.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        );
      })}
    </div>
  );
}
