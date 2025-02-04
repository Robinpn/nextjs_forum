import { createClient } from './client';

export async function insertLike(like: number, currentPost: string) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log('You need to have an account in order to like a post');
    return;
  }

  console.log('user: ', user.id);

  const { error } = await supabase
    .from('Post')
    .upsert({ likes: like, user_id: user.id })
    .eq('id', currentPost);

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
