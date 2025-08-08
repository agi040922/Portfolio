'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { type Locale, navigationData } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps {
  locale: Locale
}

const Header = ({ locale }: HeaderProps) => {
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

  const navData = navigationData[locale]
  const navItems = [
    { name: navData.home, id: 'home' },
    { 
      name: navData.about, 
      id: 'about',
      megaMenu: navData.megaMenu.about
    },
    { 
      name: navData.skills, 
      id: 'skills',
      megaMenu: navData.megaMenu.skills
    },
    { name: navData.career, id: 'career' },
    { 
      name: navData.projects, 
      id: 'projects',
      megaMenu: navData.megaMenu.projects
    },
    { name: navData.education, id: 'education' },
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
            className="text-xl font-bold cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Portfolio
          </motion.div>

          {/* 네비게이션 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-semibold hover:text-gray-700 transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.megaMenu && (
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </motion.button>
                
                {/* 메가메뉴 */}
                {item.megaMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white border-2 border-gray-200 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-8">
                        {item.megaMenu.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h3 className="text-lg font-bold text-black mb-4 border-b border-gray-200 pb-2">
                              {section.title}
                            </h3>
                            <div className="space-y-3">
                              {section.items.map((menuItem, itemIndex) => (
                                <motion.button
                                  key={menuItem.id + itemIndex}
                                  whileHover={{ backgroundColor: '#f9fafb', x: 5 }}
                                  onClick={() => scrollToSection(menuItem.id)}
                                  className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group/item"
                                >
                                  <div className="font-semibold text-gray-800 group-hover/item:text-black mb-1">
                                    {menuItem.name}
                                  </div>
                                  <div className="text-xs text-gray-500 group-hover/item:text-gray-600">
                                    {menuItem.description}
                                  </div>
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
            
            {/* 언어 전환 버튼 */}
            <div className="ml-6 pl-6 border-l border-gray-300">
              <LanguageSwitcher currentLocale={locale} />
            </div>
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
