import { createClient } from '../../../../utils/supabase/server';
import Post from '@/components/post/Post';
import { notFound } from 'next/navigation';

export default async function PostId({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = await params;
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('Post')
    .select(
      ` *, 
      profiles (
      *
      )`
    ) // inner join to profiles.user_name
    .eq('title', postId);

  if (error) {
    console.log('error: ', error);
  }

  if (data == undefined || data?.length < 1) {
    return notFound(); // Next 404 page
  }

  console.log('data: ', data);

  data.map((item) => {
    console.log(item.profiles?.user_name);
  });

  return (
    <div>
      {data?.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            likes={post.likes}
            user_name={post.profiles?.user_name}
          />
        );
      })}
    </div>
  );
}
