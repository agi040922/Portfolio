'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CareerSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const careers = [
    {
      company: 'DEVHOON',
      position: '팀 리더 & 풀스택 개발자',
      period: '2024.04 - 현재',
      description: '개발팀을 이끌며 QR 인증 시스템, UI/UX 디자인, AI 챗봇, 스터디룸 관리 시스템, 포트폴리오 웹사이트 등 다양한 프로젝트를 총괄하고 있습니다.',
      achievements: [
        'kmong 외주 프로젝트 진행 중',
        'QR 인증 기반 티켓 구매 플랫폼 제작',
        'RAG 기반 대학 입시 상담 AI 챗봇 개발 및 실제 도입',
        '기업 웹사이트 UI/UX 디자인부터 개발까지 전 과정 담당',
        'Flutter 기반 크로스플랫폼 모바일 앱 개발 진행 중'
      ]
    },
    {
      company: 'FAIR인사노무컨설팅',
      position: '풀스택 개발자 & 프로젝트 매니저',
      period: '2025.01 - 현재',
      description: '인사노무컨설팅 전문 기업에서 웹사이트 재구축, AI 기반 SEO 시스템, HR 관리 시스템 개발을 담당하며 기업의 디지털 전환을 이끌고 있습니다.',
      achievements: [
        '기업 웹사이트 전면 재구축',
        'AI 기반 SEO 콘텐츠 관리 시스템',
        '카페/편의점 전용 HR 통합 관리 시스템 개발 진행 중',
        'Next.js, TypeScript 기반 현대적 웹 애플리케이션 구축'
      ]
    },
    {
      company: '대표 개발자',
      position: '대표 개발자 정경훈',
      period: '2023.11 - 현재',
      description: '개인적으로 기획하고 개발한 프로젝트들로, AI 기반 기도 관리 플랫폼과 대학 토론 통합 플랫폼을 성공적으로 구현했습니다.',
      achievements: [
        'AI 기반 스마트 기도 관리 플랫폼',
        '차세대 대학 토론 통합 플랫폼으로 전국 대학 토론 동아리에서 활용',
        'React, Supabase 기반 실시간 동기화 시스템 구현',
        '사용자 만족도 90% 이상의 높은 평가 획득'
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
              팀 및 리더 경력
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
