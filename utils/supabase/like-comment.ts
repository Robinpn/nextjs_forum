import { createClient } from './client';
import { fetchUser } from '@/app/private/utils';

interface postData {
  user_name: string;
  id: string;
  title: string;
  body: string;
  likes?: number;
  comments?: number;
}

interface userType {
  email: string;
  has_liked_posts: string[];
  id: string;
  user_id: string;
  user_name: string;
}

export async function insertLike(postData: postData) {
  const supabase = createClient();
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (!user) throw error;
  } catch (error) {
    return {
      error: 'You need an account in order to like a post',
    };
  }
  // @ts-ignore
  const addLike = postData.likes + 1;

  try {
    const { error } = await supabase
      .from('Post')
      .update({ likes: addLike })
      .eq('id', postData.id);

    if (error) throw error;
  } catch (error) {
    return {
      error: 'failed to add like to post',
    };
  }
}

export async function insertComment(comment: string, postData: postData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      error: 'You need an account in order to comment',
    };
  }

  console.log('user: ', user);

  try {
    const { error } = await supabase.from('Comment').insert({
      // @ts-ignore
      user_name: user.user_metadata.user_name,
      body: comment,
      userId: user.id,
      postId: postData.id,
    });

    if (error) throw error;
    console.log(error);
  } catch (error) {
    return {
      error,
    };
  }
}
