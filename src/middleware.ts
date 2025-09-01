import { NextRequest, NextResponse } from 'next/server'
import { getSessionCookie } from 'better-auth/cookies'

import { routes } from './config'

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request)

  if (!sessionCookie) {
    return NextResponse.redirect(new URL(routes.login, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/onboarding', '/app/:path*'],
}
