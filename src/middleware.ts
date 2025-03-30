import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '../utils/supabase/middleware';
import { createClient } from '../utils/supabase/server';

export async function middleware(request: NextRequest) {
  // Check if user is signed in and redirect if they're not
  if (request.nextUrl.pathname.startsWith('/private')) {
    const supabase = await createClient();

    const { data: session } = await supabase.auth.getSession();

    if (!session.session) {
      console.log('middleware ran');
      return NextResponse.redirect(new URL('/login', request.nextUrl.origin));
    }
  }

  // return await updateSession(request);
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
