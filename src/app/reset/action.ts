import { createClient } from '../../../utils/supabase/client';

// interface resetPasswordTypes {
//   formData: {
//     email: string;
//     password: string;
//   };
//   prev: any;
// }

let supabaseClient: ReturnType<typeof createClient> | null = null;

// Function to get initialized client
export async function getSupabase() {
  if (!supabaseClient) {
    supabaseClient = createClient();
  }
  return supabaseClient;
}

export async function sendResetPassword(prev, formData) {
  const supabase = await getSupabase();

  const { data, error } = await supabase.auth.resetPasswordForEmail(
    formData.get('email')
  );

  if (error) {
    console.log('error: ', error);

    return {
      success: '',
      error: error?.message,
    };
  }

  return {
    success: "Please check you're email",
    error: 'Something went wrong',
  };
}

export async function resetPassword(prev, formData) {
  const supabase = await getSupabase();

  const { data, error } = await supabase.auth.updateUser({
    password: formData.get('password'),
  });

  if (error) {
    console.log('error: ', error);
    return {
      error: error,
      success: '',
    };
  }

  return {
    success: 'password updated',
    error: '',
  };
}
