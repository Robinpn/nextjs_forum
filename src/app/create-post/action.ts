'use server';
import { createClient } from '../../../utils/supabase/server';

interface postData {
  title: string;
  body: string;
}

export async function createNewPost(formData: postData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      error: 'you need an account in order to create posts',
    };
  }

  const correctedTitle = formData.title.replace(/\s+/g, '-'); // Regex to replace white space with a "-"

  try {
    const { error } = await supabase.from('Post').insert({
      title: correctedTitle,
      body: formData.body,
      user_id: user.id,
    });

    if (error) throw error;
  } catch (error) {
    return {
      error: 'failed to create posts',
    };
  }
}
