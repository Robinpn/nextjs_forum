'use server';
import { createClient } from '../../../utils/supabase/server';

export async function createNewPost(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log('no user is signed in');
    return;
  }

  const insertData = {
    userId: user.id,
    title: formData.get('title') as string,
    body: formData.get('body') as string,
  };

  const { error } = await supabase.from('Post').insert({
    title: insertData.title,
    body: insertData.body,
    user_id: insertData.userId,
  });

  if (error) {
    console.log('error', error);
    return;
  }
}
