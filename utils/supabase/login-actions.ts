'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from './server';

export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log('error', error);
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    data: {
      user_name: formData.get('userName') as string,
    },
  };

  console.log(data);

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log('error', error);
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
