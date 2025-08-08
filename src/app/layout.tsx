import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DEVHOON - 풀스택 웹/앱 개발팀 포트폴리오',
  description: 'DEVHOON은 Next.js, TypeScript, AI 기술을 활용한 웹 & 인공지능 솔루션을 제공하는 풀스택 개발팀입니다. 하청 없는 직접 개발과 소스코드 제공을 통해 고품질 서비스를 제공합니다.',
  keywords: ['DEVHOON', '풀스택 개발', 'Next.js', 'TypeScript', 'AI 솔루션', '웹 개발', '앱 개발', '정경훈'],
  authors: [{ name: 'DEVHOON Team', url: 'https://github.com/agi040922' }],
  creator: 'DEVHOON',
  publisher: 'DEVHOON',
  openGraph: {
    title: 'DEVHOON - 풀스택 웹/앱 개발팀',
    description: 'Next.js, TypeScript, AI 기술을 활용한 웹 & 인공지능 솔루션 전문 개발팀',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'DEVHOON Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEVHOON - 풀스택 웹/앱 개발팀',
    description: 'Next.js, TypeScript, AI 기술을 활용한 웹 & 인공지능 솔루션 전문 개발팀',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
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
