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
    { 
      name: '소개', 
      id: 'about',
      megaMenu: {
        sections: [
          {
            title: '개발자 소개',
            items: [
              { name: '자기소개', id: 'about', description: '개발자로서의 가치관과 목표' },
              { name: '기술 철학', id: 'about', description: '코드에 대한 생각과 접근 방식' }
            ]
          },
          {
            title: '전문 분야',
            items: [
              { name: 'Frontend', id: 'skills', description: 'React, Next.js, TypeScript' },
              { name: 'UI/UX', id: 'skills', description: '사용자 중심의 인터페이스 설계' }
            ]
          }
        ]
      }
    },
    { 
      name: '기술', 
      id: 'skills',
      megaMenu: {
        sections: [
          {
            title: 'Frontend',
            items: [
              { name: 'React & Next.js', id: 'skills', description: '모던 React 생태계' },
              { name: 'TypeScript', id: 'skills', description: '타입 안전한 개발' },
              { name: 'Styling', id: 'skills', description: 'Tailwind, Styled Components' }
            ]
          },
          {
            title: 'Tools & Others',
            items: [
              { name: 'Development', id: 'skills', description: 'Git, VS Code, Figma' },
              { name: 'Design', id: 'skills', description: 'Adobe Creative Suite' }
            ]
          }
        ]
      }
    },
    { name: '경력', id: 'career' },
    { 
      name: '프로젝트', 
      id: 'projects',
      megaMenu: {
        sections: [
          {
            title: '프로젝트 유형',
            items: [
              { name: '모든 프로젝트', id: 'projects', description: '모든 프로젝트 보기' },
              { name: '팀 프로젝트', id: 'projects-team', description: '팀 협업 프로젝트' },
              { name: '개인 프로젝트', id: 'projects-personal', description: '개인 프로젝트' }
            ]
          },
          {
            title: '기술별 분류',
            items: [
              { name: '웹 애플리케이션', id: 'projects-web', description: '웹 애플리케이션' },
              { name: '모바일 앱', id: 'projects-mobile', description: '모바일 애플리케이션' }
            ]
          }
        ]
      }
    },
    { name: '교육', id: 'education' },
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
              <div key={item.id} className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-semibold transition-colors flex items-center gap-1 ${
                    isScrolled 
                      ? 'text-black hover:text-gray-700' 
                      : 'text-white hover:text-gray-200 drop-shadow-lg'
                  }`}
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
