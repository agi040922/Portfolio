'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { name: '홈', id: 'home' },
    { name: '소개', id: 'about' },
    { name: '기술', id: 'skills' },
    { name: '경력', id: 'career' },
    { name: '프로젝트', id: 'projects' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-padding container-max">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-xl font-bold cursor-pointer transition-colors ${
              isScrolled ? 'text-black' : 'text-white drop-shadow-lg'
            }`}
            onClick={() => scrollToSection('home')}
          >
            DEVHOON
          </motion.div>

          {/* 네비게이션 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-semibold transition-colors ${
                  isScrolled 
                    ? 'text-black hover:text-gray-700' 
                    : 'text-white hover:text-gray-200 drop-shadow-lg'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button className="p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
