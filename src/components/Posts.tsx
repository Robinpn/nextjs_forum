'use server';
import { createClient } from '../../utils/supabase/server';
import PreviewPost from './PreviewPost';

interface postOptions {
  limit?: number;
}

export default async function Posts(limit: postOptions) {
  const supabase = await createClient();

  const { data, error } = limit.limit
    ? await supabase.from('Post').select().limit(limit.limit)
    : await supabase.from('Post').select();

  if (error) {
    console.log('error: ', error);
  }

  return (
    <div>
      {data?.map((post) => {
        return (
          <PreviewPost
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            likes={post.likes}
            comments={post.comments}
          />
        );
      })}
    </div>
  );
}
