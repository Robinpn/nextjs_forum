import { createClient } from '../../../utils/supabase/client';

export const fetchComments = async (postId: string) => {
  const supabase = await createClient();

  console.log('postId: ', postId);

  const { data, error } = await supabase
    .from('Comment')
    .select('*, profiles (user_name)')
    .eq('postId', postId);

  if (error) {
    console.error('Error fetching comments: ', error);
    return [];
  }

  console.log('data: ', data);

  return data;
};
