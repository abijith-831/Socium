// // import { NextResponse } from 'next/server'
// // import type { NextRequest } from 'next/server'
// // import jwt from 'jsonwebtoken'

// // // const JWT_SECRET = process.env.JWT_SECRET || 'your-secret'

// // // export function middleware(request: NextRequest) {
// // //   const token = request.cookies.get('token')?.value
// // //   const pathname = request.nextUrl.pathname

// // //   console.log('token - ', token)
// // //   console.log('pathname - ', pathname)

// // //   const protectedPaths = ['/', '/dashboard', '/profile']
// // //   const authPages = ['/login', '/signup']

// // //   const isProtected = protectedPaths.some(path => pathname === path || pathname.startsWith(`${path}/`))
// // //   const isAuthPage = authPages.some(path => pathname === path || pathname.startsWith(`${path}/`))

// // //   // ✅ Redirect unauthenticated users trying to access protected pages
// // //   if (isProtected && !token) {
// // //     return NextResponse.redirect(new URL('/login', request.url))
// // //   }

// // //   // ✅ Redirect authenticated users away from /login or /signup
// // //   if (isAuthPage && token) {
// // //     try {
// // //       jwt.verify(token, JWT_SECRET)
// // //       return NextResponse.redirect(new URL('/', request.url))
// // //     } catch (err) {
// // //       console.error('Invalid token in authPage:', err)
// // //       // Allow to proceed to /login or /signup
// // //     }
// // //   }

// // //   return NextResponse.next()
// // // }

// // // export const config = {
// // //   matcher: [
// // //     '/', 
// // //     '/dashboard/:path*', 
// // //     '/profile/:path*', 
// // //     '/login', '/login/:path*', 
// // //     '/signup', '/signup/:path*'
// // //   ],
// // // }


// import { NextRequest, NextResponse } from 'next/server'

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('token')?.value

//   console.log('kjhfs',token);
  
//   // const pathname = request.nextUrl.pathname

// //   // ✅ Allow login and signup pages without token
// //   if (pathname.startsWith('/login') || pathname.startsWith('/signup')) {
// //     return NextResponse.next()
// //   }

// //   // ✅ For all other routes, require token
// //   if (!token) {
// //     return NextResponse.redirect(new URL('/login', request.url))
// //   }

// if(!token){
//   return NextResponse.redirect(new URL('/login',request.url))
// }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/:path*'], // Apply to all routes
// }

import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const pathname = request.nextUrl.pathname

  // ✅ Allow access to login and signup pages even without token
  if (pathname.startsWith('/login') || pathname.startsWith('/signup')) {
    return NextResponse.next()
  }

  // ✅ Protect all other routes
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico).*)', // Exclude _next, api, and favicon
  ],
}
