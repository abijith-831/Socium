import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const PUBLIC_ROUTES = ['/login', '/signup', '/api']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isPublic = PUBLIC_ROUTES.some(route => pathname.startsWith(route))

  const token = req.cookies.get('token')?.value

  // Allow public routes
  if (isPublic) return NextResponse.next()

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!)
    return NextResponse.next() // ✅ Valid token
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
