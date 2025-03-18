import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  try {
    let supabaseResponse = NextResponse.next({
      request,
    })

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
            supabaseResponse = NextResponse.next({
              request,
            })
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            )
          }
        },
      }
    )

    // refreshing the auth token
    const user = await supabase.auth.getUser();

    // protected routes
    if (request.nextUrl.pathname.startsWith("/profile") && user.error) {
      return NextResponse.redirect(new URL("/login", request.url));
    } 

    
    // else if (request.nextUrl.pathname.startsWith("/search") && user.error) {
    //   return NextResponse.redirect(new URL("/login", request.url));
    // } else if (request.nextUrl.pathname.startsWith("/meghalaya") && user.error) {
    //   return NextResponse.redirect(new URL("/login", request.url));
    // } 

    // else if (request.nextUrl.pathname.startsWith("/reset-password") && user.error) {
    //   return NextResponse.redirect(new URL("/login", request.url));
    // }

    return supabaseResponse
  } catch (e) {
    // If you are here, a Supabase client could not be created!
    // This is likely because you have not set up environment variables.
    // Check out http://localhost:3000 for Next Steps.
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }

}