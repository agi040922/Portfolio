import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './lib/i18n'

export function middleware(request: NextRequest) {
  // 현재 경로에서 locale 확인
  const pathname = request.nextUrl.pathname
  
  // 이미 locale이 있는 경로인지 확인
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // locale이 없으면 기본 locale로 리다이렉트
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    )
  }
}

export const config = {
  // API 경로, static 파일, favicon 등은 제외
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
