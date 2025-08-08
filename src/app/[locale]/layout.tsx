import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import '../globals.css'
import { locales, localeMetadata, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  
  if (!locales.includes(locale as Locale)) {
    return {
      title: 'Portfolio',
      description: 'Frontend Developer Portfolio'
    }
  }

  const metadata = localeMetadata[locale as Locale]
  return {
    title: metadata.title,
    description: metadata.description,
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
