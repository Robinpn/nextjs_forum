import { log } from 'console';
import { createClient } from './client';

interface postData {
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

// export async function comment(comment: string) {
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   if (!user) {
//     console.log('You need to have an account in order to comment on a post');
//     return;
//   }

//   const { error } = await supabase.from('Post').insert({comments: comment})
// }
