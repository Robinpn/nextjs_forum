import { createClient } from './client';

interface postData {
  user_name: string;
  id: string;
  title: string;
  body: string;
  likes?: number;
  comments?: number;
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

  try {
    const { error } = await supabase.from('Comment').insert({
      user_name: postData.user_name,
      body: comment,
      userId: user.id,
      postId: postData.id,
    });

    if (error) throw error;
  } catch (error) {
    return {
      error: 'failed to upload comment',
    };
  }
}
