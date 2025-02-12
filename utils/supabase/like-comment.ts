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
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log('You need to have an account in order to like a post');
    return;
  }

  // @ts-ignore
  const addLike = postData.likes + 1;

  const { error } = await supabase
    .from('Post')
    .update({ likes: addLike })
    .eq('id', postData.id);

  if (error) {
    console.log('error when adding like: ', error);
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
