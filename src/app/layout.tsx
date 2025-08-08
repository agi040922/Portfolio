import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '포트폴리오 - 프론트엔드 개발자',
  description: '프론트엔드 개발자의 포트폴리오 사이트입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
