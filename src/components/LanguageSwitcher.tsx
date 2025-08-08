'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type Locale } from '@/lib/i18n'

interface LanguageSwitcherProps {
  currentLocale: Locale
}

const LanguageSwitcher = ({ currentLocale }: LanguageSwitcherProps) => {
  const pathname = usePathname()
  
  const getLocalizedPath = (locale: Locale) => {
    // 현재 경로에서 locale 부분을 새로운 locale로 교체
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50 flex bg-white/90 backdrop-blur-sm rounded-full border-2 border-gray-200 shadow-lg overflow-hidden"
    >
      <Link href={getLocalizedPath('ko')}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 text-sm font-semibold transition-all duration-200 ${
            currentLocale === 'ko'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:text-black hover:bg-gray-50'
          }`}
        >
          한국어
        </motion.div>
      </Link>
      <Link href={getLocalizedPath('en')}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 text-sm font-semibold transition-all duration-200 ${
            currentLocale === 'en'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:text-black hover:bg-gray-50'
          }`}
        >
          English
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default LanguageSwitcher
