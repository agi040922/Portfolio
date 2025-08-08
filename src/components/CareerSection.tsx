'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CareerSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const careers = [
    {
      company: 'fair인사노무 컨설팅',
      position: '대표 개발자 & PM',
      period: '2024.10 - 현재',
      description: 'DEVHOON 팀 리더로서 풀스택 웹/앱 개발 프로젝트를 총괄하며, 팀원들과 협력하여 고품질의 솔루션을 제공하고 있습니다.',
      achievements: [
        '크몽 평점 5점 유지하며 다수의 외주 프로젝트 성공적 완수',
        'Next.js, TypeScript 기반 현대적 웹 애플리케이션 개발',
        '백엔드 개발자, 디자이너와의 효율적 협업 체계 구축',
        'SEO 최적화 및 성능 개선을 통한 사용자 경험 향상'
      ]
    },
    {
      company: 'DEVHOON 개발팀',
      position: '팀 리더 & 풀스택 개발자',
      period: '2024.03 - 현재',
      description: '풀스택 웹/앱 개발 전문팀을 운영하며, 웹 & 인공지능 솔루션, 네이버 블로그 제작, SEO 최적화 서비스를 제공합니다.',
      achievements: [
        '하청 없는 직접 개발로 고품질 서비스 제공',
        '소스코드 제공 및 비개발자용 어드민 페이지 구축',
        'AWS, Vercel 기반 서버 및 DB 관리',
        'Supabase, MySQL을 활용한 백엔드 시스템 구축'
      ]
    },
    {
      company: '프리랜서',
      position: '풀스택 웹 개발자',
      period: '2023.01 - 2024.02',
      description: '다양한 클라이언트의 웹 개발 프로젝트를 담당하며 React, Next.js 기반의 현대적인 웹 애플리케이션을 개발했습니다.',
      achievements: [
        'React, Next.js 기반 반응형 웹사이트 다수 개발',
        'TypeScript 도입으로 코드 품질 및 유지보수성 향상',
        'Tailwind CSS를 활용한 모던 UI/UX 구현',
        '클라이언트 만족도 95% 이상 달성'
      ]
    }
  ]

  return (
    <section id="career" className="py-20 bg-gray-50">
      <div className="section-padding container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* 섹션 타이틀 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              팀 리더 경력
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              경험과 성장 과정
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-black mx-auto"
            />
          </div>

          {/* 경력 타임라인 */}
          <div className="max-w-4xl mx-auto">
            {careers.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                {/* 타임라인 라인 */}
                {index < careers.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-32 bg-gray-300 hidden md:block" />
                )}
                
                <div className="flex flex-col md:flex-row gap-6">
                  {/* 기간 */}
                  <div className="md:w-48 flex-shrink-0">
                    <div className="relative">
                      <div className="absolute -left-2 top-2 w-4 h-4 bg-black rounded-full hidden md:block" />
                      <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                        {career.period}
                      </div>
                    </div>
                  </div>

                  {/* 경력 내용 */}
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-bold mb-2 text-black">{career.company}</h3>
                    <p className="text-gray-700 font-semibold mb-4">@ {career.position}</p>
                    
                    <p className="text-gray-800 leading-relaxed font-medium mb-4">
                      {career.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {career.achievements.map((achievement, achieveIndex) => (
                        <li key={achieveIndex} className="text-gray-800 leading-relaxed flex items-start font-medium">
                          <span className="text-black mr-2 mt-1 font-bold">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CareerSection
