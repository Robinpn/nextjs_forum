'use server';
import { createClient } from '../../../utils/supabase/server';
import { createClient as createClientClient } from '../../../utils/supabase/client';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

// Initialize variable but don't create client yet
let supabaseClient: ReturnType<typeof createClient> | null = null;
let supabaseClientClient: ReturnType<typeof createClientClient> | null = null;

// Function to get initialized client
export async function getSupabase() {
  if (!supabaseClient) {
    supabaseClient = createClient();
  }
  return supabaseClient;
}

export async function getSupabaseClient() {
  if (!supabaseClientClient) {
    supabaseClientClient = createClientClient();
  }
  return supabaseClientClient;
}

export async function fetchUser() {
  const supabase = await getSupabase();
  const { data: user } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', `${user.user?.id}`);

  return data;
}

// export async function logoutUser() {
//   console.log('logoutUser Ran');
//   const supabase = await getSupabase();

//   const userJwt = await supabase.auth.getSession();

//   // console.log('JWT: ', userJwt.data.session?.access_token);

//   // const cookieNames = [
//   //   'sb-access-token',
//   //   'sb-refresh-token',
//   //   'sb-provider-token',
//   // ];

//   const { error } = await supabase.auth.signOut();

//   if (error) {
//     console.log('error signing user out: ', error);
//   }

//   document.cookie =
//     'sb-access-token=; Path=/; Domain=' +
//     window.location.hostname +
//     '; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

//   console.log('user signed out');

//   // clear the session cookie
//   // const response = NextResponse.next();
//   // response.cookies.delete('sb-access-token');
//   // response.cookies.delete('sb-refresh-token');
//   // // return response
//   // revalidatePath('/', 'layout');
//   redirect('/');
// }

export async function changePassword() {
  const supabase = getSupabase();
}

export async function deleteUser() {
  const supabase = await getSupabase();
  const { data: user } = await supabase.auth.getUser();

  const { error } = await supabase
    .from('deletionRequests')
    .insert({ userId: user.user?.id });

  if (error) {
    return {
      error: error,
    };
  }

  return {
    success: 'Account successfully deleted',
  };
}
